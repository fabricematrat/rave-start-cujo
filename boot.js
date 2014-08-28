(function(d,s){
	h=(d.html||d.getElementsByTagName('html')[0])
	h.setAttribute('data-debug','');
	h.setAttribute('data-rave-meta','bower.json');
	s=(d.head||d.getElementsByTagName('head')[0]).appendChild(d.createElement('script'));
	s.async=!1;
	s.src='bower_components/rave/rave.js';
}(document));
