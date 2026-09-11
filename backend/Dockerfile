FROM node:20-bookworm-slim

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

ENV NODE_ENV=production
ENV PORT=5001

EXPOSE 5001

CMD ["sh", "-c", "node scripts/init-sqlite-schema.js && npm start"]