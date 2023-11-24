package com.springrest.springrest.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.springrest.springrest.entities.Course;

//Make class replace interface with class
@Repository
public interface CourseDao extends JpaRepository<Course,Long> {
	Optional<Course> findByTitle(String title);
	Optional<Course> deleteByTitle(String title);
}
