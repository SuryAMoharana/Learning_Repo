package Collection;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class SetInterface {
    public static void main(String[] args) {
        Set<Integer> list=new HashSet<>();
        list.add(5);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(4);
        list.remove(1);
        System.out.println(list.contains(1));
        System.out.println(list.size());
    }
}
