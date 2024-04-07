import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/resources/Feature"},
        glue = {"SDfile", "WebDriver"},
//        tags = "@unit",
        plugin = {"pretty","html:target/cucumber"},
        monochrome = true
)
public class testRunner {
}
