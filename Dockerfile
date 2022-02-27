FROM node:16

WORKDIR /app

RUN apt-get update && apt-get -y dist-upgrade
RUN apt install -y netcat
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY yarn.lock ./
COPY prisma ./prisma/
COPY .env ./

# Install app dependencies
RUN yarn install 

COPY . .

RUN chmod +x entrypoint.sh

CMD ["bash", "entrypoint.sh"]