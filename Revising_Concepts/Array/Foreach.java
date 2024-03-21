package Array;

import java.util.Arrays;

public class Foreach {
    public static void main(String[] args) {
        int[] arr={1,2,3,4,5,6,7,8};
        int start=0;
        int end=arr.length-1;
        while(start<end){
            int temp=arr[start];
            arr[start]=arr[end];
            arr[end]=temp;
            start++;
            end--;
        }
        System.out.println(Arrays.toString(arr));

        String str="and dishf sfs";
        System.out.println(str.replace(" ",""));
    }
}
