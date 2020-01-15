package com.jarowest.fullpxserver.dto;

import com.jarowest.fullpxserver.model.Album;
import lombok.Data;

import java.util.List;

@Data
public class AlbumDto {
    private String name;
    private String description;
    private List<PhotoDto> photos;

}
