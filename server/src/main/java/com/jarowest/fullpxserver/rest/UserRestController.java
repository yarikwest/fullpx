package com.jarowest.fullpxserver.rest;

import com.jarowest.fullpxserver.dto.UserDto;
import com.jarowest.fullpxserver.model.City;
import com.jarowest.fullpxserver.model.User;
import com.jarowest.fullpxserver.service.CityService;
import com.jarowest.fullpxserver.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserRestController {

    private final UserService userService;
    private final CityService cityService;

    public UserRestController(UserService userService, CityService cityService) {
        this.userService = userService;
        this.cityService = cityService;
    }

    @GetMapping("/{username}")
    public ResponseEntity<UserDto> getUser(@PathVariable String username) {
        UserDto userDto = UserDto.fromUser(userService.findByUsername(username));
        return ResponseEntity.ok(userDto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserDto> update(@RequestBody UserDto userDto, @PathVariable Long id) {
        if (userDto == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        User userOld = userService.findById(id);
        City city = cityService.findByName(userDto.getCity()).orElse(new City(userDto.getCity(), null));
        userOld.setCity(city);
        userOld.setPhone(userDto.getPhone());
        userOld.setDescription(userDto.getDescription());
        User userUpdate = userService.update(userOld);

        return ResponseEntity.ok(UserDto.fromUser(userUpdate));
    }
}
