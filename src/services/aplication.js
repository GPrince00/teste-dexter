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
    if (username === "" ||
        password === ""
    ){
        return "1"
    } else {
        try {
            const response = await api.post('/login', {
                username,
                password
            });          
            return response.data.sessionToken;            
        } catch (err) {
            return "2";
        }
    }
} 

user.renderItems = async ( show, location, api ) => {
    if(show[location.pathname] === undefined){
        return 'wrong location.pathname';
    } else {
        const response = await api.get(`/classes/${show[location.pathname].api}`);
        return response.data.results;
    }
}

export default user;