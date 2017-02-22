var React = require('react')


 var WeatherMessage = ({location,temp}) => {  //location and temp are instead of props in this stateless comp
   return (
     <div>
       <h3 className="text-center">It's {temp} in {location}</h3>
     </div>
   )
 }
module.exports = WeatherMessage
