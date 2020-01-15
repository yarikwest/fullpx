package com.jarowest.fullpxserver.repository;

import com.jarowest.fullpxserver.model.Photo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Set;

public interface PhotoRepository extends JpaRepository<Photo, Long> {

    Set<Photo> findAllByUserId(Long id);

    Set<Photo> findAllByAlbumName(String name);

    @Query(value = "select p.* from photos p join photos_has_categories phc on p.id = phc.photo_id where phc.category_id = :categoryId",
            nativeQuery = true)
    Set<Photo> findAllByCategoryId(@Param("categoryId") Long id);

    @Query(value = "select * from photos order by created desc limit 20",
            nativeQuery = true)
    Set<Photo> findLast20();

    @Query(value = "select p.* from photos p join users u on p.user_id = u.id where u.username = :username",
            nativeQuery = true)
    Set<Photo> findAllByUserName(@Param("username") String username);
}
