package com.hotel.hotelmangementsystem.repositories;

import com.hotel.hotelmangementsystem.models.Activity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActivityRepository extends JpaRepository<Activity, Integer> {
}
