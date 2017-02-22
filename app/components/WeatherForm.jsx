var React = require('react')


var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault()

    var location = this.refs.location.value
    if(location.length > 0){
      this.refs.location.value=''
      this.props.onSearch(location)
    }
  },
  render: function(){
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="text" ref="location" placeholder="Location" />
          </div>
          <div>
            <button className=" button expanded hollow">Get Weather</button>
          </div>
        </form>
      </div>
    )
  }
})

module.exports = WeatherForm

//http://samples.openweathermap.org/data/2.5/find?q={{city, country}}&units=imperial&appid=6694c4cf3d62dcbcf443b67f389be768
