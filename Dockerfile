FROM 172.22.43.76/library/nginx1.23.3:latest
EXPOSE 80
ENV TZ=Asia/Shanghai
COPY dist/ /www
COPY default.conf /etc/nginx/conf.d/default.conf
ENTRYPOINT nginx -g "daemon off;"
