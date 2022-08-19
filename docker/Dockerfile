#syntax=docker/dockerfile:experimental

## --------------------------------------------------------------------------
## INITIALIZER
## Make stage for uranio init
FROM node:16 as initializer
WORKDIR /app

RUN chown -R node.node /app

RUN mkdir ~/.ssh/ && ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts

RUN --mount=type=ssh,uid=1000 yarn global add uranio

# FROM x71c9/uranio:latest

COPY package.json /app/

ARG repo
ARG project

LABEL project=$project

RUN --mount=type=ssh,uid=1000 uranio init --prefix_loglevel -u --force --repo=$repo

RUN chown -R node.node /app/node_modules/uranio* && chown -R node.node /app/.uranio

USER node

## --------------------------------------------------------------------------
## STARTER
## Make stage for uranio start
FROM node:16 as starter
WORKDIR /app

COPY .uranio/.docker/.bash_docker /app
RUN cat .bash_docker >> /root/.bashrc && cat .bash_docker >> /home/node/.bashrc

USER node

COPY --from=initializer /app /app
COPY --from=initializer /home/node/.yarn /home/node/.yarn
COPY --from=initializer /home/node/.config/yarn /home/node/.config/yarn

COPY . .

# CMD tail -f /dev/null

CMD uranio start -u --prod
