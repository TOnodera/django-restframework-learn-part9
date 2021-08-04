#!/bin/bash

uwsgi --socket :8081 --module quick_django.wsgi --chdir /home/python/app/quick_django --logto /home/python/app/logs/uwsgi.log --py-autoreload 1