package com.hotel.hotelmangementsystem.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.hotelmangementsystem.models.Role;
import com.hotel.hotelmangementsystem.models.User;
import com.hotel.hotelmangementsystem.services.RoleService;
import com.hotel.hotelmangementsystem.services.UserService;

import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validation;
import jakarta.validation.Validator;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private RoleService roleService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;


    @PostMapping("/register")
    public ResponseEntity createUser(@RequestBody Map<String, String> body) {
        try {
            User user = new User();
            user.setName(body.get("name"));
            user.setEmail(body.get("email"));
            String password = body.get("password");
            String hashed_password = this.bCryptPasswordEncoder.encode(password);
            user.setPassword(hashed_password);
            Role role = new Role();
            role = roleService.getRoleById(Integer.parseInt(body.get("role_id")));
            user.setRole(role);
            Validator validator = Validation.buildDefaultValidatorFactory()
                    .getValidator();
            Set<ConstraintViolation<User>> violations = validator.validate(user);
            if (!violations.isEmpty()) {
                List<String> errorMessages = new ArrayList<>();
                for (ConstraintViolation<User> violation : violations) {
                    errorMessages.add(violation.getMessage());
                }
                return ResponseEntity.badRequest().body(errorMessages);
            }
            userService.createUser(user);
            return ResponseEntity.ok().body("User created successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
