package com.hotel.hotelmangementsystem.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.hotelmangementsystem.models.Role;
import com.hotel.hotelmangementsystem.models.User;
import com.hotel.hotelmangementsystem.services.JwtService;
import com.hotel.hotelmangementsystem.services.RoleService;
import com.hotel.hotelmangementsystem.services.UserService;

import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validation;
import jakarta.validation.Validator;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private RoleService roleService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private JwtService jwtService;

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

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody Map<String, String> body) {
        try {
            String email = body.get("email");
            User user = this.userService.findUserByEmail(email);
            if (user == null) {
                return new ResponseEntity<>("User Not found", HttpStatus.NOT_FOUND);
            }
            String password = body.get("password");
            String hashed_password = user.getPassword();
            boolean isPasswordMatched = this.bCryptPasswordEncoder.matches(password, hashed_password);
            if (!isPasswordMatched) {
                return new ResponseEntity<>("User Not found", HttpStatus.NOT_FOUND);
            }
            String token = this.jwtService.generateToken(user.getId());
            Map<String, String> res = new HashMap<String, String>();
            res.put("token", token);

            return ResponseEntity.ok().body(res);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
