# FROM node:latest
# RUN npm install -g nodemon
# WORKDIR /app
# COPY . .
# RUN npm install
# EXPOSE 5000
# CMD [ "npm","run","dev" ]

FROM node:latest

# Create app directory
WORKDIR /app

# Install nodemon globally
RUN npm install -g nodemon

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose port
EXPOSE 5000

# Start the application with nodemon
CMD ["npm" , "run", "dev"]




