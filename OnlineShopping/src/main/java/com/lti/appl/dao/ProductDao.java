package com.lti.appl.dao;

import java.util.List;

import com.lti.appl.beans.Product;
import com.lti.appl.exceptions.CustomEmpException;

public interface ProductDao {

	public abstract List<Product> listAllProduct();
	

	public abstract List<Product> getProduct(String category, String productType) throws CustomEmpException;
	

}
