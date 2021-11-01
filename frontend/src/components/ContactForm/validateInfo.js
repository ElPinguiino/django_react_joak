export default function validateInfo(values) {
    let errors = {};
  
    if (!values.firstName.trim()) {
      errors.firstName = 'First Name is required';
    }
    if (!values.lastName.trim()) {
        errors.lastName = 'Last Name is required';
    }
    if (!values.phoneNumber) {
        errors.lastName = 'Phone Number is required';
    }
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }  
    if (!values.message) {
      errors.message = 'Please provide us with some more information.';
    }
    return errors;
  }
