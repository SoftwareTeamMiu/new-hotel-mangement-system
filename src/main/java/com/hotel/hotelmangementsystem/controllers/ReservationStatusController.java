package com.hotel.hotelmangementsystem.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.hotelmangementsystem.models.ReservationStatus;
import com.hotel.hotelmangementsystem.services.ReservationStatusService;

@RestController
@RequestMapping("")
public class ReservationStatusController {

    @Autowired
    private ReservationStatusService reservationStatusService;

    @GetMapping("api/reservationstatus")
    public List<ReservationStatus> getAllReservationStatus() {
        return reservationStatusService.getAllReservationStatus();
    }

    @GetMapping("api/reservationstatus/{id}")
    public ReservationStatus getReservationStatusById(@PathVariable Integer id) {
        return reservationStatusService.getReservationStatusById(id);
    }

    @PostMapping("manager/api/reservationstatus")
    public ReservationStatus addReservationStatus(@RequestBody ReservationStatus reservationStatus) {
        return reservationStatusService.addReservationStatus(reservationStatus);
    }

    @PutMapping("manager/api/reservationstatus/{id}")
    public ReservationStatus updateReservationStatus(@PathVariable Integer id,
            @RequestBody ReservationStatus reservationStatus) {
        return reservationStatusService.updateReservationStatus(id, reservationStatus);
    }

    @DeleteMapping("manager/api/reservationstatus/{id}")
    public String deleteReservationStatus(@PathVariable Integer id) {
        reservationStatusService.deleteReservationStatus(id);
        return "Reservation status with id " + id + " has been deleted";
    }
}
