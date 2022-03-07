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

import com.lti.appl.beans.User;
import com.lti.appl.exceptions.CustomEmpException;

@Repository
public class UserDaoImpl implements UserDao{

	@PersistenceContext
	private EntityManager em;

	@Autowired
	private JdbcOperations jdbcOperations;

	@Override
	public List<User> listAllUsers() {
		String sql= "select r from User r";
		Query qry= em.createQuery(sql);
		List<User> regList=qry.getResultList();
		return regList;
	}

	@Override
	@Transactional
	public int addUser(User r) {
		em.persist(r);		
		return r.getId();
	}

	@Override
	public User getUserByMailId(String mailId) throws CustomEmpException {
		if (mailId != null) {
			Query qry= em.createQuery("select r from User r WHERE mail_Id = '" + mailId +"'");
			return (User)qry.getSingleResult();
		}
		else
		{
			throw new CustomEmpException("User does not exist");
		}

		
	}
	@Override
	public User getUserById(int Id) {

		System.out.println("dao ");
		
		User e=em.find(User.class,Id);
		
		return e;
	}
	@Override
	@Transactional
	public String updateUser(String mailId,User usr)  {
		Query qry= em.createQuery("select r.id from User r WHERE mail_Id = '" + mailId +"'");
		int Id=(int)qry.getSingleResult();
		System.out.println(Id);
		User ud=em.find(User.class, Id);
		System.out.println(usr.getfName());
		ud.setfName(usr.getfName());
		ud.setMailId(usr.getMailId());
		ud.setMobileNo(usr.getMobileNo());
		em.merge(ud);
		return usr.getMailId();
			
	}
}
