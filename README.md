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

### Installation guide :
  1. Clone the repository : `git clone <Repository Web URL>` .
  2. Install all dependencies : `npm install` .
  3. Start the server : `npm run start` .

### Brief :
  1. Open the browser and navigate to : `http://localhost:3000` .
  2. To search for a book , enter the book ID between 1-5 in the search Bar , to get a clear details about that particular book .


  4. To see the JSON response to view all the books : `http://localhost:3000/books` .
      The whole Landing page : 
<img width="850" alt="Screenshot 2024-07-11 at 1 13 14 PM" src="https://github.com/RIYAN1-ux/simple-node-api/assets/109788856/880726c5-26b6-4e2e-89a6-f9129bca7d80">



  5. To view any particular book : `http://localhost:3000/books/id` .
     If searched for a Paticular Book Id : 

<img width="850" alt="Screenshot 2024-07-11 at 1 18 23 PM" src="https://github.com/RIYAN1-ux/simple-node-api/assets/109788856/7fb3b764-593d-4124-b484-76c2343e6c7a">

# Contenarization of Webserver using Docker 

1. Installing the Docker Desktop .
2. To test the API we can use the particular command :

   
   ```console
   node ./server.js
   ```
   
  <img width="625" alt="Screenshot 2024-07-11 at 2 04 08 PM" src="https://github.com/RIYAN1-ux/simple-node-api/assets/109788856/25c5a978-d86c-49ad-b32e-1a24ead2b04e">

3. Now specifying the instructions/commands to create the DockerFile . Commands in a Dockerfile create intermediate layers that Docker can cache, speeding up concurrent builds when layers haven't changed :


   ```Console
   FROM node:20.15-alpine
   
   # It adds a user named "riyan" with a home directory and sets the shell to "/bin/sh"
   RUN adduser -D -h /home/riyan -s /bin/sh riyan

   #Directory is set to node
   WORKDIR /node

   # With the * star command coppied all the package.json files
   COPY package*.json ./

   # This flag disables the security feature and allows the scripts to run with root privileges.
   RUN npm install --unsafe-perm

   COPY . .

   # It is used to change the ownership of the /node directory and all its contents to the user riyan .
   RUN chown -R riyan /node

   #port exposed to 3000.
   EXPOSE 3000

   # User changed to riyan
   USER riyan


   CMD npm run start

   ```

   ## Understanding the Commands of the DockerFile :

   `FROM node:20.15-alpine` : It initializes a new build stage and sets the base image for the subsequent instructions in Dockerfile.

   `RUN adduser -D -h /home/riyan -s /bin/sh riyan` : It adds a user named `riyan` with a home directory and sets the shell to `/bin/sh`.

   1. - D : It creates the user with default settings and sets home directory as default .
   2. - h : This specifies the home directory for the new user .

   `WORKDIR /node` : This command basically sets the current working directory to the directory `\node`.

   `COPY package*.json ./` : This command prominently copies all the package file from the host machine to the current working directory .

   `RUN npm install --unsafe-perm` : Here npm install is used to install all the application dependencies that are listed on the package.json file , and the `--unsafe-perm` is used to ensure that the npm scripts are particularly executed with root privileges .

    `COPY . .` : It copies all the files & directories in the current directory of your host machine to the working directory in the Docker image .

    `RUN chown -R riyan /node` : This particularly ensures and changes the ownership of the `\node` directory to the user `riyan`.

   `EXPOSE 3000` : Container particularly working on port 3000.

   `USER riyan` : User is basically changed to riyan .

   `CMD npm run start` : This is used to particularly start a container from the container image . This particular `npm run start` command is used to start the node.js application.

4. Docker Build Commands :

   ``` Console :
   docker build -t <image-name> .
   ```
   -t : Used for tagging the image with a name
   `.` : This is used to search for the available Dockerfile in the directory.

   <img width="1363" alt="Screenshot 2024-07-11 at 2 50 09 PM" src="https://github.com/RIYAN1-ux/simple-node-api/assets/109788856/7011a173-ee8e-44ce-bbf7-8d517f9ecb54">

5. Docker Image Versioning :

   ``` Console :
        docker build -t <image_name>:v2 .
   ```
   
   `:v_` : we can specify the particular version build .

   <img width="1440" alt="Screenshot 2024-07-11 at 3 02 25 PM" src="https://github.com/RIYAN1-ux/simple-node-api/assets/109788856/789f90c7-861a-4150-9f3a-bc11a2e916d4">


7. Docker Run Comands :

   ``` Console :
   docker run -itd -p 3000: --name <Container_name> <Image_name>:v2

   ```
   `-it` : It enables the interaction with conatiners shell .
   `-d` : It runs the container in the background .
   `-p 3000:3000` : It maps the port 3000 of host to the port 3000 of the container .
   `--name ` : Specifies the name of the container .

   <img width="1440" alt="Screenshot 2024-07-11 at 3 03 13 PM" src="https://github.com/RIYAN1-ux/simple-node-api/assets/109788856/d1b7632e-a928-4dca-85d3-39db123819a8">

   
   
   
