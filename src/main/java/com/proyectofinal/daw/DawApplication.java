package com.proyectofinal.daw;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Main method to run spring server
 */
@SpringBootApplication(scanBasePackages = "com.proyectofinal.daw")
public class DawApplication {

	
	/** 
	 * @param args Main
	 */
	public static void main(String[] args) {
		SpringApplication.run(DawApplication.class, args);
	}

}
