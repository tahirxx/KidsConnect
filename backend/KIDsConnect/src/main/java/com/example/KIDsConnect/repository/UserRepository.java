package com.example.KIDsConnect.repository;

import com.example.KIDsConnect.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

//This user repository allow me to perform CRUD (create, update, delete, read) on user entity

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}