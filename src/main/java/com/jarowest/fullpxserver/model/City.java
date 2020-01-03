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
@Table(name = "cities")
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Column(length = 45)
    String name;
    @ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "country_id")
    Country country;
    @OneToMany(mappedBy = "city")
    Set<User> users = new HashSet<>();
}
