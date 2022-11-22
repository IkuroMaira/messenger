// • importations
    // • modules
    import { createContext, useContext, useState } from 'react';

const stored_user = localStorage.getItem('user');
const userContext = createContext(stored_user);

// • context: UserProvider
function UserProvider(props) {

    const [user, setUser] = useState(useContext(userContext));

    return (
        <userContext.Provider value={[user, setUser]}>
            { props.children }
        </userContext.Provider>
    )
    
}

// • exportation
export default UserProvider
export { userContext }