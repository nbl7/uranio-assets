#syntax=docker/dockerfile:experimental

FROM node:16

WORKDIR /app

RUN chown -R node.node /app

COPY .uranio/.docker/.bash_docker /app

RUN cat .bash_docker >> ~/.bashrc

ENV TERM xterm-256color

RUN mkdir ~/.ssh/ && ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts

RUN --mount=type=ssh yarn global add uranio-cli

COPY package.json /app

ARG repo

#ARG deploy

#ARG pacman

#RUN --mount=type=ssh uranio init --force -vu --prefix_color --repo=$repo --deploy=$deploy --pacman=$pacman --docker=false

#RUN --mount=type=ssh uranio init --force -vu --prefix_color --repo=$repo --deploy=$deploy --docker=false

RUN --mount=type=ssh uranio init --force -vu --prefix_color --repo=$repo --docker=false

RUN chown -R node.node /app/.urnlog
RUN chown -R node.node /app/.uranio/.uranio.json

USER node

ARG project

LABEL project=$project

CMD ["uranio", "dev", "-vu", "--prefix_color", "--color_uranio=false"]

#CMD tail -f /dev/null
