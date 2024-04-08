package poject;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.io.File;
import java.io.IOException;

import static WebDriver.Web.driver;

public class BasePage {
    public static void takeScreenShoot(String name) throws IOException {
        File tss = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(tss, new File("screenShots/"+name+".png"));
    }
}
