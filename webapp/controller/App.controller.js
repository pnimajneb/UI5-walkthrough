// Use sap.ui.define for controllers and all other JavaScript modules to define a global namespace. With the namespace, the object can be addressed throughout the application.
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], (Controller, MessageToast) => {
	"use strict";

	return Controller.extend("ui5.walkthrough.controller.App", {
		onShowHello() {
			// read msg from i18n model
			const oBundle = this.getView().getModel("i18n").getResourceBundle();
			const sRecipient = this.getView().getModel().getProperty("/recipient/name");
			const sMsg = oBundle.getText("helloMsg", [sRecipient]);

			// show message
			MessageToast.show(sMsg);
		}
	});
});
