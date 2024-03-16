package Collection;

import java.util.HashMap;
import java.util.Map;

public class MapSubclass {
    public static void main(String[] args) {
        Map<String, Integer> map = new HashMap<>();
        map.put("apple", 10);
        map.put("banana", 20);
        map.put("orange", 15);

        System.out.println("Number of apples: " + map.get("apple"));
        System.out.println("Contains key 'banana': " + map.containsKey("banana"));
        System.out.println("Keys in the map: " + map.keySet());
        for(Map.Entry<String, Integer> entry:map.entrySet()){
            System.out.println(entry.getKey()+" "+entry.getValue());
        }
        map.forEach((a,b)-> System.out.println(a+" "+b));
    }

}
