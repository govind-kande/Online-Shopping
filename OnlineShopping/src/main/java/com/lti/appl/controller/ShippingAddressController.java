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

import com.lti.appl.beans.ShippingAddress;
import com.lti.appl.beans.User;
import com.lti.appl.exceptions.CustomEmpException;
import com.lti.appl.services.ShippingAddressServiceImpl;
import com.lti.appl.services.UserServiceImpl;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/shippingaddress")
public class ShippingAddressController {


	@Autowired private ShippingAddressServiceImpl shipAddressService;

	//http://localhost:8080/register/getUser/101
	  @GetMapping("/getUser/{userId}") 
	  public ShippingAddress getUser(@PathVariable(value = "userId") int userId) { 
		  return shipAddressService.getUser(userId);
	  }

	  @PostMapping("/addShippingDetails")
		public void addShippingDetails(@RequestBody ShippingAddress s){
		  shipAddressService.addShippingDetails(s);	
		}
}
