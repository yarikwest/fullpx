package com.jarowest.fullpxserver.service.impl;

import com.jarowest.fullpxserver.model.City;
import com.jarowest.fullpxserver.repository.CityRepository;
import com.jarowest.fullpxserver.service.CityService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@Slf4j
public class CityServiceImpl implements CityService {

    private final CityRepository cityRepository;

    public CityServiceImpl(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }

    @Override
    public City create(City city) {
        City result = cityRepository.save(city);
        log.info("IN save - city {} was saved", city.toString());

        return result;
    }

    @Override
    public Set<City> findAll() {
        HashSet<City> result = new HashSet<>(cityRepository.findAll());

        if (result.isEmpty()) {
            log.info("IN findAll - cities was not found");
        }

        return result;
    }
}
