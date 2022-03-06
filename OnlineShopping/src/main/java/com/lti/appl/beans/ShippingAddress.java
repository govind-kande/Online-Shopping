package com.lti.appl.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="SHIPPING_ADDRESS")
public class ShippingAddress { //FULL_NAME, MAIL_ID, PASSWORD, MOBILE_NUMBER ID
	
	@Id
	//@GeneratedValue(strategy=GenerationType.IDENTITY)	
	
	@Column(name="USER_ID")
	private int userId;
	
	
	@Column(name="FNAME")
	private String fName;
	
	@Column(name="LNAME")
	private String lName;
	
	@Column(name="ADDRESS")
	private String address;
	
	@Column(name="STATE")
	private String state;
	
	@Column(name="CITY")
	private String city;
	
	@Column(name="ZIP")
	private int zip;
	
	@Column(name="EMAILID")
	private String emailID;
	
	@Column(name="MOBILE_NO")
	private String mobileNo;

	public ShippingAddress() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	public ShippingAddress(int userId, String fName, String lName, String address, String state, String city, int zip,
			String emailID, String mobileNo) {
		super();
		this.userId = userId;
		this.fName = fName;
		this.lName = lName;
		this.address = address;
		this.state = state;
		this.city = city;
		this.zip = zip;
		this.emailID = emailID;
		this.mobileNo = mobileNo;
	}



	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getfName() {
		return fName;
	}

	public void setfName(String fName) {
		this.fName = fName;
	}

	public String getlName() {
		return lName;
	}

	public void setlName(String lName) {
		this.lName = lName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public int getZip() {
		return zip;
	}

	public void setZip(int zip) {
		this.zip = zip;
	}

	public String getEmailID() {
		return emailID;
	}

	public void setEmailID(String emailID) {
		this.emailID = emailID;
	}

	public String getMobileNo() {
		return mobileNo;
	}


	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	
	

	
	
	
	
	
	
	
}
