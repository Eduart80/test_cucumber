package WebDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class Web {
    public static WebDriver driver;
    @Before
    public void inDriver() throws MalformedURLException {
        // modify on 04/07/2024
        WebDriverManager.chromedriver().setup();
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--remote-allow-origins=*");
        // WebDriverManager.edgedriver().setup();
        driver = new ChromeDriver(options);
        //  driver = new EdgeDriver();
        driver.get("https://testautomationpractice.blogspot.com/");
        System.out.println("driver started");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }
     @After
    public void quitDriver(){
        driver.quit();
    }
    public static WebDriver getDriver(){
        return driver;
    }

}
