package com.lti.appl.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
	private String name;
	
	@Column(name="PRICE")
	private double price;

	@Column(name="CATEGORY")
	private String category;

	
	public Product() {
		super();
	}

	
	
	public Product(int id, String name, double price) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
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
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public Product(int id, String brand, String name, double price, String category) {
		super();
		this.id = id;
		this.brand = brand;
		this.name = name;
		this.price = price;
		this.category = category;
	}

	@Override
	public String toString() {
		return "Product [id=" + id + ", brand=" + brand + ", name=" + name + ", price=" + price + ", category="
				+ category + "]";
	}
	
	
}
