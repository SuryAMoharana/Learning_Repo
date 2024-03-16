package Lambda_Expression;


import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Student> students=new ArrayList<>();
        students.add(new Student(1L, "Surya", "Moharana"));
        students.add(new Student(20L,"Ashok", "Xess"));
        students.add(new Student(35L,"Sarda", "Singh"));
        students.add(new Student(25L, "Jeet", "Jena"));
        students.add((new Student(13L, "Tanmay", "Naik")));
        Collections.sort(students, (a, b)->a.getId().compareTo(b.getId()));//sorting objects with lambda function
        Collections.sort(students, Comparator.comparing(Student::getFirstName)); //using method reference

        System.out.println(students);

        MyFunction add=((a,b)->a+b); //User defined lambda function
        int result=add.operation(5,3);
        System.out.println(result);
    }
}
