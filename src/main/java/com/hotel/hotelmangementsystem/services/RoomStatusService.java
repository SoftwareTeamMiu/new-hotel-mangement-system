package com.hotel.hotelmangementsystem.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotel.hotelmangementsystem.models.RoomStatus;
import com.hotel.hotelmangementsystem.repositories.RoomStatusRepository;

@Service
public class RoomStatusService {
    @Autowired
    private RoomStatusRepository roomStatusRepository;
    
    public List<RoomStatus> getAllRoomStatus() {
        return roomStatusRepository.findAll();
    }
    public RoomStatus getRoomStatusById(Integer id) {
        return roomStatusRepository.findById(id).orElse(null);
    }
    public RoomStatus createRoomStatus(RoomStatus roomStatus) {
        return roomStatusRepository.save(roomStatus);
    }
    public void deleteRoomStatus(Integer id) {
        roomStatusRepository.deleteById(id);
    }

}




