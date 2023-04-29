package com.hotel.hotelmangementsystem.repositories;

import org.springframework.data.jpa.repository.JpaRepository;


import com.hotel.hotelmangementsystem.models.RoomStatus;

public interface RoomStatusRepository extends JpaRepository<RoomStatus, Integer> {
}

