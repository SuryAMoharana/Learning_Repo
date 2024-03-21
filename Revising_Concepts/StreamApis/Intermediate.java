package StreamApis;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

//Intermediates are meant to perform operation on datas to manipulate it. But it isonly used to perform operations and need an terminate opeartion to give output
//Example of Intermediate Operation
//filter(predicate), map(function), flatMap(function), distinct(), sorted(), peek(consumer), limit(n), skip(n)

public class Intermediate {
    public static void main(String[] args) {

        //Stream<Integer> studentAge=Stream.of(1,2,3,4,22,4,6,63,2,24,6,6,3,2);

        //filter
        //studentAge.filter(a->a%2==0).forEach(System.out::println);

        //map
        //studentAge.map(a->a*2).forEach(System.out::println);

        //flatMap
        List<Student> studentList = new ArrayList<>();

        studentList.add(new Student(List.of("Math", "Physics")));
        studentList.add(new Student(List.of("Biology", "Chemistry")));
        studentList.add(new Student(List.of("History", "Geography")));

        Stream<Student> students = studentList.stream();

        Stream<String> allCourses = students.flatMap(student -> student.courses.stream());

        allCourses.forEach(System.out::println);



        

    }

}