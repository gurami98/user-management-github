import Navbar from "../../components/Navbar/Navbar";
import {useEffect, useState} from "react";
import {getAllUsers, getNextPageUsers} from "../../http/users";
import {getLinkHeaderUrlForSearch} from "../../helpers/headers";
import UsersList from "../../components/UsersList/UsersList";
import './Dashboard.css'

function Dashboard() {
    const [users, setUsers] = useState([]);
    const [nextLink, setNextLink] = useState('')
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = async () => {
        try{
            const response = await getAllUsers();
            setUsers(response.data.items);
            setNextLink(getLinkHeaderUrlForSearch(response.headers['link']))
        } catch(e){
            console.log(e);
            alert('error occurred while fetching users');
        }
        setIsLoading(false);
    }

    const loadMoreUsers = async () => {
        try {
            const response = await getNextPageUsers(nextLink);
            setUsers((prevState) => {
                return [...prevState, ...response.data.items];
            });
            setNextLink(getLinkHeaderUrlForSearch(response.headers['link']))
        } catch(e) {
            console.log(e);
            alert('error occurred while trying to fetch more users')
        }
        setIsLoading(false);
    }

    return (
        <div className="container">
            <Navbar/>
            {isLoading && <h1 align='center'>Loading...</h1>}
            <UsersList users={users}/>
            <button onClick={loadMoreUsers}>Load More</button>
        </div>
    );
}

export default Dashboard;
