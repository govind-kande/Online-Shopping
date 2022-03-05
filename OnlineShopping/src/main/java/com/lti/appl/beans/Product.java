package com.lti.appl.beans;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;



@Entity
@Table(name="PRODUCT")
public class Product {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)	
	@Column(name="PRODUCT_ID")
	private int productId;

	@Column(name="PRODUCT_BRAND")
	private String brand;

	@Column(name="PRODUCT_TYPE")
	private String productType;

	@Column(name="PRICE")
	private double price;

	@Column(name="CATEGORY")
	private String category;

	@Column(name="IMAGE")
	private String image;
	

	public Product(int productId, String brand, String productType, double price, String category, String image) {
		super();
		this.productId = productId;
		this.brand = brand;
		this.productType = productType;
		this.price = price;
		this.category = category;
		this.image = image;
	}

	public String getProductType() {
		return productType;
	}

	public void setProductType(String productType) {
		this.productType = productType;
	}


	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return productId;
	}

	public void setId(int productId) {
		this.productId = productId;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getName() {
		return productType;
	}

	public void setName(String name) {
		this.productType = name;
	}

	public double getPrice() {
		return price;
	}


	public void setPrice(double price) {
		this.price = price;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getImage() {
		return image;
	}


	public void setImage(String image) {
		this.image = image;
	}

	

}
