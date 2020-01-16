package com.jarowest.fullpxserver.service;

import com.jarowest.fullpxserver.model.City;

import java.util.Optional;
import java.util.Set;

public interface CityService {

    City create(City city);

    Optional<City> findByName(String name);

    Set<City> findAll();

}
