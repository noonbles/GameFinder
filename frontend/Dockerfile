# TODO: 
# * set up stage for frontend webapp

FROM python

WORKDIR /frontend/discordbot
COPY ./discordbot/gamebot.py gamebot.py
COPY .env .env

RUN pip install -U discord.py
RUN pip install howlongtobeatpy discord-pretty-help python-dotenv

CMD ["python", "gamebot.py"]

FROM node

WORKDIR /frontend/webapp
COPY ./webapp .
EXPOSE 3000
RUN npm install

CMD ["npm", "run", "dev"]