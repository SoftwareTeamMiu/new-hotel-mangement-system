package com.hotel.hotelmangementsystem.services;

import com.hotel.hotelmangementsystem.models.PaymentMethods;
import com.hotel.hotelmangementsystem.repositories.PaymentMethodsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentMethodsService {
    @Autowired
    private PaymentMethodsRepository paymentMethodsRepository;

    public List<PaymentMethods> getAllPaymentMethods(){return paymentMethodsRepository.findAll();}

    public PaymentMethods getPaymentMethodByID(Integer id){return paymentMethodsRepository.findById(id).orElse(null);}

    public PaymentMethods createPaymentMethod(PaymentMethods paymentMethods){return paymentMethodsRepository.save(paymentMethods);}

    public void deletePaymentMethod(Integer id){paymentMethodsRepository.deleteById(id);}
}
