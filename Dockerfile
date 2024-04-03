# Stage 1: Build the React application
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve the application with serve package
FROM node:18-alpine

WORKDIR /app

COPY --from=build /app/dist /app/dist
COPY package*.json ./

RUN npm install -g serve json-server
RUN apk update && apk add bash

COPY db.json .

COPY start.sh .
RUN chmod +x start.sh

# Run both React App & Json-server
CMD ["/bin/sh", "start.sh"]
