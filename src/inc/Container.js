'use strict';

var Router = ReactRouter;
var { Route, RouteHandler, Link } = Router;
var Navigation = ReactRouter.Navigation;
var Logo = require('./Logo');
var Home = require('./Home');
var Footer = require('./Footer');
var Nav = require('./Nav');
var common = require('./Common');

var Container = React.createClass({
  mixins: [Navigation],
  componentDidMount: function() {
    if($.cookie("sid") == null) {
      $.cookie("sid", common.makeid());
    }
  },
  getInitialState: function() {
    return {
      isLoggedIn: false
    };
  },
  render: function() {
    return (
      <div className="container">
        <Logo />
        <Nav />
        <RouteHandler />
        <Footer />
      </div>
    );
  }
});

module.exports = Container;
