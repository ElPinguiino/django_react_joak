import {useState, useEffect} from 'react';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        contactType: '',
        message: ''
    })
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target.value;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true);
    };

    // const [image, setImage] = useState(null)

    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                callback();
            }
        },
        [errors]
    );

    return { handleSubmit, handleChange, values, errors };
};

export default useForm


