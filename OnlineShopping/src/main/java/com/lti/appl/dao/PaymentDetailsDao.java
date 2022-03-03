package com.lti.appl.dao;

import java.util.List;

import com.lti.appl.beans.PaymentDetails;
import com.lti.appl.beans.User;
import com.lti.appl.exceptions.CustomEmpException;

public interface PaymentDetailsDao {

	public abstract List<PaymentDetails> listAllPaymentDetails();
	public abstract int addPaymentDetails(PaymentDetails p);
	
	
}


