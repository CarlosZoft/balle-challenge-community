FROM node:16

WORKDIR /app 

RUN apt-get update && apt-get -y dist-upgrade
RUN apt install -y netcat

COPY ./package.json /app/package.json

RUN yarn install 

COPY . /app

RUN chmod +x entrypoint.sh

CMD ["bash", "entrypoint.sh"]