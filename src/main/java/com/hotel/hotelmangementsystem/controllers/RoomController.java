package com.hotel.hotelmangementsystem.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
    public ResponseEntity<String> createRoom(@RequestBody Map<String, String> request_body) {
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

    @GetMapping("")
    public ResponseEntity getAllRooms() {
        try {
            List<Room> rooms = roomServices.getAllRooms();
            return ResponseEntity.ok(rooms);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error getting all rooms: " + e.getMessage());
        }
    }

    @GetMapping("/{roomId}")
    public ResponseEntity getRoomById(@PathVariable int roomId) {
        try {
            Room room = roomServices.getRoomById(roomId);
            return ResponseEntity.ok(room);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error getting room by id: " + e.getMessage());
        }
    }

    @PutMapping("/{roomId}")
    public ResponseEntity updateRoomById(@PathVariable int roomId, @RequestBody Map<String, String> request_body) {
        try {
            Room room = roomServices.getRoomById(roomId);
            if (room != null) {
                if (request_body.get("price") != null) {
                    room.setPrice(Double.parseDouble(request_body.get("price")));
                }
                if (request_body.get("room_type_id") != null) {
                    room.setRoomType(
                            roomTypeService.getRoomTypeById(Integer.parseInt(request_body.get("room_type_id"))));
                }
                if (request_body.get("room_status_id") != null) {
                    room.setRoomStatus(roomStatusService
                            .getRoomStatusById(Integer.parseInt(request_body.get("room_status_id"))));
                }
                if (request_body.get("offer_id") != null) {
                    room.setOffer(offerServices.getOfferById(Integer.parseInt(request_body.get("offer_id"))));
                }
                roomServices.createRoom(room);
                return ResponseEntity.ok("Room updated successfully");
            } else {
                return ResponseEntity.badRequest().body("Room not found");
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error updating room: " + e.getMessage());
        }
    }

    
}
