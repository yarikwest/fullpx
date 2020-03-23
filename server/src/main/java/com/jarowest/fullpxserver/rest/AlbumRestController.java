package com.jarowest.fullpxserver.rest;

import com.jarowest.fullpxserver.dto.AlbumDto;
import com.jarowest.fullpxserver.dto.PhotoDto;
import com.jarowest.fullpxserver.dto.UserDto;
import com.jarowest.fullpxserver.model.Album;
import com.jarowest.fullpxserver.model.Category;
import com.jarowest.fullpxserver.model.Photo;
import com.jarowest.fullpxserver.service.AlbumService;
import com.jarowest.fullpxserver.service.PhotoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/albums")
public class AlbumRestController {

    private final AlbumService albumService;
    private final PhotoService photoService;

    public AlbumRestController(AlbumService albumService, PhotoService photoService) {
        this.albumService = albumService;
        this.photoService = photoService;
    }

    @GetMapping("/user/{username}")
    public ResponseEntity<Set<AlbumDto>> getAlbumsByUsername(@PathVariable String username) {

        Set<AlbumDto> result = albumService.findByUsername(username).stream()
                .map(album -> {
                    AlbumDto albumDto = new AlbumDto();
                    albumDto.setName(album.getName());
                    albumDto.setDescription(album.getDescription());
                    albumDto.setPhotos(getListPhotoDto(album.getPhotos()));
                    return albumDto;
                }).collect(Collectors.toSet());


        return ResponseEntity.ok(result);
    }

    @PostMapping
    public ResponseEntity<AlbumDto> create(@RequestBody AlbumDto albumDto) {
        if (albumDto == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        Iterable<Long> ids = albumDto.getPhotos().stream()
                .map(PhotoDto::getId)
                .collect(Collectors.toList());
        Set<Photo> photosById = new HashSet<>(photoService.findAllById(ids));

        Album album = new Album();
        album.setName(albumDto.getName());
        album.setDescription(albumDto.getDescription());
        album.addAllPhotos(photosById);

        albumService.create(album);

        return ResponseEntity.ok(albumDto);
    }

    private List<PhotoDto> getListPhotoDto(Set<Photo> photos) {
        return photos.stream()
                .map(photo -> {
                    PhotoDto photoDto = new PhotoDto();
                    Set<String> categories = photo.getCategories().stream()
                            .map(Category::getName)
                            .collect(Collectors.toSet());

                    photoDto.setDescription(photo.getDescription());
                    photoDto.setCategories(categories);
                    photoDto.setUser(UserDto.fromUser(photo.getUser()));
                    photoDto.setImageUrl(photo.getPath());
                    photoDto.setCreated(photo.getCreated().toString());
                    photoDto.setAlbum(Optional.ofNullable(photo.getAlbum()).map(Album::getName).orElse(null));

                    return photoDto;
                }).collect(Collectors.toList());
    }

}
