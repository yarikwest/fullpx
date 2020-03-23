package com.jarowest.fullpxserver.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MessageResponseDto {
    private String message;
    private int code;
}
