sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"sap/ui/core/library"
], function(Controller, JSONModel, MessageToast, coreLibrary) {
	"use strict";

	const MessageType = coreLibrary.MessageType;

	return Controller.extend("converted.materialdataview.controller.MaterialDataView", {
		onInit: function() {
			// Load mock data
			const oMockDataModel = new JSONModel();
			oMockDataModel.loadData("model/mockData/mockData.json");
			this.getView().setModel(oMockDataModel, "mockData");

			// Initialize message model (optional - for later error/success messages)
			const oMessageModel = new JSONModel({
				messages: [] // Start with an empty array
			});
			this.getView().setModel(oMessageModel, "messages");
		},

		//This section is improved by splitting in more manageable functions
		onActionSearchMaterial: function() {
			MessageToast.show("Search Material functionality not yet implemented.");
		},

		onToggleCheckbox1: function(oEvent) {
			const bChecked = oEvent.getSource().getChecked();
			this.getView().getModel("mockData").setProperty("/MaterialData/Checkbox1Selected", bChecked);
		},

		onToggleCheckbox2: function(oEvent) {
			const bChecked = oEvent.getSource().getChecked();
			this.getView().getModel("mockData").setProperty("/MaterialData/Checkbox2Selected", bChecked);
		},

		onSelectRadio: function(oEvent) {
			const sSelectedKey = oEvent.getSource().getSelectedKey();
			this.getView().getModel("mockData").setProperty("/MaterialData/SelectedRadioKey", sSelectedKey);
		},

		onActionGetData: function() {
			//  Placeholder for data retrieval logic.  Replace with actual API call.
			MessageToast.show("GET DATA functionality not yet implemented.");
		},

		onActionExit: function() {
			// Implement exit logic here (e.g., close the application, navigate to another view).
			MessageToast.show("EXIT functionality not yet implemented.");
		},

		onLeadSelectDropDown: function(oEvent) {
			const selectedKey = oEvent.getSource().getSelectedKey();
			MessageToast.show(`Selected option: ${selectedKey}`);
		},
		onActionMore: function() {
			MessageToast.show("More options not yet implemented.");
		}
	});
});
