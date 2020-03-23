package com.jarowest.fullpxserver.service.impl;

import com.jarowest.fullpxserver.model.Feedback;
import com.jarowest.fullpxserver.repository.FeedbackRepository;
import com.jarowest.fullpxserver.service.FeedbackService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
@Slf4j
public class FeedbackServiceImpl implements FeedbackService {

    private final FeedbackRepository feedbackRepository;

    public FeedbackServiceImpl(FeedbackRepository feedbackRepository) {
        this.feedbackRepository = feedbackRepository;
    }

    @Override
    public Feedback create(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }

    @Override
    public Set<Feedback> findAllByUserId(Long id) {
        Set<Feedback> result = feedbackRepository.findAllByUserId(id);

        if (result.isEmpty()) {
            log.info("IN findAllByUserId - feedbacks with user id: {} was not found", id);
        }

        return result;
    }
}
