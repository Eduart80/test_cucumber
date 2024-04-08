package poject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.io.IOException;
import java.util.List;
import java.util.Objects;

import static WebDriver.Web.driver;

public class landingPlace extends  BasePage{

    By inputName = By.id("name");
    By inputEmail = By.id("email");
    By inputPhone = By.id("phone");
    By radioButtonMale = By.id("male");
    By dropDown = By.id("country");
    By options = By.xpath("//select[@id='country']/option");

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
    public void setDropDown(String name){
        Select objectSelection = new Select(driver.findElement(dropDown));
        objectSelection.selectByVisibleText(name);
        try {
            BasePage.takeScreenShoot("setDropDown");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
