package edu.icet.crm.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "Student")
public class StudentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String address;
    private LocalDate birthday;
    private String gender;
    private String guardianName;
    private String guardianOccupation;
    private String guardianPhoneNumber;
    private String guardianType;
    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] profilePictureBase64data;
}
