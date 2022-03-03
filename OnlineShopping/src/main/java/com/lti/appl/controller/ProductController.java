package com.lti.appl.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.appl.beans.Product;
import com.lti.appl.services.ProductServiceImpl;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/product")
public class ProductController {

	@Autowired
	private ProductServiceImpl productServiceImpl;
	
	@GetMapping("/listProduct")
	public List<Product> listAllProduct()
	{
		return productServiceImpl.listAllProduct();
		
	}

	
	@GetMapping("/getProduct/{category}")
	public List<Product> getProduct(@PathVariable(value = "category") String category) {
	return productServiceImpl.getProduct(category);
	}

}
