import { useState } from "react"

export function useForm(initialValues, formSubmitCallback, validationFn) {
    const [formValues, setFormValues] = useState(initialValues);
    const [validationErrors, setValidationErrors] = useState({});

    const onChangeHandler = (event) => {
        setFormValues (previousValues => ({
            ...previousValues,
            [event.target.name]: event.target.value
        }));
        setValidationErrors(validationFn({
            ...formValues,
            [event.target.name]: event.target.value
        }));
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const currentErrors = validationFn(formValues);

        if (Object.keys(currentErrors).length > 0) {
            setValidationErrors(currentErrors);
        } else {
            formSubmitCallback(formValues);
        }

    }

    return {
        formValues,
        onChangeHandler,
        formSubmitHandler, 
        validationErrors,
    }
}