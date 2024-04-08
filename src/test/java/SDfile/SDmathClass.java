package SDfile;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import poject.landingPlace;


public class SDmathClass {
    landingPlace lp = new landingPlace();

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
}
