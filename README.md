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
