FROM node:18-bullseye-slim
WORKDIR /usr/src/app
COPY package.json package-lock.json* ./
# Install all dependencies (including dev) in build stage so tools like prisma CLI are available
RUN npm install --legacy-peer-deps
COPY . .
# Generate Prisma client for the target platform inside the container
RUN npx prisma generate || true
RUN npm run build
# Remove devDependencies to keep the final image lean
EXPOSE 3000
CMD ["node", "dist/main.js"]
