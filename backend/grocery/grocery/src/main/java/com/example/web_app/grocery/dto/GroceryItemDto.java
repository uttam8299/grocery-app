package com.example.web_app.grocery.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class GroceryItemDto {
    private String itemName;
    private Integer itemQuantity;
}
