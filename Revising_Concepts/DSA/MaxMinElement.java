package DSA;

import java.util.*;

public class MaxMinElement {
    public static void main(String[] args) {
        int[] arr={-1,1,2,3,4,5};

        //using stream API
        int max= Arrays.stream(arr).max().getAsInt();
        int min=Arrays.stream(arr).min().getAsInt();
        System.out.println(max+" "+min);

        //using Collection we have first convert int[] to Integer[]
        Integer[] array=Arrays.stream(arr).boxed().toArray((Integer[]::new)); //first we need to convert an array to arrayList
        List<Integer> li=new ArrayList<>(Arrays.asList(array));
        int minValue= Collections.min(li);
        Collections.reverse(li);
        System.out.println(minValue);
        System.out.println(Arrays.toString(li.toArray()));
    }
}
