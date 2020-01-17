package com.jarowest.fullpxserver.service;

import com.jarowest.fullpxserver.model.Photo;

import java.util.List;
import java.util.Set;

public interface PhotoService {
    Photo add(Photo photo);

    Photo findById(Long id);

    Set<Photo> findAllByUserId(Long userId);

    Set<Photo> findAllByAlbumName(String name);

    Set<Photo> findAllByCategoryId(Long id);

    Set<Photo> findLast();

    Set<Photo> findAll();

    Set<Photo> findAllByUsername(String username);

    List<Photo> findAllById(Iterable<Long> ids);
}
