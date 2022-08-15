FROM node:18-alpine3.15

RUN apk add --no-cache tini && mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install && npm cache clean --force
# RUN npm i bcrypt@5.0.0
RUN npm install -g nodemon
COPY . .

EXPOSE 8888

CMD ["npm", "run", "dev"]