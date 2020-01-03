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
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Column(name = "first_name", length = 45, nullable = false)
    String firstName;
    @Column(name = "last_name", length = 45, nullable = false)
    String lastName;
    @Column(length = 45, nullable = false)
    String email;
    @Column(nullable = false)
    String password;
    @Column(length = 20)
    String phone;
    String description;
    @OneToOne
    @JoinColumn(name = "background_photo_id")
    Photo backgroundPhoto;
    @OneToMany(mappedBy = "user")
    Set<Photo> photos = new HashSet<>();
    @ManyToOne
    @JoinColumn(name = "city_id")
    City city;
    @OneToMany(mappedBy = "user")
    Set<Feedback> feedbacks = new HashSet<>();
}
