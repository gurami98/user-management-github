import React, {useEffect, useState} from 'react'
import './User.css'
import Navbar from "../../components/Navbar/Navbar";
import {useParams} from "react-router-dom";
import '../../components/Navbar/Navbar.css'
import {getSingleUser, getUserOrganisations, getUserRepositories} from "../../http/users";
import FavoriteImg from '../../assets/favorite.png'
const User = () => {
    const { username } = useParams()
    const [user, setUser] = useState({});
    const [organisations, setOrganisations] = useState([]);
    const [repositories, setRepositories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
        try {
            const userResponse = await getSingleUser(username);
            const organisationResponse = await getUserOrganisations(userResponse.data.organizations_url)
            const organisationsData = organisationResponse.data.slice(0, 3);

            const repositoriesResponse = await getUserRepositories(userResponse.data.repos_url)
            const repositoriesData = repositoriesResponse.data.slice(0, 10);
            setRepositories(repositoriesData);

            setUser(userResponse.data)
            setOrganisations(organisationsData)
        } catch(e) {
            console.log(e);
        }
        setIsLoading(false)
    }

    return (
        <div className="container container-user-page">
            <Navbar />
            { isLoading && <h1>Loading...</h1>}
            <div className="user-info-container">
                <div className="basic-info-container">
                    <img src={user.avatar_url} alt="icon" className="user-img"/>
                    <div className='wrapper favorite-btn-container'>
                        <img src={FavoriteImg} alt="favorite" className='favorite-img'/>
                        <button className="favorite-btn">  add/remove favorites</button>
                    </div>
                    <div className="wrapper user-general-info">
                        {user.bio?.length > 0 && <p>Bio: {user.bio}</p>}
                        <p>Followers: {user.followers}</p>
                        <p>Following: {user.following}</p>
                    </div>
                    <div className="wrapper organisations">
                        <div className='organisation-header'>Organisations</div>
                        {
                            organisations.map(organisation => {
                                return(
                                    <div className='organisation-box' key={organisation.id}>
                                        <a  href={`https://github.com/${organisation.login}`} target="_blank" rel="noopener noreferrer">
                                            <img src={organisation.avatar_url} alt="organisation" className='organisation-img'/>
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="wrapper repositories-info-container">
                    <div className='organisation-header'>Repositories</div>
                    {
                        repositories.map(repository => {
                            return (
                                <div className='repository-box' key={repository.id}>
                                    <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
                                        <p>Name: {repository.name}</p>
                                        <p>Stars: {repository.stargazers_count}</p>
                                        <p>Forks: {repository.forks_count}</p>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default User;
