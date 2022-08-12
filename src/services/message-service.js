const messageURL = 'http://localhost:4000/messages'

export const getUserMessages = async(userId, accessToken) => {
    try {
        const response = await fetch(`${messageURL}/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': accessToken,
            }
        });
        return await response.json();

    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

export const sendMessage = async(message, from, to) => {
    try {
        const response = await fetch(`${messageURL}/${from}/${to}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({message}),
        });

        return await response.json();
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

export const deleteMessage = async(holder, msgId, accessToken) => {
    try {
        const response = await fetch(`${messageURL}/${holder}/${msgId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': accessToken,
            }
        });

        return await response.json();
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}
