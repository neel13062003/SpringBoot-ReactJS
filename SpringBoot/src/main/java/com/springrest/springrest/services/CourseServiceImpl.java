package com.springrest.springrest.services;
import java.util.ArrayList;
import java.util.List;

import org.apache.el.stream.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.springrest.springrest.dao.CourseDao;
import com.springrest.springrest.entities.Course;

import jakarta.persistence.EntityNotFoundException;

@Service
public class CourseServiceImpl implements CourseService {

	@Autowired
	private CourseDao coursedao;
	
	
	//Here Temporary Store Data
	//List<Course> list;
	public CourseServiceImpl() {
		//list = new ArrayList<>();
		//list.add(new Course(1,"Java Core Course","Amazing Java Core Course"));
		//list.add(new Course(2,"Java Spring Course","Amazing Java Spring Boot Course"));
	}
	
	@Override
	public List<Course> getCourses() {
		//return list;
		return coursedao.findAll();
	}

	@Override
	//public Course getCourse(long courseId) {
	public Course getCourse(String courseTitle) {
		/*Course c = null;
		for(Course course:list) {
			if(course.getId() == courseId) {
				c = course;
				break;
			}
		}
		return c;*/
		//return coursedao.getOne(courseId);  //getById()  & getOne() depreciate
		//Course course = coursedao.findById(courseId).orElse(null);
	    Course course = coursedao.findByTitle(courseTitle).orElse(null); 
		return course;
	}

	@Transactional
	@Override
	//public Course deleteCourse(long courseId) {
	public Course deleteCourse(String courseTitle) {
		/*Course c = null;
		for(Course course:list) {
			if(course.getId() == courseId) {
				list.remove(c);
				//c = course;
				break;
			}
		}
		return c;*/
		/*Course entity = coursedao.getOne(courseId);
		coursedao.delete(entity);	 - because it's depriciate*/
//		Course course = coursedao.findById(courseId).orElse(null);
//
//	    if (course != null) {
//	        coursedao.delete(course);
//	    }
		
		/* Today Comments */
		/*Course course = coursedao.findById(courseId).orElse(null);
		coursedao.deleteById(courseId);*/
		
		 Course course = coursedao.findByTitle(courseTitle).orElse(null);

		  try {
		        if (course != null) {
		            coursedao.deleteByTitle(courseTitle);
		        }
		    } catch (Exception e) {
		        // Log the exception details
		        e.printStackTrace();
		        throw new RuntimeException("Error deleting course: " + e.getMessage());
		    }

		    return course;
		
		
		
//	    if (course != null) {
	    //coursedao.delete(course);
//	    } else {
//	        // Handle the case where the course with courseId doesn't exist
//	        // You can log a message or return an appropriate response
//	    }
	    //return course;
	}

	
	@Override
	public Course addCourse(Course course) {
		/*list.add(course);
		return course;*/
		
		return coursedao.save(course);
	}

//	@Override
	//public Course updateCourse(Course course) {
//	public Course updateCourse(String courseTitle) {
		/*for (Course c : list) {
	        if (c.getId() == course.getId()) {
	            // Update the properties of the existing course with the new values
	            c.setTitle(course.getTitle());
	            c.setDescription(course.getDescription());
	            return c; // Return the updated course
	        }
	    }
	    return null; // Return null if the course with the given id is not found*/
		//return coursedao.save(course);
//	}
	@Override
    public Course updateCourse(String courseTitle, Course updatedCourse) {
		Course course = coursedao.findByTitle(courseTitle).orElse(null);

        if (course != null) {
            Course existingCourse = course;
            existingCourse.setTitle(updatedCourse.getTitle());
            existingCourse.setDescription(updatedCourse.getDescription());

            return coursedao.save(existingCourse);
        } else {
            throw new EntityNotFoundException("Course not found with title: " + courseTitle);
        }
    }
}
