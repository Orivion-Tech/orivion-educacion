FROM node:18-bullseye-slim
WORKDIR /usr/src/app
ENV NODE_ENV=development
ENV NPM_CONFIG_PRODUCTION=false
COPY package.json package-lock.json* ./
# Install all dependencies (including dev) in build stage so tools like prisma CLI are available
RUN npm install --legacy-peer-deps --include=dev
RUN npm install -g typescript@5.7.2 prisma@5.22.0
COPY . .
# Generate Prisma client for the target platform inside the container
RUN prisma generate
RUN npm run build
ENV NODE_ENV=production
# Remove devDependencies to keep the final image lean
EXPOSE 3000
CMD ["node", "dist/main.js"]
