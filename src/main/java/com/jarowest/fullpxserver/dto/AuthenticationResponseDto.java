package com.jarowest.fullpxserver.dto;

import lombok.Data;

@Data
public class AuthenticationResponseDto {
    private String email;
    private String token;
    private long expiresIn;
}
