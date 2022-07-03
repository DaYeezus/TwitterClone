FROM node:18.3.0-alpine
WORKDIR /app
COPY package.json /app/
RUN yarn install
COPY . /app/
EXPOSE 3000
CMD ["yarn" , "run" , "dev"]