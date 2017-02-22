var React = require('react')


 var WeatherMessage = ({location,temp}) => {  //location and temp are instead of props in this stateless comp
   return (
     <div>
       <h2>It's {temp} in {location}</h2>
     </div>
   )
 }
module.exports = WeatherMessage
