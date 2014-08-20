define({

	// Load a basic theme. This is just a CSS file, and since a moduleLoader is
	// configured in run.js, curl knows to load this as CSS.
	theme: { module: 'rave-start-cujo/theme/basic.css' },

	// Create a simple view by rendering html, replacing some i18n strings
	// and loading CSS.  Then, insert into the DOM
	message: {
		render: {
			template: { module: 'rave-start-cujo/welcome/template.html' },
			replace: { module: 'rave-start-cujo/welcome/strings' },
			css: { module: 'rave-start-cujo/welcome/structure.css' }
		},
		insert: { at: 'dom.first!body' }
	},

	// Wire.js plugins
	$plugins: [
		{ module: 'wire/dom', classes: { init: 'loading' } },
		{ module: 'wire/dom/render' }
	]
});
