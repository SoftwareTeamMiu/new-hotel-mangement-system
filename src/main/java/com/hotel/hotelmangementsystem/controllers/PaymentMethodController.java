package com.hotel.hotelmangementsystem.controllers;

import com.hotel.hotelmangementsystem.models.PaymentMethods;
import com.hotel.hotelmangementsystem.models.RoomType;
import com.hotel.hotelmangementsystem.repositories.PaymentMethodsRepository;
import com.hotel.hotelmangementsystem.services.PaymentMethodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/paymentmethod")
public class PaymentMethodController {

    @Autowired
    private PaymentMethodsService paymentMethodsService;

    @GetMapping("")
    public List<PaymentMethods> getAllPaymentMethods(){return paymentMethodsService.getAllPaymentMethods();}

    @GetMapping("/{id}")
    public PaymentMethods getPaymentMethodByID(@PathVariable Integer id){return paymentMethodsService.getPaymentMethodByID(id);}

    @PostMapping("")
    public PaymentMethods createPaymentMethod(@RequestBody PaymentMethods pm){
        return paymentMethodsService.createPaymentMethod(new PaymentMethods(pm.getId(),pm.getMethod_name(),pm.getMethod_description()));
    }

    @DeleteMapping("/{id}")
    public void deletePaymentMethod(@PathVariable Integer id){ paymentMethodsService.deletePaymentMethod(id);}

    @PutMapping("/{id}")
    public PaymentMethods updatePaymentMethod(@PathVariable Integer id,@RequestBody PaymentMethods pm){
        PaymentMethods current = paymentMethodsService.getPaymentMethodByID(id);
        if(current==null){
            return null;
        }
        current.setMethod_description(pm.getMethod_description());
        current.setMethod_name(pm.getMethod_name());
        return paymentMethodsService.createPaymentMethod(current);
    }
}
