package JavaIO;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class FileReadWrite {
    public static void main(String[] args) {
        try {
            FileWriter writer=new FileWriter("D:/PRACTICE/Text.txt");
            writer.write("Hello Java2");
            writer.write("Hello world");
            writer.close();

            FileReader read=new FileReader("D:/PRACTICE/Text.txt");
            int character;
            while((character= read.read())!=-1){
                System.out.println(character);
            }
            read.close();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

    }
}
