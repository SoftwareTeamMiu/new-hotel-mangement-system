package com.hotel.hotelmangementsystem.repositories;
import com.hotel.hotelmangementsystem.models.RoomType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomTypeRepository extends JpaRepository<RoomType, Integer> {
}
