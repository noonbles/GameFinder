FROM node AS webapp

WORKDIR /frontend/webapp
COPY . .
EXPOSE 3000
RUN npm install

CMD ["npm", "run", "dev"]