package com.hotel.hotelmangementsystem.aspects;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

@Aspect
@Component
public class LoggingAspect {
    // private static final String LOG_FILE = "logs.txt";
    // private static final DateTimeFormatter DATE_FORMATTER =
    // DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

    // @Pointcut("execution(* com.hotel.hotelmangementsystem.controllers.*.*(..))")
    // public void controllerMethods() {
    // }

    // @Before("controllerMethods()")
    // public void logBeforeControllersMethods(JoinPoint joinPoint) {
    // String methodName = joinPoint.getSignature().getName();
    // String className = joinPoint.getTarget().getClass().getSimpleName();
    // String username = getUsername();
    // String timestamp = LocalDateTime.now().format(DATE_FORMATTER);
    // String logMessage = String.format("At [%s] - Method [%s] called in class [%s]
    // by user [%s]", timestamp,
    // methodName, className,
    // username);
    // // System.out.println(logMessage);
    // try (PrintWriter writer = new PrintWriter(new FileWriter(LOG_FILE, true))) {
    // writer.println(logMessage);
    // } catch (IOException e) {
    // e.printStackTrace();
    // }
    // }

    // @After("controllerMethods()")
    // public void logAfterControllersMethods(JoinPoint joinPoint) {
    // String methodName = joinPoint.getSignature().getName();
    // String className = joinPoint.getTarget().getClass().getSimpleName();
    // String username = getUsername();
    // String timestamp = LocalDateTime.now().format(DATE_FORMATTER);
    // String logMessage = String.format("At [%s] - Method [%s] Finished in class
    // [%s] by user [%s]", timestamp,
    // methodName, className,
    // username);
    // // System.out.println(logMessage);
    // try (PrintWriter writer = new PrintWriter(new FileWriter(LOG_FILE, true))) {
    // writer.println(logMessage);
    // } catch (IOException e) {
    // e.printStackTrace();
    // }
    // }

    // private String getUsername() {
    // Authentication authentication =
    // SecurityContextHolder.getContext().getAuthentication();
    // if (authentication != null && authentication.isAuthenticated()) {
    // return authentication.getName();
    // }
    // return "Anonymous";
    // }
}
