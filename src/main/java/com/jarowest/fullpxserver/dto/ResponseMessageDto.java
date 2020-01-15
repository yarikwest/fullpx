package com.jarowest.fullpxserver.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ResponseMessageDto <T> {
    private T object;
    private int code;
}
