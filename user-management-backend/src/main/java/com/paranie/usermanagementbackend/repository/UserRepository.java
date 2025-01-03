package com.paranie.usermanagementbackend.repository;

import com.paranie.usermanagementbackend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Long, User> {
}
