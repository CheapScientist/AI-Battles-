package com.kob.botrunningsystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BotRunningSystemApplication {
    public static void main(String[] args) {

        SpringApplication.run(BotRunningSystemApplication.class, args);
        System.out.println("Bot Running System Runs Successfully! ");
    }
}