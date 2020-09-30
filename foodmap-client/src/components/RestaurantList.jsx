import React from 'react'

export const RestaurantList = () => {
    return (
        <table class="table table-dark">
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
                    <td class="align-middle">McDonalds</td>
                    <td class="align-middle">New York</td>
                    <td class="align-middle">€€</td>
                    <td class="align-middle">Rating</td>
                    <td class="align-middle"><button class="btn btn-warning">Edit</button></td>
                    <td class="align-middle"><button className="btn btn-danger">Delete</button></td>
                </tr>
                <tr>
                    <td class="align-middle">McDonalds</td>
                    <td class="align-middle">New York</td>
                    <td class="align-middle">€€</td>
                    <td class="align-middle">Rating</td>
                    <td class="align-middle"><button class="btn btn-warning">Edit</button></td>
                    <td class="align-middle"><button className="btn btn-danger">Delete</button></td>
                </tr>
            </tbody>
        </table>
    )
}
