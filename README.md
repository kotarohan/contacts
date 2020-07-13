# contacts

1. Angular UI folder contains front end code
2. API folder contains dot net core API for CRUD operations

Steps to run -
1. Open the API project -> GOTO AppSettings -> change connection string as your local server
2. Open terminal -> run command -> update-database -> this should create database
3. Run the project

4. Open angular app
5. Goto - ~\Angular UI\src\app\shared\contact.service.ts
6. update -> readonly rootURL = 'http://localhost:5000/api' in the file contact.service.ts as per your local port number where API is running 
7. Now run angular app
