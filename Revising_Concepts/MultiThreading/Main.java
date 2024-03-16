package MultiThreading;

public class Main {
    public static void main(String[] args) {
        MultiThreading m1=new MultiThreading(1);
        MultiThreading m2=new MultiThreading(2);
        m1.start();
        m2.start();

        MultiRunnable mr1=new MultiRunnable();
        Thread t1=new Thread(mr1);
        t1.start();

    }
}
