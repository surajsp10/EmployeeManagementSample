package com.sampleApp.employeeManagement.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.sampleApp.employeeManagement.entity.Myemployee;
import com.sampleApp.employeeManagement.repository.EmployeeRepository;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EmployeeService {

	private final EmployeeRepository employeerepository;
	public Myemployee postEmployee(Myemployee employee){
		return employeerepository.save(employee);
	}
	public List<Myemployee> getEmployees(){
		return employeerepository.findAll();
	}
	
	public void deleteEmployee(Long id) {
		if(!employeerepository.existsById(id)) {
			throw new EntityNotFoundException(); 
		}
		employeerepository.deleteById(id);
	}
	
	public Myemployee getEmployeeId(Long id) {
		return employeerepository.findById(id).orElse(null);
	}
	
	public Myemployee updateEmployee(Long id,Myemployee emp) {
		Optional<Myemployee> optionalemployee = employeerepository.findById(id);
		if(optionalemployee.isPresent()) {
			Myemployee exist = optionalemployee.get();
			exist.setName(emp.getName());
			exist.setEmail(emp.getEmail());
			exist.setDepartment(emp.getDepartment());
			exist.setPhone(emp.getPhone());
			return employeerepository.save(exist);
		}else {
			
		}
		return null;
	}
}
