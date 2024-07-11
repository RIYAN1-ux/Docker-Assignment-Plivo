FROM node:20.15-alpine

# It adds a user named "riyan" with a home directory and sets the shell to "/bin/sh"
RUN adduser -D -h /home/riyan -s /bin/sh riyan

# Directory is set to node
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
