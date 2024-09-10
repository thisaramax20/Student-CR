package edu.icet.crm.repository;

import edu.icet.crm.entity.StudentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<StudentEntity,Long > {
}
