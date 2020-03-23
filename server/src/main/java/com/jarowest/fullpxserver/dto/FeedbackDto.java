package com.jarowest.fullpxserver.dto;

import com.jarowest.fullpxserver.model.Feedback;
import com.jarowest.fullpxserver.model.User;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.Optional;

@Data
public class FeedbackDto {
    private String author;
    private String text;
    private LocalDateTime created;
    private String username;

    public Feedback toFeedback(User user) {
        Feedback feedback = new Feedback();
        feedback.setAuthor(author);
        feedback.setText(text);
        feedback.setCreated(created);
        feedback.setUser(user);
        return feedback;
    }

    public static FeedbackDto fromFeedback(Feedback feedback) {
        FeedbackDto feedbackDto = new FeedbackDto();
        feedbackDto.setAuthor(feedback.getAuthor());
        feedbackDto.setText(feedback.getText());
        feedbackDto.setCreated(feedback.getCreated());
        feedbackDto.setUsername(Optional.ofNullable(feedback.getUser()).map(User::getUsername).orElse(null));

        return feedbackDto;
    }
}
