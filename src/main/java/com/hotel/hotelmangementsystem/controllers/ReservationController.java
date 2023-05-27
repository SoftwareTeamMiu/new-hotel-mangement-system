package com.hotel.hotelmangementsystem.controllers;

import com.hotel.hotelmangementsystem.models.*;
import com.hotel.hotelmangementsystem.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Map;
import jakarta.servlet.http.HttpServletRequest;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;

@RestController
@RequestMapping("")
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
    DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

    @Autowired
    private RestTemplate restTemplate;

    String reservation_base_url = "http://localhost:9090/api/reservation";

    @PostMapping("api/reservation")
    public ResponseEntity createReservation(HttpServletRequest request, @RequestBody Map<String, Object> request_body) {
        try {
            HttpHeaders headers = new HttpHeaders();
            String token = request.getHeader(HttpHeaders.AUTHORIZATION);
            headers.set(HttpHeaders.AUTHORIZATION, token);
            HttpEntity<Map<String, Object>> entity = new HttpEntity<>(request_body, headers);

            ResponseEntity<String> response = restTemplate.exchange(reservation_base_url, HttpMethod.POST, entity,
                    String.class);
            if (response.getStatusCode().is2xxSuccessful()) {
                return ResponseEntity.ok().body("Reservation Created Successfully");
            } else {
                return ResponseEntity.badRequest().body("Error Creating Reservation: " + response);
            }

        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error Creating Reservation," + e.getMessage());
        }
    }

    @GetMapping("api/reservation")
    public ResponseEntity getAllReservations(HttpServletRequest request) {
        try {
            HttpHeaders headers = new HttpHeaders();
            String token = request.getHeader(HttpHeaders.AUTHORIZATION);
            headers.set(HttpHeaders.AUTHORIZATION, token);
            HttpEntity<?> entity = new HttpEntity<>(headers);
            ResponseEntity<List> response = restTemplate.exchange(reservation_base_url, HttpMethod.GET,
                    entity,
                    new ParameterizedTypeReference<List>() {
                    });
            if (response.getStatusCode().is2xxSuccessful()) {
                List<Reservation> reservations = response.getBody();
                return ResponseEntity.ok(reservations);
            } else {
                return ResponseEntity.badRequest().body("Error getting reservations: " + response);
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error getting reservations: " + e.getMessage());
        }
    }

    @GetMapping("api/reservation/{userId}")
    public ResponseEntity<?> getReservationById(@PathVariable Long userId, HttpServletRequest request) {
        try {
            String token = request.getHeader(HttpHeaders.AUTHORIZATION);
            HttpHeaders headers = new HttpHeaders();
            headers.set(HttpHeaders.AUTHORIZATION, token);
            HttpEntity<?> entity = new HttpEntity<>(headers);

            ResponseEntity<List> response = restTemplate.exchange(
                    reservation_base_url + "/" + userId,
                    HttpMethod.GET,
                    entity,
                    new ParameterizedTypeReference<List>() {
                    });
            if (response.getStatusCode().is2xxSuccessful()) {
                List<Reservation> reservations = response.getBody();
                return ResponseEntity.ok(reservations);
            } else {
                return ResponseEntity.badRequest().body("Error getting reservations: " + response.getBody());
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error getting reservations: " + e.getMessage());
        }
    }

    @DeleteMapping("api/reservation/{reservationID}")
    public ResponseEntity deleteReservationByID(@PathVariable int reservationID, HttpServletRequest request) {
        try {
            HttpHeaders headers = new HttpHeaders();
            String token = request.getHeader(HttpHeaders.AUTHORIZATION);
            headers.set(HttpHeaders.AUTHORIZATION, token);
            HttpEntity<?> entity = new HttpEntity<>(headers);

            String url = reservation_base_url + "/" + reservationID;

            ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.DELETE, entity, String.class);

            if (response.getStatusCode().is2xxSuccessful()) {
                return ResponseEntity.ok("Reservation deleted successfully");
            } else {
                return ResponseEntity.badRequest().body("Error deleting Reservation: " + response.getBody());
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error deleting Reservation: " + e.getMessage());
        }
    }

    @PutMapping("api/reservation/{ReservationID}")
    public ResponseEntity updateReservationID(@PathVariable int ReservationID,
            @RequestBody Map<String, Object> request_body, HttpServletRequest request) {
        try {
            HttpHeaders headers = new HttpHeaders();
            String token = request.getHeader(HttpHeaders.AUTHORIZATION);
            headers.set(HttpHeaders.AUTHORIZATION, token);
            HttpEntity<Map<String, Object>> entity = new HttpEntity<>(request_body, headers);

            String url = reservation_base_url + "/" + ReservationID;

            ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.PUT, entity, String.class);

            if (response.getStatusCode().is2xxSuccessful()) {
                return ResponseEntity.ok("Reservation updated successfully!");
            } else {
                return ResponseEntity.badRequest().body("Error updating Reservation: " + response.getBody());
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error updating Reservation: " + e.getMessage());
        }
    }

    @GetMapping("api/reservation/user")
    public ResponseEntity getAllReservationsByUser(HttpServletRequest request) {
        try {
            String token = request.getHeader(HttpHeaders.AUTHORIZATION);
            HttpHeaders headers = new HttpHeaders();
            headers.set(HttpHeaders.AUTHORIZATION, token);
            HttpEntity<?> entity = new HttpEntity<>(headers);

            ResponseEntity<List> response = restTemplate.exchange(
                    reservation_base_url + "/user",
                    HttpMethod.GET,
                    entity,
                    new ParameterizedTypeReference<List>() {
                    });
            if (response.getStatusCode().is2xxSuccessful()) {
                List<Reservation> reservations = response.getBody();
                return ResponseEntity.ok(reservations);
            } else {
                return ResponseEntity.badRequest().body("Error getting reservations: " + response.getBody());
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error getting reservations: " + e.getMessage());
        }
    }

}
