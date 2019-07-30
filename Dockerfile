FROM node:9.7-alpine

MAINTAINER Martino Fornasa <mf@fornasa.it>

WORKDIR /opt/app


RUN apk add --no-cache --virtual .build-deps \
    ca-certificates \
    wget \
    tar && \
    cd /usr/local/bin && \
    wget https://yarnpkg.com/latest.tar.gz && \
    tar zvxf latest.tar.gz && \
    ln -s /usr/local/bin/dist/bin/yarn.js /usr/local/bin/yarn.js && \
    apk del .build-deps

# Install yarn
RUN mkdir -p /opt/
ADD /latest.tar.gz /opt/

ENV PATH "$PATH:/opt/dist/bin"

ADD package.json yarn.lock /tmp/

# Copy cache contents (if any) from local machine
ADD .yarn-cache.tgz /

# Install packages
RUN cd /tmp
RUN yarn
RUN mkdir -p /opt/app && cd /opt/app && ln -s /tmp/node_modules

# Copy the code
ADD . /opt/app
