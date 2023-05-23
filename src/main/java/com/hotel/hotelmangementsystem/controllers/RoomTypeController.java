package com.hotel.hotelmangementsystem.controllers;

import com.hotel.hotelmangementsystem.models.RoomType;
import com.hotel.hotelmangementsystem.services.RoomTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/roomtype")
public class RoomTypeController {

    @Autowired
    private RoomTypeService roomTypeService;

    @GetMapping("/")
    public List<RoomType> getAllRoomTypes() {
        return roomTypeService.getAllRoomTypes();
    }

    @PostMapping("/")
    public RoomType CreateRoomType(@RequestBody RoomType rt) {
        return roomTypeService.createRoomType(new RoomType(rt.getId(), rt.getSize(), rt.getLocation()));
    }

    @GetMapping("/{id}")
    public RoomType getRoomTypeByID(@PathVariable Integer id) {
        return roomTypeService.getRoomTypeById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteRoomType(@PathVariable Integer id) {
        roomTypeService.deleteRoomType(id);
    }

    @PutMapping("/{id}")
    public RoomType updateRoomType(@PathVariable Integer id, @RequestBody RoomType roomtype) {
        RoomType current = roomTypeService.getRoomTypeById(id);
        if (current == null) {
            return null;
        }
        current.setSize(roomtype.getSize());
        current.setLocation(roomtype.getLocation());
        return roomTypeService.createRoomType(current);
    }

    @GetMapping("/filters")
    public ResponseEntity getRoomTypeFilters() {
        try {
            List<Integer> roomTypesSizes = roomTypeService.getRoomTypesSizes();
            List<Integer> roomTypesLocations = roomTypeService.getRoomTypesLocations();
            Map<String, Object> response = Map.of("sizes", roomTypesSizes, "locations", roomTypesLocations);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("error getting room types filters" + e.getMessage());
        }
    }
}
