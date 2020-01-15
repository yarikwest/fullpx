package com.jarowest.fullpxserver.rest;

import com.jarowest.fullpxserver.dto.AuthenticationRequestDto;
import com.jarowest.fullpxserver.dto.AuthenticationResponseDto;
import com.jarowest.fullpxserver.dto.ResponseMessageDto;
import com.jarowest.fullpxserver.model.User;
import com.jarowest.fullpxserver.security.jwt.JwtTokenProvider;
import com.jarowest.fullpxserver.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cabinet/login")
public class AuthenticationRestController {

    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;
    private final UserService userService;

    @Autowired
    public AuthenticationRestController(AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider, UserService userService) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity login(@RequestBody AuthenticationRequestDto requestDto) {

        try {
            String email = requestDto.getEmail();
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, requestDto.getPassword()));
            User user = userService.findByEmail(email);
            if (user == null) {
                throw new UsernameNotFoundException("User with email: " + email + " not found");
            }

            String token = jwtTokenProvider.createToken(email, user.getRoles());

            AuthenticationResponseDto responseDto = new AuthenticationResponseDto();
            responseDto.setEmail(email);
            responseDto.setToken(token);
            responseDto.setExpiresIn(jwtTokenProvider.getExpirationIn(token));

            return ResponseEntity.ok(responseDto);

        } catch (AuthenticationException e) {
            return new ResponseEntity(
                    new ResponseMessageDto("Invalid username or password", HttpStatus.UNAUTHORIZED.value()),
                    HttpStatus.UNAUTHORIZED
            );
        }
    }
}
