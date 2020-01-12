package com.jarowest.fullpxserver.service;

import com.jarowest.fullpxserver.model.User;

import java.util.Set;

public interface UserService {
    User register(User user);

    User findById(Long id);

    User findByEmail(String email);

    User findByUsername(String username);

    Set<User> findAll();

    boolean existByUsername(String username);

    boolean existByEmail(String email);
}
