# Backend

A simple Express server built with TypeScript that provides a REST API for the full-stack application.

## Tech Stack

- **Node.js**: JavaScript runtime
- **Express**: Web framework for Node.js
- **TypeScript**: Typed superset of JavaScript
- **CORS**: Cross-origin resource sharing middleware

## Prerequisites

- Node.js (version 20 or higher)
- npm (comes with Node.js)

## Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

To run the server in development mode with hot reload:

```bash
npm run dev
```

The server will start on `http://localhost:3000` and automatically restart on file changes.

## Production Build

To compile the TypeScript code:

```bash
npm run build
```

This compiles the TypeScript files in `src/` to JavaScript in `dist/`.

## Docker

The backend includes a multi-stage Dockerfile optimized for production.

To build the Docker image:

```bash
docker build -t backend .
```

To run the container:

```bash
docker run -p 3000:3000 backend
```

The container runs as a non-root user for security.

## API Endpoints

- `GET /`: Returns a JSON response with a message.

## Project Structure

- `src/index.ts`: Main server entry point
- `package.json`: Project dependencies and scripts
- `tsconfig.json`: TypeScript configuration
- `Dockerfile`: Multi-stage Docker build configuration