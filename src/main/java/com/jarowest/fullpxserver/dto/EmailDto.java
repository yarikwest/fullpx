package com.jarowest.fullpxserver.dto;

import lombok.Data;

@Data
public class EmailDto {
    private String to;
    private String text;
    private String clientEmail;
    private String clientPhone;
}
