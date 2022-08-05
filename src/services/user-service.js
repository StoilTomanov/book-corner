const userURL = 'http://localhost:4000/users/'

export const login = async(username, password) => {
    return await fetch(userURL + 'login', {
        method: 'POST',
        body: JSON.stringify({
            username,
            password,
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error));
}

export const register = async(username, password, email, gender) => {
    return await fetch(userURL + 'register', {
        method: 'POST',
        body: JSON.stringify({
            username,
            password,
            email,
            gender,
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error));
}

export const logout = async(accessToken) => {
    return await fetch(userURL + 'logout', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken,
        },
    })
        .then(res => res.json())
        .then(data => data)
        .catch(error => console.log(error));
}