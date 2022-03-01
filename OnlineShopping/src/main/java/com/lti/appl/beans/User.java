package com.lti.appl.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="USER")
public class User { //FULL_NAME, MAIL_ID, PASSWORD, MOBILE_NUMBER ID
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)	
	
	@Column(name="ID")
	private int Id;
	
	
	@Column(name="FULL_NAME")
	private String fName;
	
	@Column(name="MAIL_ID")
	private String mailId;
	
	@Column(name="PASSWORD")
	private String password;
	
	@Column(name="MOBILE_NUMBER")
	private String mobileNo;

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(int id, String fName, String mailId, String password, String mobileNo) {
		super();
		Id = id;
		this.fName = fName;
		this.mailId = mailId;
		this.password = password;
		this.mobileNo = mobileNo;
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public String getfName() {
		return fName;
	}

	public void setfName(String fName) {
		this.fName = fName;
	}

	public String getMailId() {
		return mailId;
	}

	public void setMailId(String mailId) {
		this.mailId = mailId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

//	@Override
//	public String toString() {
//		return "Register [Id=" + Id + ", fName=" + fName + ", mailId=" + mailId + ", password=" + password
//				+ ", mobileNo=" + mobileNo + "]";
//	}

	
	
	
	
	
	
	
}
