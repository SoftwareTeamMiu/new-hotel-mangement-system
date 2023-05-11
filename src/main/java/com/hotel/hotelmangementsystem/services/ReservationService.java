package com.hotel.hotelmangementsystem.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotel.hotelmangementsystem.models.Reservation;
import com.hotel.hotelmangementsystem.repositories.ReservationRepository;

import java.util.List;

@Service
public class ReservationService {
    @Autowired
    private ReservationRepository reservationRepository;

    public Reservation createReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

    public List<Reservation> getAllReservations(){return reservationRepository.findAll();}

    public Reservation getReservationByID(int id){return reservationRepository.findById(id).orElse(null);}
}
