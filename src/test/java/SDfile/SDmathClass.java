package SDfile;

import App.BasePage.mathAplication;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import poject.landingPlace;


public class SDmathClass {
    // assertion in SD file
    landingPlace lp = new landingPlace();
    int numbers;

    @Given("^the file in app (.+)$")
    public void aa(String country)  {
        lp.setDropDown(country);
        System.out.println("Staring math test");
    }
    @When("^i enter (.) adding (.)$")
    public void ll(int numb1, int numb2) {
        System.out.println("2");
    }
    @When("^i should get (.)$")
    public void ll(int numb) {
        System.out.println("3");
    }
    @Given("^the numbers (.+) and (.+)$")
    public void addingTest(int numb1, int numb2){
        mathAplication ma = new mathAplication();
        numbers = ma.adding(numb1, numb2);
    }
    @Then("^i should have (.+)$")
    public void resultMath(int result){
        Assert.assertEquals(numbers, result);
    }
}
