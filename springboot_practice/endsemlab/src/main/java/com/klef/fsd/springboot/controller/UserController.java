package com.klef.fsd.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.klef.fsd.springboot.model.User;
import com.klef.fsd.springboot.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
	@Autowired
 private UserService service;
	
 @GetMapping("/")
 public String Home()
 {
	 return "Home Page";
 }
 @PostMapping("/adduser")
 public ResponseEntity<String> adduser(@RequestBody User user)
 {
	   try
	   {
		  String output =service.adduser(user);
		  return ResponseEntity.ok(output); 
	   }
	   catch(Exception e)
	   {
		   return ResponseEntity.status(500).body("Failed to Add user ... !!"); 
	   }
 }
 @GetMapping("/viewall")
 public List<User> viewallmentors()
 {
		return service.viewallusers();
 }
 @DeleteMapping("/delete/{mid}")
 public String deletementor(@PathVariable int mid)
 {
	 return service.deleteuser(mid);
 }
}