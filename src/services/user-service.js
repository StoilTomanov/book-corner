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

export const updateMessages = async(action, email, isAdmin, message) => {
    try {
        let response;
        if(isAdmin === true) {
            response = await fetch(userURL + `admin/messages/${action}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(message),
            });
        } else if (isAdmin === false) {
            response = await fetch(userURL + `regular/messages/${action}/${email}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(message),
                // Seems that sending messages to admin is working properly for both guest and logged users.
                // TODO: admin should be able to send replies
            });
        }

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