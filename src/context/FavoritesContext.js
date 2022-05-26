import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
});

function FavoritesContextProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (user) => {
        setFavorites([...favorites, user]);
    }

    const removeFromFavorite = (user) => {
        const newFavorites = favorites.filter(favoriteUser => favoriteUser.id !== user.id)
        setFavorites(newFavorites)
    }

    const clearFavorites = () => {
        setFavorites([]);
    }

    const isUserFavorite = (user) => {
        return favorites.some(item => item.id === user.id)
    }

    return (
        <FavoritesContext.Provider
            value={{ favorites, addToFavorites, removeFromFavorite, isUserFavorite, clearFavorites }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}

export { FavoritesContext, FavoritesContextProvider };
