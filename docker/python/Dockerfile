FROM python:3.8.3-buster

RUN apt-get update && apt-get install -y bash git nodejs npm 

RUN pip install flake8 autopep8 pymysql uwsgi mysqlclient pyyaml \ 
    && pip install Django==2.2.* djangorestframework==3.12.* \
    && pip install djangorestframework-simplejwt==4.6.* djoser==2.1.* django-cors-headers==3.7.*
    
RUN npm i -g @vue/cli

WORKDIR /home/python/app
RUN useradd -u 1000 -o python && \
    chown -R python:python /home/python

# ENTRYPOINT [ "/bin/bash","/home/python/app/docker/python/start.sh" ]