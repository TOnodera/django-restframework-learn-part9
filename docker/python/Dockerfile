FROM python:3.9-alpine

RUN apk update && apk add --no-cache bash build-base mariadb-connector-c-dev linux-headers git
RUN pip install flake8 autopep8 pymysql uwsgi mysqlclient pyyaml
RUN pip install Django==2.2 djangorestframework==3.12.*

WORKDIR /home/python/app
RUN adduser -u 1000 -D python && \
    chown -R python:python /home/python

# ENTRYPOINT [ "/bin/bash","/home/python/app/docker/python/start.sh" ]