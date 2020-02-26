FROM node:8.12.0

EXPOSE 3000

COPY . /app
WORKDIR /app
RUN npm i --production
RUN npm run build
ENTRYPOINT npm start
