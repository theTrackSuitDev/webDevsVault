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
        errors.email = "Email is invalid format!";
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