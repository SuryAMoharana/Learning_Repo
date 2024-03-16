package Opearators;

public class LeftRightShift {
    public static void main(String[] args) {
        int a=24;
        int b=a<<2;
        System.out.println(b);
        int[] arr1 = {1, 2, 3};
        int[] arr2 = arr1.clone();
        arr2[0] = 4;
        System.out.println(arr1[0]);
    }
}
