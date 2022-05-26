import React, {useContext} from 'react'
import './Favorites.css'
import Navbar from "../../components/Navbar/Navbar";
import {FavoritesContext} from "../../context/FavoritesContext";
import UsersList from "../../components/UsersList/UsersList";
const Favorites = () => {
    const { favorites } = useContext(FavoritesContext)
    return (
        <div className="container">
            <Navbar/>
            <UsersList users={favorites} hasRemoveBtn={true}/>
        </div>
    )
}

export default Favorites;
