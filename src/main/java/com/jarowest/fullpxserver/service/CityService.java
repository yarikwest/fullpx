package com.jarowest.fullpxserver.service;

import com.jarowest.fullpxserver.model.City;

import java.util.Set;

public interface CityService {

    City create(City city);

    Set<City> findAll();

}
