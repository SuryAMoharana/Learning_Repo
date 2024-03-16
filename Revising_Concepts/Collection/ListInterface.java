package Collection;

import java.sql.Array;
import java.util.ArrayList;
import java.util.List;

//An ordered collection which can allow duplicates
public class ListInterface {
    public static void main(String[] args) {
        List<Integer> list=new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(4);
        list.add(null);
        list.add(2,5);
        list.remove(1);
        System.out.println(list.contains(1));
        System.out.println(list);
    }
}
