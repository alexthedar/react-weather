var React = require('react')

var About = (props) => {
  return (
      <div>
        <h1 className="text-center">About</h1>
        <p>This app uses React, React-router, Express and Axios.</p>
        <p>I used Babel, Webpack, Foundation and jQuery during dev.</p>
        <p>The app pulls third party data form the Opem Weather Api</p>
      </div>
  )
}

module.exports = About
