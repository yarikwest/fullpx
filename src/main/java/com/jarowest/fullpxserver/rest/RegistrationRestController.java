package com.jarowest.fullpxserver.rest;

import com.jarowest.fullpxserver.dto.MessageResponseDto;
import com.jarowest.fullpxserver.dto.UserDto;
import com.jarowest.fullpxserver.model.User;
import com.jarowest.fullpxserver.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/sign-up")
public class RegistrationRestController {

    private final UserService userService;

    public RegistrationRestController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<MessageResponseDto> register(@RequestBody UserDto userDto) {

        if (userService.existByUsername(userDto.getUsername())) {
            return new ResponseEntity<>(
                    new MessageResponseDto("User with username: " + userDto.getUsername() + " already exists", 409),
                    HttpStatus.CONFLICT);
        } else if (userService.existByEmail(userDto.getEmail())) {
            return new ResponseEntity<>(
                    new MessageResponseDto("User with email: " + userDto.getEmail() + " already exists", 409),
                    HttpStatus.CONFLICT);
        } else {
            User user = userDto.toUser();
            userService.register(user);

            return new ResponseEntity<>(
                    new MessageResponseDto("User was created", 201), HttpStatus.CREATED);
        }


    }
}
