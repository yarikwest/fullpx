package com.jarowest.fullpxserver.repository;

import com.jarowest.fullpxserver.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {

    Set<Feedback> findAllByUserId(Long id);

}
