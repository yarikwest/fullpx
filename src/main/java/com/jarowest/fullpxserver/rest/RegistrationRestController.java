package com.jarowest.fullpxserver.rest;

import com.jarowest.fullpxserver.dto.UserDto;
import com.jarowest.fullpxserver.model.User;
import com.jarowest.fullpxserver.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/sign-up")
public class RegistrationRestController {

    private final UserService userService;
    private final BCryptPasswordEncoder passwordEncoder;

    public RegistrationRestController(UserService userService, BCryptPasswordEncoder passwordEncoder) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping
    public ResponseEntity<UserDto> register(@RequestBody UserDto userDto) {
        User user = userDto.toUser();

        UserDto result = UserDto.fromUser(userService.register(user));

        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }
}
