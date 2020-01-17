package com.jarowest.fullpxserver.model;

import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
@Table(name = "albums")
public class Album extends BaseEntity {

    @Column(length = 45)
    String name;

    String description;

    @OneToMany(mappedBy = "album", cascade = CascadeType.ALL)
    Set<Photo> photos = new HashSet<>();

    public void addPhoto(Photo photo) {
        this.photos.add(photo);
        photo.setAlbum(this);
    }

    public void addAllPhotos(Set<Photo> photos) {
        this.photos.addAll(photos);
        photos.forEach(photo -> photo.setAlbum(this));
    }
}
