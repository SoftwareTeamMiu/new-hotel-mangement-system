FROM openjdk:17

WORKDIR /app

COPY . /app

# Copy the Maven Wrapper files to the Docker image
COPY mvnw /app/
COPY .mvn /app/.mvn

# Provide execution permissions to the Maven Wrapper script
RUN chmod +x /app/mvnw

ENTRYPOINT ["java", "-jar", "/app/target/hotel-mangement-system-0.0.1-SNAPSHOT.jar"]
