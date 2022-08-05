#syntax=docker/dockerfile:experimental

FROM node:16

WORKDIR /app

ENV TERM xterm-256color

RUN mkdir ~/.ssh/ && ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts

RUN --mount=type=ssh yarn global add uranio

RUN chown -R node.node /app

COPY package.json /app

ARG repo

#ARG deploy
#ARG pacman
#RUN --mount=type=ssh uranio init --force -vu --prefix_color --repo=$repo --deploy=$deploy --pacman=$pacman --docker=false
#RUN --mount=type=ssh uranio init --force -vu --prefix_color --repo=$repo --deploy=$deploy --docker=false

RUN --mount=type=ssh uranio init --force -u --repo=$repo --docker=false --prefix_color

RUN chown -R node.node /app/package.json
RUN chown -R node.node /app/.env
RUN chown -R node.node /app/uranio.toml
RUN chown -R node.node /app/.urnlog
RUN chown -R node.node /app/.uranio/uranio-schema

USER node

COPY .uranio/.docker/.bash_docker /app

RUN cat .bash_docker >> ~/.bashrc

ARG project

LABEL project=$project

CMD ["uranio", "dev", "-u", "--blank", "--prefix_color"]

#CMD tail -f /dev/null
