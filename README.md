# Homework Assignment 2 - Node.js Masterclass

<br>

# Getting started

## Requirements
- Node.js working installation.
- A working Mailgun.com account, _required for **sending email receipts to customers**._
- A working Stripe.com account, _required for **stripe payment platform platform integration**._
- _curl_, _Postman_ or any other application with similar functionalities at your disposal.

## Configuring the API
- Download and extract this repository to a local directory.
- Navigate to `folder-containing-the-extracted-repository/app/lib/config/` directory. There should be files named `stripeConfig.js` and `mailgunConfig.js`. These files act as containers for data required from your end. 
- Open the `stripeConfig.js` file in the editor of your choice.
- Find the `stripe` object in the file. You can see that this project has a few properties initializaed by an empty string. **YOU NEED TO REPLACE THE EMPTY STRINGS WITH VALID ONES.**  
![Screenshot: An image showing what to replace in the `stripeConfig.js`](stringConfig)
- Save the file and close it.
- Open the `mailgunConfig.js` file in the editor of yoour choice, and update the necessary information.  
![Screeshot: An image showing what to replace in the `mailgunConfig.js`](mailgunConfig)
- Save the file and close it.  
> Now the API setup is complete.

## Running the API
- Open a terminal/command-line window and navigate into the `app/` directory.
- Run `node index.js`. 
- If everything's O.K. then the terminal is now displaying relevant **_port_** information.
- Check the next section to know more about API Interactions.

> The default environment is "staging" and currently is the only environment defined in the configuration file. 
<br><br>

# API overview

## Integration with stripe.com and mailgun.com       

All the necessary information required to perform valid test transaction is stored in config file. 
For testing purposes, a module with all dummy information has been added to the API. When the app launches in staging environment, this module is used. 
This module adds payment information to each new user whenever a valid create user request is received.

The configuration folder in the API directory contains stripe and mailgun containers. Once the API is supplied with necessary keys and tokens, it uses them to perform [HTTP basic authentication] in case of a stripe and mailgun transaction.

## Interacting with API

The API accepts HTTP and HTTPS requests. Assuming that the API is running under test configuration with all the necessary bells and whistles (referring to MAILGUN and STRIPE credentials here), the following sections explain behavior that can be expected from the API.
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


[stripeConfig]: ./src/assets/images/stripeConfig.js
[mailgunConfig]: ./src/assets/images/mailgunConfig.js
[HTTP basic authentication]: https://en.wikipedia.org/wiki/Basic_access_authentication