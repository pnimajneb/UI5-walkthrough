sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
 ], (Controller, MessageToast) => {
    "use strict";
 
    return Controller.extend("ui5.walkthrough.controller.HelloPanel", {
       onShowHello() {
          // read msg from i18n model
          const oBundle = this.getView().getModel("i18n").getResourceBundle();
          const sRecipient = this.getView().getModel().getProperty("/recipient/name");
          const sMsg = oBundle.getText("helloMsg", [sRecipient]);
 
          // show message
          MessageToast.show(sMsg);
       },
       //The dialog has an aggregation named beginButton as well as endButton, which is why we need to use a beginButton tag in the fragment.xml
       async onOpenDialog() {
        // create dialog lazily, loadFragment API
        this.oDialog ??= await this.loadFragment({
            name: "ui5.walkthrough.view.HelloDialog"
        });
    
        this.oDialog.open();
    },
        onCloseDialog() {
        // note: We don't need to chain to the pDialog promise, since this event handler
        // is only called from within the loaded dialog itself.
        this.byId("helloDialog").close();
    }
    });
 });