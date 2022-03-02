package com.lti.appl.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.appl.beans.PaymentDetails;
import com.lti.appl.beans.User;
import com.lti.appl.exceptions.CustomEmpException;
import com.lti.appl.services.PaymentDetailsServiceImpl;
import com.lti.appl.services.UserServiceImpl;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/payment")
public class PaymentController {


	@Autowired private PaymentDetailsServiceImpl paymentservice;

	//http://localhost:8080/payment/
	@GetMapping("/listAll")
	public List<PaymentDetails> listAllPaymentDetails() {
		return paymentservice.listAllPaymentDetails();

	}

	@PostMapping("/addPayment")
	public void addPaymentDetails(@RequestBody PaymentDetails p){
		paymentservice.addPaymentDetails(p);	
	}
	

}
