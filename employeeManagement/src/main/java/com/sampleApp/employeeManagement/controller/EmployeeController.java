package com.sampleApp.employeeManagement.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sampleApp.employeeManagement.entity.Myemployee;
import com.sampleApp.employeeManagement.service.EmployeeService;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
public class EmployeeController {
	private final EmployeeService employeeservice;

	@PostMapping("/employee")
	public Myemployee postEmployee(@RequestBody Myemployee employee) {
		return employeeservice.postEmployee(employee);
	}
	
	
	@GetMapping("/getAllEmployees")
	public List<Myemployee> getEmployees(){
		return employeeservice.getEmployees();
	}
	@DeleteMapping("/deleteemployee/{id}")
	public ResponseEntity<?> deleteEmployee(@PathVariable Long id){
		try {
			employeeservice.deleteEmployee(id);
			return new ResponseEntity<>("Employee with this "+id+" deleted",HttpStatus.OK);
		} catch (EntityNotFoundException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	@GetMapping("/employee/{id}")
	public ResponseEntity<?> getEmployeeId(@PathVariable Long id){
	Myemployee emp = employeeservice.getEmployeeId(id);
	if(emp == null) return ResponseEntity.notFound().build();
	return ResponseEntity.ok(emp);
	}
	
	@PatchMapping("/employee/{id}")
	public ResponseEntity<?> updateEmployee(@PathVariable Long id,@RequestBody Myemployee employee){
		Myemployee updatedemployee = employeeservice.updateEmployee(id, employee);
		if(updatedemployee==null) return ResponseEntity.status(HttpStatus.BAD_REQUEST).build(); 
		return ResponseEntity.ok(updatedemployee);
	}
}
