// • importations
    // • modules
    import { useContext } from 'react';
    import { Navigate, useLocation } from 'react-router-dom';
    // • contexts
    import { userContext } from '../../assets/contexts/UserContext';

// • render: NeedAuth
function NeedAuth(props) {

    const [loggedUser] = useContext(userContext);
    const location = useLocation();

    if (loggedUser) return props.children;
    else return <Navigate to='/login' state={{ from: location }} />;

}

// • exportation
export default NeedAuth