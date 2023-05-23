package com.hotel.hotelmangementsystem.repositories;

import com.hotel.hotelmangementsystem.models.Reservation;
import com.hotel.hotelmangementsystem.models.Room;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Integer> {
    List<Reservation> findByCustomerId(String id);
}
