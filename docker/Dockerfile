#syntax=docker/dockerfile:experimental

FROM node:16
WORKDIR /app

RUN chown -R node.node /app

COPY .uranio/.docker/.bash_docker /app
RUN cat .bash_docker >> /root/.bashrc
RUN cat .bash_docker >> /home/node/.bashrc

RUN mkdir ~/.ssh/ && ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts

RUN --mount=type=ssh,uid=1000 yarn global add uranio

COPY package.json /app/

ARG repo
ARG production
ARG project

LABEL project=$project

RUN --mount=type=ssh,uid=1000 uranio init -u --force \
	--repo=$repo \
	--docker=false \
	--prefix_loglevel \
	--prod=$production

RUN chown -R node.node /app/.urnlog
RUN chown -R node.node /app/node_modules
RUN chown -R node.node /app/.uranio
# RUN chown -R node.node /app/.env
# RUN chown -R node.node /app/uranio.toml
# RUN chown -R node.node /app/.uranio/uranio-schema

USER node

# COPY --chown=node:node src .env uranio.toml /app/
COPY --chown=node:node . .

CMD uranio start -u --build --prefix_loglevel --prod=$production
