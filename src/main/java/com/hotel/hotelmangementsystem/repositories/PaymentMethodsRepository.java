package com.hotel.hotelmangementsystem.repositories;

import com.hotel.hotelmangementsystem.models.PaymentMethods;
import com.hotel.hotelmangementsystem.models.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentMethodsRepository extends JpaRepository<PaymentMethods, Integer> {

}
