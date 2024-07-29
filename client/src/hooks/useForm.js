import { useState } from "react"

export function useForm(initialValues, formSubmitCallback) {
    const [formValues, setFormValues] = useState(initialValues);

    const onChangeHandler = (event) => {
        setFormValues (previousValues => ({
            ...previousValues,
            [event.target.name]: e.target.value
        }))
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        formSubmitCallback(formValues);
    }

    return {
        formValues,
        onChangeHandler,
        formSubmitHandler
    }
}