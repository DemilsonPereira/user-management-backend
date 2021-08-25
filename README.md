<h1><strong>User menegement system</strong></h1>

# **💻About the project**

* This application aims to create a User CRUD.

## **🛠 Tecnologias**


* The following tools are being used in the construction of the project:


- **[Typescript](https://www.typescriptlang.org/)**
- **[NodeJS](https://nodejs.org/en/)**
- **[Express](https://expressjs.com/pt-br/)**
- **[Docker](https://docs.docker.com/)**
- **[Docker-compose](https://docs.docker.com/compose/)**
- **[Postgres](https://www.postgresql.org/)**
- **[Typeorm](https://typeorm.io/#/)**

## **🚀 How to run the application**

1. First you need to have the docker installed to run the application

* first command - This will install the libraries to run the application.
    
    * yarn install  
    <br />
    
   

* second command - This command will create an image of the postgres database and start the application

    * docker-compose up -d
    
    <br />

* With the application running you can consume the following routes:  
    <br />

     

    <strong><font color="green">**router.post('/user')**</font></strong>  <br />       - Route to create a user

    <strong><font color="green">**router.get('/user')**</font></strong> <br />         - Route to list a user

    <strong><font color="green">**router.get('/user/:id')**</font></strong> <br />     - Route to list a user by ID

    <strong><font color="green">**router.put('/user/:id')**</font></strong>  <br />   - Route to update a user

    <strong><font color="green">**router.delete('/user/:id')**</font></strong> <br /> - Route to delete a user
    
    <br />


## **🚀 test the application**

* To test the routes, you can download Insomina, API Client for its GraphQL and REST APIs

    - **[Insomina](https://insomnia.rest/download)**
