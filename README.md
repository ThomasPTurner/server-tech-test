# Bug Tracker

A full stack web application to keep track up of bugs in a non specified system.
Created as part of a timed tech test.

Deployed versions here:

#### Back End:

https://server-tech-test.herokuapp.com/api/restaurants

### Prerequisites

```
    "cors": "^2.8.5",
    "express": "^4.17.1",
```

a global installation of the following is required:

``
npm i nodemon -g
``

### Installing

#### clone the repo

```
$ git clone https://github.com/ThomasPTurner/server-tech-test.git
```

##### Run these scripts from the project directory:

```
$ npm i
$ npm run dev
```
This will have the server listening. The default listen port is 9090

### To run the tests:

#### set up and run the tests:

Run the following commands in the project directory:

```
$ npm i -D
$ npm t
```

### Tests
These test check the served values and requested changes from the test database and the error handling of those requests.

example:

```
it('delivers an array of restaurants', ()=>{
                const keys = ['id', 'name', 'address', 'cuisine', 'dog-friendly', 'vegan-options', 'rating'] 
                return request
                    .get('/api/restaurants')
                    .then(({ body: {restaurants}}) => {
                        expect(restaurants[0]).to.include.keys(keys)
                    })
            })
```

This example test checks that a valid GET request will return an array of objects with the correct keys.

### Running locally

To have the app run locally enter the following commands in the project directory:

```
npm run dev
```

Note that this will require port 9090 to be available.

### Deployment
This repo is set up to be hosted on heroku for the backend.

To deploy another, follow the following steps:

#### Go to the backend directory and set up the heroku repository and database:

```
heroku create
```

#### push to the heroku remote

```
git add .
git commit -m "heroku initial commit"
git push heroku master

```


### Built With

###### [express]
server framework

## Contributing
Feel free to contribute.

### Versioning
Version control handled by git and github.

### Authors
Tom Turner - ThomasPTurner

### License
This project is licensed under the MIT License - see the LICENSE.md file for details
