package com.jarowest.fullpxserver.service;

import com.jarowest.fullpxserver.model.Role;

import java.util.List;

public interface RoleService {
    Role create(Role role);

    List<Role> findAll();
}
