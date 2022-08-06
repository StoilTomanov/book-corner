export const formChecker = (data) => {
    const errorFields = [];

    Object.entries(data).map((pair) => {
        if(pair[1] === '' || pair[1] === 0){
            pair[0] = pair[0] === 'imageUrl' ? 'image Url' : pair[0];
            let transform = pair[0].split('');
            transform[0] = transform[0].toUpperCase();
            errorFields.push(transform.join(''));
        }
        return pair;
    });

    if(errorFields.length > 0){
        return errorFields.length === 1 ? `${errorFields.join(', ')} are required` : `${errorFields.join(', ')} are required`;
    }

    return null;
}