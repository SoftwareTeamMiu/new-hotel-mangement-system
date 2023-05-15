package com.hotel.hotelmangementsystem.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.hotel.hotelmangementsystem.models.Review;
import com.hotel.hotelmangementsystem.repositories.ReviewRepository;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validation;
import jakarta.validation.Validator;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    UserService userService;

    @Autowired
    Validator validator = Validation.buildDefaultValidatorFactory()
            .getValidator();

    List<String> errorMessages = new ArrayList<>();

    public ResponseEntity createReview(Map<String, Object> body, String token) {
        try{
        Review review = new Review();
        review.setUser(userService.getUserByToken(token));
        review.setReview_title(( String) body.get("review_title"));
        review.setReview_description(( String) body.get("review_description"));
        if(validateReview(review)){
            return new ResponseEntity<List<String>>(errorMessages, HttpStatus.BAD_REQUEST);
        }else{
            reviewRepository.save(review);
            return ResponseEntity.ok("Review Created");
        }
    }catch (Exception e) {
        return new ResponseEntity<String>("Error Creating Review: " + e.getMessage(), HttpStatus.BAD_REQUEST);
    }
    }

    public boolean validateReview(Review review) {
        Set<ConstraintViolation<Review>> violations = validator.validate(review);
        if (!violations.isEmpty()) {
            errorMessages.clear();
            for (ConstraintViolation<Review> violation : violations) {
                errorMessages.add(violation.getMessage());
            }
            return true;
        } else {
            return false;
        }
    }
}
