# Express Application with Docker



## Description

This project sets up a simple Express application within a Docker container. The application uses Docker for containerization, ensuring consistent and reproducible environments across different stages of development and deployment. Nodemon is used for automatically restarting the server during development whenever file changes in the directory are detected.

## Features

- Express server
- Docker for containerization
- Nodemon for hot-reloading during development

## Prerequisites

Ensure you have the following installed:

- Docker
- Docker Compose
- Node.js (for local development without Docker)

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### Running the Application with Docker

1. **Build and start the Docker containers:**

    ```bash
    docker-compose up --build
    ```

2. **Access the application:**

    Open your browser and navigate to `http://localhost:5000`.

### Running the Application Locally

If you prefer to run the application without Docker, follow these steps:

1. **Install dependencies:**

    ```bash
    npm install
    ```

2. **Start the application:**

    ```bash
    npm run dev
    ```

3. **Access the application:**

    Open your browser and navigate to `http://localhost:5000`.

## Project Structure

```plaintext
.
├── Dockerfile
├── docker-compose.yml
├── package.json
├── package-lock.json
├──  index.js
│   
└── README.md
```

- `Dockerfile`: Instructions for building the Docker image.
- `docker-compose.yml`: Configuration for Docker Compose to run the application.
- `package.json`: Lists dependencies and contains scripts for running the application.
- `src/index.js`: The main entry point of the Express application.

## Dockerfile

Here's the Dockerfile used for this project:

```dockerfile
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
```

## docker-compose.yml

Here's the docker-compose.yml file used for this project:

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "5000:5000"
    volumes:
      - .:/app
      - /app/node_modules
    command: npm run dev
    environment:
      NODE_ENV: development
```

## Environment Variables

The following environment variables are used in this project:

- `NODE_ENV`: Defines the environment in which the application is running (e.g., development, production).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or enhancements.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Express](https://expressjs.com/)
- [Docker](https://www.docker.com/)
- [Nodemon](https://nodemon.io/)

---

Feel free to reach out if you have any questions or need further assistance!
