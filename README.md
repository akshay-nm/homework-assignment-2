# Homework Assignment 2 - Node.js Masterclass

## Getting started
Follow these steps to get this API up and running.

## API overview

### Data-structures
This API uses the following data-structures
- User
- Token
- Item
- Menu
- Cart
- Order
- Receipt

### Functionalities
- CRUD for users
- Token based authentication for users which ensures that
    - Users can Log in/ Log out
    - Only authenticated users can get the menu
    - Only authenticated users can add items to cart
    - Only authenticated users can place an order
- Receipts can be emailed to the user

### Background workers
- Token validation
- Log handler
- Receipt handler