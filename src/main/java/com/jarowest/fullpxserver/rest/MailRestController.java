package com.jarowest.fullpxserver.rest;

import com.jarowest.fullpxserver.dto.EmailDto;
import com.jarowest.fullpxserver.dto.ResponseMessageDto;
import com.jarowest.fullpxserver.service.impl.MailSendService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/sendmail")
public class MailRestController {

    private final MailSendService mailSendService;

    public MailRestController(MailSendService mailSendService) {
        this.mailSendService = mailSendService;
    }

    @PostMapping
    public ResponseEntity send(@RequestBody EmailDto emailDto) {

        String msg = emailDto.getText() +
                "\nEmail: " +
                emailDto.getClientEmail() +
                "\nPhone: " +
                emailDto.getClientPhone();

        mailSendService.sendEmail(emailDto.getTo(), msg);

        return ResponseEntity.ok(new ResponseMessageDto<>("Message was send", 200));
    }
}
