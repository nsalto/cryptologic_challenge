FROM node:16-alpine AS dependencies
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install

FROM dependencies
COPY tsconfig.json .
COPY ./server ./server    
RUN yarn run start
EXPOSE 5001
CMD [ "yarn", "start" ]