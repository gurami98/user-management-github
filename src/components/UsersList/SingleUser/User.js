import React, {useContext, useEffect, useState} from 'react'
import './User.css'
import {getSingleUser} from "../../../http/users";
import {useNavigate} from "react-router-dom";
import {FavoritesContext} from "../../../context/FavoritesContext";

const SingleUser = ({user, hasRemoveBtn}) => {
    const [userInfo, setUserInfo] = useState({
        following: 0,
        followers: 0,
        repositories: 0
    });
    const navigate = useNavigate();

    const {removeFromFavorite} = useContext(FavoritesContext)


    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {
        try{
            const response = await getSingleUser(user.login);
            setUserInfo({
                followers: response.data.followers,
                following: response.data.following,
                repositories: response.data.public_repos
            })
        } catch(e) {
            console.log(e);
        }
    }

    const openSingleUser = () => {
        navigate(`/user/${user.login}`)
    }

    const removeUser = () => {
        removeFromFavorite(user);
    }

    return (
        <div className='favorite-user-container'>
            <div className='user' key={user.id} onClick={openSingleUser}>
                <img src={user.avatar_url} alt="avatar"/>
                <p>username: {user.login}</p>
                <p>Followers: {userInfo?.followers}</p>
                <p>Following: {userInfo?.following}</p>
                <p>Repositories: {userInfo?.repositories}</p>
            </div>
            {hasRemoveBtn && <button className="remove-btn" onClick={removeUser}>Remove From Favorites</button>}
        </div>
    )
}

export default SingleUser;
