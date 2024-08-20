module.exports = {
  elements: {
    /**************Login-Elements****************************/
    txtEmail: {
      selector: "#inputEmail",
      abortOnFailure: false,
      suppressNotFoundErrors: true,
    },
    txtPassword: {
      selector: "#inputPassword",
      abortOnFailure: false,
      suppressNotFoundErrors: true,
    },
    btnSignin: {
      selector: "//*[contains(text(),'Sign in')]",
      locateStrategy: "xpath",
      abortOnFailure: false,
      suppressNotFoundErrors: true,
    },
    bodyContainer: {
      selector: ".container",
      abortOnFailure: false,
      suppressNotFoundErrors: true,
    },
    /*****************Test-2-Elements*********************/
    listItemsTest2: {
      selector: "#test-2-div .list-group-item",
      abortOnFailure: false,
      suppressNotFoundErrors: true,
    },
    badgeItemsTest2:{
      selector: ".badge.badge-pill.badge-primary",
      abortOnFailure: false,
      suppressNotFoundErrors: true,
    },
    /***************Test-3-Elements***********************/
    dropdownMenu: {
      selector: "#test-3-div #dropdownMenuButton",
      abortOnFailure: false,
      suppressNotFoundErrors: true,
    },
    dropdownOption: {
      selector: ".dropdown-menu.show .dropdown-item",
      abortOnFailure: false,
      suppressNotFoundErrors: true,
    },

    /***************Test-4-Elements*********************/
    btnTest4Enabled: {
      selector: "#test-4-div .btn.btn-lg.btn-primary",
      abortOnFailure: false,
      suppressNotFoundErrors: true,
    },
    btnTest4Disabled: {
      selector: "#test-4-div .btn.btn-lg.btn-secondary",
      abortOnFailure: false,
      suppressNotFoundErrors: true,
    },

    /***************Test-5-Elements*********************/
    btnTest5: {
      selector: "#test-5-div #test5-button",
      abortOnFailure: false,
      suppressNotFoundErrors: true,
    },
    alertTest5: {
      selector: "#test-5-div #test5-alert",
      abortOnFailure: false,
      suppressNotFoundErrors: true,
    },
    /**************Test-6-Elements*******************/
    txtTest6Cell: {
      selector: "#test-6-div tbody td",
      abortOnFailure: false,
      suppressNotFoundErrors: true,
    },
  },
  commands: [
    {
      async launchHomepage() {
        await this.api.url(
          "http://Technical-Assessment-Resolver/QE-index.html#"
        );
        await this.waitForElementVisible("@bodyContainer", 1000);
      },
      async login(usrname, pwd) {
        await this.waitForElementVisible("@txtEmail", 500);
        await this.waitForElementVisible("@txtPassword", 500);
        await this.setValue("@txtEmail", usrname);
        await this.setValue("@txtPassword", pwd);
      },
      /*************Test-2-commands****************/
      async getListItemvalueByIndex(ind) {
        await this.waitForElementVisible("@listItemsTest2", 500);
        let items = await this.api.elements("@listItemsTest2");
        let text;
        for (let i = 0; i < items.value.length; i++) {
          text = await this.api.elementIdText(items.value[ind].ELEMENT);
         }
         return text.value.trim();
      },
      async getBadgeItemvalueByIndex(ind) {
        await this.waitForElementVisible("@badgeItemsTest2", 500);
        let items = await this.api.elements("@badgeItemsTest2");
        let text;
        for (let i = 0; i < items.value.length; i++) {
          text = await this.api.elementIdText(items.value[ind].ELEMENT);
         }
         return text.value.trim();
      },

      /*************Test-3-commands****************/
      async selectDropdown(option) {
        await this.waitForElementVisible("@dropdownMenu", 500);
        await this.click("@dropdownMenu");
        await this.setValue('@dropdownOption',option);
      },
      async getDefaultvalue(){
        await this.waitForElementVisible("@dropdownMenu", 500);
        let defaultValue = await this.getValue("@dropdownMenu");
        return defaultValue.value;

      },

      /********Test-5-commands********************/
      async waitforbuttonandclick() {
        let btnStatus = await this.isVisible("@btnTest5");
        if (btnStatus.value == true) {
          await this.click("@btnTest5");
        }
      },
    /*****************Test-6-commands****************/
    async getCellvalueByIndex(ind) {
      await this.waitForElementVisible("@txtTest6Cell", 500);
      let items = await this.api.elements("@txtTest6Cell");
      let text;
      for (let i = 0; i < items.value.length; i++) {
        text = await this.api.elementIdText(items.value[ind].ELEMENT);
       }
       return text.value.trim();
    },
    },
  ],
};
