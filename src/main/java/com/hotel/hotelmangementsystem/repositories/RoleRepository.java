package com.hotel.hotelmangementsystem.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hotel.hotelmangementsystem.models.Role;

public interface RoleRepository extends JpaRepository<Role, Integer>{
    
}
