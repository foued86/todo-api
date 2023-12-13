# Todo API
Todo API is a demo CRUD API built with Typescript, nodeJS, Express.js and MongoDB.  
Node.js v18.13.0  
npm v9.7.1  

---

## How to install ?

1. Clone the git repo in your local machine  
`git clone https://github.com/foued86/todo-api.git`  

2. Run npm to install dependencies  
`npm install`  

3. Configure mongoDB connection  
  - You can use a docker image of MongoDB or the cloud service of mongo (Mongo Atlas) to create your database  
  - Rename the `.env.dist` file to `.env` and put your appropriate env vars  

3. Run the server in dev mode and make your updates  
`npm run dev`  

4. Test the todo API in Postman

| HTTP Method | URL | Description |
| ----------- | ----------- |----------- |
| GET | http://localhost:8080/api/todos | Get all todos |
| GET | http://localhost:8080/api/todos/:id | Get one todo by ID (put a valid id) |
| POST | http://localhost:8080/api/todos | Create a new todo <br/>  `{ "text": "New task" }` |
| PATCH | http://localhost:8080/api/todos/:id | Update one todo |
| DELETE | http://localhost:8080/api/todos/:id | Delete one todo |