package com.hotel.hotelmangementsystem.services;

import com.hotel.hotelmangementsystem.models.RoomType;
import com.hotel.hotelmangementsystem.repositories.RoomTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class RoomTypeService {
    @Autowired
    private RoomTypeRepository roomTypeRepository;

    public List<RoomType> getAllRoomTypes() {
        return roomTypeRepository.findAll();
    }
    public RoomType getRoomTypeById(Integer id) {
        return roomTypeRepository.findById(id).orElse(null);
    }
    public RoomType createRoomType(RoomType RoomType) {
        return roomTypeRepository.save(RoomType);
    }
    public void deleteRoomType(Integer id) {
        roomTypeRepository.deleteById(id);
    }
}
