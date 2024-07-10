FROM node:20.15-alpine
RUN mkdir node
COPY . ./node
WORKDIR /node
RUN npm install
EXPOSE 3000

CMD npm run start
