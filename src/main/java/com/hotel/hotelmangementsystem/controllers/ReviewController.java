package com.hotel.hotelmangementsystem.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.hotelmangementsystem.models.Review;
import com.hotel.hotelmangementsystem.models.User;
import com.hotel.hotelmangementsystem.services.JwtService;
import com.hotel.hotelmangementsystem.services.ReviewService;
import com.hotel.hotelmangementsystem.services.UserService;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpHeaders;

@RestController
@RequestMapping("/api/review")
public class ReviewController {
    @Autowired
    private ReviewService reviewService; 

    @PostMapping("")
    public ResponseEntity createReview(HttpServletRequest request, @RequestBody Map<String, Object> request_body) {
        try {
            String token = (request.getHeader(HttpHeaders.AUTHORIZATION)).substring(7);
            return reviewService.createReview(request_body, token);
        } catch (Exception e) {
            return new ResponseEntity<String>("Error Creating Review: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}