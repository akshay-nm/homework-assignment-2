# Homework Assignment 2 - Node.js Masterclass

## Getting started

Follow these steps to get this API up and running.
- System requirements
    - Node.js
    - Postman or any other application with similar functionalities
- Download and extract this repository to a local directory
- Open a terminal/command-line window and navigate into the `app/` directory
- Run `node index.js`
- If everything's O.K. then the terminal is now displaying relevant *port* information.
- Check the next section to know more about API Interactions.

## Interacting with API

The API accepts HTTP requests.

### Create a user 

*protocol* : **HTTP**
*path* : **users**
*payload_type* : **JSON**
*required_fields* : 
<ul>
    <li>firstName</li>
    <li>lastName</li>
    <li>email</li>
    <li>streetAddress</li>
</ul>

*example* : **POST** request at `localhost:3000/users` with following payload
``` 
{
    "firstName":"John",
    "lastName":"Doe",
    "email":"john@doe.com",
    "streetAddress":"111, xyz street"
} 
```

## API overview
### Exposed       
- customer
    - CRUD
    - Required Fields
        - firstName
        - lastName
        - email
        - streetAddress
    - tasks
        - CU order
        - RU cart

### Internal
- menu
    - items
        - itemId
    

- item
    - id
    - price

- order
    - userId
    - items
        - itemId
    - placedOn

- token
    - id
    - userid
    - expires

### Background workers
- Token validation
- Log handler
- Receipt handler
