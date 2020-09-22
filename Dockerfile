FROM node:lts-alpine

RUN mkdir -p /home/bot/node_modules && chown -R node:node /home/bot

WORKDIR /home/bot

COPY package.json yarn.* ./

USER node

RUN yarn

RUN yarn tsc

COPY --chown=node:node . .

CMD ["yarn", "start"]

# docker build -t bot-praguedo .
# docker run -d bot-praguedo-dev
