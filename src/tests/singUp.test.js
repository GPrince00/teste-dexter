import aplication from '../services/aplication';

var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');

var mock = new MockAdapter(axios);

mock.onPost('/users').reply(200);    
var axioss = "Servidor desligado";

describe('User', () => {
    it('should return "1"(empty fields)', async () => {        
        let username = 'teste';        
        let password = '1234';
        let confirmpassword = '1234';
        let email = '';
        let phone = '(11) 12345-6789';
        expect(await aplication.singUp( password, confirmpassword, email, username, phone, axios )).toMatch("1");
    });
    
    it('should return "2"(registered user)', async () => {        
        let username = 'teste';        
        let password = '1234';
        let confirmpassword = '1234';
        let email = 'teste@teste';
        let phone = '(11) 12345-6789';
        expect(await aplication.singUp( password, confirmpassword, email, username, phone, axios )).toMatch("2");
    });

    it('should return "3"(Unable to register user)', async () => {        
        let username = 'teste';        
        let password = '1234';
        let confirmpassword = '1234';
        let email = 'teste@teste';
        let phone = '(11) 12345-6789';
        expect(await aplication.singUp( password, confirmpassword, email, username, phone, axioss )).toMatch("3");
    });

    it('should return "4"(passwords do not match)', async () => {        
        let username = 'teste';        
        let password = '1234';
        let confirmpassword = '12345';
        let email = 'teste@teste';
        let phone = '(11) 12345-6789';
        expect(await aplication.singUp( password, confirmpassword, email, username, phone, axios )).toMatch("4");
    });  
})