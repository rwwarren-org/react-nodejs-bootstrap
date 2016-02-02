'use strict';
var Navigation = ReactRouter.Navigation;
var common = require('./Common');

var Nav = React.createClass({
  mixins: [Navigation],
  render: function() {
    return (
      <div className="nav">
        <ul>
          <li>
            <a href="javascript:void(0);" onClick={() => this.transitionTo('home')}>Home</a>
          </li>
          <li>
            <a href="javascript:void(0);" onClick={() => this.transitionTo('home')}>Test</a>
          </li>
          <li>
            <a href="javascript:void(0);" onClick={() => this.transitionTo('home')}>Test</a>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = Nav;
