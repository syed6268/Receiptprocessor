# Use a Node.js base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy both backend and frontend code to the container
COPY ./ ./ 

# Install backend dependencies
WORKDIR /app
RUN npm install

# Install frontend dependencies and build the React app
WORKDIR /app/frontend
RUN npm install
RUN npm run build

# Set the backend working directory and start the server
WORKDIR /app
CMD ["npm", "run", "dev"]
