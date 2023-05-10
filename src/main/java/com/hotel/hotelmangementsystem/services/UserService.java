package com.hotel.hotelmangementsystem.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotel.hotelmangementsystem.models.User;
import com.hotel.hotelmangementsystem.repositories.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User getUserById(String id) {
        return userRepository.findById(id).orElse(null);
    }

    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
    }
}
