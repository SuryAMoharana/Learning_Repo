package Serialization;

import java.io.*;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        Student std=new Student(1L,"Surya","Moharana");

        //write in a file
        FileWriter writer=new FileWriter("D:/PRACTICE/Text.txt");
        FileOutputStream streamFile=new FileOutputStream("D:/PRACTICE/Text.txt");
        ObjectOutputStream obj=new ObjectOutputStream(streamFile);
        obj.writeObject(std);
        obj.close();
        streamFile.close();

        //read from a file and deserialize
        FileInputStream fileInput=new FileInputStream("D:/PRACTICE/Text.txt");
        ObjectInputStream objInput=new ObjectInputStream(fileInput);
        Student deserializeStudent= (Student) objInput.readObject();

        System.out.println(deserializeStudent);

        byte[] stm="Hello World".getBytes();
        System.out.println(Arrays.toString(stm));
    }
}
