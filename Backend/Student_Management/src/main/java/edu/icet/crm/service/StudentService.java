package edu.icet.crm.service;

import edu.icet.crm.model.Student;
import java.util.List;

public interface StudentService {
    void addStudent(Student student);
    List<Student> getAllStudents();
    Student getStudentById(Long id);
}
