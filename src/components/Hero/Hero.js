import React from 'react';

var Hero = React.createClass({
  render: function() {
    console.log(this.props)
    return (
      <section className="hero">
        <h3 className="introducing">Introducing</h3>
        <h1 className="framework-big-title">{this.props.data.name}</h1>
      </section>
    );
  }
})

module.exports = Hero;