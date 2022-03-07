package com.lti.appl.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.appl.beans.User;
import com.lti.appl.dao.UserDao;
import com.lti.appl.exceptions.CustomEmpException;


@Service("regService")
public class UserServiceImpl implements UserService{

	@Autowired
	UserDao dao;

	public UserDao getDao() {
		return dao;
	}

	public void setDao(UserDao dao) {
		this.dao = dao;
	}

	@Override
	public List<User> listAllUsers() {
		return dao.listAllUsers();
	}

	@Override
	public int addUser(User r) {
		return dao.addUser(r);
	}

	@Override public User getUserByMailId(String mailId) {
		return dao.getUserByMailId(mailId);
	}
	@Override
	public User getUserById(int Id) {
	System.out.println("service ");
	User e=dao.getUserById(Id);
	return e;
	}
	@Override
	public String updateUser(String mailId,User usr) {
	 return dao.updateUser(mailId, usr);	
	}
	
}
