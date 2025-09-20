package com.klef.fsd.springboot.service;

import java.util.List;

import com.klef.fsd.springboot.model.User;

public interface UserService {
public String adduser(User u);
public List<User> viewallusers();
public String deleteuser(int mid);
}