package com.lti.appl.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcOperations;
import org.springframework.stereotype.Repository;

import com.lti.appl.beans.Product;
import com.lti.appl.beans.User;
import com.lti.appl.exceptions.CustomEmpException;

@Repository
public class ProductDaoImpl implements ProductDao{
	@PersistenceContext
	private EntityManager em;

	@Autowired
	private JdbcOperations jdbcOperations;
	
	@Override
	public List<Product> listAllProduct() {
		String sql= "select p from Product p";
		Query qry= em.createQuery(sql);
		List<Product> product=qry.getResultList();
		return product;
	}


	@Override
	public List<Product> getProduct(String category, String productType) throws CustomEmpException {
		if (category != null) {
			Query qry= em.createQuery("select p from Product p WHERE category = '" + category +"' and productType = '" + productType +"'");
			List<Product> product=qry.getResultList();
			return product;
		}
		else{
			throw new CustomEmpException("Invalid product");
		}

		

	}
}
