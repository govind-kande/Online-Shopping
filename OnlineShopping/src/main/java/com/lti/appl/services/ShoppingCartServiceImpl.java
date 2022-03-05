package com.lti.appl.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.appl.beans.ShoppingCart;
import com.lti.appl.dao.ShoppingCartDao;


@Service("cartService")
public class ShoppingCartServiceImpl implements ShoppingCartService{

	@Autowired
	ShoppingCartDao dao;

	public ShoppingCartDao getDao() {
		return dao;
	}

	public void setDao(ShoppingCartDao dao) {
		this.dao = dao;
	}


	@Override
	public int addtoShoppingCart(ShoppingCart s) {
		int ID=dao.addtoShoppingCart(s);		
		return ID;
	}

	@Override
	public int deleteProduct(int productId) {
		return dao.deleteProduct(productId);
	}
}
