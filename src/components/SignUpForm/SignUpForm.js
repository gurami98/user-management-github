import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {createNewUser} from "../../http/auth";
import '../SignInForm/SignInForm.css'

function SignUpForm() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        username: '',
        birthDate: '',
        email: '',
        password: '',
        confirmPassword: ''
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
        if(user.password !== user.confirmPassword){
            alert('passwords dont match')
            return;
        }
        try {
            const registerObject = user;
            delete registerObject.confirmPassword;
            await createNewUser(registerObject) // validation from backend ?  or front
            setUser({
                firstName: '',
                lastName: '',
                username: '',
                birthDate: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
            navigate('/', {state: {success: true}})
        }catch(e){
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
                <label htmlFor="firstName">Firstname: </label>
                <input className="form-control" type="text" id='firstName' name='firstName' value={user.firstName} onChange={handleFormInputChange}/>
                <label htmlFor="lastName">Lastname: </label>
                <input className="form-control" type="text" id='lastName' name='lastName' value={user.lastName} onChange={handleFormInputChange}/>
                <label htmlFor="username">Username: </label>
                <input className="form-control" type="text" id='username' name='username' value={user.username} onChange={handleFormInputChange}/>
                <label htmlFor="email">Email: </label>
                <input className="form-control" type="email" id='email' name='email' value={user.email} onChange={handleFormInputChange}/>
                <label htmlFor="birthDate">Birth Date: </label>
                <input className="form-control" type="date" id='birthDate' name='birthDate' value={user.birthDate} onChange={handleFormInputChange}/>
                <label htmlFor="password">Password: </label>
                <input className="form-control" type="password" id='password' name='password' value={user.password} onChange={handleFormInputChange}/>
                <label htmlFor="confirmPassword">Confirm Password: </label>
                <input className="form-control" type="password" id='confirmPassword' name='confirmPassword' value={user.confirmPassword} onChange={handleFormInputChange}/>
                <button className="submit-button" type='submit'>Create Account</button>
                <span>Already Registered ? <Link to='/'>Login</Link> </span>
            </form>
        </div>
    );
}

export default SignUpForm;
