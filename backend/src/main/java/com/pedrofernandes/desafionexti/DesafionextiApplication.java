package com.pedrofernandes.desafionexti;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"com.pedrofernandes.desafionexti.service.mapper"})
public class DesafionextiApplication {

    public static void main(String[] args) {
        SpringApplication.run(DesafionextiApplication.class, args);
    }

}
