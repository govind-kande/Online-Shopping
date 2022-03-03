package com.lti.appl.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.appl.beans.Product;
import com.lti.appl.beans.User;
import com.lti.appl.dao.ProductDao;
import com.lti.appl.dao.UserDao;

@Service("productService")
public class ProductServiceImpl implements ProductService{
	@Autowired
	ProductDao productDao;

	public ProductDao getProductDao() {
		return productDao;
	}

	public void setProductDao(ProductDao productDao)
	{
		this.productDao=productDao;
	}

	@Override
	public List<Product> listAllProduct() {
		List<Product> prolist=productDao.listAllProduct();
		return prolist;
	}

	@Override
	public List<Product> getProduct(String category) {
		
		return productDao.getProduct(category);
	}

}
