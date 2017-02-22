var React = require('react')
var WeatherMessage = require('WeatherMessage')
var WeatherForm = require('WeatherForm')
var openWeatherMap = require('openWeatherMap')


var Weather = React.createClass({
  getInitialState: function (){
    return {
      isLoading: false
    }
  },
  handleSearch: function(location){
    this.setState({isLoading: true})

    var that = this
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp:temp,
        isLoading: false
      })
    }, function(err){
      that.setState({ isLoading: false })
      alert(err)
    })
  },
  render: function(){
    var {location, temp, isLoading} = this.state

    function renderMessage(){
      if(isLoading){
        return <h3>Fetching Weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>
      }
    }

    return (
      <div>
        <h2>The weather comp</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
})

module.exports = Weather
