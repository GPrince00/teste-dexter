import aplication from '../services/aplication';

var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');

var mock = new MockAdapter(axios);

let places = {
    results: [{
        "name": "Paris",
        "link": "http://localhost:1337/paris.jpg"
    },
    {
        "name": "Moscow",
        "link": "http://localhost:1337/moscow.jpg"
    }]
};

let foods = {
    results: [{
        "name": "Avocado",
        "link": "http://localhost:1337/avocado.jpg"
    },
    {
        "name": "Cake",
        "link": "http://localhost:1337/cake.jpg",
    }]
};

let people = {
    results: [{
        "name": "Serena",
        "link": "http://localhost:1337/serena.jpg"
    },
    {
        "name": "Steve",
        "link": "http://localhost:1337/steve.jpg"
    }]
};

let show = {
    '/places': {
        'api': 'Place',
        'title': 'PLACES'        
    },
    '/foods': {
        'api': 'Food',
        'title': 'FOODS'        
    },
    '/people': {
        'api': 'Person',
        'title': 'PEOPLE'        
    }
};

mock.onGet('/classes/Place').reply(200, {
    ...places
});

mock.onGet('/classes/Food').reply(200, {
    ...foods
});

mock.onGet('/classes/Person').reply(200, {
    ...people
});

describe('User', () => {
    it('should return Places', async () => {
        let location = { pathname: '/places'};        
        expect(await aplication.renderItems( show, location, axios )).toMatchObject(places.results);
    }); 
    
    it('should return Foods', async () => {
        let location = { pathname: '/foods'};        
        expect(await aplication.renderItems( show, location, axios )).toMatchObject(foods.results);
    }); 

    it('should return People', async () => {
        let location = { pathname: '/people'};        
        expect(await aplication.renderItems( show, location, axios )).toMatchObject(people.results);
    }); 

    it('should return Nothing ', async () => {
        let location = { pathname: '/wrongfh'};
        expect(await aplication.renderItems( show, location, axios )).toMatch('wrong location.pathname');
    }); 
})
