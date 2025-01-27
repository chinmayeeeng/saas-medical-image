FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy all files
COPY . .

# Expose port
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
