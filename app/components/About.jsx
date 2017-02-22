var React = require('react')

var About = (props) => {
  return (
      <div>
        <div className="text-center page-title">

          <h1>About</h1>
          <div className="text-center">
            <small>by Alexthedar</small>
            <div >
              <small><a href="https://github.com/alexthedar">Github&nbsp;&nbsp;</a></small>
              <small><a href="https://github.com/alexthedar">LinkedIn</a></small>
            </div>
          </div>
        </div>
        <br />
          <p>This app was made to practice React.</p>

          <p>This app uses React, React-router, Express and Axios.</p>
          <p>I used Babel, Webpack, Foundation and jQuery during dev.</p>
          <p>The app pulls third party data form the Opem Weather Api</p>
      </div>
  )
}

module.exports = About
