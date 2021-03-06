require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const morgan = require('morgan');
const port = process.env.PORT || 3001;
const prefix = '/api/v1';

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

// Get all restaurants
app.get(prefix + '/restaurants', (req, res) => {
    db.query('SELECT * FROM restaurants;').then((results) => {
        res.status(200).json({ 
            status: 'success',
            results: results.rows.length,
            data: {
                restaurants: results.rows,
            },
        });
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ 
            status: 'error',
        });
    });
});

// Get a restaurant
app.get(prefix + '/restaurants/:id', (req, res) => {
    const getRestaurant = db.query('SELECT * FROM restaurants WHERE id = $1', [req.params.id]).then((restaurants) => new Promise((resolve) => {
        resolve(restaurants.rows[0]);
    }));
    const getReviews = db.query('SELECT * FROM reviews WHERE restaurant_id = $1', [req.params.id]).then((reviews) => new Promise((resolve) => {
        resolve(reviews.rows);
    }));

    Promise.all([getRestaurant, getReviews]).then(([restaurant, reviews]) => {
        res.status(200).json({ 
            status: 'success',
            data: {
                restaurant,
                reviews,
            },
        });
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ 
            status: 'error',
        });
    });
});

// Create a restaurant
app.post(prefix + '/restaurants', (req, res) => {
    const { name, location, price_range} = req.body;
    db.query('INSERT INTO restaurants (name, location, price_range) VALUES ($1,$2,$3)', [name, location, price_range]).then(() => {
        return db.query('SELECT * FROM restaurants');
    }).then((results) => {
        res.status(201).json({ 
            status: 'success',
            data: {
                restaurants: results.rows,
            },
        });
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ 
            status: 'error',
        });
    });
});

// Update restaurants
app.put(prefix + '/restaurants/:id', (req, res) => {
    const { name, location, price_range } = req.body;
    db.query('UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE ID = $4 RETURNING *;', [name, location, price_range, req.params.id]).then((results) => {
        res.status(200).json({ 
            status: 'success',
            data: results.rows[0],
        });
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ 
            status: 'error',
        });
    });
});

// Delete
app.delete(prefix + '/restaurants/:id', (req, res) => {
    db.query('DELETE FROM restaurants WHERE id = $1;', [req.params.id]).then(() => {
        return db.query('SELECT * FROM restaurants');
    }).then((results) => {
        res.status(200).json({ 
            status: 'success',
            data: {
                restaurants: results.rows,
            },
        });
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ 
            status: 'error',
        });
    });
});

app.post(prefix + '/restaurants/:id/reviews', (req, res) => {
    const { name, rating, content} = req.body;
    db.query('INSERT INTO reviews (restaurant_id, name, rating, content) VALUES ($1,$2,$3, $4)', [req.params.id, name, rating, content]).then(() => {
        const getRestaurant = db.query('SELECT * FROM restaurants WHERE id = $1', [req.params.id]).then((restaurants) => new Promise((resolve) => {
            resolve(restaurants.rows[0]);
        }));
        const getReviews = db.query('SELECT * FROM reviews WHERE restaurant_id = $1', [req.params.id]).then((reviews) => new Promise((resolve) => {
            resolve(reviews.rows);
        }));
        
        return Promise.all([getRestaurant, getReviews]);
    }).then(([restaurant, reviews]) => {
        res.status(201).json({ 
            status: 'success',
            data: {
                restaurant,
                reviews,
            },
        });
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ 
            status: 'error',
        });
    });
});

app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});