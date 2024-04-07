package poject;

import WebDriver.Web;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import static WebDriver.Web.driver;

public class landingPlace {

    By inputName = By.id("name");
    By inputEmail = By.id("email");
    By inputPhone = By.id("phone");
    By radioButtonMale = By.id("male");

    public void gotoURL(){
        System.out.println("Starting the web page");
    }
    public void enterName(String name){
       WebElement entryName = driver.findElement(inputName);
       entryName.sendKeys(name);
    }
    public void enterEmail(String email){
        WebElement entryEmail = driver.findElement(inputEmail);
        entryEmail.sendKeys(email);
    }
    public void enterNumber(int number){
        WebElement phone = driver.findElement(inputPhone);
        phone.sendKeys(String.valueOf(number));
    }
    public void clickRadio(){
        WebElement clickR = driver.findElement(radioButtonMale);
        clickR.click();
    }

}
