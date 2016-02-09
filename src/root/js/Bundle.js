(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/ryan/Documents/react-nodejs-bootstrap/gulp/../src/inc/appRouter.js":[function(require,module,exports){
"use strict";
'use strict';
var Container = require('./Container');
var Home = require('./Home');
var DefaultRoute = ReactRouter.DefaultRoute;
var HistoryLocation = ReactRouter.HistoryLocation;
var NotFoundRoute = ReactRouter.NotFoundRoute;
var Route = ReactRouter.Route;
var routes = (React.createElement(Route, {
  path: "/",
  handler: Container
}, React.createElement(DefaultRoute, {
  name: "home",
  handler: Home
}), React.createElement(Route, {
  path: "admin/",
  name: "admin",
  handler: Home
})));
ReactRouter.run(routes, HistoryLocation, function(Handler) {
  React.render(React.createElement(Handler, null), document.body);
});


//# sourceURL=/Users/ryan/Documents/react-nodejs-bootstrap/src/inc/appRouter.js
},{"./Container":"/Users/ryan/Documents/react-nodejs-bootstrap/src/inc/Container.js","./Home":"/Users/ryan/Documents/react-nodejs-bootstrap/src/inc/Home.js"}],"/Users/ryan/Documents/react-nodejs-bootstrap/src/inc/Common.js":[function(require,module,exports){
"use strict";
'use strict';
var makesid = function() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 103; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};
var Common = {'makeid': makesid};
module.exports = Common;


//# sourceURL=/Users/ryan/Documents/react-nodejs-bootstrap/src/inc/Common.js
},{}],"/Users/ryan/Documents/react-nodejs-bootstrap/src/inc/Container.js":[function(require,module,exports){
"use strict";
'use strict';
var Router = ReactRouter;
var $__0 = Router,
    Route = $__0.Route,
    RouteHandler = $__0.RouteHandler,
    Link = $__0.Link;
var Navigation = ReactRouter.Navigation;
var Logo = require('./Logo');
var Home = require('./Home');
var Footer = require('./Footer');
var Nav = require('./Nav');
var common = require('./Common');
var Container = React.createClass({
  displayName: "Container",
  mixins: [Navigation],
  componentDidMount: function() {
    if ($.cookie("sid") == null) {
      $.cookie("sid", common.makeid());
    }
  },
  getInitialState: function() {
    return {isLoggedIn: false};
  },
  render: function() {
    return (React.createElement("div", {className: "container"}, React.createElement(Logo, null), React.createElement(Nav, null), React.createElement(RouteHandler, null), React.createElement(Footer, null)));
  }
});
module.exports = Container;


//# sourceURL=/Users/ryan/Documents/react-nodejs-bootstrap/src/inc/Container.js
},{"./Common":"/Users/ryan/Documents/react-nodejs-bootstrap/src/inc/Common.js","./Footer":"/Users/ryan/Documents/react-nodejs-bootstrap/src/inc/Footer.js","./Home":"/Users/ryan/Documents/react-nodejs-bootstrap/src/inc/Home.js","./Logo":"/Users/ryan/Documents/react-nodejs-bootstrap/src/inc/Logo.js","./Nav":"/Users/ryan/Documents/react-nodejs-bootstrap/src/inc/Nav.js"}],"/Users/ryan/Documents/react-nodejs-bootstrap/src/inc/Footer.js":[function(require,module,exports){
"use strict";
'use strict';
var Footer = React.createClass({
  displayName: "Footer",
  render: function() {
    var now = new Date;
    var theYear = now.getYear();
    if (theYear < 1900) {
      theYear = theYear + 1900;
    }
    return (React.createElement("div", {className: "footer"}, '\u00A9', " ", theYear, " Test"));
  }
});
module.exports = Footer;


//# sourceURL=/Users/ryan/Documents/react-nodejs-bootstrap/src/inc/Footer.js
},{}],"/Users/ryan/Documents/react-nodejs-bootstrap/src/inc/Home.js":[function(require,module,exports){
"use strict";
'use strict';
var Home = React.createClass({
  displayName: "Home",
  render: function() {
    return (React.createElement("div", null, "Welcome to the home page!"));
  }
});
module.exports = Home;


//# sourceURL=/Users/ryan/Documents/react-nodejs-bootstrap/src/inc/Home.js
},{}],"/Users/ryan/Documents/react-nodejs-bootstrap/src/inc/Logo.js":[function(require,module,exports){
"use strict";
'use strict';
var Logo = React.createClass({
  displayName: "Logo",
  render: function() {
    return (React.createElement("div", {className: "logo"}));
  }
});
module.exports = Logo;


//# sourceURL=/Users/ryan/Documents/react-nodejs-bootstrap/src/inc/Logo.js
},{}],"/Users/ryan/Documents/react-nodejs-bootstrap/src/inc/Nav.js":[function(require,module,exports){
"use strict";
'use strict';
var Navigation = ReactRouter.Navigation;
var common = require('./Common');
var Nav = React.createClass({
  displayName: "Nav",
  mixins: [Navigation],
  render: function() {
    var $__0 = this;
    return (React.createElement("div", {className: "nav"}, React.createElement("ul", null, React.createElement("li", null, React.createElement("a", {
      href: "javascript:void(0);",
      onClick: (function() {
        return $__0.transitionTo('home');
      })
    }, "Home")), React.createElement("li", null, React.createElement("a", {
      href: "javascript:void(0);",
      onClick: (function() {
        return $__0.transitionTo('home');
      })
    }, "Test")), React.createElement("li", null, React.createElement("a", {
      href: "javascript:void(0);",
      onClick: (function() {
        return $__0.transitionTo('home');
      })
    }, "Test")))));
  }
});
module.exports = Nav;


//# sourceURL=/Users/ryan/Documents/react-nodejs-bootstrap/src/inc/Nav.js
},{"./Common":"/Users/ryan/Documents/react-nodejs-bootstrap/src/inc/Common.js"}]},{},["/Users/ryan/Documents/react-nodejs-bootstrap/gulp/../src/inc/appRouter.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvcnlhbi9Eb2N1bWVudHMvcmVhY3Qtbm9kZWpzLWJvb3RzdHJhcC9zcmMvaW5jL2FwcFJvdXRlci5qcyIsIi9Vc2Vycy9yeWFuL0RvY3VtZW50cy9yZWFjdC1ub2RlanMtYm9vdHN0cmFwL3NyYy9pbmMvQ29tbW9uLmpzIiwiL1VzZXJzL3J5YW4vRG9jdW1lbnRzL3JlYWN0LW5vZGVqcy1ib290c3RyYXAvc3JjL2luYy9Db250YWluZXIuanMiLCIvVXNlcnMvcnlhbi9Eb2N1bWVudHMvcmVhY3Qtbm9kZWpzLWJvb3RzdHJhcC9zcmMvaW5jL0Zvb3Rlci5qcyIsIi9Vc2Vycy9yeWFuL0RvY3VtZW50cy9yZWFjdC1ub2RlanMtYm9vdHN0cmFwL3NyYy9pbmMvSG9tZS5qcyIsIi9Vc2Vycy9yeWFuL0RvY3VtZW50cy9yZWFjdC1ub2RlanMtYm9vdHN0cmFwL3NyYy9pbmMvTG9nby5qcyIsIi9Vc2Vycy9yeWFuL0RvY3VtZW50cy9yZWFjdC1ub2RlanMtYm9vdHN0cmFwL3NyYy9pbmMvTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFBQSxXQUFXLENBQUM7QUFDWixBQUFJLEVBQUEsQ0FBQSxTQUFRLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyxhQUFZLENBQUMsQ0FBQztBQUN0QyxBQUFJLEVBQUEsQ0FBQSxJQUFHLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyxRQUFPLENBQUMsQ0FBQztBQU01QixBQUFJLEVBQUEsQ0FBQSxZQUFXLEVBQUksQ0FBQSxXQUFVLGFBQWEsQ0FBQztBQUMzQyxBQUFJLEVBQUEsQ0FBQSxlQUFjLEVBQUksQ0FBQSxXQUFVLGdCQUFnQixDQUFDO0FBQ2pELEFBQUksRUFBQSxDQUFBLGFBQVksRUFBSSxDQUFBLFdBQVUsY0FBYyxDQUFDO0FBQzdDLEFBQUksRUFBQSxDQUFBLEtBQUksRUFBSSxDQUFBLFdBQVUsTUFB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dGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xudmFyIENvbnRhaW5lciA9IHJlcXVpcmUoJy4vQ29udGFpbmVyJyk7XG52YXIgSG9tZSA9IHJlcXVpcmUoJy4vSG9tZScpO1xuXG4vL3ZhciBpc01vYmlsZSA9IHJlcXVpcmUoJy4vaXNNb2JpbGUnKTtcbi8vaWYgKGlzTW9iaWxlKCkpIHtcbi8vfVxuXG52YXIgRGVmYXVsdFJvdXRlID0gUmVhY3RSb3V0ZXIuRGVmYXVsdFJvdXRlO1xudmFyIEhpc3RvcnlMb2NhdGlvbiA9IFJlYWN0Um91dGVyLkhpc3RvcnlMb2NhdGlvbjtcbnZhciBOb3RGb3VuZFJvdXRlID0gUmVhY3RSb3V0ZXIuTm90Rm91bmRSb3V0ZTtcbnZhciBSb3V0ZSA9IFJlYWN0Um91dGVyLlJvdXRlO1xuXG52YXIgcm91dGVzID0gKFxuICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCIvXCIsIGhhbmRsZXI6IENvbnRhaW5lcn0sIFxuICAgIC8qIGhvbWUgKi9cbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGVmYXVsdFJvdXRlLCB7bmFtZTogXCJob21lXCIsIGhhbmRsZXI6IEhvbWV9KSwgXG4gICAgICAvKiBhZG1pbiAqL1xuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwiYWRtaW4vXCIsIG5hbWU6IFwiYWRtaW5cIiwgaGFuZGxlcjogSG9tZX0pXG4gIClcbik7XG5cblJlYWN0Um91dGVyLnJ1bihyb3V0ZXMsIEhpc3RvcnlMb2NhdGlvbiwgZnVuY3Rpb24oSGFuZGxlcikge1xuICBSZWFjdC5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChIYW5kbGVyLCBudWxsKSwgZG9jdW1lbnQuYm9keSk7XG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pTDFWelpYSnpMM0o1WVc0dlJHOWpkVzFsYm5SekwzSmxZV04wTFc1dlpHVnFjeTFpYjI5MGMzUnlZWEF2YzNKakwybHVZeTloY0hCU2IzVjBaWEl1YW5NaUxDSnpiM1Z5WTJWeklqcGJJaTlWYzJWeWN5OXllV0Z1TDBSdlkzVnRaVzUwY3k5eVpXRmpkQzF1YjJSbGFuTXRZbTl2ZEhOMGNtRndMM055WXk5cGJtTXZZWEJ3VW05MWRHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQkxGbEJRVmtzUTBGQlF6dEJRVU5pTEVsQlFVa3NVMEZCVXl4SFFVRkhMRTlCUVU4c1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF6dEJRVU4yUXl4SlFVRkpMRWxCUVVrc1IwRkJSeXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdPMEZCUlRkQ0xIVkRRVUYxUXp0QlFVTjJReXh0UWtGQmJVSTdRVUZEYmtJc1IwRkJSenM3UVVGRlNDeEpRVUZKTEZsQlFWa3NSMEZCUnl4WFFVRlhMRU5CUVVNc1dVRkJXU3hEUVVGRE8wRkJRelZETEVsQlFVa3NaVUZCWlN4SFFVRkhMRmRCUVZjc1EwRkJReXhsUVVGbExFTkJRVU03UVVGRGJFUXNTVUZCU1N4aFFVRmhMRWRCUVVjc1YwRkJWeXhEUVVGRExHRkJRV0VzUTBGQlF6dEJRVU01UXl4SlFVRkpMRXRCUVVzc1IwRkJSeXhYUVVGWExFTkJRVU1zUzBGQlN5eERRVUZET3p0QlFVVTVRaXhKUVVGSkxFMUJRVTA3UlVGRFVpeHZRa0ZCUXl4TFFVRkxMRVZCUVVFc1EwRkJRU3hEUVVGRExFbEJRVUVzUlVGQlNTeERRVUZETEVkQlFVRXNSVUZCUnl4RFFVRkRMRTlCUVVFc1JVRkJUeXhEUVVGRkxGTkJRVmNzUTBGQlFTeEZRVUZCTzBsQlEycERMRlZCUVZjN1RVRkRWaXh2UWtGQlF5eFpRVUZaTEVWQlFVRXNRMEZCUVN4RFFVRkRMRWxCUVVFc1JVRkJTU3hEUVVGRExFMUJRVUVzUlVGQlRTeERRVUZETEU5QlFVRXNSVUZCVHl4RFFVRkZMRWxCUVVzc1EwRkJSU3hEUVVGQkxFVkJRVUU3VFVGRGVrTXNWMEZCV1R0TlFVTmlMRzlDUVVGRExFdEJRVXNzUlVGQlFTeERRVUZCTEVOQlFVTXNTVUZCUVN4RlFVRkpMRU5CUVVNc1VVRkJRU3hGUVVGUkxFTkJRVU1zU1VGQlFTeEZRVUZKTEVOQlFVTXNUMEZCUVN4RlFVRlBMRU5CUVVNc1QwRkJRU3hGUVVGUExFTkJRVVVzU1VGQlN5eERRVUZGTEVOQlFVRTdSVUZET1VNc1EwRkJRVHRCUVVOV0xFTkJRVU1zUTBGQlF6czdRVUZGUml4WFFVRlhMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUlVGQlJTeGxRVUZsTEVWQlFVVXNVMEZCVXl4UFFVRlBMRVZCUVVVN1JVRkRla1FzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4dlFrRkJReXhQUVVGUExFVkJRVUVzU1VGQlFTeERRVUZITEVOQlFVRXNSVUZCUlN4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03UTBGRE1VTXNRMEZCUXl4RFFVRkRJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpSjNWelpTQnpkSEpwWTNRbk8xeHVkbUZ5SUVOdmJuUmhhVzVsY2lBOUlISmxjWFZwY21Vb0p5NHZRMjl1ZEdGcGJtVnlKeWs3WEc1MllYSWdTRzl0WlNBOUlISmxjWFZwY21Vb0p5NHZTRzl0WlNjcE8xeHVYRzR2TDNaaGNpQnBjMDF2WW1sc1pTQTlJSEpsY1hWcGNtVW9KeTR2YVhOTmIySnBiR1VuS1R0Y2JpOHZhV1lnS0dselRXOWlhV3hsS0NrcElIdGNiaTh2ZlZ4dVhHNTJZWElnUkdWbVlYVnNkRkp2ZFhSbElEMGdVbVZoWTNSU2IzVjBaWEl1UkdWbVlYVnNkRkp2ZFhSbE8xeHVkbUZ5SUVocGMzUnZjbmxNYjJOaGRHbHZiaUE5SUZKbFlXTjBVbTkxZEdWeUxraHBjM1J2Y25sTWIyTmhkR2x2Ymp0Y2JuWmhjaUJPYjNSR2IzVnVaRkp2ZFhSbElEMGdVbVZoWTNSU2IzVjBaWEl1VG05MFJtOTFibVJTYjNWMFpUdGNiblpoY2lCU2IzVjBaU0E5SUZKbFlXTjBVbTkxZEdWeUxsSnZkWFJsTzF4dVhHNTJZWElnY205MWRHVnpJRDBnS0Z4dUlDQThVbTkxZEdVZ2NHRjBhRDFjSWk5Y0lpQm9ZVzVrYkdWeVBYdERiMjUwWVdsdVpYSjlQbHh1SUNBZ0lIc3ZLaUJvYjIxbElDb3ZmVnh1SUNBZ0lDQWdQRVJsWm1GMWJIUlNiM1YwWlNCdVlXMWxQVndpYUc5dFpWd2lJR2hoYm1Sc1pYSTllMGh2YldWOUx6NWNiaUFnSUNBZ0lIc3ZLaUJoWkcxcGJpQXFMMzFjYmlBZ0lDQWdJRHhTYjNWMFpTQndZWFJvUFZ3aVlXUnRhVzR2WENJZ2JtRnRaVDFjSW1Ga2JXbHVYQ0lnYUdGdVpHeGxjajE3U0c5dFpYMHZQbHh1SUNBOEwxSnZkWFJsUGx4dUtUdGNibHh1VW1WaFkzUlNiM1YwWlhJdWNuVnVLSEp2ZFhSbGN5d2dTR2x6ZEc5eWVVeHZZMkYwYVc5dUxDQm1kVzVqZEdsdmJpaElZVzVrYkdWeUtTQjdYRzRnSUZKbFlXTjBMbkpsYm1SbGNpZzhTR0Z1Wkd4bGNpQXZQaXdnWkc5amRXMWxiblF1WW05a2VTazdYRzU5S1R0Y2JpSmRmUT09IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbWFrZXNpZCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgdGV4dCA9IFwiXCI7XG4gIHZhciBwb3NzaWJsZSA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODlcIjtcbiAgZm9yKHZhciBpID0gMDsgaSA8IDEwMzsgaSsrKSB7XG4gICAgdGV4dCArPSBwb3NzaWJsZS5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGUubGVuZ3RoKSk7XG4gIH1cbiAgcmV0dXJuIHRleHQ7XG59O1xuXG52YXIgQ29tbW9uID0ge1xuICAnbWFrZWlkJzogbWFrZXNpZFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb21tb247XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaUwxVnpaWEp6TDNKNVlXNHZSRzlqZFcxbGJuUnpMM0psWVdOMExXNXZaR1ZxY3kxaWIyOTBjM1J5WVhBdmMzSmpMMmx1WXk5RGIyMXRiMjR1YW5NaUxDSnpiM1Z5WTJWeklqcGJJaTlWYzJWeWN5OXllV0Z1TDBSdlkzVnRaVzUwY3k5eVpXRmpkQzF1YjJSbGFuTXRZbTl2ZEhOMGNtRndMM055WXk5cGJtTXZRMjl0Ylc5dUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTEZsQlFWa3NRMEZCUXpzN1FVRkZZaXhKUVVGSkxFOUJRVThzUjBGQlJ5eFhRVUZYTzBWQlEzWkNMRWxCUVVrc1NVRkJTU3hIUVVGSExFVkJRVVVzUTBGQlF6dEZRVU5rTEVsQlFVa3NVVUZCVVN4SFFVRkhMR2RGUVVGblJTeERRVUZETzBWQlEyaEdMRWxCUVVrc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3U1VGRE0wSXNTVUZCU1N4SlFVRkpMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1IwRkRkRVU3UlVGRFJDeFBRVUZQTEVsQlFVa3NRMEZCUXp0QlFVTmtMRU5CUVVNc1EwRkJRenM3UVVGRlJpeEpRVUZKTEUxQlFVMHNSMEZCUnp0RlFVTllMRkZCUVZFc1JVRkJSU3hQUVVGUE8wRkJRMjVDTEVOQlFVTXNRMEZCUXpzN1FVRkZSaXhOUVVGTkxFTkJRVU1zVDBGQlR5eEhRVUZITEUxQlFVMHNRMEZCUXlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWRtRnlJRzFoYTJWemFXUWdQU0JtZFc1amRHbHZiaWdwSUh0Y2JpQWdkbUZ5SUhSbGVIUWdQU0JjSWx3aU8xeHVJQ0IyWVhJZ2NHOXpjMmxpYkdVZ1BTQmNJa0ZDUTBSRlJrZElTVXBMVEUxT1QxQlJVbE5VVlZaWFdGbGFZV0pqWkdWbVoyaHBhbXRzYlc1dmNIRnljM1IxZG5kNGVYb3dNVEl6TkRVMk56ZzVYQ0k3WEc0Z0lHWnZjaWgyWVhJZ2FTQTlJREE3SUdrZ1BDQXhNRE03SUdrckt5a2dlMXh1SUNBZ0lIUmxlSFFnS3owZ2NHOXpjMmxpYkdVdVkyaGhja0YwS0UxaGRHZ3VabXh2YjNJb1RXRjBhQzV5WVc1a2IyMG9LU0FxSUhCdmMzTnBZbXhsTG14bGJtZDBhQ2twTzF4dUlDQjlYRzRnSUhKbGRIVnliaUIwWlhoME8xeHVmVHRjYmx4dWRtRnlJRU52YlcxdmJpQTlJSHRjYmlBZ0oyMWhhMlZwWkNjNklHMWhhMlZ6YVdSY2JuMDdYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnUTI5dGJXOXVPMXh1SWwxOSIsIid1c2Ugc3RyaWN0JztcblxudmFyIFJvdXRlciA9IFJlYWN0Um91dGVyO1xudmFyIHsgUm91dGUsIFJvdXRlSGFuZGxlciwgTGluayB9ID0gUm91dGVyO1xudmFyIE5hdmlnYXRpb24gPSBSZWFjdFJvdXRlci5OYXZpZ2F0aW9uO1xudmFyIExvZ28gPSByZXF1aXJlKCcuL0xvZ28nKTtcbnZhciBIb21lID0gcmVxdWlyZSgnLi9Ib21lJyk7XG52YXIgRm9vdGVyID0gcmVxdWlyZSgnLi9Gb290ZXInKTtcbnZhciBOYXYgPSByZXF1aXJlKCcuL05hdicpO1xudmFyIGNvbW1vbiA9IHJlcXVpcmUoJy4vQ29tbW9uJyk7XG5cbnZhciBDb250YWluZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiQ29udGFpbmVyXCIsXG4gIG1peGluczogW05hdmlnYXRpb25dLFxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgaWYoJC5jb29raWUoXCJzaWRcIikgPT0gbnVsbCkge1xuICAgICAgJC5jb29raWUoXCJzaWRcIiwgY29tbW9uLm1ha2VpZCgpKTtcbiAgICB9XG4gIH0sXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTG9nZ2VkSW46IGZhbHNlXG4gICAgfTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNvbnRhaW5lclwifSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTG9nbywgbnVsbCksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE5hdiwgbnVsbCksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlSGFuZGxlciwgbnVsbCksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvb3RlciwgbnVsbClcbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb250YWluZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaUwxVnpaWEp6TDNKNVlXNHZSRzlqZFcxbGJuUnpMM0psWVdOMExXNXZaR1ZxY3kxaWIyOTBjM1J5WVhBdmMzSmpMMmx1WXk5RGIyNTBZV2x1WlhJdWFuTWlMQ0p6YjNWeVkyVnpJanBiSWk5VmMyVnljeTl5ZVdGdUwwUnZZM1Z0Wlc1MGN5OXlaV0ZqZEMxdWIyUmxhbk10WW05dmRITjBjbUZ3TDNOeVl5OXBibU12UTI5dWRHRnBibVZ5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJMRmxCUVZrc1EwRkJRenM3UVVGRllpeEpRVUZKTEUxQlFVMHNSMEZCUnl4WFFVRlhMRU5CUVVNN1FVRkRla0lzU1VGQlNTeEZRVUZGTEV0QlFVc3NSVUZCUlN4WlFVRlpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFZEJRVWNzVFVGQlRTeERRVUZETzBGQlF6TkRMRWxCUVVrc1ZVRkJWU3hIUVVGSExGZEJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTTdRVUZEZUVNc1NVRkJTU3hKUVVGSkxFZEJRVWNzVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMEZCUXpkQ0xFbEJRVWtzU1VGQlNTeEhRVUZITEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRCUVVNM1FpeEpRVUZKTEUxQlFVMHNSMEZCUnl4UFFVRlBMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03UVVGRGFrTXNTVUZCU1N4SFFVRkhMRWRCUVVjc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzBGQlF6TkNMRWxCUVVrc1RVRkJUU3hIUVVGSExFOUJRVThzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXpzN1FVRkZha01zU1VGQlNTd3JRa0ZCSzBJc2VVSkJRVUU3UlVGRGFrTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1ZVRkJWU3hEUVVGRE8wVkJRM0JDTEdsQ1FVRnBRaXhGUVVGRkxGZEJRVmM3U1VGRE5VSXNSMEZCUnl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVsQlFVa3NSVUZCUlR0TlFVTXhRaXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlN4TlFVRk5MRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dExRVU5zUXp0SFFVTkdPMFZCUTBRc1pVRkJaU3hGUVVGRkxGZEJRVmM3U1VGRE1VSXNUMEZCVHp0TlFVTk1MRlZCUVZVc1JVRkJSU3hMUVVGTE8wdEJRMnhDTEVOQlFVTTdSMEZEU0R0RlFVTkVMRTFCUVUwc1JVRkJSU3hYUVVGWE8wbEJRMnBDTzAxQlEwVXNiMEpCUVVFc1MwRkJTU3hGUVVGQkxFTkJRVUVzUTBGQlF5eFRRVUZCTEVWQlFWTXNRMEZCUXl4WFFVRlpMRU5CUVVFc1JVRkJRVHRSUVVONlFpeHZRa0ZCUXl4SlFVRkpMRVZCUVVFc1NVRkJRU3hEUVVGSExFTkJRVUVzUlVGQlFUdFJRVU5TTEc5Q1FVRkRMRWRCUVVjc1JVRkJRU3hKUVVGQkxFTkJRVWNzUTBGQlFTeEZRVUZCTzFGQlExQXNiMEpCUVVNc1dVRkJXU3hGUVVGQkxFbEJRVUVzUTBGQlJ5eERRVUZCTEVWQlFVRTdVVUZEYUVJc2IwSkJRVU1zVFVGQlRTeEZRVUZCTEVsQlFVRXNRMEZCUnl4RFFVRkJPMDFCUTA0c1EwRkJRVHROUVVOT08wZEJRMGc3UVVGRFNDeERRVUZETEVOQlFVTXNRMEZCUXpzN1FVRkZTQ3hOUVVGTkxFTkJRVU1zVDBGQlR5eEhRVUZITEZOQlFWTXNRMEZCUXlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWRtRnlJRkp2ZFhSbGNpQTlJRkpsWVdOMFVtOTFkR1Z5TzF4dWRtRnlJSHNnVW05MWRHVXNJRkp2ZFhSbFNHRnVaR3hsY2l3Z1RHbHVheUI5SUQwZ1VtOTFkR1Z5TzF4dWRtRnlJRTVoZG1sbllYUnBiMjRnUFNCU1pXRmpkRkp2ZFhSbGNpNU9ZWFpwWjJGMGFXOXVPMXh1ZG1GeUlFeHZaMjhnUFNCeVpYRjFhWEpsS0NjdUwweHZaMjhuS1R0Y2JuWmhjaUJJYjIxbElEMGdjbVZ4ZFdseVpTZ25MaTlJYjIxbEp5azdYRzUyWVhJZ1JtOXZkR1Z5SUQwZ2NtVnhkV2x5WlNnbkxpOUdiMjkwWlhJbktUdGNiblpoY2lCT1lYWWdQU0J5WlhGMWFYSmxLQ2N1TDA1aGRpY3BPMXh1ZG1GeUlHTnZiVzF2YmlBOUlISmxjWFZwY21Vb0p5NHZRMjl0Ylc5dUp5azdYRzVjYm5aaGNpQkRiMjUwWVdsdVpYSWdQU0JTWldGamRDNWpjbVZoZEdWRGJHRnpjeWg3WEc0Z0lHMXBlR2x1Y3pvZ1cwNWhkbWxuWVhScGIyNWRMRnh1SUNCamIyMXdiMjVsYm5SRWFXUk5iM1Z1ZERvZ1puVnVZM1JwYjI0b0tTQjdYRzRnSUNBZ2FXWW9KQzVqYjI5cmFXVW9YQ0p6YVdSY0lpa2dQVDBnYm5Wc2JDa2dlMXh1SUNBZ0lDQWdKQzVqYjI5cmFXVW9YQ0p6YVdSY0lpd2dZMjl0Ylc5dUxtMWhhMlZwWkNncEtUdGNiaUFnSUNCOVhHNGdJSDBzWEc0Z0lHZGxkRWx1YVhScFlXeFRkR0YwWlRvZ1puVnVZM1JwYjI0b0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0FnSUdselRHOW5aMlZrU1c0NklHWmhiSE5sWEc0Z0lDQWdmVHRjYmlBZ2ZTeGNiaUFnY21WdVpHVnlPaUJtZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lDQWdQR1JwZGlCamJHRnpjMDVoYldVOVhDSmpiMjUwWVdsdVpYSmNJajVjYmlBZ0lDQWdJQ0FnUEV4dloyOGdMejVjYmlBZ0lDQWdJQ0FnUEU1aGRpQXZQbHh1SUNBZ0lDQWdJQ0E4VW05MWRHVklZVzVrYkdWeUlDOCtYRzRnSUNBZ0lDQWdJRHhHYjI5MFpYSWdMejVjYmlBZ0lDQWdJRHd2WkdsMlBseHVJQ0FnSUNrN1hHNGdJSDFjYm4wcE8xeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRU52Ym5SaGFXNWxjanRjYmlKZGZRPT0iLCIndXNlIHN0cmljdCc7XG5cbnZhciBGb290ZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiRm9vdGVyXCIsXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIG5vdyA9IG5ldyBEYXRlO1xuICAgIHZhciB0aGVZZWFyID0gbm93LmdldFllYXIoKTtcbiAgICBpZih0aGVZZWFyIDwgMTkwMCkge1xuICAgICAgdGhlWWVhciA9IHRoZVllYXIgKyAxOTAwXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiZm9vdGVyXCJ9LCBcbiAgICAgICAgJ1xcdTAwQTknLCBcIiBcIiwgdGhlWWVhciwgXCIgVGVzdFwiXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRm9vdGVyO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lMMVZ6WlhKekwzSjVZVzR2Ukc5amRXMWxiblJ6TDNKbFlXTjBMVzV2WkdWcWN5MWliMjkwYzNSeVlYQXZjM0pqTDJsdVl5OUdiMjkwWlhJdWFuTWlMQ0p6YjNWeVkyVnpJanBiSWk5VmMyVnljeTl5ZVdGdUwwUnZZM1Z0Wlc1MGN5OXlaV0ZqZEMxdWIyUmxhbk10WW05dmRITjBjbUZ3TDNOeVl5OXBibU12Um05dmRHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQkxGbEJRVmtzUTBGQlF6czdRVUZGWWl4SlFVRkpMRFJDUVVFMFFpeHpRa0ZCUVR0RlFVTTVRaXhOUVVGTkxFVkJRVVVzVjBGQlZ6dEpRVU5xUWl4SlFVRkpMRWRCUVVjc1IwRkJSeXhKUVVGSkxFbEJRVWtzUTBGQlF6dEpRVU51UWl4SlFVRkpMRTlCUVU4c1IwRkJSeXhIUVVGSExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdTVUZETlVJc1IwRkJSeXhQUVVGUExFZEJRVWNzU1VGQlNTeEZRVUZGTzAxQlEycENMRTlCUVU4c1IwRkJSeXhQUVVGUExFZEJRVWNzU1VGQlNUdExRVU42UWp0SlFVTkVPMDFCUTBVc2IwSkJRVUVzUzBGQlNTeEZRVUZCTEVOQlFVRXNRMEZCUXl4VFFVRkJMRVZCUVZNc1EwRkJReXhSUVVGVExFTkJRVUVzUlVGQlFUdFJRVU55UWl4UlFVRlJMRVZCUVVNc1IwRkJRU3hGUVVGRkxFOUJRVThzUlVGQlF5eFBRVUZCTzBGQlFVRXNUVUZEYUVJc1EwRkJRVHROUVVOT08wZEJRMGc3UVVGRFNDeERRVUZETEVOQlFVTXNRMEZCUXpzN1FVRkZTQ3hOUVVGTkxFTkJRVU1zVDBGQlR5eEhRVUZITEUxQlFVMHNRMEZCUXlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWRtRnlJRVp2YjNSbGNpQTlJRkpsWVdOMExtTnlaV0YwWlVOc1lYTnpLSHRjYmlBZ2NtVnVaR1Z5T2lCbWRXNWpkR2x2YmlncElIdGNiaUFnSUNCMllYSWdibTkzSUQwZ2JtVjNJRVJoZEdVN1hHNGdJQ0FnZG1GeUlIUm9aVmxsWVhJZ1BTQnViM2N1WjJWMFdXVmhjaWdwTzF4dUlDQWdJR2xtS0hSb1pWbGxZWElnUENBeE9UQXdLU0I3WEc0Z0lDQWdJQ0IwYUdWWlpXRnlJRDBnZEdobFdXVmhjaUFySURFNU1EQmNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJQ2hjYmlBZ0lDQWdJRHhrYVhZZ1kyeGhjM05PWVcxbFBWd2labTl2ZEdWeVhDSStYRzRnSUNBZ0lDQWdJSHNuWEZ4MU1EQkJPU2Q5SUh0MGFHVlpaV0Z5ZlNCVVpYTjBYRzRnSUNBZ0lDQThMMlJwZGo1Y2JpQWdJQ0FwTzF4dUlDQjlYRzU5S1R0Y2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQkdiMjkwWlhJN1hHNGlYWDA9IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgSG9tZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJIb21lXCIsXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFxuICAgICAgICBcIldlbGNvbWUgdG8gdGhlIGhvbWUgcGFnZSFcIlxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhvbWU7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaUwxVnpaWEp6TDNKNVlXNHZSRzlqZFcxbGJuUnpMM0psWVdOMExXNXZaR1ZxY3kxaWIyOTBjM1J5WVhBdmMzSmpMMmx1WXk5SWIyMWxMbXB6SWl3aWMyOTFjbU5sY3lJNld5SXZWWE5sY25NdmNubGhiaTlFYjJOMWJXVnVkSE12Y21WaFkzUXRibTlrWldwekxXSnZiM1J6ZEhKaGNDOXpjbU12YVc1akwwaHZiV1V1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNXVUZCV1N4RFFVRkRPenRCUVVWaUxFbEJRVWtzTUVKQlFUQkNMRzlDUVVGQk8wVkJRelZDTEUxQlFVMHNSVUZCUlN4WlFVRlpPMGxCUTJ4Q08wMUJRMFVzYjBKQlFVRXNTMEZCU1N4RlFVRkJMRWxCUVVNc1JVRkJRVHRCUVVGQkxGRkJRVUVzTWtKQlFVRTdRVUZCUVN4TlFVVkRMRU5CUVVFN1RVRkRUanRIUVVOSU8wRkJRMGdzUTBGQlF5eERRVUZETEVOQlFVTTdPMEZCUlVnc1RVRkJUU3hEUVVGRExFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUluZFhObElITjBjbWxqZENjN1hHNWNiblpoY2lCSWIyMWxJRDBnVW1WaFkzUXVZM0psWVhSbFEyeGhjM01vZTF4dUlDQnlaVzVrWlhJNklHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z0tGeHVJQ0FnSUNBZ1BHUnBkajVjYmlBZ0lDQWdJQ0FnVjJWc1kyOXRaU0IwYnlCMGFHVWdhRzl0WlNCd1lXZGxJVnh1SUNBZ0lDQWdQQzlrYVhZK1hHNGdJQ0FnS1R0Y2JpQWdmVnh1ZlNrN1hHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdTRzl0WlR0Y2JpSmRmUT09IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTG9nbyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJMb2dvXCIsXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJsb2dvXCJ9XG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTG9nbztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaUwxVnpaWEp6TDNKNVlXNHZSRzlqZFcxbGJuUnpMM0psWVdOMExXNXZaR1ZxY3kxaWIyOTBjM1J5WVhBdmMzSmpMMmx1WXk5TWIyZHZMbXB6SWl3aWMyOTFjbU5sY3lJNld5SXZWWE5sY25NdmNubGhiaTlFYjJOMWJXVnVkSE12Y21WaFkzUXRibTlrWldwekxXSnZiM1J6ZEhKaGNDOXpjbU12YVc1akwweHZaMjh1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNXVUZCV1N4RFFVRkRPenRCUVVWaUxFbEJRVWtzTUVKQlFUQkNMRzlDUVVGQk8wVkJRelZDTEUxQlFVMHNSVUZCUlN4WFFVRlhPMGxCUTJwQ08wMUJRMFVzYjBKQlFVRXNTMEZCU1N4RlFVRkJMRU5CUVVFc1EwRkJReXhUUVVGQkxFVkJRVk1zUTBGQlF5eE5RVUZQTEVOQlFVRTdUVUZEYUVJc1EwRkJRVHROUVVOT08wZEJRMGc3UVVGRFNDeERRVUZETEVOQlFVTXNRMEZCUXpzN1FVRkZTQ3hOUVVGTkxFTkJRVU1zVDBGQlR5eEhRVUZITEVsQlFVa2lMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUluZFhObElITjBjbWxqZENjN1hHNWNiblpoY2lCTWIyZHZJRDBnVW1WaFkzUXVZM0psWVhSbFEyeGhjM01vZTF4dUlDQnlaVzVrWlhJNklHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lISmxkSFZ5YmlBb1hHNGdJQ0FnSUNBOFpHbDJJR05zWVhOelRtRnRaVDFjSW14dloyOWNJajVjYmlBZ0lDQWdJRHd2WkdsMlBseHVJQ0FnSUNrN1hHNGdJSDFjYm4wcE8xeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRXh2WjI4N0lsMTkiLCIndXNlIHN0cmljdCc7XG52YXIgTmF2aWdhdGlvbiA9IFJlYWN0Um91dGVyLk5hdmlnYXRpb247XG52YXIgY29tbW9uID0gcmVxdWlyZSgnLi9Db21tb24nKTtcblxudmFyIE5hdiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJOYXZcIixcbiAgbWl4aW5zOiBbTmF2aWdhdGlvbl0sXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJuYXZcIn0sIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgbnVsbCwgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApO1wiLCBvbkNsaWNrOiAoKSA9PiB0aGlzLnRyYW5zaXRpb25UbygnaG9tZScpfSwgXCJIb21lXCIpXG4gICAgICAgICAgKSwgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApO1wiLCBvbkNsaWNrOiAoKSA9PiB0aGlzLnRyYW5zaXRpb25UbygnaG9tZScpfSwgXCJUZXN0XCIpXG4gICAgICAgICAgKSwgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApO1wiLCBvbkNsaWNrOiAoKSA9PiB0aGlzLnRyYW5zaXRpb25UbygnaG9tZScpfSwgXCJUZXN0XCIpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTmF2O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lMMVZ6WlhKekwzSjVZVzR2Ukc5amRXMWxiblJ6TDNKbFlXTjBMVzV2WkdWcWN5MWliMjkwYzNSeVlYQXZjM0pqTDJsdVl5OU9ZWFl1YW5NaUxDSnpiM1Z5WTJWeklqcGJJaTlWYzJWeWN5OXllV0Z1TDBSdlkzVnRaVzUwY3k5eVpXRmpkQzF1YjJSbGFuTXRZbTl2ZEhOMGNtRndMM055WXk5cGJtTXZUbUYyTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJMRmxCUVZrc1EwRkJRenRCUVVOaUxFbEJRVWtzVlVGQlZTeEhRVUZITEZkQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNN1FVRkRlRU1zU1VGQlNTeE5RVUZOTEVkQlFVY3NUMEZCVHl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE96dEJRVVZxUXl4SlFVRkpMSGxDUVVGNVFpeHRRa0ZCUVR0RlFVTXpRaXhOUVVGTkxFVkJRVVVzUTBGQlF5eFZRVUZWTEVOQlFVTTdSVUZEY0VJc1RVRkJUU3hGUVVGRkxGZEJRVmM3U1VGRGFrSTdUVUZEUlN4dlFrRkJRU3hMUVVGSkxFVkJRVUVzUTBGQlFTeERRVUZETEZOQlFVRXNSVUZCVXl4RFFVRkRMRXRCUVUwc1EwRkJRU3hGUVVGQk8xRkJRMjVDTEc5Q1FVRkJMRWxCUVVjc1JVRkJRU3hKUVVGRExFVkJRVUU3VlVGRFJpeHZRa0ZCUVN4SlFVRkhMRVZCUVVFc1NVRkJReXhGUVVGQk8xbEJRMFlzYjBKQlFVRXNSMEZCUlN4RlFVRkJMRU5CUVVFc1EwRkJReXhKUVVGQkxFVkJRVWtzUTBGQlF5eHhRa0ZCUVN4RlFVRnhRaXhEUVVGRExFOUJRVUVzUlVGQlR5eERRVUZGTEUxQlFVMHNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhOUVVGTkxFTkJRVWNzUTBGQlFTeEZRVUZCTEUxQlFWRXNRMEZCUVR0VlFVTTNSU3hEUVVGQkxFVkJRVUU3VlVGRFRDeHZRa0ZCUVN4SlFVRkhMRVZCUVVFc1NVRkJReXhGUVVGQk8xbEJRMFlzYjBKQlFVRXNSMEZCUlN4RlFVRkJMRU5CUVVFc1EwRkJReXhKUVVGQkxFVkJRVWtzUTBGQlF5eHhRa0ZCUVN4RlFVRnhRaXhEUVVGRExFOUJRVUVzUlVGQlR5eERRVUZGTEUxQlFVMHNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhOUVVGTkxFTkJRVWNzUTBGQlFTeEZRVUZCTEUxQlFWRXNRMEZCUVR0VlFVTTNSU3hEUVVGQkxFVkJRVUU3VlVGRFRDeHZRa0ZCUVN4SlFVRkhMRVZCUVVFc1NVRkJReXhGUVVGQk8xbEJRMFlzYjBKQlFVRXNSMEZCUlN4RlFVRkJMRU5CUVVFc1EwRkJReXhKUVVGQkxFVkJRVWtzUTBGQlF5eHhRa0ZCUVN4RlFVRnhRaXhEUVVGRExFOUJRVUVzUlVGQlR5eERRVUZGTEUxQlFVMHNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhOUVVGTkxFTkJRVWNzUTBGQlFTeEZRVUZCTEUxQlFWRXNRMEZCUVR0VlFVTTNSU3hEUVVGQk8xRkJRMFlzUTBGQlFUdE5RVU5FTEVOQlFVRTdUVUZEVGp0SFFVTklPMEZCUTBnc1EwRkJReXhEUVVGRExFTkJRVU03TzBGQlJVZ3NUVUZCVFN4RFFVRkRMRTlCUVU4c1IwRkJSeXhIUVVGSExFTkJRVU1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJbmRYTmxJSE4wY21samRDYzdYRzUyWVhJZ1RtRjJhV2RoZEdsdmJpQTlJRkpsWVdOMFVtOTFkR1Z5TGs1aGRtbG5ZWFJwYjI0N1hHNTJZWElnWTI5dGJXOXVJRDBnY21WeGRXbHlaU2duTGk5RGIyMXRiMjRuS1R0Y2JseHVkbUZ5SUU1aGRpQTlJRkpsWVdOMExtTnlaV0YwWlVOc1lYTnpLSHRjYmlBZ2JXbDRhVzV6T2lCYlRtRjJhV2RoZEdsdmJsMHNYRzRnSUhKbGJtUmxjam9nWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnY21WMGRYSnVJQ2hjYmlBZ0lDQWdJRHhrYVhZZ1kyeGhjM05PWVcxbFBWd2libUYyWENJK1hHNGdJQ0FnSUNBZ0lEeDFiRDVjYmlBZ0lDQWdJQ0FnSUNBOGJHaytYRzRnSUNBZ0lDQWdJQ0FnSUNBOFlTQm9jbVZtUFZ3aWFtRjJZWE5qY21sd2REcDJiMmxrS0RBcE8xd2lJRzl1UTJ4cFkyczlleWdwSUQwK0lIUm9hWE11ZEhKaGJuTnBkR2x2YmxSdktDZG9iMjFsSnlsOVBraHZiV1U4TDJFK1hHNGdJQ0FnSUNBZ0lDQWdQQzlzYVQ1Y2JpQWdJQ0FnSUNBZ0lDQThiR2srWEc0Z0lDQWdJQ0FnSUNBZ0lDQThZU0JvY21WbVBWd2lhbUYyWVhOamNtbHdkRHAyYjJsa0tEQXBPMXdpSUc5dVEyeHBZMnM5ZXlncElEMCtJSFJvYVhNdWRISmhibk5wZEdsdmJsUnZLQ2RvYjIxbEp5bDlQbFJsYzNROEwyRStYRzRnSUNBZ0lDQWdJQ0FnUEM5c2FUNWNiaUFnSUNBZ0lDQWdJQ0E4YkdrK1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4WVNCb2NtVm1QVndpYW1GMllYTmpjbWx3ZERwMmIybGtLREFwTzF3aUlHOXVRMnhwWTJzOWV5Z3BJRDArSUhSb2FYTXVkSEpoYm5OcGRHbHZibFJ2S0Nkb2IyMWxKeWw5UGxSbGMzUThMMkUrWEc0Z0lDQWdJQ0FnSUNBZ1BDOXNhVDVjYmlBZ0lDQWdJQ0FnUEM5MWJENWNiaUFnSUNBZ0lEd3ZaR2wyUGx4dUlDQWdJQ2s3WEc0Z0lIMWNibjBwTzF4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlFNWhkanRjYmlKZGZRPT0iXX0=
