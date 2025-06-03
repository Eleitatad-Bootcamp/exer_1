sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.acn.training.firstproject.controller.mainview", {
        onInit() {
        },
        onClearPress: function () {
            // Clear text fields
            this.byId("nameInput").setValue("");
            this.byId("streetInput").setValue("");
            this.byId("cityInput").setValue("");
        
            // Clear ComboBox selection
            this.byId("box0").setSelectedKey(null);
        }
    });
});
