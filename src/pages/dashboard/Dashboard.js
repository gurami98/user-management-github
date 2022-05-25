import Navbar from "../../components/Navbar/Navbar";
import {useEffect, useState} from "react";
import {getAllUsers, getNextPageUsers} from "../../http/users";
import {getLinkHeaderUrl} from "../../helpers/headers";


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
            setUsers(response.data);
            setNextLink(getLinkHeaderUrl(response.headers['link']))
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
                return [...prevState, ...response.data];
            });
            setNextLink(getLinkHeaderUrl(response.headers['link']))
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
            <div className="users">
                {
                    users.map(user => {
                        return (
                            <h1> {user.login} </h1>
                        )
                    })
                }
            </div>

            <button onClick={loadMoreUsers}>Load More</button>
        </div>
    );
}

export default Dashboard;
