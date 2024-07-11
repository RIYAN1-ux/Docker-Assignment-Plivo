# Steps for creation of a Node.js Application with Express.js in a Docker Container 
1. This Repository shows that , the full structure how we created a Application where we run an API in Node.js with Express.js and created a Docker Image for it . 
2. After createion of the Docker image with the Dockerfile that we created , we basically used Run command to build the Docker container . 
3. After that we particularly used the Docker image to run the application in the container and accessed the Application from there .
   # About the Application 
The Application that is created is a simple web application that provides information about a collection of books through a RESTful API. It consists of a backend server created with Node.js and Express and a frontend interface designed with HTML, CSS, and JavaScript.

*For Frontend* : A UI that is used to interact with the Books API
  1. It presents a form to search particular books that are referenced by their unique ID.
  2. It shows the information of the book based on the input given by the user .
  3. A link is provided for the books details.

*For Backend* : A Node.js server particularly used to serve the Book data
  1. It provides an endpoint to retrieve all books: `GET /books` . 
  2. It provides an endpoint to retrieve a book by its own unique ID: `GET /books/:id` .
  3. It also serves static files for the frontend .

# Installation guide :
  1. Clone the repository : `git clone <Repository Web URL>` .
  2. Install all dependencies : `npm install` .
  3. Start the server : `npm run start` .

# Brief :
  1. Open the browser and navigate to : `http://localhost:3000` .
  2. To search for a book , enter the book ID between 1-5 in the search Bar , to get a clear details about that particular book .
  3. To see the JSON response to view all the books : `http://localhost:3000/books` .
      The whole Landing page : 
<img width="850" alt="Screenshot 2024-07-11 at 1 13 14 PM" src="https://github.com/RIYAN1-ux/simple-node-api/assets/109788856/880726c5-26b6-4e2e-89a6-f9129bca7d80">

  4. To view any particular book : `http://localhost:3000/books/id` .
     If searched for a Paticular Book Id : 

<img width="850" alt="Screenshot 2024-07-11 at 1 18 23 PM" src="https://github.com/RIYAN1-ux/simple-node-api/assets/109788856/7fb3b764-593d-4124-b484-76c2343e6c7a">


