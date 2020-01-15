package com.jarowest.fullpxserver.model;

import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
@Table(name = "cities")
public class City extends BaseEntity{

    @Column(length = 45)
    String name;

    @ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "country_id")
    Country country;
}
