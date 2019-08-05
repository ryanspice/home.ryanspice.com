FROM nevergone/alpine-yarn:3.10.0

RUN apk add --no-cache git

ADD client.js /opt/app/client.js

WORKDIR /opt/app

RUN mkdir -p /opt/

ENV PATH "$PATH:/usr/local/bin"

ADD package.json *yarn* /tmp/

# Copy cache contents (if any) from local machine
# ADD .yarn-cache.tgz /

# Install packages
RUN cd /tmp && yarn && mkdir -p /opt/app && cd /opt/app && ln -s /tmp/node_modules

# Copy the code
ADD . /opt/app

RUN yarn deploy
#RUN yarn deployWithoutDocs && yarn add basic-ftp && yarn add fs

WORKDIR /opt/app

RUN yarn node client.js
