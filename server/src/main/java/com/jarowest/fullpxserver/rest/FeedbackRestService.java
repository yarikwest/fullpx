package com.jarowest.fullpxserver.rest;

import com.jarowest.fullpxserver.dto.FeedbackDto;
import com.jarowest.fullpxserver.model.Feedback;
import com.jarowest.fullpxserver.model.User;
import com.jarowest.fullpxserver.service.FeedbackService;
import com.jarowest.fullpxserver.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/feedback")
public class FeedbackRestService {

    private final UserService userService;
    private final FeedbackService feedbackService;

    public FeedbackRestService(UserService userService, FeedbackService feedbackService) {
        this.userService = userService;
        this.feedbackService = feedbackService;
    }

    @PostMapping
    public ResponseEntity<FeedbackDto> create(@RequestBody FeedbackDto feedbackDto) {

        if (feedbackDto == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        User user = userService.findByUsername(feedbackDto.getUsername());
        Feedback feedback = feedbackService.create(feedbackDto.toFeedback(user));

        FeedbackDto result = FeedbackDto.fromFeedback(feedback);

        return ResponseEntity.ok(result);
    }

    @GetMapping("/{username}")
    public ResponseEntity<Set<FeedbackDto>> getList(@PathVariable String username) {
        if (username == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        User user = userService.findByUsername(username);

        if (user == null) {
            return ResponseEntity.noContent().build();
        }

        Set<FeedbackDto> result = feedbackService.findAllByUserId(user.getId()).stream()
                .map(FeedbackDto::fromFeedback)
                .collect(Collectors.toSet());

        return ResponseEntity.ok(result);
    }
}
