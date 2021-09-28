FROM nginx

COPY webserver/nginx.conf /etc/nginx/nginx.conf

VOLUME ["/etc/nginx/ssl", "/etc/nginx/psw"]

RUN echo "daemon off;" >> /etc/nginx/nginx.conf

EXPOSE 80

CMD service nginx start