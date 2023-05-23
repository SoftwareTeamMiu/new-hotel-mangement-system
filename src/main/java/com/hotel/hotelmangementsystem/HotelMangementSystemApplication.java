package com.hotel.hotelmangementsystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@SpringBootApplication
@EnableAspectJAutoProxy
public class HotelMangementSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(HotelMangementSystemApplication.class, args);
	}

}
