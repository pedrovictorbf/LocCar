FROM node


WORKDIR /user/app

COPY package.json ./

RUN npm install

COPY . .  

EXPOSE 8192 

CMD [ "npm","run","dev"]