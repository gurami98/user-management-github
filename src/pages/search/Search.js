import React, {useState} from 'react'
import './Search.css'
import Navbar from "../../components/Navbar/Navbar";
import UsersList from "../../components/UsersList/UsersList";
import './Search.css'
import {getNextPageUsers, searchUsers} from "../../http/users";
import '../dashboard/Dashboard.css'
import {getLinkHeaderUrlForSearch} from "../../helpers/headers";

const Search = () => {
    const [keyword, setKeyword] = useState('')
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [totalSearchedUsers, setTotalSearchedUsers] = useState(0);
    const [isSearched, setIsSearched] = useState(false);
    const [nextLink, setNextLink] = useState('')
    const [isFullList, setIsFullList] = useState(false);

    const handleResponse = (response) => {
        setTotalSearchedUsers(response.data['total_count'])
        setIsSearched(true);
        if(response.headers['link']){
            setNextLink(getLinkHeaderUrlForSearch(response.headers['link']))
            setIsFullList(false);
        }else{
            setIsFullList(true);
            setNextLink('');
        }
    }

    const searchUser = async () => {
        if(!keyword) return;
        setIsLoading(true);
        try{
            const response = await searchUsers(keyword)
            setUsers(response.data.items);
            handleResponse(response);
        } catch(e){
            console.log(e);
            alert('error occurred while searching users');
        }
        setIsLoading(false);
    }

    const loadMoreUsers = async () => {
        setIsLoading(true);
        try {
            const response = await getNextPageUsers(nextLink)
            setUsers([...users, ...response.data.items]);
            handleResponse(response);
        } catch(e) {
            console.log(e);
            alert('error occurred while loading more users');
        }
        setIsLoading(false);
    }

    return (
        <div className="container">
            <Navbar/>
            <div className="search-container">
                <input className='search-input' type="text" value={keyword} onChange={e => setKeyword(e.target.value)}/>
                <button disabled={isLoading} className='search-btn' onClick={searchUser}>Search</button>
            </div>
            {isLoading && <h1 align="center">Loading...</h1>}
            {isSearched && <h1>Found users: {totalSearchedUsers}</h1>}
            <UsersList users={users}/>
            {
                !isFullList && isSearched && !(users.length >= totalSearchedUsers) &&
                <button onClick={loadMoreUsers}>Load More</button>
            }
        </div>
    )
}

export default Search;
