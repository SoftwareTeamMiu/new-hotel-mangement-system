package com.hotel.hotelmangementsystem.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hotel.hotelmangementsystem.models.Review;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Integer>{
    
}
