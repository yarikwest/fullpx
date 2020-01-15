package com.jarowest.fullpxserver.service.impl;

import com.jarowest.fullpxserver.model.Role;
import com.jarowest.fullpxserver.repository.RoleRepository;
import com.jarowest.fullpxserver.service.RoleService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class RoleServiceImpl implements RoleService {

    private final RoleRepository roleRepository;

    public RoleServiceImpl(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Override
    public Role create(Role role) {
        Role result = roleRepository.save(role);
        log.info("IN create - role: {} successfully added", role);
        return result;
    }

    @Override
    public List<Role> findAll() {
        return roleRepository.findAll();
    }
}
