package com.lti.appl.beans;

import java.util.List;

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
@Table(name="SHOPPING_CART")
public class ShoppingCart {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)	
	
	@Column(name="CART_ID")
	private int cartId;
	
	@Column(name="PRODUCT_ID")
	private int productId;
	
	@Column(name="ID")
	private int Id;
	
	@OneToMany(cascade=CascadeType.ALL,fetch=FetchType.LAZY)
	@JoinColumn(name="PRODUCT_ID")
	private List<Product> prodList;;

	public ShoppingCart() {
		super();
		// TODO Auto-generated constructor stub
	}


	public ShoppingCart(int cartId, int productId, int id) {
		super();
		this.cartId = cartId;
		this.productId = productId;
		this.Id = id;
	}



	public int getCartId() {
		return cartId;
	}

	public void setCartId(int cartId) {
		this.cartId = cartId;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		this.Id = id;
	}
	
	
}
