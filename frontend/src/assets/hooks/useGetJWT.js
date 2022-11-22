// • hook: useGetJWT
function useGetJWT() {

    return function (username, password) {
        const credentials = btoa(`${username}:${password}`);

        return fetch('http://localhost:8245/login', {
            method: 'GET',
            credentials: "include",
            mode: "cors",
            headers: {
                'Authorization': `Basic ${credentials}`
            }
        })
            .then(data => data.json())
    }
}

// • exportation
export default useGetJWT