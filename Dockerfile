FROM node:current-alpine

# EXPOSE 3000
WORKDIR /app

COPY . ./

RUN npm install

CMD [ "npm", "start" ]