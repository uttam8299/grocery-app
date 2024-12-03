package com.example.web_app.grocery.configuration;

import com.example.web_app.grocery.model.GroceryItem;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

@Configuration
public class Config {
    @Bean
    public static GroceryItem groceryItem(){
        return new GroceryItem();
    }

}
