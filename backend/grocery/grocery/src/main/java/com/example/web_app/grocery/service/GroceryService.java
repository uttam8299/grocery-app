package com.example.web_app.grocery.service;

import com.example.web_app.grocery.configuration.Config;
import com.example.web_app.grocery.dto.GroceryItemDto;
import com.example.web_app.grocery.model.GroceryItem;
import com.example.web_app.grocery.repository.GroceryRepository;
import org.hibernate.id.Configurable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GroceryService {

    @Autowired
    Config config;
    private GroceryRepository groceryRepository;
    private GroceryService(GroceryRepository groceryRepository) {
        this.groceryRepository = groceryRepository;
    }

    public GroceryItem addItem(GroceryItemDto groceryItemDto) {
        GroceryItem groceryItem = new GroceryItem();
        groceryItem.setItemName(groceryItemDto.getItemName());
        groceryItem.setQuantity(groceryItemDto.getItemQuantity());
        return groceryRepository.save(groceryItem);
    }

    public List<GroceryItem> getAllItems() {
        return groceryRepository.findAll();
    }

    public String deleteItem(Long id) {
        GroceryItem existingItem = groceryRepository.findById(id).stream().toList().get(0);
        if(existingItem != null) {
            groceryRepository.deleteById(id);
            return "Item deleted successfully";
        }
        return "Item doesn't exists";

    }
}