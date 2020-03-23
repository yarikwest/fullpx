package com.jarowest.fullpxserver.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.jarowest.fullpxserver.model.City;
import com.jarowest.fullpxserver.model.Photo;
import com.jarowest.fullpxserver.model.User;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import java.util.Optional;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserDto {
    Long id;
    String firstName;
    String lastName;
    String username;
    String email;
    String password;
    String phone;
    String description;
    String backgroundPhotoUrl;
    String city;

    public User toUser() {
        User user = new User();
        user.setId(id);
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setUsername(username);
        user.setEmail(email);
        user.setPassword(password);
        user.setPhone(phone);
        user.setDescription(description);

        return user;
    }

    public static UserDto fromUser(User user) {
        UserDto userDto = new UserDto();
        userDto.setId(user.getId());
        userDto.setFirstName(user.getFirstName());
        userDto.setLastName(user.getLastName());
        userDto.setUsername(user.getUsername());
        userDto.setEmail(user.getEmail());
        userDto.setPhone(user.getPhone());
        userDto.setDescription(user.getDescription());
        userDto.setBackgroundPhotoUrl(Optional.ofNullable(user.getBackgroundPhoto()).map(Photo::getPath).orElse(null));
        userDto.setCity(Optional.ofNullable(user.getCity()).map(City::getName).orElse(null));
        return userDto;
    }
}
