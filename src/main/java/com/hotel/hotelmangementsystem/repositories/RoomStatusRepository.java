package com.hotel.hotelmangementsystem.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hotel.hotelmangementsystem.models.RoomStatus;

@Repository
public interface RoomStatusRepository extends JpaRepository<RoomStatus, Integer> {
}
