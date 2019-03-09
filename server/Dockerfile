FROM node:latest
WORKDIR /app
ADD ./package.json ./package.json
RUN npm install
ADD ["./extract.js", "index.js", "./"]
EXPOSE 3050
CMD [ "npm", "run", "start:server" ]

