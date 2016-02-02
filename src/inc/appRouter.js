'use strict';
var Container = require('./Container');
var Home = require('./Home');

//var isMobile = require('./isMobile');
//if (isMobile()) {
//}

var DefaultRoute = ReactRouter.DefaultRoute;
var HistoryLocation = ReactRouter.HistoryLocation;
var NotFoundRoute = ReactRouter.NotFoundRoute;
var Route = ReactRouter.Route;

var routes = (
  <Route path="/" handler={Container}>
    {/* home */}
      <DefaultRoute name="home" handler={Home}/>
      {/* admin */}
      <Route path="admin/" name="admin" handler={Home}/>
  </Route>
);

ReactRouter.run(routes, HistoryLocation, function(Handler) {
  React.render(<Handler />, document.body);
});
