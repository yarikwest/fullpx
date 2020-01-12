package com.jarowest.fullpxserver.service.impl;

import com.jarowest.fullpxserver.model.Country;
import com.jarowest.fullpxserver.repository.CountryRepository;
import com.jarowest.fullpxserver.service.CountryService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class CountryServiceImpl implements CountryService {

    private final CountryRepository countryRepository;

    public CountryServiceImpl(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    @Override
    public Country create(Country country) {
        return countryRepository.save(country);
    }
}
