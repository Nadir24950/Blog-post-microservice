FROM node:16-alpine

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . /usr/src/app/

EXPOSE 3030

CMD ["node", "blogs.js"]