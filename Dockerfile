# specify the node base image with your desired version node:<version>
FROM node:8
WORKDIR /app
COPY . /app
RUN npm install express
EXPOSE 3000

# replace this with your application's default port
CMD [ "node", "index.js" ]