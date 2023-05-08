package com.hotel.hotelmangementsystem.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hotel.hotelmangementsystem.models.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer>{
    
}
