# Homework Assignment 2 - Node.js Masterclass

<br>

## Getting started

#### Requirements
- Node.js installation
- A working Mailgun.com account, _required for **sending email receipts to customers**._
- A working Stripe.com account, _required for **stripe paymennt platform platform integration**._
- curl, Postman or any other application with similar functionalities at your disposal

#### Configuring the API
- Download and extract this repository to a local directory.
- Navigate to `folder-containing-the-extracted-repository/app/lib` folder.
- Open the `config.js` file in the editor of your choice.
- Find the `environments.staging` object definition, the following properties of this object are initialized with empty string. **YOU NEED TO REPLACE THE EMPTY STRINGS WITH VALID ONES.**

#### Running the API
- Open a terminal/command-line window and navigate into the `app/` directory.
- Run `node index.js`. 
- If everything's O.K. then the terminal is now displaying relevant **_port_** information.
- Check the next section to know more about API Interactions.

> The default environment is "staging" and currently is the only environment defined in the configuration file. 
<br><br>

## Interacting with API

The API accepts HTTP and HTTPS requests.
<br><br>

#### Create a user 

*request_type* : **POST**  
*path* : **users**  
*payload_type* : **JSON**   
*fields* :  
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
<br><br>

#### Update a user

*request_type* : **UPDATE**
*path* : **users**  
*payload_type* : **JSON**  
*fields* : **token** and atleast one of the following field to update  
<ul>
    <li>firstName</li>
    <li>lastName</li>
    <li>streetAddress</li>
</ul>

*example* : **UPDATE** request at `localhost:3000/users` with following payload
``` 
{
    "lastName":"zzz",
    "token":"akh279sbn09mn2gh89xSJ2"
} 
```
<br><br>

#### Delete a user

*request_type* : **DELETE**  
*path* : **users**  
*payload_type* : **JSON**   
*fields* :  **email**  

*example* : **DELETE** request at `localhost:3000/users?email=john@doe.com` 
<br><br><br>

#### User Login

*request_type* : **POST**  
*path* : **login**  
*payload_type* : **JSON**   
*fields* : **email**  

*example* : **POST** request at `localhost:3000/login` with following payload
``` 
{
    "email":"john@doe.com"
} 
```
<br><br>

#### User Logout

*request_type* : **POST**  
*path* : **logout**  
*payload_type* : **JSON**   
*fields* : **email**  

*example* : **POST** request at `localhost:3000/logout` with following payload
``` 
{
    "token":"akh279sbn09mn2gh89xSJ2"
} 
```
<br><br>

#### Get menu

*request_type* : **GET**  
*path* : **menu**  
*payload_type* : **JSON**   
*fields* : **token**  

*example* : **GET** request at `localhost:3000/menu?token=akh279sbn09mn2gh89xSJ2`
<br><br><br>

#### Update shopping cart

*request_type* : **UPDATE**
*path* : **cart**  
*payload_type* : **JSON**  
*fields* : 
<ul>
    <li>token</li>
    <li>items</li>
</ul>

*example* : **UPDATE** request at `localhost:3000/cart` with following payload
``` 
{
    "token":"akh279sbn09mn2gh89xSJ2",
    "items": [
        {
            "id":"1A",
            "quantity":1
        },
        {
            "id":"12B",
            "quantity":4
        }
    ]
} 
```
<br><br>

#### Create order 

*request_type* : **POST**  
*path* : **orders**  
*payload_type* : **JSON**   
*fields* :  
<ul>
    <li>token</li>
</ul>

*example* : **POST** request at `localhost:3000/orders` with following payload
``` 
{
    "token":"akh279sbn09mn2gh89xSJ2"
} 
```
<br><br>

## API overview

#### Integration with stripe.com and mailgun.com       

All the necessary information required to perform valid test transaction is stored in config file. 
For testing purposes, a module with all dummy information has been added to the API. When the app launches in staging environment, this module is used. 
This module adds payment information to each new user whenever a valid create user request is received.