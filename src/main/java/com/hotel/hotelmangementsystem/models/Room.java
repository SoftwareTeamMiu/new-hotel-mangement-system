package com.hotel.hotelmangementsystem.models;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private double price;

    @ManyToOne(targetEntity = RoomType.class, optional = false)
    @JoinColumn(name = "room_type_id", referencedColumnName = "id", nullable = false)
    private RoomType roomType;

    @ManyToOne(targetEntity = RoomStatus.class, optional = false)
    @JoinColumn(name = "room_status_id", referencedColumnName = "id", nullable = false)
    private RoomStatus roomStatus;
    
    @ManyToOne(targetEntity = Offer.class, optional = true)
    @JoinColumn(name = "offer_id", referencedColumnName = "id", nullable = true)
    private Offer offer;

    public Room() {
    }

    public Room(double price, RoomType roomType, RoomStatus roomStatus, Offer offer) {
        this.price = price;
        this.roomType = roomType;
        this.roomStatus = roomStatus;
        this.offer = offer;
    }

    public int getId() {
        return id;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public RoomType getRoomType() {
        return roomType;
    }

    public void setRoomType(RoomType roomType) {
        this.roomType = roomType;
    }

    public RoomStatus getRoomStatus() {
        return roomStatus;
    }

    public void setRoomStatus(RoomStatus roomStatus) {
        this.roomStatus = roomStatus;
    }

    public Offer getOffer() {
        return offer;
    }

    public void setOffer(Offer offer) {
        this.offer = offer;
    }

    
}
