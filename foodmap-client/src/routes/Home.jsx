import React from 'react'
import { AddRestaurant } from '../components/AddRestaurant'
import { Header } from '../components/Header'
import { RestaurantList } from '../components/RestaurantList'

export const Home = () => {
    return (
        <div className="mx-4">
            <Header />
            <AddRestaurant />
            <RestaurantList />
        </div>
    )
}
