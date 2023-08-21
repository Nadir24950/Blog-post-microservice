FROM node:16-alpine AS developement

#ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

FROM developement as dev 

COPY . /usr/src/app/

EXPOSE 5173

CMD ["npm", "run", "dev"]

