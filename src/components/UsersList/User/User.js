import React, {useEffect, useState} from 'react'
import './User.css'
import {getSingleUser} from "../../../http/users";

const User = ({user}) => {
    const [userInfo, setUserInfo] = useState({
        following: 0,
        followers: 0,
        repositories: 0
    });

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

    return (
        <div className='user' key={user.id}>
            <img src={user.avatar_url} alt="avatar"/>
            <p>username: {user.login}</p>
            <p>Followers: {userInfo?.followers}</p>
            <p>Following: {userInfo?.following}</p>
            <p>Repositories: {userInfo?.repositories}</p>
        </div>
    )
}

export default User;
