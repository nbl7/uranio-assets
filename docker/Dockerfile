#syntax=docker/dockerfile:experimental

FROM node:16

WORKDIR /app

RUN mkdir ~/.ssh/ && ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts

RUN --mount=type=ssh yarn global add uranio

RUN chown -R node.node /app

# it will copy cert only if exists
COPY --chown=node:node package.json cert /app/

ARG repo

RUN --mount=type=ssh uranio init -u --force --repo=$repo --docker=false --prefix_loglevel

RUN chown -R node.node /app/.env
RUN chown -R node.node /app/uranio.toml
RUN chown -R node.node /app/.urnlog
RUN chown -R node.node /app/.uranio/uranio-schema

USER node

COPY .uranio/.docker/.bash_docker /app

RUN cat .bash_docker >> ~/.bashrc

ARG project

LABEL project=$project

# CMD ["uranio", "start", "-u", "--prefix_loglevel"]
# CMD tail -f /dev/null

CMD ["uranio", "dev", "-u", "--prefix_loglevel"]
