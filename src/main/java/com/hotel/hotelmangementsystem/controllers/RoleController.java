package com.hotel.hotelmangementsystem.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;

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

import com.hotel.hotelmangementsystem.models.Role;
import com.hotel.hotelmangementsystem.services.RoleService;

import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validation;
import jakarta.validation.Validator;

@RestController
@RequestMapping("manager/api/role")
public class RoleController {
    @Autowired
    private RoleService roleService;

    // Get all roles
    @GetMapping("")
    public ResponseEntity getAllRoles() {
        try {
            List<Role> roles = roleService.getAllRoles();
            return ResponseEntity.ok(roles);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error getting all roles: " + e.getMessage());
        }
    }

    // Get a role by id
    @GetMapping("/{id}")
    public ResponseEntity getRoleById(@PathVariable int id) {
        try {
            Role role = roleService.getRoleById(id);
            if (role == null) {
                return ResponseEntity.badRequest().body("Role with id " + id + " not found");
            }
            return ResponseEntity.ok(role);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error getting role: " + e.getMessage());
        }
    }

    // Create a role
    @PostMapping("")
    public ResponseEntity createRole(@RequestBody Map<String, String> body) {
        try {
            Role newRole = new Role();
            newRole.setroleTitle(body.get("roleTitle"));
            // Perform validation using javax.validation.Validator
            Validator validator = Validation.buildDefaultValidatorFactory()
                    .getValidator();
            Set<ConstraintViolation<Role>> violations = validator.validate(newRole);
            if (!violations.isEmpty()) {
                List<String> errorMessages = new ArrayList<>();
                for (ConstraintViolation<Role> violation : violations) {
                    errorMessages.add(violation.getMessage());
                }
                return ResponseEntity.badRequest().body(errorMessages);
            }
            newRole = roleService.createRole(newRole);
            return ResponseEntity.ok(newRole);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error creating role: " + e.getMessage());
        }
    }

    // Update a role
    @PutMapping("/{id}")
    public ResponseEntity updateRole(@PathVariable int id, @RequestBody Map<String, String> body) {
        try {
            Role role = roleService.getRoleById(id);
            if (role == null) {
                return ResponseEntity.badRequest().body("Role with id " + id + " not found");
            }
            role.setroleTitle(body.get("roleTitle"));
            // Perform validation using javax.validation.Validator
            Validator validator = Validation.buildDefaultValidatorFactory()
                    .getValidator();
            Set<ConstraintViolation<Role>> violations = validator.validate(role);

            if (!violations.isEmpty()) {
                List<String> errorMessages = new ArrayList<>();
                for (ConstraintViolation<Role> violation : violations) {
                    errorMessages.add(violation.getMessage());
                }
                return ResponseEntity.badRequest().body(errorMessages);
            }
            role = roleService.createRole(role);
            return ResponseEntity.ok(role);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error updating role: " + e.getMessage());
        }
    }

    // Delete a role
    @DeleteMapping("/{id}")
    public ResponseEntity deleteRole(@PathVariable int id) {
        try {
            Role role = roleService.getRoleById(id);
            if (role == null) {
                return ResponseEntity.badRequest().body("Role with id " + id + " not found");
            }
            roleService.deleteRole(role.getId());
            return ResponseEntity.ok("Role with id " + id + " deleted");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error deleting role: " + e.getMessage());
        }
    }

}
