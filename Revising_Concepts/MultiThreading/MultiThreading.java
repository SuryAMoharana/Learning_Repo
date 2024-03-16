package MultiThreading;

public class MultiThreading extends Thread {
    private int threadNumber;
    public MultiThreading(int threadNumber) {
        this.threadNumber=threadNumber;
    }

    @Override
    public void run() {
        for(int i=0;i<5;i++){
            System.out.println(i+" runs by "+threadNumber);
        }
    }
}
