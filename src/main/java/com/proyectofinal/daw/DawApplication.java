package com.proyectofinal.daw;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.config.BootstrapMode;

/**
 * Main method to run spring server
 */
@SpringBootApplication(scanBasePackages = "com.proyectofinal.daw")
@EnableJpaRepositories(bootstrapMode = BootstrapMode.DEFERRED)
public class DawApplication {

	
	/** 
	 * @param args Main
	 */
	public static void main(String[] args) {
		SpringApplication.run(DawApplication.class, args);
	}

}
