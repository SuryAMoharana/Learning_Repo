package Collection;

import java.util.LinkedList;
import java.util.Queue;

public class QueueInterface {
    public static void main(String[] args) {
        Queue<String> strq=new LinkedList<>();
        strq.offer("Surya");
        strq.add("Moharana");
        strq.add("Surya");
        strq.offer("Moharana");
        System.out.println(strq.peek());
        System.out.println(strq);
    }
}
