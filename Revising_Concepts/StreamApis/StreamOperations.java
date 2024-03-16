package StreamApis;

import java.sql.SQLOutput;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class StreamOperations {
    public static void main(String[] args) {
        List<Integer> arrayList= Arrays.asList(1,1,3,4,5,5,6,7,7,7,7,8);

        //filter() even numbers
        Object[] evenNumbers=arrayList.stream().filter(n->n%2==0).toArray();
        System.out.println(Arrays.toString(evenNumbers));

        //2nd largest number
        int num=arrayList.stream().sorted((a,b)->b.compareTo(a)).skip(1).findFirst().orElseThrow();
        System.out.println(num);

        //map() square each number
        List<Integer> squareList=arrayList.stream().map(n->n*n).toList();
        System.out.println(squareList);

        //distinct() number
        List<Integer> distinctNumber=arrayList.stream().distinct().toList();
        System.out.println(distinctNumber);

        //foreach() print each number
        arrayList.stream().forEach(n->System.out.println(n+" "));

        //collect() join number into a single string
        String joinedNumber=arrayList.stream().map(Object::toString).collect(Collectors.joining(","));
        System.out.println(joinedNumber);

        //reduce() calculate the sum of numbers
        int sum=arrayList.stream().reduce(Integer::sum).orElse(0);
        System.out.println(sum);

        //count() count the number of elements
        long count=arrayList.stream().count();
        System.out.println(count);

        //min()
        Optional<Integer> min=arrayList.stream().min(Integer::compareTo);
        System.out.println(min);
        int minNum=min.orElse(0);
        System.out.println(minNum);

        //max()
        Optional<Integer> max=arrayList.stream().max(Integer::compareTo);
        System.out.println(max);
        int maxNum=max.orElse(0);
        System.out.println(maxNum);
    }
}
