FROM node:20-alpine AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:1.25-alpine
COPY --from=build /app/dist/web-angular /usr/share/nginx/html
EXPOSE 80
