from nginx:latest

COPY wtp-client.conf /etc/nginx/conf.d

RUN chmod 755 /root

CMD nginx -g 'daemon off;'
