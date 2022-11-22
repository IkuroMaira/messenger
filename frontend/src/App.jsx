// • importations
    // • modules
    import { BrowserRouter, Routes, Route } from 'react-router-dom';
    // • pages
    import NeedAuth from './pages/Auth/NeedAuth';
    import Login from './pages/Auth/Login';
    // • components
    import UserList from './assets/components/UserList';
    // • contexts
    import UserProvider from './assets/contexts/UserContext';

// • render: App
function App() {
    return (
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={
                        <NeedAuth>
                            <UserList/>
                        </NeedAuth>
                    } />
                    <Route path='/login' element={ <Login/> } />
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
}

// • exportation
export default App;
