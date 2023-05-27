package com.hotel.hotelmangementsystem.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.hotel.hotelmangementsystem.services.ReviewService;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpHeaders;

@RestController
@RequestMapping("")
public class ReviewController {
    @Autowired
    private ReviewService reviewService;

    @PostMapping("manager/api/review")
    public ResponseEntity createReview(HttpServletRequest request, @RequestBody Map<String, Object> request_body) {
        try {
            String token = (request.getHeader(HttpHeaders.AUTHORIZATION)).substring(7);
            return reviewService.createReview(request_body, token);
        } catch (Exception e) {
            return new ResponseEntity<String>("Error Creating Review: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("api/review")
    public ResponseEntity getAllReviews() {
        try {
            return reviewService.getAllReviews();
        } catch (Exception e) {
            return new ResponseEntity<String>("Error getting reviews: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("api/review/{reviewId}")
    public ResponseEntity getReviewById(@PathVariable int reviewId) {
        try {
            return reviewService.getReviewById(reviewId);
        } catch (Exception e) {
            return new ResponseEntity<String>("Error getting review: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }

    }

    @PutMapping("manager/api/review/{reviewId}")
    public ResponseEntity updateReview(@PathVariable int reviewId, HttpServletRequest request,
            @RequestBody Map<String, Object> request_body) {
        try {
            String token = (request.getHeader(HttpHeaders.AUTHORIZATION)).substring(7);
            return reviewService.updateReviewById(request_body, token, reviewId);
        } catch (Exception e) {
            return new ResponseEntity<String>("Error Updating Review: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("manager/api/review/{reviewId}")
    public ResponseEntity deleteReviewById(@PathVariable int reviewId) {
        try {
            return reviewService.deleteReviewById(reviewId);
        } catch (Exception e) {
            return new ResponseEntity<String>("Error deleting review: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }

    }
}