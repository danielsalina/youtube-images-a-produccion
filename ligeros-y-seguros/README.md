# Compose-Ejercicio

A simple full-stack application demonstrating a React frontend connected to an Express backend, orchestrated with Docker Compose and PostgreSQL
database.

## Tech Stack

- **Backend**: Node.js, Express, TypeScript
- **Frontend**: React, Vite
- **Database**: PostgreSQL
- **Orchestration**: Docker Compose

## Prerequisites

- Docker and Docker Compose installed
- Node.js (for local development, optional)

## Setup

1. Clone the repository.
2. Ensure the `.env` file is present with the required environment variables (see below).
3. Run `docker-compose up --build` to build and start the services.

## Running the Application

Once the containers are up:

- **Backend**: Accessible at http://localhost:3000
- **Frontend**: Accessible at http://localhost:5173
- **Database**: PostgreSQL running on localhost:5432

The frontend fetches a JSON message from the backend and displays it.

## Environment Variables

The `.env` file contains:

- `BACKEND_PORT=3000`
- `FRONTEND_PORT=5173`
- `DB_USER=admin`
- `DB_PASSWORD=supersecret`
- `DB_NAME=appdb`
- `DB_PORT=5432`

Adjust these as needed for your environment.

## Project Structure

- `backend/`: Express server with TypeScript, includes Dockerfile, package.json, and source code in `src/`.
- `frontend/`: React application with Vite, includes Dockerfile, package.json, and source code in `src/`.
- `docker-compose.yml`: Defines the services (backend, frontend, db) and their configurations.
- `.env`: Environment variables for ports and database credentials.
- `.dockerignore`: Files to ignore in Docker builds.

## Development

For local development without Docker:

1. **Backend**:

   - Navigate to `backend/`
   - Run `npm install`
   - Run `npm run dev` (uses nodemon with TypeScript)

2. **Frontend**:
   - Navigate to `frontend/`
   - Run `npm install`
   - Run `npm run dev` (uses Vite with hot reload)

Ensure the backend is running on port 3000 for the frontend to connect.

## Notes

- The backend currently serves a simple JSON response and does not yet utilize the PostgreSQL database.
- Hot reload is enabled for both backend and frontend during development.
