package com.jarowest.fullpxserver.service;

import com.jarowest.fullpxserver.model.Album;

import java.util.Set;

public interface AlbumService {

    Album create(Album album);

    Album find(String name);

    Set<Album> findByUsername(String username);


}
