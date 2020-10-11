import React, {useContext, useEffect} from 'react'
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';

export const RestaurantList = () => {
    const {restaurants, setRestaurants} = useContext(RestaurantsContext);
    useEffect(() => {
        RestaurantFinder.get('/').then((response) => {
            setRestaurants(response.data.data.restaurants);
        });
    }, [setRestaurants]);

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
                            <td className="align-middle"><button className="btn btn-warning">Edit</button></td>
                            <td className="align-middle"><button className="btn btn-danger">Delete</button></td>
                        </tr>
                    );
                }) }
            </tbody>
        </table>
    )
}
