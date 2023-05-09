package com.hotel.hotelmangementsystem.repositories;

import com.hotel.hotelmangementsystem.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
}
