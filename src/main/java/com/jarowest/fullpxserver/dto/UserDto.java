package com.jarowest.fullpxserver.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.jarowest.fullpxserver.model.City;
import com.jarowest.fullpxserver.model.Photo;
import com.jarowest.fullpxserver.model.User;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserDto {
    Long id;
    String firstName;
    String lastName;
    String email;
    String password;
    String phone;
    String description;
    Photo backgroundPhoto;
    City city;

    public User toUser() {
        User user = new User();
        user.setId(id);
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setEmail(email);
        user.setPassword(password);
        user.setPhone(phone);
        user.setDescription(description);
        user.setBackgroundPhoto(backgroundPhoto);
        user.setCity(city);

        return user;
    }

    public static UserDto fromUser(User user) {
        UserDto userDto = new UserDto();
        userDto.setId(user.getId());
        userDto.setFirstName(user.getFirstName());
        userDto.setLastName(user.getLastName());
        userDto.setEmail(user.getEmail());
        userDto.setPassword(user.getPassword());
        userDto.setPhone(user.getPhone());
        userDto.setDescription(user.getDescription());
        userDto.setBackgroundPhoto(user.getBackgroundPhoto());
        userDto.setCity(user.getCity());

        return userDto;
    }
}
