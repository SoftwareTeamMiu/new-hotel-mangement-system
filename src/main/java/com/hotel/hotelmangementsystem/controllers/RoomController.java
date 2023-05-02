package com.hotel.hotelmangementsystem.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.hotelmangementsystem.models.Room;
import com.hotel.hotelmangementsystem.services.OfferServices;
import com.hotel.hotelmangementsystem.services.RoomServices;
import com.hotel.hotelmangementsystem.services.RoomStatusService;
import com.hotel.hotelmangementsystem.services.RoomTypeService;

@RestController
@RequestMapping("/api/room")
public class RoomController {
    @Autowired
    private RoomServices roomServices;
    @Autowired
    private RoomTypeService roomTypeService;
    @Autowired
    private RoomStatusService roomStatusService;
    @Autowired
    private OfferServices offerServices;

    @PostMapping("")
    public ResponseEntity createRoom(@RequestBody Map<String, String> request_body) {
        Room new_room = new Room();
        try {
            new_room.setPrice(Double.parseDouble(request_body.get("price")));
            new_room.setRoomType(roomTypeService.getRoomTypeById(Integer.parseInt(request_body.get("room_type_id"))));
            new_room.setRoomStatus(
                    roomStatusService.getRoomStatusById(Integer.parseInt(request_body.get("room_status_id"))));
            if (request_body.get("offer_id") != null) {
                new_room.setOffer(offerServices.getOfferById(Integer.parseInt(request_body.get("offer_id"))));
            }
            roomServices.createRoom(new_room);
            return ResponseEntity.ok("Room created successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error creating room: " + e.getMessage());
        }
    }
}
