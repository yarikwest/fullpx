package com.jarowest.fullpxserver.service;

import com.jarowest.fullpxserver.model.Category;

import java.util.Set;

public interface CategoryService {

    Category create(Category category);

    Category findByName(String name);

    Set<Category> findAll();

    Set<Category> findByPhotoId(Long id);

}
