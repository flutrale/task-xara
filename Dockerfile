#FROM node:12.16.1
# install deps

#ADD package.json /tmp/package.json
#RUN adduser --disabled-password app

# Copy deps
#RUN mkdir -p /opt/hello-world-app && cp -a /tmp/node_modules /opt/hello-world-app

# Setup workdir
#WORKDIR /opt/hello-world-app
#COPY . /opt/hello-world-app

# run
#EXPOSE 3000
#CMD ["npm", "start"]


FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]