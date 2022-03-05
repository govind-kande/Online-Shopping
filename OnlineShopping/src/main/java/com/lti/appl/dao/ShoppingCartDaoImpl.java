package com.lti.appl.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcOperations;
import org.springframework.stereotype.Repository;

import com.lti.appl.beans.ShoppingCart;

@Repository
public class ShoppingCartDaoImpl implements ShoppingCartDao{

	@PersistenceContext
	private EntityManager em;

	@Autowired
	private JdbcOperations jdbcOperations;

	@Override
	@Transactional
	public int addtoShoppingCart(ShoppingCart s) {
		em.persist(s);		
		return s.getProductId();
	}
	
	@Override
	@Transactional
	public int deleteProduct(int productId) {
		ShoppingCart s = em.find(ShoppingCart.class, productId);
		em.remove(s);
		return s.getProductId();
	}

}
