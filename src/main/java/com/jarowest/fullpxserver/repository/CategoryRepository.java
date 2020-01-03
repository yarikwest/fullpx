package com.jarowest.fullpxserver.repository;

import com.jarowest.fullpxserver.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
