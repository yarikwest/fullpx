package com.jarowest.fullpxserver.repository;

import com.jarowest.fullpxserver.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);

    User findByUsername(String username);

    boolean existsByUsername(String username);

    boolean existsByEmail(String email);

    @Query(value = "select u.* from users u join photos p on u.id = p.user_id where p.id = :photoId",
            nativeQuery = true)
    User findByPhotoId(@Param("photoId") Long id);

    Set<User> findAllByCityId(Long id);
}
