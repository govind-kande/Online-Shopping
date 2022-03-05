package com.lti.appl.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.appl.beans.ShoppingCart;
import com.lti.appl.services.ShoppingCartServiceImpl;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/shopping")
public class ShoppingCartController {


	@Autowired private ShoppingCartServiceImpl shoppingCartService;


	@PostMapping("/addtoShoppingCart/{productId}")
	public void addtoShoppingCart(@RequestBody ShoppingCart s){
		shoppingCartService.addtoShoppingCart(s);	
	}
	
	@DeleteMapping("/deleteProduct/{productId}")
	public int deleteProduct(@PathVariable("productId") int productId)
	{
		return shoppingCartService.deleteProduct(productId);
	}

}
