package com.example.web_app.grocery.controller;

import com.example.web_app.grocery.dto.GroceryItemDto;
import com.example.web_app.grocery.model.GroceryItem;
import com.example.web_app.grocery.service.GroceryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/product")
@CrossOrigin(origins = "http://localhost:3000")
public class GroceryController {
    private GroceryService groceryService;
    private GroceryController(GroceryService groceryService) {
        this.groceryService = groceryService;
    }

    @GetMapping("/getAllItems")
    public List<GroceryItem> getAllItems() {
        return groceryService.getAllItems();
    }

    @PostMapping("/addItem")
    public GroceryItem addItem(@RequestBody GroceryItemDto groceryItemDto) {
         return groceryService.addItem(groceryItemDto);
    }

    @DeleteMapping("/deleteItem/{id}")
    public String deleteItem(@PathVariable Long id) {
        return groceryService.deleteItem(id);
    }

}
