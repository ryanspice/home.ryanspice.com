FROM node:9.7-alpine

MAINTAINER Martino Fornasa <mf@fornasa.it>

WORKDIR /opt/app


# Install yarn
RUN mkdir -p /opt/

RUN apk add --no-cache --virtual .build-deps \
    ca-certificates \
    wget \
    tar && \
    wget https://yarnpkg.com/latest.tar.gz && \
    tar zvxf latest.tar.gz && \
    ln -s /dist/bin/yarn.js /opt/dist/bin/yarn.js && \
    apk del .build-deps

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
