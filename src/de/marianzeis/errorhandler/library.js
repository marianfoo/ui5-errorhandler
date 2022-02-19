/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library de.marianzeis.errorhandler.
 */
sap.ui.define([
	"sap/ui/core/library"
], function () {
	"use strict";

	// delegate further initialization of this library to the Core
	// Hint: sap.ui.getCore() must still be used to support preload with sync bootstrap!
	sap.ui.getCore().initLibrary({
		name: "de.marianzeis.errorhandler",
		version: "${version}",
		dependencies: [ // keep in sync with the ui5.yaml and .library files
			"sap.ui.core"
		],
		types: [
			"de.marianzeis.errorhandler.ExampleColor"
		],
		interfaces: [],
		controls: [
			"de.marianzeis.errorhandler.Example",
			"de.marianzeis.errorhandler.ErrorHandler"
		],
		elements: [],
		noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
	});

	/**
	 * Some description about <code>errorhandler</code>
	 *
	 * @namespace
	 * @name de.marianzeis.errorhandler
	 * @author marianfoo
	 * @version ${version}
	 * @public
	 */
	var thisLib = de.marianzeis.errorhandler;

	/**
	 * Semantic Colors of the <code>de.marianzeis.errorhandler.Example</code>.
	 *
	 * @enum {string}
	 * @public
	 */
	thisLib.ExampleColor = {

		/**
		 * Default color (brand color)
		 * @public
		 */
		Default : "Default",

		/**
		 * Highlight color
		 * @public
		 */
		Highlight : "Highlight"

	};

	return thisLib;

});
