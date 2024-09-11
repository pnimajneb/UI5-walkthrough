// Use sap.ui.define for controllers and all other JavaScript modules to define a global namespace. With the namespace, the object can be addressed throughout the application.
sap.ui.define([
	"sap/ui/core/mvc/Controller"
 ], (Controller) => {
	"use strict";
 
	return Controller.extend("ui5.walkthrough.controller.App", {

		onInit() {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		}
	});
 });
