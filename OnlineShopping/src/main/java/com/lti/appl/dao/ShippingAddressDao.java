package com.lti.appl.dao;

import java.util.List;

import com.lti.appl.beans.ShippingAddress;
import com.lti.appl.beans.User;
import com.lti.appl.exceptions.CustomEmpException;

public interface ShippingAddressDao {
	
	public abstract ShippingAddress getUser(int userId);

	public abstract int addShippingDetails(ShippingAddress s);
}


