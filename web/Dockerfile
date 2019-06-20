# Specify node version
FROM node:10.15.3

# Create app directory
WORKDIR /home/node/app

# Add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /home/node/app/node_modules/.bin:$PATH

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# # start app
# CMD ["npm", "start"]