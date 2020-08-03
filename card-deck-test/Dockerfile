FROM node:12-slim

# create app directory
WORKDIR /app

# install dependencies
COPY ./package*.json ./

RUN npm ci --only-production

COPY ./ ./

EXPOSE 4000
CMD [ "node", "./bin/www" ]