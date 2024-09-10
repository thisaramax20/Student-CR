package edu.icet.crm.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import edu.icet.crm.entity.StudentEntity;
import edu.icet.crm.model.Student;
import edu.icet.crm.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

@RequiredArgsConstructor
@Service
public class StudentServiceImpl implements StudentService{
    private final StudentRepository repository;
    private final ObjectMapper mapper;

    @Override
    public void addStudent(Student student) {
        StudentEntity studentEntity = mapper.convertValue(student, StudentEntity.class);
        String convertData = student.getProfilePictureData().replaceFirst("^data:image/.+;base64,", "");
        byte [] imageData = Base64.getDecoder().decode(convertData);
        studentEntity.setProfilePictureBase64data(imageData);
        repository.save(studentEntity);
    }

    @Override
    public List<Student> getAllStudents() {
        List<StudentEntity> all = repository.findAll();
        List<Student> students = new ArrayList<>();
        all.forEach(studentEntity ->
            students.add(mapper.convertValue(studentEntity,Student.class))
        );
        return students;
    }

    @Override
    public Student getStudentById(Long id) {
        StudentEntity studentEntity = repository.findById(id).orElse(null);
        Student student = mapper.convertValue(studentEntity, Student.class);
        assert studentEntity != null;
        student.setProfilePictureData(Base64.getEncoder().encodeToString(studentEntity.getProfilePictureBase64data()));
        return student;
    }

}
