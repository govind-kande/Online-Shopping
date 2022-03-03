package com.lti.appl.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="PAYMENT_DETAILS")
public class PaymentDetails { //ID INT PAYMENT_ID AMOUNT PAYMENT_TYPE ORDER_DATE PRODUCT_ID 
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)	
		
	@Column(name="ID")
	private int Id;
	
	@Column(name="PAYMENT_ID")
	private String paymentId;
	
	@Column(name="AMOUNT")
	private double amount;
	
	@Column(name="PAYMENT_TYPE")
	private String paymentType;
	
	@Column(name="ORDER_DATE")
	private String orderDate;
	
	@Column(name="PRODUCT_ID")
	private int productId;

	public PaymentDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PaymentDetails(int id, String paymentId, double amount, String paymentType, String orderDate,
			int productId) {
		super();
		Id = id;
		this.paymentId = paymentId;
		this.amount = amount;
		this.paymentType = paymentType;
		this.orderDate = orderDate;
		this.productId = productId;
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public String getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(String paymentId) {
		this.paymentId = paymentId;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getPaymentType() {
		return paymentType;
	}

	public void setPaymentType(String paymentType) {
		this.paymentType = paymentType;
	}

	public String getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(String orderDate) {
		this.orderDate = orderDate;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}
	
	
	
	

	
	
	
	
	
	
	
	
}
