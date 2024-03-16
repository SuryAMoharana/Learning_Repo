package DSA;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class RemoveDuplicates {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 3, 5, 4, 4, 5, 6, 7, 8, 9, 10};

        //using set
//        Integer[] array= Arrays.stream(arr).boxed().toArray(Integer[]::new);
//        Set<Integer> set=new HashSet<>(Arrays.asList(array));
//        System.out.println(set);

        //using stream
//        int[] distinctArr = Arrays.stream(arr).distinct().toArray();
//        System.out.println(Arrays.toString(distinctArr));

        //without using any function
        int newSize=1;
        for(int i=0;i<arr.length;i++){
            int j;
            for(j=0;j<newSize;j++){
                if(arr[i]==arr[j]){
                    break;
                }
            }
        }
        
    }
}
