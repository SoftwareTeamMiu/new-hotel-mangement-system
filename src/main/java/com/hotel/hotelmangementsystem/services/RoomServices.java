package com.hotel.hotelmangementsystem.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotel.hotelmangementsystem.repositories.RoomRepository;

@Service
public class RoomServices {
    @Autowired
    private RoomRepository roomRepository;

    public void createRoom(com.hotel.hotelmangementsystem.models.Room room) {
        roomRepository.save(room);
    }
    
}
