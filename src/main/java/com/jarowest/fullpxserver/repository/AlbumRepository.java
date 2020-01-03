package com.jarowest.fullpxserver.repository;

import com.jarowest.fullpxserver.model.Album;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlbumRepository extends JpaRepository <Album, Long> {
}
