ARG NODE_VERSION=20.9.0

FROM node:${NODE_VERSION}-alpine3.18

WORKDIR /srv/tbg-computers/client

COPY package.json .

RUN npm install

COPY . .

#EXPOSE 3000
#
#CMD ["npm", "run", "dev"]
