import React, {useContext, useEffect} from 'react'
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';
import { useHistory } from 'react-router-dom';

export const RestaurantList = () => {
    const {restaurants, setRestaurants} = useContext(RestaurantsContext);
    let history = useHistory();
    useEffect(() => {
        RestaurantFinder.get('/').then((response) => {
            setRestaurants(response.data.data.restaurants);
        });
    }, [setRestaurants]);

    const deleteRestaurant = (id) => {
        return () => RestaurantFinder.delete(`/${id}`).then((response) => {
            setRestaurants(response.data.data.restaurants);
        });
    };

    const updateRestaurant = (id) => {
        return () => history.push(`/restaurants/${id}/update`);
    }

    return (
        <table className="table table-dark">
            <thead>
                <tr className="bg-primary">
                    <th scope="col">Restaurant</th>
                    <th scope="col">Location</th>
                    <th scope="col">Price Range</th>
                    <th scope="col">Reviews</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                { restaurants && restaurants.map((restaurant) => {
                    return (
                        <tr key={ restaurant.id }>
                            <td className="align-middle">{ restaurant.name }</td>
                            <td className="align-middle">{ restaurant.location }</td>
                            <td className="align-middle">{ '€'.repeat(restaurant.price_range) }</td>
                            <td className="align-middle"></td>
                            <td className="align-middle">
                                <button className="btn btn-warning" onClick={updateRestaurant(restaurant.id)}>Edit</button>
                                </td>
                            <td className="align-middle">
                                <button className="btn btn-danger" onClick={deleteRestaurant(restaurant.id)}>Delete</button>
                            </td>
                        </tr>
                    );
                }) }
            </tbody>
        </table>
    )
}
