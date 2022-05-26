import {useContext, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import {Link} from "react-router-dom";

function SignInForm() {
    const {login} = useContext(AuthContext);

    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const [validationErrors, setValidationErrors] = useState([])

    const handleFormInputChange = (e) => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            await login(user.username, user.password)
            setUser({
                username: '',
                password: ''
            })
        } catch (e) {
            console.log(e);
            if (Array.isArray(e.response.data.message)){
                setValidationErrors(e.response.data.message);
            }else {
                setValidationErrors([e.response.data.message]);
            }
        }
    }
    return (
        <div className="form-container">
            <div className="form-errors">
                {
                    validationErrors.map((error, index) => {
                        return (
                            <p key={index}>{error}</p>
                        )
                    })
                }
            </div>
            <form className="form" onSubmit={handleFormSubmit}>
                <label htmlFor="username">Username: </label>
                <input className="form-control" type="text" id='username' name='username' value={user.username}
                       onChange={handleFormInputChange}/>
                <label htmlFor="password">Password: </label>
                <input className="form-control" type="password" id='password' name='password' value={user.password}
                       onChange={handleFormInputChange}/>
                <button className="submit-button" type='submit'>Login</button>
                <span>Not Registered Yet ? <Link to='/signup'>Create Account</Link> </span>
            </form>
        </div>
    );
}

export default SignInForm;
