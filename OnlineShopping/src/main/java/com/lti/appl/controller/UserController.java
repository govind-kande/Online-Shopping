package com.lti.appl.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.appl.beans.User;
import com.lti.appl.exceptions.CustomEmpException;
import com.lti.appl.services.UserServiceImpl;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/user")
public class UserController {


	@Autowired private UserServiceImpl userService;

	//http://localhost:8080/register/listAll
	@GetMapping("/listAll")
	public List<User> listAllUsers() {
		return userService.listAllUsers();

	}

	@PostMapping("/register/addUser")
	public void addUser(@RequestBody User r){
		userService.addUser(r);	
	}
	
	//http://localhost:8080/register/getUser/101
	  @GetMapping("/getUserByMailId/{mailId}") 
	  public User getUserByMailId(@PathVariable(value = "mailId") String mailId) { 
		  return userService.getUserByMailId(mailId);
	  }

}
