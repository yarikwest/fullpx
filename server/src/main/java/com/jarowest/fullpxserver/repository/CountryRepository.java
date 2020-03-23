package com.jarowest.fullpxserver.repository;

import com.jarowest.fullpxserver.model.Country;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CountryRepository extends JpaRepository<Country, Long> {
}
