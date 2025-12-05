# ETAPA 1: BUILDER
FROM node:20-slim AS builder
WORKDIR /app

COPY package*.json ./

# INSTALAMOS DEPENDENCIAS USANDO NPM TOKEN COMO SECRET
RUN --mount=type=secret,id=npm_token \
    npm ci

COPY tsconfig.json ./
COPY src ./src
RUN npm run build

# ETAPA 2: RUNNER
FROM node:20-slim AS runner
WORKDIR /app

# CREAMOS USUARIO DISTINTO A ROOT
RUN useradd -m appuser

# COPIAMOS SOLO LO NECESARIO PARA PRODUCCION
COPY package*.json ./
RUN npm ci --only=production

# COPIAMOS EL DIST COMPILADO
COPY --from=builder /app/dist ./dist

EXPOSE 3000

USER appuser

CMD ["node", "dist/index.js"]

