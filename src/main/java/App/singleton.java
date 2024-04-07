package App;

public class singleton {

    private static singleton nameIs = null;
    public String sample;

    singleton(){
        sample = "Singleton created";
    }
    public static singleton getInstance(){
        if(nameIs == null){
            nameIs = new singleton();
        }
        return nameIs;
    }


}
