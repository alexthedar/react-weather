var React = require('react')

var ErrorModal = React.createClass({
  componentDidMount: function (){
    var modal = new Foundation.Reveal($('#error-modal'))
    modal.open()
  },
  render: function(){
    <div id="error-modal" className="reveal tiny text-center" data-reveal=''>
      <h4>Tite</h4>
      <p>erro message</p>
      <p><button className="button hollow" data-close=''>OK</button></p>
    </div>
  }
})

module.exports = ErrorModal
