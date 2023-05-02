package com.hotel.hotelmangementsystem.controllers;
import com.hotel.hotelmangementsystem.models.RoomType;
import com.hotel.hotelmangementsystem.services.RoomTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/roomtype")
public class RoomTypeController {

    @Autowired
    private RoomTypeService roomTypeService;

    @GetMapping("/")
    public List<RoomType> getAllRoomTypes(){return roomTypeService.getAllRoomTypes();}

    @PostMapping("/")
    public RoomType CreateRoomType(@RequestBody RoomType rt){
        return roomTypeService.createRoomType(new RoomType(rt.getId(),rt.getSize(),rt.getLocation()));
    }

    @GetMapping("/{id}")
    public RoomType getRoomTypeByID(@PathVariable Integer id){return roomTypeService.getRoomTypeById(id);}

    @DeleteMapping("/{id}")
    public void deleteRoomType(@PathVariable Integer id){ roomTypeService.deleteRoomType(id);}

    @PutMapping("/{id}")
    public RoomType updateRoomType(@PathVariable Integer id,@RequestBody RoomType roomtype){
        RoomType current = roomTypeService.getRoomTypeById(id);
        if(current==null){
            return null;
        }
        current.setSize(roomtype.getSize());
        current.setLocation(roomtype.getLocation());
        return roomTypeService.createRoomType(current);
    }
}
