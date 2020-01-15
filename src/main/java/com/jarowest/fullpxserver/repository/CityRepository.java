package com.jarowest.fullpxserver.repository;

import com.jarowest.fullpxserver.model.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Set;

public interface CityRepository extends JpaRepository<City, Long> {

    @Query(value = "select c.* from cities c join users u on c.id = u.city_id where u.id = :userId",
            nativeQuery = true)
    City findByUserId(@Param("userId") Long id);

    Set<City> findAllByCountryId(Long id);
}
