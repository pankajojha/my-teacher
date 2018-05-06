#!/usr/bin/env bash
eval $(docker-machine env -u)
docker build -t my-teacher .

#if in background
#docker run -d  -v ${PWD}/client:/usr/src/app -v /usr/src/app/node_modules -p 4200:4200 --name my-teacher-container my-teacher  
docker run -it -v ${PWD}/client:/usr/src/app   -v /usr/src/app/node_modules -p 4200:4200 --rm my-teacher

#docker run -it -v ${PWD}/client:/usr/src/app  -p 4200:4200 --rm my-teacher


