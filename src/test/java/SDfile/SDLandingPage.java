package SDfile;

import cucumber.api.java.en.*;
import poject.landingPlace;

public class SDLandingPage {
    landingPlace lp = new landingPlace();

    @Given("^the url$")
    public void aa()  {
        lp.gotoURL();
    }

    @When("^on page enter name (.+)$")
    public void ll(String name) {
        lp.enterName(name);
        System.out.println("2");
    }
    @When("^enter your email (.+)$")
    public void ldl(String email) {
        lp.enterEmail(email);
        System.out.println("3");
    }
    @When("^enter your phone (.+)$")
    public void all(int number) {
        lp.enterNumber(number);
        System.out.println("4");
    }
    @When("^click male radio button$")
    public void radioBtn() {
        lp.clickRadio();
        System.out.println("5");
    }


}
