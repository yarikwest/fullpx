package com.jarowest.fullpxserver.rest;

import com.jarowest.fullpxserver.dto.AlbumDto;
import com.jarowest.fullpxserver.dto.PhotoDto;
import com.jarowest.fullpxserver.dto.UserDto;
import com.jarowest.fullpxserver.model.Album;
import com.jarowest.fullpxserver.model.Category;
import com.jarowest.fullpxserver.model.Photo;
import com.jarowest.fullpxserver.service.AlbumService;
import com.jarowest.fullpxserver.service.CategoryService;
import com.jarowest.fullpxserver.service.PhotoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/photos")
public class PhotoRestController {

    private final PhotoService photoService;
    private final AlbumService albumService;
    private final CategoryService categoryService;

    public PhotoRestController(PhotoService photoService, AlbumService albumService, CategoryService categoryService) {
        this.photoService = photoService;
        this.albumService = albumService;
        this.categoryService = categoryService;
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<List<PhotoDto>> getPhotosByCategory(@PathVariable String category) {

        Set<Photo> photos;

        if (category.equals("all")) {
            photos = photoService.findAll();
        } else if (category.equals("last")) {
            photos = photoService.findLast();
        } else {
            photos = photoService.findAllByCategoryId(categoryService.findByName(category).getId());
        }

        List<PhotoDto> result = getListPhotoDto(photos);

        return ResponseEntity.ok(result);
    }

    @GetMapping("/user/{username}")
    public ResponseEntity<List<PhotoDto>> getPhotosByUsername(@PathVariable String username) {

        Set<Photo> photos;

        if (username != null) {
            photos = photoService.findAllByUsername(username);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        List<PhotoDto> result = getListPhotoDto(photos);

        return ResponseEntity.ok(result);
    }

    @GetMapping("/{username}/album/{albumName}")
    public ResponseEntity<AlbumDto> getAlbum(@PathVariable String username, @PathVariable String albumName) {

        Album album;

        if (username != null && albumName != null) {
            album = albumService.find(albumName);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        AlbumDto result = new AlbumDto();
        result.setName(album.getName());
        result.setDescription(album.getDescription());
        result.setPhotos(getListPhotoDto(album.getPhotos()));

        return ResponseEntity.ok(result);
    }

    private List<PhotoDto> getListPhotoDto(Set<Photo> photos) {
        return photos.stream()
                .map(photo -> {
                    PhotoDto photoDto = new PhotoDto();
                    Set<String> categories = photo.getCategories().stream()
                            .map(Category::getName)
                            .collect(Collectors.toSet());

                    photoDto.setId(photo.getId());
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
