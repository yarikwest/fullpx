package com.jarowest.fullpxserver.repository;

import com.jarowest.fullpxserver.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Set;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    Category findByName(String name);

    @Query(value = "select c.* from categories c join photos_has_categories phc on c.id = phc.category_id where photo_id = :photoId",
            nativeQuery = true)
    Set<Category> findAllByPhotoId(@Param("photoId") Long id);
}
