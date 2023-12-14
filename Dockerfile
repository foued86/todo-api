FROM node:18-alpine
LABEL version="1.0"

WORKDIR /home/todo-api
ENV PORT=8080

COPY package*.json .
COPY tsconfig.json .

RUN npm install

COPY src/ ./src

EXPOSE 8080

CMD ["npm", "start"]
