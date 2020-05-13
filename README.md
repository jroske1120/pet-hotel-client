# Pet Hotel Project

> NOTE: __Do not fork this repository.__ Instead, create your own repository from scratch.

Trello Board: https://trello.com/b/1mJRBCmZ/pet-hotel-weekend-project

This Board has some tasks already defined, feel free to update as you see fit.

## Objectives

- build a full-stack application, writing the backend in a new language
- utilize separate GitHub repositories for the client-side and server-side of an application
- build confidence w/ SQL statements for CRUD and 1-M joins

## Technology

We are replacing our Node/Express/PG server with TypeScript. Your RESTful API server needs to be able to route requests, respond, and talk to our PostGRES database.

## Client Side

The client side should remain React, Redux, Redux Sagas as needed. 

## Features

- Add owners
- Add pets
- Remove owners if no pets are assigned
- Remove pets
- Check in / out a pet
- Show total number of pet next to each owner

### Wireframes

#### Dashboard View

![Add Entry Page](page-one.png)

#### Manage Owners View

![Add Entry Page](page-two.png)

### Database

Start with two tables **pets** & **owners**. When base features are complete, add more tables as needed for stretch goals.

## Documentation

Before moving on past Base features, please take time to comment your code and otherwise document what you've learned about your new server side technology stack. This will be great when you come back and reference this project later.

## Other Features

- Update pets and owners
- Add login for admin & customers (all above functionality should be admin focused)
- Keep track of visits (you may need another table or two for this)
  - Allow customers to see a history of visits for their pets
  - Allow customers to add/remove pets from a profile page
- Add images for pets