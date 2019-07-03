from node:latest

RUN mkdir /root/wtp-client

ADD src /root/wtp-client/src

COPY *.json *.js browserslist /root/wtp-client/

WORKDIR /root/wtp-client

RUN npm i

RUN npm run build

RUN ls -la
