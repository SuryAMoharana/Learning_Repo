package StreamApis;

//It is considered as the final operation on streams;
//example count(), collect(collector), findFirst(), findAny(), forEach(consumer), min(comparator), max(comparator), anyMatch(predicate), allMatch(predicate), noneMatch(predicate)

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Terminals {
    public static void main(String[] args) {
        Stream<Integer> count=Stream.of(1,2,2,3,4,5,3,4,5,6);

        //count
        //System.out.println(count.count());

        //collect(collector)
        //System.out.println(count.collect(Collectors.toList()));

        //findFirst
        //System.out.println(count.findFirst());

        //findAny
        //System.out.println(count.findAny())

        //min(comparator)
        //Optional<Integer> a=count.skip(2).min(Integer::compareTo);
        //System.out.println(a.get());

        //Convert List to Map using stream
        List<Integer> list=List.of(1,1,2,3,4,5,2,3,4,5,6);
        Map<Integer, Long> map=list.stream().collect(Collectors.groupingBy(Integer::valueOf, Collectors.counting()));
        System.out.println(map);
    }
}
