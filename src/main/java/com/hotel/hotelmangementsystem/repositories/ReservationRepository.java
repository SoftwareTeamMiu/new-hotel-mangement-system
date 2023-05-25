package com.hotel.hotelmangementsystem.repositories;

import com.hotel.hotelmangementsystem.models.Reservation;
import com.hotel.hotelmangementsystem.models.Room;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Integer> {
       List<Reservation> findByCustomerId(String id);

       @Query("SELECT r FROM Reservation r JOIN r.rooms room " +
                     "WHERE room = :room " +
                     "AND r.start_date <= :endDate " +
                     "AND r.end_date >= :startDate")
       List<Reservation> findOverlappingReservations(@Param("room") Room room,
                     @Param("startDate") Date startDate,
                     @Param("endDate") Date endDate);
}
