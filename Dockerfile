# Use the official OpenJDK 17 image as the base image
FROM openjdk:17 as builder

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the Maven wrapper files to the container
COPY mvnw .
COPY .mvn .mvn

# Convert line endings of the Maven wrapper script
RUN sed -i 's/\r$//' mvnw

# Copy the project descriptor files to the container
COPY pom.xml .

# Convert line endings of the pom.xml file
RUN sed -i 's/\r$//' pom.xml

# Download the project dependencies
RUN ./mvnw dependency:go-offline -B

# Copy the application source code to the container
COPY src src

# Build the Spring Boot application
RUN ./mvnw package -DskipTests

# Use a lightweight JRE image for the final image
FROM openjdk:17-jdk-alpine

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the JAR file generated from the previous stage to the container
COPY --from=builder /app/target/*.jar app.jar

# Expose the port on which the Spring Boot application will listen
EXPOSE 8080

# Set the entrypoint for the container to run the Spring Boot application using the java -jar command
ENTRYPOINT ["java", "-jar", "app.jar"]
