package com.jarowest.fullpxserver.service.impl;

import com.jarowest.fullpxserver.model.Photo;
import com.jarowest.fullpxserver.repository.PhotoRepository;
import com.jarowest.fullpxserver.service.PhotoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@Slf4j
public class PhotoServiceImpl implements PhotoService {

    private final PhotoRepository photoRepository;

    public PhotoServiceImpl(PhotoRepository photoRepository) {
        this.photoRepository = photoRepository;
    }


    @Override
    public Photo add(Photo photo) {
        return photoRepository.save(photo);
    }

    @Override
    public Photo findById(Long id) {
        Photo result = photoRepository.findById(id).orElse(null);

        if (result == null) {
            log.info("IN findBuId - photo with id: {} was not found", id);
        } else {
            log.info("IN findById - photo: {} with id: {} was found", result.toString(), id);
        }

        return result;
    }

    @Override
    public Set<Photo> findAllByUserId(Long userId) {
        return photoRepository.findAllByUserId(userId);
    }

    @Override
    public Set<Photo> findAllByAlbumName(String name) {
        return photoRepository.findAllByAlbumName(name);
    }

    @Override
    public Set<Photo> findAllByCategoryId(Long id) {
        return photoRepository.findAllByCategoryId(id);
    }

    @Override
    public Set<Photo> findLast() {
        return photoRepository.findLast20();
    }

    @Override
    public Set<Photo> findAll() {
        return new HashSet<>(photoRepository.findAll());
    }

    @Override
    public Set<Photo> findAllByUsername(String username) {
        return photoRepository.findAllByUserName(username);
    }

}
