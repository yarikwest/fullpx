package com.jarowest.fullpxserver.repository;

import com.jarowest.fullpxserver.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
}
