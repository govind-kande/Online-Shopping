package com.lti.appl.dao;

import java.util.List;

import com.lti.appl.beans.User;
import com.lti.appl.exceptions.CustomEmpException;

public interface UserDao {
	
	public abstract List<User> listAllUsers();
	public abstract int addUser(User r);
	public abstract User getUserByMailId(String mailId);
	public abstract User getUserById( int Id);
	public abstract String updateUser(String mailId, User u);
}


