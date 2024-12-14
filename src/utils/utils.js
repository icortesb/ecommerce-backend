import bcrypt from 'bcrypt';

export const hashPassword = async(password) => await bcrypt.hash(password, 10);


export const comparePasswords = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
}

export const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

export const isEmpty = (input) => {
    if (input === undefined || input === '') {
        return true;
    }
    if (input.replace(/\s/g, '').length) {
        return false;
    } else {
        return true;
    }
}

export const validatePassword = (password) => {
    if (password.length < 8) {
        return false;
    }
    return true;
}
