FROM node:23-slim

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY app /app/app
COPY public /app/public
COPY *.{json,ts,js,mjs} ./
RUN npm run build
EXPOSE 3000

CMD ["npm", "start"]
