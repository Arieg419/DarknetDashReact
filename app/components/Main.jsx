var React = require('react');
var Aside = require('Aside');
var Navigation = require('Navigation');

var Main = (props) => {
  return (
    <div>
      <Aside/>
      <Navigation/>
          {props.children}
    </div>
  );
}

module.exports = Main;
