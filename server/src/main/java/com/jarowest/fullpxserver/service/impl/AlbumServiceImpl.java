package com.jarowest.fullpxserver.service.impl;

import com.jarowest.fullpxserver.model.Album;
import com.jarowest.fullpxserver.repository.AlbumRepository;
import com.jarowest.fullpxserver.service.AlbumService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
@Slf4j
public class AlbumServiceImpl implements AlbumService {

    private final AlbumRepository albumRepository;

    public AlbumServiceImpl(AlbumRepository albumRepository) {
        this.albumRepository = albumRepository;
    }

    @Override
    public Album create(Album album) {
        Album result = albumRepository.save(album);
        log.info("IN create - album {} was saved", result.toString());
        return result;
    }

    @Override
    public Album find(String name) {
        Album result = albumRepository.findByName(name).orElse(null);

        if (result == null) {
            log.info("IN find - album with name: {} was not found", name);
        } else {
            log.info("IN find - album with name: {} was found", name);
        }
        return result;
    }

    @Override
    public Set<Album> findByUsername(String username) {
        Set<Album> result = albumRepository.findAllByUsername(username);

        if (result.isEmpty()) {
            log.info("IN findByUsername - albums with username: {} was not found", username);
        } else {
            log.info("IN findByUsername - albums with username: {} was found", username);
        }
        return result;
    }
}
