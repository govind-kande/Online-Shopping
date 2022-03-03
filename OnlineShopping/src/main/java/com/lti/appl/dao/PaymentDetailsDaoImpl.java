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

import com.lti.appl.beans.PaymentDetails;
import com.lti.appl.beans.User;
import com.lti.appl.exceptions.CustomEmpException;

@Repository
public class PaymentDetailsDaoImpl implements PaymentDetailsDao{

	@PersistenceContext
	private EntityManager em;

	@Autowired
	private JdbcOperations jdbcOperations;

	@Override
	public List<PaymentDetails> listAllPaymentDetails() {
		String sql= "select p from PaymentDetails p";
		Query qry= em.createQuery(sql);
		List<PaymentDetails> payList=qry.getResultList();
		return payList;
	}

	@Override
	@Transactional
	public int addPaymentDetails(PaymentDetails p) {
		em.persist(p);		
		return p.getId();
	}

}
