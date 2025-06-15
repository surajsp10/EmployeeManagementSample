package com.sampleApp.employeeManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sampleApp.employeeManagement.entity.Myemployee;

public interface EmployeeRepository extends JpaRepository<Myemployee, Long> {

}
