package com.jarowest.fullpxserver.rest;

import com.jarowest.fullpxserver.model.Category;
import com.jarowest.fullpxserver.service.CategoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequestMapping("/categories")
public class CategoryRestController {

    private final CategoryService categoryService;

    public CategoryRestController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping
    public ResponseEntity<Set<String>> getCategories() {

        Set<String> result = categoryService.findAll().stream()
                .map(Category::getName)
                .collect(Collectors.toSet());

        return ResponseEntity.ok(result);
    }
}
