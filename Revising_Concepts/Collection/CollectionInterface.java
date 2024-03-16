package Collection;

import java.util.ArrayList;
import java.util.Collection;

public class CollectionInterface {
    public static void main(String[] args) {
        Collection<String> fruits=new ArrayList<>();
        fruits.add(("ଆମ୍ବ"));
        fruits.add("କଦଳୀ");
        fruits.add("ସେଓ");
        fruits.add("କମଳା");
        fruits.remove("କଦଳୀ");
        System.out.println(fruits.contains("ଆମ୍ବ"));
    }
}
