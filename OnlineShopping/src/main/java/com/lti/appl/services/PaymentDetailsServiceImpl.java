package com.lti.appl.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.appl.beans.PaymentDetails;
import com.lti.appl.beans.User;
import com.lti.appl.dao.PaymentDetailsDao;
import com.lti.appl.dao.UserDao;
import com.lti.appl.exceptions.CustomEmpException;


@Service("payService")
public class PaymentDetailsServiceImpl implements PaymentDetailsService{

	@Autowired
	PaymentDetailsDao dao;

	public PaymentDetailsDao getDao() {
		return dao;
	}


	public void setDao(PaymentDetailsDao dao) {
		this.dao = dao;
	}

	@Override
	public List<PaymentDetails> listAllPaymentDetails() {
		List<PaymentDetails> payList=dao.listAllPaymentDetails();
		return payList;
	}

	@Override
	public int addPaymentDetails(PaymentDetails p) {
		int ID=dao.addPaymentDetails(p);		
		return ID;
	}


}
