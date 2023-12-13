From node:18-alpine

WORKDIR /home/todo-api

COPY package*.json .
COPY tsconfig.json .

RUN npm install

COPY src/ ./src

EXPOSE 8080

CMD ["npm", "run", "dev"]