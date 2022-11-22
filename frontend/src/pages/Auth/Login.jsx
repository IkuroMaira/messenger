// • importations
    // • modules
    import { useLocation, useNavigate, Navigate } from 'react-router-dom';
    import { useContext, useState } from 'react';
    // • contexts
    import { userContext } from '../../assets/contexts/UserContext';
    // • hooks
    import useGetJWT from '../../assets/hooks/useGetJWT';

// • render: Login
function Login() {
    
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || '/';

    const getJWT = useGetJWT();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedUser, setLoggedUser] = useContext(userContext);

    if (loggedUser) return <Navigate to='/' state={{ from: location }} />;

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getJWT(username, password).then(data => {
            if (data.JWT) {
                setLoggedUser(data.JWT);
                navigate(from, {replace: true});
            } else {
                console.log(data)
            }
        })
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h1>Please LogIn</h1>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={ handleUsername } value={ username }/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={ handlePassword } value={ password }/>
            </div>
            <button type="submit">Se connecter</button>
        </form>
    )
}

// • exportation
export default Login