describe("Resolver Technical Assessment Tests", function () {
  this.tags = ["regression", "alltests"];

  this.retries(1);

  beforeEach(async (browser) => {
    this.loginPage = await browser.page.technicalAssessmentTest();

    /******launching homepage before starting all tests************/
    await this.loginPage.launchHomepage();
  });

  it("Test 1", async (browser) => {
    /******Verify username, password and singin button are present and visible in the page ********/
    await this.loginPage.expect.element("@txtEmail").to.be.visible;
    await this.loginPage.expect.element("@txtPassword").to.be.visible;
    await this.loginPage.expect.element("@btnSignin").to.be.visible;

    /***********Entering username and password**********************/
    await this.loginPage.login("Tom", "cdeop8*%$");
  });

  it("Test 2", async () => {
    this.loginPage.expect
      .elements("@listItemsTest2")
      .count.to.equal(3, "Verify total count of list items");

    //Assert that the second list item's value is set to "List Item 2"
    let listindex2Value =  await this.loginPage.login.getListItemvalueByIndex(1);
    browser.verify.equal(
      await listindex2Value,
      "List Item 2",
      "Assert that the second list item's value is set to List Item 2"
    );

     //Assert that the second list item's badge value is 6
     let badgeindex2Value =  await this.loginPage.login.getBadgeItemvalueByIndex(1);
     browser.verify.equal(
       await badgeindex2Value,
       "6",
       "Assert that the second list item's badge value is 6"
     );

  });

  it("Test 3", async () => {

      /*************Verify-Default-value-from-drop-down**************/
      let defaultText = await  this.loginPage.getDefaultvalue();
        browser.verify.equal(
          await defaultText,
          "Option 1",
          "verify default value of the Test 3 drop down"
      );

      /***********Select-Option-3 from the dropdown menu***************/
      this.loginPage.selectDropdown('Option 3');

  });

  it("Test 4", async () => {
    /**********assert that the first button is enabled and that the second button is disabled*********/
    await this.loginPage.expect.element("@btnTest4Enabled").to.be.enabled;
    await this.loginPage.expect.element("@btnTest4Disabled").to.not.be.enabled;
  });

  it("Test 5", async () => {
    await this.loginPage.waitforbuttonandclick();
    /**********************assert that a success message is displayed Once you've clicked the button************* */
    this.loginPage.expect
      .element("@alertTest5")
      .text.to.contain("You clicked a button!");
    /****************************Assert that the button is now disabled*************************/
    await this.loginPage.expect.element("@alertTest5").to.not.be.enabled;
  });

  it("Test 6", async () => {
     //Assert that the second list item's value is set to "List Item 2"
     let cellindex8Value =  await this.loginPage.login.getCellvalueByIndex(8);
     browser.verify.equal(
       await cellindex8Value,
       "Ventosanzap",
       "Assert that the value of the cell is Ventosanzap"
     );
  });

  afterEach(async function (browser) {
    await browser.end();
  });
});
