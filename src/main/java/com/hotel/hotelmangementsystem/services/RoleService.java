package com.hotel.hotelmangementsystem.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotel.hotelmangementsystem.models.Role;
import com.hotel.hotelmangementsystem.repositories.RoleRepository;

@Service
public class RoleService {

    @Autowired
    private RoleRepository roleRepository;

    public List<Role> getAllRoles() {
        return roleRepository.findAll();
    }

    public Role createRole(Role role) {
        return roleRepository.save(role);
    }

    public Role getRoleById(int id) {
        return roleRepository.findById(id).orElse(null);
    }

    public String deleteRole(int id) {
        roleRepository.deleteById(id);
        return "Role with id " + id + " deleted";
    }
}
