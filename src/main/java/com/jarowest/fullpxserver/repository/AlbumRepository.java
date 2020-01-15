package com.jarowest.fullpxserver.repository;

import com.jarowest.fullpxserver.model.Album;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;
import java.util.Set;

public interface AlbumRepository extends JpaRepository<Album, Long> {
    Optional<Album> findByName(String name);

    @Query(value = "select a.* from albums a join photos p on a.id = p.album_id join users u on p.user_id = u.id where u.username = :username group by a.id",
            nativeQuery = true)
    Set<Album> findAllByUsername(@Param("username") String username);

    @Query(value = "select a.* from albums a join photos p on a.id = p.album_id where p.id = :photoId",
            nativeQuery = true)
    Optional<Album> findByPhotoId(@Param("photoId") Long id);
}
