package com.springrest.springrest.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import com.springrest.springrest.entities.Course;
import com.springrest.springrest.services.CourseService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController   //json or xml form we can send data
public class MyController {
	
	//Automatically create object of that implementation child class of that interface and work for us directly according to dependecy injection
	@Autowired  
	private CourseService CourseService;
	
	//@RequestMapping(path="/home",method = RequestMethod.Get)
	//We can also Write RequestMapping in MVC write like that but in RestAPI we write method wise annotation
	@GetMapping("/home")
	 public String home() {
		 return "This is Home Page Chee";
	 }
	
	//get the course 
	@GetMapping("/courses")
	public List<Course> getCourses(){
		return this.CourseService.getCourses();
	}
	
	//To receive value dynamically of courseId to PathVarible
	/*@GetMapping("/courses/{courseId}")
	public Course getCourse(@PathVariable String courseId) {
		return this.CourseService.getCourse(Long.parseLong(courseId));
	}*/
	@GetMapping("/courses/{courseTitle}")
	public Course getCourse(@PathVariable String courseTitle) {
		return this.CourseService.getCourse(courseTitle);
	}
	
	@PostMapping("/courses")
	public Course addCourse(@RequestBody Course course) {
		return this.CourseService.addCourse(course);
	}
	//@RequestMapping(path = "/courses",method = RequestMethod.GET) alternative
	//@PostMapping(path = "/courses" , consumes = "application/json")
	/*@PostMapping("/courses")
	public ResponseEntity<Course> addCourse(@RequestBody Course course) {
	    try {
	        Course addedCourse = this.CourseService.addCourse(course);
	        return new ResponseEntity<>(addedCourse, HttpStatus.CREATED);
	    } catch (Exception e) {
	        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}
*/
	
//	@PutMapping("/courses")
//	public Course updateCourse(@RequestBody Course course) {
//		return this.CourseService.updateCourse(course);
//	}
	@PutMapping("/courses/{courseTitle}")
	public Course updateCourse(@PathVariable String courseTitle, @RequestBody Course updatedCourse) {
	    return this.CourseService.updateCourse(courseTitle, updatedCourse);
	}
	
	/*
	@DeleteMapping("/courses/{courseId}")
	public Course deleteCourse(@PathVariable String courseId) {
		return this.CourseService.getCourse(Long.parseLong(courseId));
	}*/
	
	// {  When Status want to also send }  //remember i change type to void in delete
 
	
	//public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId){
		//try {
	
//	@DeleteMapping("/courses/{courseTitle}")
	//@DeleteMapping("/courses/{courseId}")
//	public Course deleteCourse(@PathVariable String courseId) {
//			return this.CourseService.deleteCourse(Long.parseLong(courseId));
//	}
	@DeleteMapping("/courses/{courseTitle}")
	public Course deleteCourse(@PathVariable String courseTitle) {
		return this.CourseService.deleteCourse(courseTitle);
	}
			//return new ResponseEntity<>(HttpStatus.OK);
		//}catch(Exception e) {
			//return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		//}
	//}
	
}
