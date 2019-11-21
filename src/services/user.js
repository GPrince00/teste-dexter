var user = {};

user.singUp = async ( password, confirmpassword, email, username, phone, api) => {    
    if (password === "" ||
        confirmpassword === "" ||
        email === "" ||
        username === "" ||
        phone === ""
    ){
        return "1";
    } else {
        if (password === confirmpassword){
            try {
                await api.post('/users', {
                    username,
                    email,
                    phone,
                    password
                })
                return "2";
            } catch (err) {
                return "3";          
            }
        } else {
            return "4";
        }
    }        
}   


user.login = async ( username, password, api ) => {
    try {
        const response = await api.post('/login', {
            username,
            password
        });          
        return response.data.sessionToken;            
    } catch (err) {
        return "1";
    }
}  

export default user;