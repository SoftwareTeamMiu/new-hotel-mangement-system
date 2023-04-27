package com.hotel.hotelmangementsystem.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotel.hotelmangementsystem.models.Offer;
import com.hotel.hotelmangementsystem.repositories.OfferRepository;

@Service
public class OfferServices {
    @Autowired
    private OfferRepository offerRepository;

    public void createOffer(Offer offer) {
        try {
            this.offerRepository.save(offer);
        } catch (Exception e) {
            System.out.println("Error creating offer: " + e.getMessage());
        }
    }

    public List<Offer> getAllOffers() {
        return this.offerRepository.findAll();
    }

    public Offer getOfferById(int offerId) {
        return this.offerRepository.findById(offerId).orElse(null);
    }

    public void deleteOfferById(int offerId) {
        this.offerRepository.deleteById(offerId);
    }
}
