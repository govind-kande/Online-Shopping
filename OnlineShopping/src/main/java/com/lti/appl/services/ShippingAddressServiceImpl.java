package com.lti.appl.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.appl.beans.ShippingAddress;
import com.lti.appl.beans.User;
import com.lti.appl.dao.ShippingAddressDao;
import com.lti.appl.dao.UserDao;
import com.lti.appl.exceptions.CustomEmpException;


@Service("shippingService")
public class ShippingAddressServiceImpl implements ShippingAddressService{

	@Autowired
	ShippingAddressDao dao;

	public ShippingAddressDao getDao() {
		return dao;
	}

	public void setDao(ShippingAddressDao dao) {
		this.dao = dao;
	}


	@Override public ShippingAddress getUser(int userId) {
		return dao.getUser(userId);
	}

	public int addShippingDetails(ShippingAddress s) {
		int ID=dao.addShippingDetails(s);		
		return ID;
		
	}

}
