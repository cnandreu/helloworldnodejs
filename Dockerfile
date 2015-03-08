
FROM ubuntu:14.04

MAINTAINER Carlos Andreu

RUN apt-get update && apt-get install -y nodejs npm nodejs-legacy git git-core

ADD start.sh /tmp/

RUN chmod +x /tmp/start.sh

CMD ./tmp/start.sh