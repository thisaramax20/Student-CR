package edu.icet.crm.model;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Setter
@Getter
public class Student {
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
    private String profilePictureData;
}
