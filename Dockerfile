FROM node:14.18.2-alpine
#FROM node:12.16.3-alpine3.9

RUN mkdir -p /nuxt-app
WORKDIR /nuxt-app

COPY package*.json ./
RUN  npm config set registry https://registry.npm.taobao.org && \
     npm install

COPY . .

RUN npm run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=3000

CMD [ "npm", "start" ]
