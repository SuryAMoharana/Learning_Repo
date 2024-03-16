package Generics;

import java.util.*;

public class Generics<T,U,V>{
    private T id;
    private U firstName;

    private V lastName;


    public Generics(T id, U firstName, V lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    @Override
    public String toString() {
        return "Generics{" +
                "id=" + id +
                ", firstName=" + firstName +
                '}';
    }
}
