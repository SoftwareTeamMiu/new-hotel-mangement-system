package com.hotel.hotelmangementsystem.controllers;

import com.hotel.hotelmangementsystem.models.*;
import com.hotel.hotelmangementsystem.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpHeaders;

@RestController
@RequestMapping("/api/reservation")
public class ReservationController {

    @Autowired
    ReservationService reservationService;

    @Autowired
    RoomServices roomServices;

    @Autowired
    UserService userService;

    @Autowired
    PaymentMethodsService paymentMethodsService;

    @Autowired
    ReservationStatusService reservationStatusService;

    @Autowired
    JwtService jwtService;

    @PostMapping("")
    public ResponseEntity createReservation(HttpServletRequest request, @RequestBody Map<String, Object> request_body) {
        try {
            Reservation reservation = new Reservation();
            User user = new User();
            ReservationStatus reservationStatus = new ReservationStatus();
            PaymentMethods paymentMethods = new PaymentMethods();
            List<Room> rooms = new ArrayList<Room>();
            double total_price = 0;
            //
            String start_string_date = (String) request_body.get("reservation_start_date");
            DateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy");
            Date start_date = dateFormat.parse(start_string_date);
            reservation.setStart_date(start_date);
            //
            String end_string_date = (String) request_body.get("reservation_end_date");
            Date end_date = dateFormat.parse(end_string_date);
            reservation.setStart_date(end_date);
            //
            String token = (request.getHeader(HttpHeaders.AUTHORIZATION)).substring(7);
            String Userid = jwtService.extractUUID(token);
            user = userService.getUserById(Userid);
            //
            int reservationstatusID = (Integer) request_body.get("reservation_status_id");
            reservationStatus = reservationStatusService.getReservationStatusById(reservationstatusID);
            //
            int paymentmethodID = (Integer) request_body.get("payment_method__id");
            paymentMethods = paymentMethodsService.getPaymentMethodByID(paymentmethodID);

            List<Integer> room_ids = (List<Integer>) request_body.get("rooms");
            for (int i = 0; i < room_ids.size(); i++) {
                Room room = new Room();
                room = roomServices.getRoomById(room_ids.get(i));
                rooms.add(room);
            }
            for (int i = 0; i < rooms.size(); i++) {
                if (rooms.get(i).getOffer() != null) {
                    double room_price = rooms.get(i).getOffer().getPercentage() * rooms.get(i).getPrice();
                    total_price += room_price;
                } else {
                    total_price += rooms.get(i).getPrice();
                }
            }

            reservation.setStart_date(start_date);
            reservation.setEnd_date(end_date);
            reservation.setCustomer(user);
            reservation.setRooms(rooms);
            reservation.setPaymentMethods(paymentMethods);
            reservation.setReservationStatus(reservationStatus);
            reservation.setTotal_price(total_price);

            reservationService.createReservation(reservation);

            return ResponseEntity.ok().body("Reservation Created Successfully");

        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error Creating Reservation," + e.getMessage());
        }
    }

    @GetMapping("")
    public ResponseEntity getAllReservations() {
        try {
            List<Reservation> reservations = reservationService.getAllReservations();
            return ResponseEntity.ok(reservations);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error getting reservations: " + e.getMessage());
        }
    }

    @GetMapping("/{reservationID}")
    public ResponseEntity getReservationById(@PathVariable int reservationID) {
        try {
            Reservation reservation = reservationService.getReservationByID(reservationID);
            return ResponseEntity.ok(reservation);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error getting reservation by id: " + e.getMessage());
        }
    }

    // @DeleteMapping("/{reservationID}")
    // public ResponseEntity deleteReservationByID(@PathVariable int reservationId){
    // try{
    // Reservation reservation =
    // reservationService.getReservationByID(reservationId);
    // if(reservation != null){
    //
    // }
    // }
    // }
}
