var React = require('react');
var {Link} = require('react-router');

var Examples = (props) =>
{
  return(
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few sample locations to try out:</p>
      <ol>
        <li>
          <Link to="/?location=Galway">Galway, Ireland</Link>
        </li>
        <li>
          <Link to="/?location=Dublin">Dublin, Ireland</Link>
        </li>
      </ol>
    </div>
  );
};
module.exports = Examples;
