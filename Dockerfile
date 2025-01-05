FROM node:20-alpine 

WORKDIR /app

COPY package*.json ./

RUN npm install

ARG NEXT_PUBLIC_API_ENDPOINT
ENV NEXT_PUBLIC_API_ENDPOINT=$NEXT_PUBLIC_API_ENDPOINT


COPY . .

RUN npm run build

EXPOSE 4000

CMD ["npm", "run", "start"]