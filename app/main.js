define({

	theme: { module: 'rave-start-cujo/theme/basic.css' },

	helloView: {
		render: {
			template: { module: 'rave-start-cujo/welcome/template.html' },
			replace: { module: 'rave-start-cujo/welcome/strings' },
			css: { module: 'rave-start-cujo/welcome/structure.css' }
		},
		insert: { at: 'dom.first!body' }
	},

	controller: {
	  create: "rave-start-cujo/welcome/controller",
	  properties: {
	    node: { $ref: 'first!span', at: 'helloView' }
	  },
	  ready: 'hello'
	},
	
	// Wire.js plugins
	$plugins: [
		{ module: 'wire/dom', classes: { init: 'loading' } },
		{ module: 'wire/dom/render' }
	]
});
