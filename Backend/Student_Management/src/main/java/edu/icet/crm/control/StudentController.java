package edu.icet.crm.control;

import edu.icet.crm.model.Student;
import edu.icet.crm.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
    private final StudentService service;

    @PostMapping("/save")
    public ResponseEntity<String > save(@RequestBody Student student){
        try {
            service.addStudent(student);
            return ResponseEntity.ok("Success");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.ok("Sorry. Upload Failed.");
        }
    }

    @GetMapping("/getAll")
    public List<Student> getAll(){
        return service.getAllStudents();
    }

    @GetMapping("/getById/{id}")
    public Student getById(@PathVariable Long id){
        return service.getStudentById(id);
    }
}
