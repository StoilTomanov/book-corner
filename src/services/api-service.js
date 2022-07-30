const apiUrl = 'http://localhost:4000/api/';

export const getCatalogRecords = () => {
    return fetch(apiUrl + '/catalog')
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.log(error));
}

export const getSaleRecords = () => {
    return fetch(apiUrl + '/sale')
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.log(error));
}

export const getUpcomingRecords = () => {
    return fetch(apiUrl + '/upcoming')
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.log(error));
}