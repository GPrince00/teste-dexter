import aplication from '../services/aplication';

var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');

var mock = new MockAdapter(axios);
let token = {
    "sessionToken": "r:fb7c73001d950cac86f3f0e1e0a6ee1a"
}

mock.onPost('/login', {
    username: 'dexter@dex.company',
    password: '1234'
}).reply(200, {    
    ...token    
});
    
describe('User', () => {
    it('should return token', async () => {        
        let username = 'dexter@dex.company';        
        let password = '1234';
        expect(await aplication.login( username, password, axios )).toMatch(token.sessionToken);
    });
    
    it('should  return "2"(wrong user or password)', async () => {
        let username = 'user.wrong@dex.company';
        let password = 'wrongPassword';
        expect(await aplication.login( username, password, axios)).toMatch("2");
    });

    it('should  return "1"(empty fields)', async () => {
        let username = '';
        let password = '';
        expect(await aplication.login( username, password, axios)).toMatch("1");
    });    
})