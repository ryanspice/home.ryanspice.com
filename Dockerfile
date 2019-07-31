FROM node:lts-alpine

# Maintained by: ryanspice.com

ADD client.js /opt/app/client.js

WORKDIR /opt/app

# Install dependencies

RUN apk add --no-cache git

RUN apk add --no-cache --virtual .build-deps \
    ca-certificates \
    wget \
    tar && \
    cd /usr/local/bin && \
    wget https://yarnpkg.com/latest.tar.gz && \
    tar zvxf latest.tar.gz && \
    ln -s /usr/local/bin/dist/bin/yarn.js /usr/local/bin/yarn.js && \
    apk del .build-deps

RUN mkdir -p /opt/

ENV PATH "$PATH:/usr/local/bin"

ADD package.json *yarn* /tmp/

# Copy cache contents (if any) from local machine
# ADD .yarn-cache.tgz /

# Install packages

RUN cd /tmp && yarn && mkdir -p /opt/app && cd /opt/app && ln -s /tmp/node_modules

# Copy the code

ADD . /opt/app

# TODO :: add ftp-client to develop dependencies on the project?
#							 or look at alternative to using node js (linux?)

RUN yarn docker && echo "Successfully ran deploy" && yarn add ftp-client

WORKDIR /opt/app

RUN yarn node client.js
