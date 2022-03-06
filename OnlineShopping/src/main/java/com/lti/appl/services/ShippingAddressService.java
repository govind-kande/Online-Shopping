package com.lti.appl.services;

import java.util.List;

import com.lti.appl.beans.ShippingAddress;
import com.lti.appl.beans.User;
import com.lti.appl.exceptions.CustomEmpException;

public interface ShippingAddressService {
	
	public abstract ShippingAddress getUser(int userId);
	public abstract int addShippingDetails(ShippingAddress s);
}
