var React = require('react');

var About = (props) =>
{
  return(
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application built on react.</p>
      <p>Tools used:</p>
      <ul>
        <li><a href="https://facebook.github.io/react">React</a> - React Framework</li>
        <li><a href="http://openweathermap.org">Open Weather App</a> - Weather Data</li>
      </ul>
    </div>

  );
};
module.exports = About;
