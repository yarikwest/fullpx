package com.jarowest.fullpxserver.service;

import com.jarowest.fullpxserver.model.Feedback;

import java.util.Set;

public interface FeedbackService {

    Feedback create(Feedback feedback);

    Set<Feedback> findAllByUserId(Long id);

}
