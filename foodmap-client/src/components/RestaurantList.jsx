import React, {useContext, useEffect} from 'react'
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';

export const RestaurantList = () => {
    const {restaurants, setRestaurants} = useContext(RestaurantsContext);
    useEffect(() => {
        RestaurantFinder.get('/').then((response) => {
            setRestaurants(response.data.data.restaurants);
        });
    }, []);

    return (
        <table className="table table-dark">
            <thead>
                <tr className="bg-primary">
                    <th scope="col">Restaurant</th>
                    <th scope="col">Location</th>
                    <th scope="col">Price Range</th>
                    <th scope="col">Ratings</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="align-middle">McDonalds</td>
                    <td className="align-middle">New York</td>
                    <td className="align-middle">€€</td>
                    <td className="align-middle">Rating</td>
                    <td className="align-middle"><button className="btn btn-warning">Edit</button></td>
                    <td className="align-middle"><button className="btn btn-danger">Delete</button></td>
                </tr>
            </tbody>
        </table>
    )
}
