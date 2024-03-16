package Comparable_Comparator;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Student> studentList=new ArrayList<>();
        studentList.add(new Student(10L,"Surya","Moharana"));
        studentList.add(new Student(9L,"Ashok","Xess"));
        studentList.add(new Student(15L,"Jeet","Jena"));
        studentList.add(new Student(36L,"Sarda","Singh"));
        studentList.add(new Student(38L,"Tanmay","Naik"));
        Collections.sort(studentList); //using Comparable one logic
        Collections.sort(studentList, new IdComparator()); //using Comparator different logic
        for(Student std:studentList){
            System.out.println(std);
        }
    }
}
