package com.jarowest.fullpxserver.service.impl;

import com.jarowest.fullpxserver.model.Role;
import com.jarowest.fullpxserver.model.Status;
import com.jarowest.fullpxserver.model.User;
import com.jarowest.fullpxserver.repository.RoleRepository;
import com.jarowest.fullpxserver.repository.UserRepository;
import com.jarowest.fullpxserver.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@Slf4j
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, RoleRepository roleRepository, BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public User register(User user) {
        Role roleUser = roleRepository.findByName("ROLE_USER");
        Set<Role> userRoles = new HashSet<>();
        userRoles.add(roleUser);

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRoles(userRoles);
        user.setStatus(Status.ACTIVE);

        User registeredUser = userRepository.save(user);
        log.info("IN register - user: {} successfully registered", registeredUser);
        return registeredUser;
    }

    @Override
    public Set<User> findAll() {
        Set<User> users = new HashSet<>(userRepository.findAll());
        log.info("IN getAll - {} users found", users);

        return users;
    }

    @Override
    public boolean existByUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    @Override
    public boolean existByEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    @Override
    public User findByEmail(String email) {
        User result = userRepository.findByEmail(email);

        if (result == null) {
            log.warn("IN findByEmail - no user found by email: {}", email);
            return null;
        }

        log.info("IN findByEmail - user: {} found by email: {}", result, email);

        return result;
    }

    @Override
    public User findByUsername(String username) {
        User result = userRepository.findByUsername(username);

        if (result == null) {
            log.warn("IN findByUsername - no user found by username: {}", username);
            return null;
        }

        log.info("IN findByUsername - user: {} found by username: {}", result, username);

        return result;
    }

    @Override
    public User findById(Long id) {
        User result = userRepository.findById(id).orElse(null);

        if (result == null) {
            log.warn("IN findById - no user found by id: {}", id);
            return null;
        }

        log.info("IN findById - user: {} found by id: {}", result, id);

        return result;
    }

}
