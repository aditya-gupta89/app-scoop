const useForm=({value,isSubmit})=>{
       
        const errors = {}; 
        if(!isSubmit)
        return errors;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!value.username) {
          errors.username = "Username is required!";
        }

        if (!value.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(value.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!value.password) {
          errors.password = "Password is required";
        } else if (value.password.length < 4) {
          errors.password = "Password must be more than 4 characters";
        } else if (value.password.length > 10) {
          errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
      
}
export default useForm