# BurgerChallenge

Code Challenge: Create a front-end UI to consume the Burgers API CRUD endpoints. The API back-end can be found at <https://github.com/m-hatch/burger_backend>

## Requirements

1. Create a new burger and push it to the burger set. 

2. Get a list of all the burgers with a given topping.

3. Edit a burger in the burger set.

4. Remove a burger from the burger set.

## API

The API exposes the following resources:

- `GET http://localhost:8080/burgers/`

  You can assume the following response data structure:

```
{
  "id": 6,
  "name": "Silly Girl",
  "has_bun": true,
  "has_patty": false,
  "toppings": [
    {
        "name": "cheese"
    },
    {
        "name": "ketchup"
    },
    {
        "name": "mustard"
    }
  ]
}
```

- `POST http://localhost:8080/burgers/`

  Request body should follow the following structure:

```
{
  "name": "Silly Girl",
  "has_bun": true,
  "has_patty": false,
  "toppings": [
    {
        "name": "cheese"
    },
    {
        "name": "ketchup"
    },
    {
        "name": "mustard"
    }
  ]
}
```

- `PUT http://localhost:8080/burgers/{id}/`

  Request body should follow the following structure:

```
{
  "id": 6,
  "name": "Silly Girl",
  "has_bun": true,
  "has_patty": false,
  "toppings": [
    {
        "name": "cheese"
    },
    {
        "name": "ketchup"
    },
    {
        "name": "mustard"
    }
  ]
}
```

- `DELETE http://localhost:8080/burgers/{id}/`

  No response body.

## Installation

(1) Install dependencies. In project root run: 

  ```$ npm install```
  
(2) Connect the API. In the `src/` directory create a file named `api.js`. The contents of the file should be the following:

  `export default 'BASE_URL'`

  If your API is served at `http://localhost:8080/burgers/`, the variable `BASE_URL` would be the string `http://localhost:8080/`. Do not forget to include the trailing slash in your export statement.

## Development

To run the project enter the following in the project root:

```$ npm run start```

## Production

To build the project enter the following in the project root:

```$ npm run build```
