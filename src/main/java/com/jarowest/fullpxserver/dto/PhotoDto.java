package com.jarowest.fullpxserver.dto;

import lombok.Data;

import java.util.Set;

@Data
public class PhotoDto {

    private String description;
    private Set<String> categories;
    private UserDto user;
    private String imageUrl;
    private String created;
    private String album;
}
