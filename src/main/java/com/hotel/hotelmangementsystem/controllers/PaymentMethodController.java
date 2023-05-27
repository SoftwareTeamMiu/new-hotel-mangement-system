package com.hotel.hotelmangementsystem.controllers;

import com.hotel.hotelmangementsystem.models.PaymentMethods;
import com.hotel.hotelmangementsystem.services.PaymentMethodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("")
public class PaymentMethodController {

    @Autowired
    private PaymentMethodsService paymentMethodsService;

    @GetMapping("api/paymentmethod")
    public List<PaymentMethods> getAllPaymentMethods(){return paymentMethodsService.getAllPaymentMethods();}

    @GetMapping("api/paymentmethod/{id}")
    public PaymentMethods getPaymentMethodByID(@PathVariable Integer id){return paymentMethodsService.getPaymentMethodByID(id);}

    @PostMapping("manager/api/paymentmethod")
    public PaymentMethods createPaymentMethod(@RequestBody PaymentMethods pm){
        return paymentMethodsService.createPaymentMethod(new PaymentMethods(pm.getId(),pm.getMethod_name(),pm.getMethod_description()));
    }

    @DeleteMapping("manager/api/paymentmethod/{id}")
    public void deletePaymentMethod(@PathVariable Integer id){ paymentMethodsService.deletePaymentMethod(id);}

    @PutMapping("manager/api/paymentmethod/{id}")
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
