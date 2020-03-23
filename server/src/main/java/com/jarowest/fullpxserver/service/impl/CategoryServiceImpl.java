package com.jarowest.fullpxserver.service.impl;

import com.jarowest.fullpxserver.model.Category;
import com.jarowest.fullpxserver.repository.CategoryRepository;
import com.jarowest.fullpxserver.service.CategoryService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@Slf4j
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoryServiceImpl(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public Category create(Category category) {
        Category result = categoryRepository.save(category);

        log.info("IN create - category {} was saved", category.toString());
        return result;
    }

    @Override
    public Category findByName(String name) {
        return categoryRepository.findByName(name);
    }

    @Override
    public Set<Category> findAll() {
        Set<Category> result = new HashSet<>(categoryRepository.findAll());

        if (result.isEmpty()) {
            log.info("IN findAll - categories was not found");
        }
        return result;
    }

    @Override
    public Set<Category> findByPhotoId(Long id) {
        Set<Category> result = categoryRepository.findAllByPhotoId(id);

        if (result.isEmpty()) {
            log.info("IN findByPhotoId - categories with photo id: {} was not found", id);
        } else {
            log.info("IN findByPhotoId - categories with photo id: {} was found", id);
        }

        return result;
    }
}
