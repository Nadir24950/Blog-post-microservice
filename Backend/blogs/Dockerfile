FROM node:18-alpine 

ENV NODE_ENV production

WORKDIR /usr/src/app

COPY --chown=node:node ["package.json", "package-lock.json", "./"]

RUN npm ci --only=production

COPY . /usr/src/app/

EXPOSE 3030

ENV MONGODB_URI="mongodb+srv://nadir24950:1ITd5ynQ@cluster0.hcif53s.mongodb.net/?retryWrites=true&w=majority"

USER node

CMD ["node", "blogs.js"]