package com.example.web_app.grocery.repository;

import com.example.web_app.grocery.model.GroceryItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroceryRepository extends JpaRepository<GroceryItem, Long> {
}
