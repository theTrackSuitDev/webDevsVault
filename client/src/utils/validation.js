let emailRegEx = /(?!^[.+&'_-]*@.*$)(^[_\w\d+&'-]+(\.[_\w\d+&'-]*)*@[\w\d-]+(\.[\w\d-]+)*\.(([\d]{1,3})|([\w]{2,}))$)/g;

export const validateLogin = (formData) => {
    let errors = {};

    let { email, password } = formData;

    if (email.length === 0) {
        errors.email = "Email field is required!";
        return errors;
    }

    if (email.includes(" ")) {
        errors.email = "Email should not include whitespaces!";
        return errors;
    }

    if (!email.match(emailRegEx)) {
        errors.email = "Invalid email format!";
        return errors;
    }

    if (password.length === 0) {
        errors.password = "Password field is required!";
        return errors;
    }

    if (password.includes(" ")) {
        errors.password = "Password should not include whitespaces!";
        return errors;
    }

    return errors;

    // if (password.length < 4) {
    //     errors.password = "Password should be at least 4 characters!";
    //     return errors;
    // }
};

export const validateRegister = (formData) => {
    let errors = {};

    let { email, username, password, rePassword } = formData;

    // Email

    if (email.length === 0) {
        errors.email = "Email field is required!";
        return errors;
    }

    if (email.includes(" ")) {
        errors.email = "Email should not include whitespaces!";
        return errors;
    }

    if (!email.match(emailRegEx)) {
        errors.email = "Invalid email format!";
        return errors;
    }

    // Username

    if (username.length === 0) {
        errors.username = "Username field is required!";
        return errors;
    }

    if (username.length < 4) {
        errors.username = "Username should be at least 4 characters!";
        return errors;
    }

    if (username.includes(" ")) {
        errors.username = "Username should not include whitespaces!";
        return errors;
    }

    // Password

    if (password.length === 0) {
        errors.password = "Password field is required!";
        return errors;
    }

    if (password.length < 4) {
        errors.password = "Password should be at least 4 characters!";
        return errors;
    }

    if (password.includes(" ")) {
        errors.password = "Password should not include whitespaces!";
        return errors;
    }

    // rePassword

    if (rePassword.length === 0) {
        errors.rePassword = "Repeat password field is required!";
        return errors;
    }

    if (rePassword !== password) {
        errors.rePassword = "Passwords don't match!";
        return errors;
    }

    if (password.includes(" ")) {
        errors.rePassword = "Repeat password should not include whitespaces!";
        return errors;
    }

    return errors;
};