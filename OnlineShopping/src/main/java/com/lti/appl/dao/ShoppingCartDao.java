package com.lti.appl.dao;

import com.lti.appl.beans.ShoppingCart;

public interface ShoppingCartDao {
	
	public abstract int addtoShoppingCart(ShoppingCart s);

	public abstract int deleteProduct(int productId);

}


