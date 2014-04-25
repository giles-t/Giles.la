
angular.module('giles').controller('portfolio', ['$scope', function ($scope) {

	$scope.projects = [
		{
			name: 'DIRECTV Entertainment 1.5',
			href: 'http://directv.com/movies',
			img: 'img/portfolio/dtve15.png',
			description: 'Completely rebuilt the DIRECTV technology stack from Java/JSP/Prototype to Node/Angular/LESS.',
			tech: 'HTML5, CSS3, Javascript, Node.js, Angular.js, Jade, LESS, jQuery, Grunt, Jasmine, GIT.',
			maintained: true,
			year: '2014'
		},
		{
			name: 'DIRECTV Mobile Acquistion',
			href: 'http://directv.com/m/acq/index.jsp#ZipCode',
			img: 'img/portfolio/dtvm10.png',
			description: 'Developed a mobile application to acquire DIRECTV users from mobile platforms and generate sales.',
			tech: 'HTML5, CSS3, Javascript, JSP, Zepto, Sencha Touch 2, Omniture, SVN.',
			maintained: true,
			year: '2013'
		},
		{
			name: 'DIRECTV Selfcare 1.0',
			href: 'http://directv.com',
			img: 'img/portfolio/dtvs10.png',
			description: 'Implemented complex user interfaces using JSP and javascript MVC\'s to allow DIRECTV users to pay their bills, order service, and upgrade equipment.',
			tech: 'HTML5, CSS3, Javascript, jQuery, Can.js, Omniture, JSP, Prototype, SVN.',
			maintained: true,
			year: '2012'
		},
		{
			name: 'Livesquare',
			href: '',
			img: 'img/portfolio/livesquare.png',
			description: 'LiveSquare uses Firebase and the Foursquare API to display real-time updating trends in major cities.',
			tech: 'HTML, CSS, Javascript, jQuery, Foursquare API, Google Maps API',
			maintained: false,
			year: '2012'
		},
		{
			name: 'Tix4Tonight',
			href: 'http://giles.la/hosted/seatgeek',
			img: 'img/portfolio/tix4tonight.png',
			description: 'Little project I put together on the Seatgeek API and Node.js.',
			tech: 'HTML, CSS, Javascript, jQuery, Node.js, Backbone.js, Seatgeek API',
			maintained: false,
			year: '2012'
		},
		{
			name: 'Essential FM',
			href: 'http://www.essential.fm',
			img: 'img/portfolio/essentialfm.png',
			description: 'A personal project that I decided to publish into the wild. Essential.fm aims to be the Reddit/Digg of electronic music.',
			tech: 'Pligg CMS with jQuery, PHP5, and the Facebook API',
			maintained: false,
			year: '2011'
		},
		{
			name: 'Robert Barry Law',
			href: 'http://lawinaz.com',
			img: 'img/portfolio/lawinaz.png',
			description: 'The Phoenix Valley\'s premier law firm for Accident, Criminal, Construction and other similar legal issues.',
			tech: 'HTML, CSS, Javascript, jQuery, Yelp API',
			maintained: false,
			year: '2011'
		},
		{
			name: 'Robert Barry Law Mobile',
			href: 'http://lawinaz.com/mobile',
			img: 'img/portfolio/lawinazmobile.png',
			description: 'The Phoenix Valley\'s premier law firm for Accident, Criminal, Construction and other similar legal issues.',
			tech: 'HTML, CSS, Javascript, jQuery, jQuery Mobile',
			maintained: false,
			year: '2011'
		},
		{
			name: 'What\'s in Your Pantry?',
			href: 'http://gilestamplin.com/hosted/helpmemakeit/',
			img: 'img/portfolio/helpmemakeit.png',
			description: 'What\'s in your pantry is a project I completed for my course work in the W.P. Carey CIS program.',
			tech: 'HTML5, CSS3, MySQL, PHP5, and jQuery.',
			maintained: false,
			year: '2010'
		},
		{
			name: 'Disaster Pros',
			href: 'http://disasterpro.net',
			img: 'img/portfolio/disasterpro.png',
			description: 'Disaster Pros is the Phoenix Valley\'s leading emergency recovery company specializing in damage mitigation (Water, Mold, Fire/Smoke).',
			tech: 'Joomla, HTML, CSS, iContact, Mobile Joomla.',
			maintained: false,
			year: '2009'
		},
		{
			name: 'Flu Solution',
			href: 'http://www.flusolution.net',
			img: 'img/portfolio/flusolution.png',
			description: 'Flu Solution is a site dedicated to informing readers of the dangers of the influenza.',
			tech: 'HTML, CSS, Javascript.',
			maintained: false,
			year: '2008'
		},
		{
			name: 'Theta Chi ASU',
			href: '',
			img: 'img/portfolio/thetachiasu.png',
			description: 'A site I put together for the Delta Upsilon Chapter of Theta Chi Fraternity.',
			tech: 'HTML, CSS, Facebook API.',
			maintained: false,
			year: '2007'
		},
		{
			name: 'Medicine Women Speak',
			href: '',
			img: 'img/portfolio/medicinewomenspeak.png',
			description: 'Medicine Women Speak is a site I put together for my mothers business.',
			tech: 'HTML, CSS, Javascript.',
			maintained: false,
			year: '2007'
		},
		{
			name: 'Operation Glass Slipper',
			href: 'http://operationglassslipper.org',
			img: 'img/portfolio/operationglassslipper.png',
			description: 'A non-profit organization that collects and donates prom dresses to underprivileged girls.',
			tech: 'Wordpress, HTML, CSS, jQuery.',
			maintained: false,
			year: '2006'
		}
	];

}]);