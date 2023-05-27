package com.hotel.hotelmangementsystem.models;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Offer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private double percentage;
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "Africa/Cairo")
    private Date expirationDate;

    public Offer() {
    }

    public Offer(double percentage, Date expirationDate) {
        this.percentage = percentage;
        this.expirationDate = expirationDate;
    }

    public double getPercentage() {
        return percentage;
    }

    public void setPercentage(double percentage) {
        this.percentage = percentage;
    }

    public Date getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(Date expirationDate) {
        this.expirationDate = expirationDate;
    }

    public int getId() {
        return id;
    }

}
