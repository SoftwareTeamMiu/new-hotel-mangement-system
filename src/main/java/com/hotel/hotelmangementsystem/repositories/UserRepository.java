package com.hotel.hotelmangementsystem.repositories;

import com.hotel.hotelmangementsystem.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
}
