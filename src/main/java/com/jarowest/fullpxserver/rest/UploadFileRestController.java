package com.jarowest.fullpxserver.rest;

import com.jarowest.fullpxserver.model.Category;
import com.jarowest.fullpxserver.model.Photo;
import com.jarowest.fullpxserver.repository.CategoryRepository;
import com.jarowest.fullpxserver.security.jwt.JwtTokenProvider;
import com.jarowest.fullpxserver.service.AmazonClient;
import com.jarowest.fullpxserver.service.PhotoService;
import com.jarowest.fullpxserver.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/cabinet/upload")
public class UploadFileRestController {

    private final UserService userService;
    private final PhotoService photoService;
    private final AmazonClient amazonClient;
    private final CategoryRepository categoryRepository;
    private final JwtTokenProvider jwtTokenProvider;

    public UploadFileRestController(UserService userService, PhotoService photoService, CategoryRepository categoryRepository, JwtTokenProvider jwtTokenProvider, AmazonClient amazonClient) {
        this.userService = userService;
        this.photoService = photoService;
        this.categoryRepository = categoryRepository;
        this.jwtTokenProvider = jwtTokenProvider;
        this.amazonClient = amazonClient;
    }

    @PostMapping
    public HttpStatus uploadToS3(@RequestHeader("authorization") String param,
                                 @RequestParam MultipartFile file,
                                 @RequestParam String description,
                                 @RequestParam Set<String> categories) {
        String token = param.substring(7);

        Set<Category> list = categories.stream()
                .map(categoryRepository::findByName)
                .collect(Collectors.toSet());

        if (file == null) {
            return HttpStatus.BAD_REQUEST;
        }

        String url = amazonClient.uploadFile(file);

        String userEmail = jwtTokenProvider.getEmail(token);

        Photo photo = new Photo();
        photo.setUser(userService.findByEmail(userEmail));
        photo.setPath(url);
        photo.setDescription(description);
        photo.setCategories(list);
        photoService.add(photo);

        return HttpStatus.OK;
    }

}
