# Set up stage for frontend webapp
FROM python AS discordbot

WORKDIR /frontend/discordbot
COPY gamebot.py gamebot.py
COPY ping.py ping.py
COPY .env .env

RUN pip install -U discord.py
RUN pip install howlongtobeatpy discord-pretty-help python-dotenv

CMD ["python", "gamebot.py"]