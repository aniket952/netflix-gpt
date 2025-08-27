const checkValidation = (email, password)=>{
    if(!email || !password) return "Enter the required fields"
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const vlaidpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if(!validEmail) return "Email Id is not valid"
    if(!vlaidpassword) return "Password is not valid"

    return null
}
export default checkValidation