package com.hotel.hotelmangementsystem.controllers;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;

import com.hotel.hotelmangementsystem.models.RoomStatus;
import com.hotel.hotelmangementsystem.services.RoomStatusService;

@RestController
@RequestMapping("/api/roomstatus")
public class RoomStatusController {
    @Autowired
    private RoomStatusService roomStatusService;

    @GetMapping("/")
    public List<RoomStatus> getAllRoomStatus() {
        return roomStatusService.getAllRoomStatus();
    }
     
     @GetMapping("/{id}")
     public ResponseEntity<RoomStatus> getRoomStatusById(@PathVariable(value = "id") int roomStatusId) {
         RoomStatus roomStatus = roomStatusService.getRoomStatusById(roomStatusId);
         if (roomStatus == null) {
             return ResponseEntity.notFound().build();
         }
         return ResponseEntity.ok().body(roomStatus);
     }

    @PostMapping("")
    public ResponseEntity createRoomStatus(@RequestBody Map<String,String> roomStatusrequestbody) {
        try {
            RoomStatus roomstatus = new RoomStatus();
        roomstatus.setStatus(roomStatusrequestbody.get("status"));
        roomStatusService.createRoomStatus(roomstatus);
        return new ResponseEntity<>("Room created successfully", HttpStatus.CREATED);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error creating offer: " + e.getMessage());
        }
        
    }

    @PutMapping("/{id}")
    public ResponseEntity<RoomStatus> updateRoomStatus(@PathVariable(value = "id") int roomStatusId, @RequestBody RoomStatus roomStatusDetails) {
        RoomStatus roomStatus = roomStatusService.getRoomStatusById(roomStatusId);
        if (roomStatus == null) {
            return ResponseEntity.notFound().build();
        }
        roomStatus.setStatus(roomStatusDetails.getStatus());
        RoomStatus updatedRoomStatus = roomStatusService.saveRoomStatus(roomStatus);
        return ResponseEntity.ok(updatedRoomStatus);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<RoomStatus> deleteRoomStatus(@PathVariable(value = "id") int roomStatusId) {
        RoomStatus roomStatus = roomStatusService.getRoomStatusById(roomStatusId);
        if (roomStatus == null) {
            return ResponseEntity.notFound().build();
        }
        roomStatusService.deleteRoomStatus(roomStatus);
        return ResponseEntity.ok().build();
    }
}
