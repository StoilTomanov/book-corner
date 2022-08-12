const userURL = 'http://localhost:4000/users/'

export const login = async(username, password) => {
    try {
        const response = await fetch(userURL + 'login', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password,
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if(!response.ok){
            const result = await response.json();
            throw new Error(result.message);
        } else {
            return await response.json();
        }
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

export const register = async(username, password, email, gender) => {
    try {
        const response = await fetch(userURL + 'register', {
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
        });

        if(!response.ok){
            const result = await response.json();
            throw new Error(result.message);
        } else {
            return await response.json();
        }
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

export const logout = async(accessToken) => {
    try {
        const response = await fetch(userURL + 'logout', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': accessToken,
            },
        });
        
        if(!response.ok){
            const result = await response.json();
            throw new Error(result.message);
        } else {
            return await response.json();
        }
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

export const getCurrentUser = async(accessToken, userId) => {
    try {
        const response = await fetch(userURL + `user/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': accessToken,
            },
        });
        
        if(!response.ok){
            const result = await response.json();
            throw new Error(result.message);
        } else {
            return await response.json();
        }
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}
