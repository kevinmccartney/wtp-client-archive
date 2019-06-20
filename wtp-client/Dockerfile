from node:latest

COPY src /root

COPY *.json /root/

WORKDIR /root

RUN npm i

CMD npm run ${SCRIPT}
