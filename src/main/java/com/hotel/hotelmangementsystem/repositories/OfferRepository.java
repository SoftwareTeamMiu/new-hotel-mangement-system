package com.hotel.hotelmangementsystem.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hotel.hotelmangementsystem.models.Offer;

@Repository
public interface OfferRepository extends JpaRepository<Offer, Integer>{
    
}
