package unitTest;
import App.*;
import org.testng.Assert;
import org.testng.annotations.Test;

public class testingMath  {

    mathClass mc = new mathClass();
    @Test
    public void testAddition(){  //positive test
        int result = mc.adding(2,2);
        Assert.assertEquals(result,4);
    }
    @Test
    public void notAdding(){  // negative test
        //using a sting as an input
        int result = mc.adding(Integer.parseInt("7"),2);
        Assert.assertNotEquals(result,4);
    }

}
