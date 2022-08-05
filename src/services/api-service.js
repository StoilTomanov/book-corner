const apiUrl = 'http://localhost:4000/api/';

export const getCatalogRecords = () => {
    return fetch(apiUrl + 'catalog')
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.log(error));
}

export const getBookData = (id) => {
    return fetch(apiUrl+ 'catalog/' +id)
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.log(error));
}

export const getSaleRecords = () => {
    return fetch(apiUrl + 'sale')
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.log(error));
}

export const getUpcomingRecords = () => {
    return fetch(apiUrl + 'upcoming')
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.log(error));
}

export const createBookRecord = (bookData) => {
    return fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(bookData),
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.log(error));
}

export const updateBookRecord = (bookData, bookId) => {
    return fetch(apiUrl + bookId, {
        method: 'PUT',
        body: JSON.stringify(bookData),
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.log(error));
}