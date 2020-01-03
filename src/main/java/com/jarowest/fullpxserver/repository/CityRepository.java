package com.jarowest.fullpxserver.repository;

import com.jarowest.fullpxserver.model.City;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CityRepository extends JpaRepository<City, Long> {
}
