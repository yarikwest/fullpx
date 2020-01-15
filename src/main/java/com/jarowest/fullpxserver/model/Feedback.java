package com.jarowest.fullpxserver.model;

import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
@Table(name = "feedbacks")
public class Feedback extends BaseEntity {

    @Column(length = 45)
    String author;

    String text;

    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;
}
