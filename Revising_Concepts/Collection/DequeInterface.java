package Collection;

import java.util.Deque;
import java.util.LinkedList;

public class DequeInterface {
    public static void main(String[] args) {
        Deque<String> deq=new LinkedList<>();

        deq.add("Seu");
        deq.add("Tamato");
        deq.addFirst("Alu");
        deq.addLast("Kakharu");
        deq.removeFirst();
        System.out.println(deq);
    }
}
