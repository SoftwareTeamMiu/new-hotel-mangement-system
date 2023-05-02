package com.hotel.hotelmangementsystem.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotel.hotelmangementsystem.models.Room;
import com.hotel.hotelmangementsystem.repositories.RoomRepository;

@Service
public class RoomServices {
    @Autowired
    private RoomRepository roomRepository;

    public void createRoom(com.hotel.hotelmangementsystem.models.Room room) {
        roomRepository.save(room);
    }

    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    public Room getRoomById(int id) {
        return roomRepository.findById(id).orElse(null);
    }

    public void deleteRoomById(int id) {
        roomRepository.deleteById(id);
    }

}
