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
public class User extends BaseEntity {

    @Column(name = "first_name", length = 45, nullable = false)
    String firstName;

    @Column(name = "last_name", length = 45, nullable = false)
    String lastName;

    @Column(length = 45, unique = true)
    String username;

    @Column(length = 45, unique = true)
    String email;

    @Column(nullable = false)
    String password;

    @Column(length = 20)
    String phone;

    String description;

    @OneToOne
    @JoinColumn(name = "background_photo_id")
    Photo backgroundPhoto;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "city_id")
    City city;

    @ManyToMany(fetch = FetchType.EAGER, cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
    })
    @JoinTable(name = "users_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    Set<Role> roles = new HashSet<>();
}
