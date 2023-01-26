FROM node:lts-alpine

RUN apk add dumb-init

ENV NODE_ENV development

WORKDIR app

COPY --chown=node:node . /app

RUN npm install

USER node

CMD ["dumb-init", "npm", "run", "serve"]
