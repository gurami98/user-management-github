import {useLocation} from "react-router-dom";
import SignInForm from "../../components/SignInForm/SignInForm";
import {useEffect, useState} from "react";

function SignIn() {
    const {state} = useLocation();
    const [toggle, setToggle] = useState(state?.success);

    useEffect(() => {
        if(toggle === true){
            setTimeout(() => {
                setToggle(false);
            }, 3000)
        }
    }, [])

    return (
        <div>
            <h1 className='heading-txt'>Sign In Page</h1>
            <hr/>
            {state?.success && toggle && <h5>Sign up was successful</h5>}
            <SignInForm/>
        </div>
    );
}

export default SignIn;
