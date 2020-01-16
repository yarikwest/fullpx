package com.jarowest.fullpxserver.dto;

import lombok.Data;

@Data
public class AuthenticationResponseDto {
    private String username;
    private String token;
    private long expiresIn;
}
