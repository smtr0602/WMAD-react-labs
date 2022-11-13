const validateForm = (e) => {
  const { type, value: originalVal } = e.target;
  const value = originalVal.trim();
  switch (type) {
    // email
    case 'email':
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        return 'Please enter email in proper format.';
      }
      break;

    // password
    case 'password':
      if (value.length <= 8) {
        return 'Password must include at least 8 characters.';
      }
      if (!/[0-9]/.test(value)) {
        return 'Password must include at least 1 number.';
      }
      if (!/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value)) {
        return 'Password must include at least 1 special character.';
      }
  }
};

export default validateForm;
