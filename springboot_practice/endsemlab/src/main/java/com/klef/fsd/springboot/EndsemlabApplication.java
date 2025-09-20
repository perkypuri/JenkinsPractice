package com.klef.fsd.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class EndsemlabApplication extends SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(EndsemlabApplication.class, args);
		System.out.println("My project running.");	}

}
