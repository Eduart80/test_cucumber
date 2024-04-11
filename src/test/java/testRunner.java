import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/resources/Feature"},
        glue = {"SDfile", "WebDriver"},
        tags = "@unit",
        plugin = {"pretty","html:target/cucumber-reports", "json:target/cucumber.json"},
       // dryRun = true,
        monochrome = true
)
public class testRunner{
}
