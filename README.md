# SIT-753-6.1
Jenkins path : /Users/binayapuri/.jenkins/secrets 


# Download the Jenkins WAR file
curl -LO https://get.jenkins.io/war-stable/latest/jenkins.war

# Run Jenkins directly with Java
java -jar jenkins.war

password: 377a5e8a45f9446483f0e3963a1edc47


docker run 

docker build -t sit753-app .
docker run -d -p 3000:3000 sit753-app


## run jenkins using docker 

docker run -p 8080:8080 -p 50000:50000 --name jenkins-sit753 \
  -v jenkins_home:/var/jenkins_home \
  jenkins/jenkins:lts

377a5e8a45f9446483f0e3963a1edc47



## -----------------------------------------------#####

## with pipeline
docker run -d \
  --name jenkins-sit753 \
  -p 8080:8080 -p 50000:50000 \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v jenkins_home:/var/jenkins_home \
  jenkins/jenkins:lts


## open jenkins bash
docker exec -u 0 -it jenkins-sit753 bash


## install docker under jenkins
apt-get update
apt-get install -y docker.io

## Add the jenkins user to the docker group:
groupadd docker || true
usermod -aG docker jenkins


## exit
exit

## restart
docker restart jenkins-sit753

d7785965c16a6d74865f79c5b01b3baeb3ed8449ee9a3bc815a8c87b7ec8cebf
