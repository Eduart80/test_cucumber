package App;

public class testSingleton {

    public static void main(String[] args) {
        singleton s = new singleton();
        System.out.println("Number = "+ singleton.getInstance());
        System.out.println("Number = "+ s.sample);
    }
}
