#syntax=docker/dockerfile:experimental

FROM node:16
WORKDIR /app

RUN chown -R node.node /app

COPY .uranio/.docker/.bash_docker /app
RUN cat .bash_docker >> /root/.bashrc
RUN cat .bash_docker >> /home/node/.bashrc

RUN mkdir ~/.ssh/ && ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts

RUN --mount=type=ssh,uid=1000 yarn global add uranio

# FROM x71c9/uranio:latest

COPY package.json /app/

ARG repo
# ARG production
ARG project

LABEL project=$project

RUN --mount=type=ssh,uid=1000 uranio init \
	-u \
	--force \
	--repo=$repo \
	--prefix_loglevel

RUN chown -R node.node /app/node_modules/uranio* \
	&& chown -R node.node /app/.uranio

USER node

COPY . .

# CMD uranio start -u --prefix_loglevel
# CMD uranio start -u --prefix_loglevel --prod=$production
# CMD uranio dev -u --prefix_loglevel --prod=$production

CMD tail -f /dev/null
