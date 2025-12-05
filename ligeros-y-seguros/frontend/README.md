# Frontend

A React application built with Vite that fetches data from the backend API and displays it.

## Tech Stack

- **React**: Component-based UI library
- **Vite**: Fast build tool and development server
- **JavaScript**: Programming language

## Prerequisites

- Node.js (version 20 or higher)
- npm (comes with Node.js)

## Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

To run the development server with hot reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the configured port) and supports hot module replacement.

## Production Build

To build the application for production:

```bash
npm run build
```

This creates optimized, minified files in the `dist/` directory ready for deployment.

## Docker

The frontend includes a multi-stage Dockerfile optimized for production builds.

To build the Docker image:

```bash
docker build -t frontend .
```

To run the container:

```bash
docker run -p 5173:5174 frontend
```

Note: The Dockerfile exposes port 5174 internally, but the application typically runs on port 5173 in development.

## Configuration

The app connects to the backend API using the `VITE_API_URL` environment variable. If not set, it defaults to `http://localhost:3001`.

Ensure the backend is running and accessible at the configured URL.

## Features

- Fetches JSON data from the backend
- Displays the data in a user-friendly format
- Supports hot reload during development

## Project Structure

- `src/main.jsx`: Main React application component
- `index.html`: HTML entry point
- `package.json`: Project dependencies and scripts
- `Dockerfile`: Multi-stage Docker build configuration