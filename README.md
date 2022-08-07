# Book Corner

| Contents
|---
| [Instalation](#Instalation)
| [About project](#About-Project)
| [Project architecture](#Project-architecture)
| - [Modules and components](#Modules-and-components)
| - [Services](#Services)
| - [Tests](#Tests)
| - [Technologies used](#Technologies-used)
|


## Getting started

### Instalation

1. Simply execute `npm run start-app`
 - This script will install all dependencies in both server and client directories and then start the `express server` and `react server`

## About project

- Book Corner is the right place for book lovers. Just sign up to use all the features 🙂
- Once you created an account you will be able to explore the catalog, view details, and more.

## Project architecture

#### Note: The first and only first created account will always be an `Admin` account. In a production environment the admin account would be preset

#### Public part
- Visible pages will be `Home`, `Catalog`, `Upcoming`, `On Sale` and the footer links

#### Private part
- Visible pages will be `Details`, `Create`, `Edit`, `Profile`, `Bin`

- Only `admin` account will have the functionality to create and edit courses

### Components

#### App module
- App
- Login
- Registration
- Header
- Footer
- Logout
- Home
- Contacts
- Profile
- Catalog
- Upcoming
- On Sale
- Edit
- Create
- About us
- Privacy Policy
- Delivery
- Careers
- FAQ

### Services

- User service
- API service

### Guards

- Guest guard
- Logged Guard

### Tests

- Currently no test have been written

### Technologies used

- `Front-End`:  This is a pure React project meaning no extra dependencies are used at this moment

- `Back-End`: Express.js with MongoDB/Mongoose

### ENJOY 🙂