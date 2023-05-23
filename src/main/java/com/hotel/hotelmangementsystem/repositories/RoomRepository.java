package com.hotel.hotelmangementsystem.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hotel.hotelmangementsystem.models.Room;

@Repository
public interface RoomRepository extends JpaRepository<Room, Integer> {
    List<Room> findByRoomTypeSize(int size);
    List<Room> findByRoomTypeLocation(int location);
}
