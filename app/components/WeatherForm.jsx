var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e)
  {
    e.preventDefault();

    var location = this.refs.location.value;

    if(location.length > 0)
    {
      this.refs.location.value = ''; // clear value in box
      this.props.onSearch(location);
    }
  },
  render: function()
  {
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="text" ref="location" placeholder="Enter City Name"/>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
