var React = require('react')


 var WeatherMessage = ({location,temp}) => {  //location and temp are instead of props in this stateless comp
   return (
     <div>
       <h3 className="text-center">It's {temp} degrees F in <span id="city-name">{location}</span></h3>
     </div>
   )
 }
module.exports = WeatherMessage
