# build stage
FROM node:lts-alpine as development
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]