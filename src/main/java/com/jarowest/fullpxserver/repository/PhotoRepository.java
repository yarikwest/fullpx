package com.jarowest.fullpxserver.repository;

import com.jarowest.fullpxserver.model.Photo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PhotoRepository extends JpaRepository<Photo, Long> {
}
