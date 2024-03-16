package DSA;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class ReverseInPlace {
    public static void main(String[] args) {
        int[] arr={1,2,3,4,5,6};

        //swapping method
//        for(int i=0;i<arr.length/2;i++){
//            int temp=0;
//            temp=arr[i];
//            arr[i]=arr[arr.length-1-i];
//            arr[arr.length-1-i]=temp;
//        }

        //using Collection
        Integer[] array=Arrays.stream(arr).boxed().toArray((Integer[]::new));
        List<Integer> list=new ArrayList<>(Arrays.asList(array));
        Collections.reverse(list);
        System.out.println(Arrays.toString(list.toArray()));

        String str="abse";


    }
}
