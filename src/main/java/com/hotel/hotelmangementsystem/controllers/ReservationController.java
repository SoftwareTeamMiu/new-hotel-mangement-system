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
import java.util.Map;

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
    public ResponseEntity createReservation(@RequestHeader("Authorization") String token,@RequestBody Map<String, String> request_body) throws ParseException {

//        Reservation reservation = new Reservation();
//        User user = new User();
//        ReservationStatus reservationStatus = new ReservationStatus();
//        PaymentMethods paymentMethods = new PaymentMethods();
//        Room room = new Room();
//        //
//        String start_string_date = request_body.get("reservation_start_date");
//        DateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy");
//        Date start_date = dateFormat.parse(start_string_date);
//        reservation.setStart_date(start_date);
//        //
//        String end_string_date = request_body.get("reservation_start_date");
//        Date end_date = dateFormat.parse(end_string_date);
//        reservation.setStart_date(end_date);
//        //
//        String Userid = jwtService.extractUUID(token.substring(7));
//        user = userService.getUserById(Userid);
//        //
//        int reservationstatusID = Integer.parseInt(request_body.get("reservation_status_id"));
//        reservationStatus = reservationStatusService.getReservationStatusById(reservationstatusID);
//
//        int paymentmethodID = Integer.parseInt(request_body.get("payment_method__id"));
//        paymentMethods = paymentMethodsService.getPaymentMethodByID(paymentmethodID);

        String roomsString = request_body.get("rooms");
        String[] roomsArray = roomsString.split(","); // Assuming the rooms are comma-separated

        ArrayList<Integer> roomsIDs = new ArrayList<>();
        for (String roomId : roomsArray) {
            roomsIDs.add(Integer.parseInt(roomId.trim()));
        }
        return ResponseEntity.ok("test");
    }

}
