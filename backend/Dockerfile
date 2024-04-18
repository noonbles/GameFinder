# Backend

FROM node
WORKDIR /app
COPY . .
EXPOSE 8000
# ^ that is a bad idea but im too lazy to make a proxy lol

RUN npm install

CMD ["node", "index.js"]

