package com.lti.appl.services;

import java.util.List;

import com.lti.appl.beans.ShoppingCart;
import com.lti.appl.beans.User;
import com.lti.appl.exceptions.CustomEmpException;

public interface ShoppingCartService {
	
	public abstract int addtoShoppingCart(ShoppingCart s);

	public abstract int deleteProduct(int productId);
}
