sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function(Controller, UIComponent) {
	"use strict";

	return Controller.extend("converted.materialdataview.controller.App", {
		onInit: function() {
			// Get the router instance
			const oRouter = UIComponent.getRouterFor(this);

			// Add error handling for routing
			oRouter.attachBypassed(function(oEvent) {
				const sHash = oEvent.getParameter("hash");
				console.warn(`Route bypassed: ${sHash}`);
				// Potentially display an error message to the user.
			});

			// Navigate to main view if no hash is set or if it's the default hash (#)
			if (!window.location.hash || window.location.hash === "#") {
				// Use setTimeout to allow the router to initialize properly.
				setTimeout(() => {
					oRouter.navTo("RouteMain");
				}, 100);
			}
		}
	});
});
