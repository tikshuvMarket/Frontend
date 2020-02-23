FROM node:13.8.0-alpine3.10

WORKDIR /app

COPY . .

RUN npm install

RUN npm install serve -g

RUN npm run build

EXPOSE 5000

USER node

CMD ["serve", "-s", "build"]
