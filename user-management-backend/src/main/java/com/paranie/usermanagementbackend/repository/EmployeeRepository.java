package com.paranie.usermanagementbackend.repository;

import com.paranie.usermanagementbackend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Long, Employee> {
}
