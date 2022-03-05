package com.lti.appl.beans;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;



@Entity
@Table(name="PRODUCT")
public class Product {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)	
	@Column(name="PRODUCT_ID")

	private int id;

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
	
	@ManyToOne(cascade=CascadeType.ALL,fetch=FetchType.LAZY)
	@JoinColumn(name="PRODUCT_ID")
	private ShoppingCart shoppingcart;


	public Product(int id, String brand, String productType, double price, String category, String image,
			ShoppingCart shoppingcart) {
		super();
		this.id = id;
		this.brand = brand;
		this.productType = productType;
		this.price = price;
		this.category = category;
		this.image = image;
		this.shoppingcart = shoppingcart;
	}

	public String getProductType() {
		return productType;
	}

	public void setProductType(String productType) {
		this.productType = productType;
	}

	public ShoppingCart getShoppingcart() {
		return shoppingcart;
	}

	public void setShoppingcart(ShoppingCart shoppincart) {
		this.shoppingcart = shoppincart;
	}

	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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
