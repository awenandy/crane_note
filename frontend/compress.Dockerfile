FROM nginx:stable-alpine

MAINTAINER weitao zhou <wtzhou@dataman-inc.com>

ADD ./dist /usr/share/nginx/html
ADD ./conf/nginx.conf /etc/nginx/nginx.conf
