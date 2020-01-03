package com.jarowest.fullpxserver.repository;

import com.jarowest.fullpxserver.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
