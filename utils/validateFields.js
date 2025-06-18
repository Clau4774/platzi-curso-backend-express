const validateNameLength = name => {
    (name.length >= 3 && name.length <= 30) 
};

const validateEmail = email => {
    const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regEx.test(email);
};

const validateNotDuplicateUsers = (userId, users) => {
    const userFind = users.find(el => el.id === userId);

    return userFind ? true : false;
}

module.exports = {
    validateNameLength,
    validateEmail,
    validateNotDuplicateUsers
}