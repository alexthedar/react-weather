var React = require('react')
var WeatherMessage = require('WeatherMessage')
var WeatherForm = require('WeatherForm')
var ErrorModal = require('ErrorModal')
var openWeatherMap = require('openWeatherMap')


var Weather = React.createClass({
  getInitialState: function (){
    return {
      isLoading: false
    }
  },
  handleSearch: function(location){
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    })

    var that = this
    openWeatherMap.getTemp(location).then(function(data){
      console.log(data)
      that.setState({
        location: data.location,
        temp:data.temp,
        isLoading: false
      })
    }, function(e){
      that.setState({
        isLoading: false,
        errorMessage: e.message

      })
    })
  },
  componentDidMount: function(){
    var location = this.props.location.query.location

    if(location && location.length > 0){
      this.handleSearch(location)
      window.location.hash= '#/'
    }
  },
  componentWillReceiveProps: function(newProps){
    var location = newProps.location.query.location

    if(location && location.length > 0){
      this.handleSearch(location)
      window.location.hash= '#/'
    }  },
  render: function(){
    var {location, temp, isLoading, errorMessage} = this.state

    function renderMessage(){
      if(isLoading){
        return <h3>Fetching Weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>
      }
    }

    function renderError(){
      if(typeof errorMessage === 'string'){
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Temp</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
})

module.exports = Weather
