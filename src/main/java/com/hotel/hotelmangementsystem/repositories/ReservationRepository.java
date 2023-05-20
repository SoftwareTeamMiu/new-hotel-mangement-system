package com.hotel.hotelmangementsystem.repositories;

import com.hotel.hotelmangementsystem.models.Reservation;
import com.hotel.hotelmangementsystem.models.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<Reservation, Integer> {



}
