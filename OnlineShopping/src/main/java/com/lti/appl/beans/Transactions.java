package com.lti.appl.beans;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="TRANSACTIONS")
public class Transactions { 
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)	
		
	@Column(name="PAYMENT_ID")
	private int paymentId;
	
	@Column(name="USER_ID")
	private int userId;
	
	@Column(name="PRODUCT_ID")
	private int productId;
	
	@Column(name="AMOUNT")
	private double amount;
	
	@Column(name="PAYMENT_TYPE")
	private String paymentType;
	
	@Column(name="ORDER_DATE")
	private Date orderDate;
	

	public Transactions() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
}
