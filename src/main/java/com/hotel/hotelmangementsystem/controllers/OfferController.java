package com.hotel.hotelmangementsystem.controllers;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.text.DateFormat;
import java.text.SimpleDateFormat;

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

import com.hotel.hotelmangementsystem.models.Offer;
import com.hotel.hotelmangementsystem.services.OfferServices;

@RestController
@RequestMapping("")
public class OfferController {

    @Autowired
    private OfferServices offerService;

    DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

    @PostMapping("manager/api/offers")
    public ResponseEntity<String> createOffer(@RequestBody Map<String, String> request_body) {
        Offer new_offer = new Offer();
        try {
            new_offer.setPercentage(Double.parseDouble(request_body.get("offer_percentage")));

            // parse date from String to Date
            String expiration_string_date = request_body.get("offer_expiration_date");

            Date expiration_date = dateFormat.parse(expiration_string_date);
            new_offer.setExpirationDate(expiration_date);

            offerService.createOffer(new_offer);
            return new ResponseEntity<>("Offer created successfully", HttpStatus.CREATED);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error creating offer: " + e.getMessage());
        }
    }

    @GetMapping("/api/offers")
    public ResponseEntity getAllOffers() {
        try {
            List<Offer> offers = offerService.getAllOffers();
            return new ResponseEntity<>(offers, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error getting all offers: " + e.getMessage());
        }
    }

    @GetMapping("/api/offers/{offerId}")
    public ResponseEntity getOfferById(@PathVariable int offerId) {
        try {
            Offer offer = offerService.getOfferById(offerId);
            if (offer != null) {
                return new ResponseEntity<>(offer, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Offer Not found", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error getting offer: " + e.getMessage());
        }
    }

    @PutMapping("manager/api/offers/{offerId}")
    public ResponseEntity<String> upadteOffer(@PathVariable int offerId,
            @RequestBody Map<String, String> request_body) {
        try {
            Offer offer = offerService.getOfferById(offerId);
            if (offer != null) {
                offer.setPercentage(Double.parseDouble(request_body.get("offer_percentage")));

                // parse date from String to Date
                String expiration_string_date = request_body.get("offer_expiration_date");
                Date expiration_date = dateFormat.parse(expiration_string_date);

                offer.setExpirationDate(expiration_date);

                offerService.createOffer(offer);
                return new ResponseEntity<>("Offer Updated", HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>("Offer Not found", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error updatting offer: " + e.getMessage());
        }
    }

    @DeleteMapping("manager/api/offers/{offerId}")
    public ResponseEntity<String> deleteOffer(@PathVariable int offerId) {
        try {
            Offer offer = offerService.getOfferById(offerId);
            if (offer != null) {
                offerService.deleteOfferById(offer.getId());
                return new ResponseEntity<>("Offer Deleted", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Offer Not found", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error Deleting offer: " + e.getMessage());
        }
    }
}
