package com.hotel.hotelmangementsystem.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotel.hotelmangementsystem.models.Reservation;
import com.hotel.hotelmangementsystem.models.Room;
import com.hotel.hotelmangementsystem.repositories.ReservationRepository;

import java.util.Date;
import java.util.List;

@Service
public class ReservationService {
    @Autowired
    private ReservationRepository reservationRepository;

    public Reservation createReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

    public List<Reservation> getAllReservations() {
        return reservationRepository.findAll();
    }

    public Reservation getReservationByID(int id) {
        return reservationRepository.findById(id).orElse(null);
    }

    public void deleteReservationByID(int id) {
        reservationRepository.deleteById(id);
    }

    public List<Reservation> getReservationByUserID(String id) {
        return reservationRepository.findByCustomerId(id);
    }

    public boolean hasOverlappingReservations(List<Room> rooms, Date startDate, Date endDate) {
        for (Room room : rooms) {
            System.out.println("Checking room " + room.getId());
            List<Reservation> overlappingReservations = reservationRepository.findOverlappingReservations(room,
                    startDate, endDate);
            if (!overlappingReservations.isEmpty()) {
                return true; // Found overlapping reservations
            }
        }
        return false; // No overlapping reservations
    }
}
