package com.hotel.hotelmangementsystem.controllers;

import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.hotelmangementsystem.models.RoomStatus;

@RestController
@RequestMapping("/room-status")
public class RoomStatusController {

    private List<RoomStatus> roomStatusList = new ArrayList<>();

    // GET request to get the status of a room by ID
    @GetMapping("/{id}")
    public RoomStatus getRoomStatus(@PathVariable int id) {
        return roomStatusList.stream()
                .filter(roomStatus -> roomStatus.getId() == id)
                .findFirst()
                .orElse(null);
    }

    // POST request to set the status of a room by ID
    @PostMapping("/{id}")
    public void setRoomStatus(@PathVariable int id, @RequestBody String status) {
        RoomStatus roomStatus = new RoomStatus(id, status);
        roomStatusList.add(roomStatus);
    }

    // DELETE request to remove the status of a room by ID
    @DeleteMapping("/{id}")
    public void deleteRoomStatus(@PathVariable int id) {
        roomStatusList.removeIf(roomStatus -> roomStatus.getId() == id);
    }

    // PUT request to update the status of a room by ID
    @PutMapping("/{id}")
    public void updateRoomStatus(@PathVariable int id, @RequestBody String status) {
        roomStatusList.stream()
                .filter(roomStatus -> roomStatus.getId() == id)
                .findFirst()
                .ifPresent(roomStatus -> roomStatus.setStatus(status));
    }

    // GET request to get all room statuses
    @GetMapping("/")
    public List<RoomStatus> getAllRoomStatus() {
        return roomStatusList;
    }
}
