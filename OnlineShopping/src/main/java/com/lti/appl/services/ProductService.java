package com.lti.appl.services;

import java.util.List;
import com.lti.appl.beans.Product;

public interface ProductService {
	
	public abstract List<Product> listAllProduct();

	public abstract List<Product> getProduct(String category, String productType);
}
