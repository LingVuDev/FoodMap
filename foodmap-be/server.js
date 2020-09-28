require('dotenv').config();
const express = require('express');
const db = require('./db');

const app = express();
const morgan = require('morgan');
const port = process.env.PORT || 3001;
const prefix = '/api/v1';

app.use(morgan('tiny'));
app.use(express.json());

// Get all restaurants
app.get(prefix + '/restaurants', async (req, res) => {
    const results = await db.query('SELECT * FROM restaurants;');
    console.log(results);
    res.json({ 
        status: 'success',
        data: {
            restaurants: [],
        },
    });
});

// Get a restaurant
app.get(prefix + '/restaurants/:id', (req, res) => {
    console.log(req.params);

    res.status(200).json({
        status: 'success',
        data: {
            restaurant: "McDonalds",
        },
    });
});

// Create a restaurant
app.post(prefix + '/restaurants', (req, res) => {
    console.log(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            restaurant: "McDonalds",
        },
    });
});

// Update restaurants
app.put(prefix + '/restaurants/:id', (req, res) => {
    console.log(req.body);

    res.status(200).json({
        status: 'success',
        data: {
            restaurant: "McDonalds",
        },
    });
});

// Delete

app.delete(prefix + '/restaurants/:id', (req, res) => {
    res.status(204).json({
        status: 'success',
    });
});

app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});