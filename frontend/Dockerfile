FROM node:18-alpine AS build

WORKDIR /usr/src/app

ENV PATH /app/node_modules/.bin:$PATH

COPY ["package.json", "package-lock.json", "./"]

RUN npm ci --silent

RUN npm install

COPY . ./

RUN npm run build

# production environment

FROM nginx:stable-alpine

COPY --from=build usr/src/app/dist /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
