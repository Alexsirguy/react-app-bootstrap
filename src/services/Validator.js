export const emailValidator = (email) => {
    const re = /\S+@\S+\.\S+/;

    if (!email || email.length <= 0) return 'Email cannot be empty.';
    if (!re.test(email)) return 'Ooops! We need a valid email address.';

    return '';
};

export const passwordValidator = (password) => {
    if (!password || password.length <= 0) return 'Password cannot be empty.';

    return '';
};

export const lengthValidator = (name, length = 1, errorMessage = "Cannot be empty") => {
    if (!name || name.length <= length) return errorMessage;

    return '';
};