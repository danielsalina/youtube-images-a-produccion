# ETAPA 1: BUILDER
FROM node:20-slim AS builder
WORKDIR /app

# COPIAMOS SOLO LO NECESARIO PARA INSTALAR DEPENDENCIAS
COPY package*.json ./

# INSTALAMOS DEPENDENCIAS USANDO NPM TOKEN COMO SECRET
# NOTA: NO ESCRIBE NPMRC EN DISCO
RUN --mount=type=secret,id=npm_token \
    npm ci

# COPIAMOS CODIGO Y COMPILAMOS TYPESCRIPT
COPY index.html ./
COPY src ./src
RUN npm run build

# ETAPA 2: RUNNER
FROM node:20-slim AS runner
WORKDIR /app

# CREAMOS USUARIO NO ROOT
RUN useradd -m appuser

# COPIAMOS SOLO LO NECESARIO PARA PRODUCCION
COPY package*.json ./
RUN npm ci --only=production

# COPIAMOS EL DIST COMPILADO
COPY --from=builder /app/dist ./dist

# DOCUMENTACION DEL PUERTO
EXPOSE 5174

USER appuser

CMD ["node", "dist/index.js"]

