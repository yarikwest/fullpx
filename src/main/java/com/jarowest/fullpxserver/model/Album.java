package com.jarowest.fullpxserver.model;

import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
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

    @OneToMany(mappedBy = "album")
    Set<Photo> photos = new HashSet<>();
}
