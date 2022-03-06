package com.lti.appl.dao;

import java.sql.PreparedStatement;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcOperations;
import org.springframework.stereotype.Repository;

import com.lti.appl.beans.ShippingAddress;
import com.lti.appl.beans.User;
import com.lti.appl.exceptions.CustomEmpException;

@Repository
public class ShippingAddressDaoImpl implements ShippingAddressDao{

	@PersistenceContext
	private EntityManager em;

	@Autowired
	private JdbcOperations jdbcOperations;


	@Override
	public ShippingAddress getUser(int userId) {
		if (userId == 0) {
			// throw 
		}

		Query qry= em.createQuery("select s.emailID from ShippingAddress s WHERE s.userId = '" + userId +"'");
		return (ShippingAddress)qry.getSingleResult();
	}
	
	@Override
	@Transactional
	public int addShippingDetails(ShippingAddress s) {
		em.persist(s);		
		return s.getUserId();
	}
}
