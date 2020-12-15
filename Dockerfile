FROM node:12

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# COPY package*.json ./
COPY yarn.lock ./

RUN yarn install
# RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# add app
COPY . /app

# server.js uses port 8080 so open it in container
EXPOSE 8080

# run the server
CMD [ "node", "server.js" ]