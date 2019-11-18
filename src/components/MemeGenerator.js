import React from "react"

class MemeGenerator extends React.Component {
  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",
      randomCat: "",
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    fetch("https://api.thecatapi.com/v1/images/search") // obtains the data
    .then(response => response.json()) // converts to JSON
    .then(response => { 
      this.setState({ randomCat: response[0].url }) // stores new cat image in state
    })
  }

  handleChange(event) {
    const {name, value} = event.target // object destructuring
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault() // prevents reload
    fetch("https://api.thecatapi.com/v1/images/search") // obtains the data
    .then(response => response.json()) // converts to JSON
    .then(response => { 
      this.setState({ randomCat: response[0].url }) // stores new cat image in state
    })
  }

  render() {
    return (
      <main>

        <form className="inputs" onSubmit={this.handleSubmit}>

          <input
            type="text"
            name="topText"
            value={this.state.topText}
            placeholder="Top Text"
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            placeholder="Bottom Text"
            onChange={this.handleChange}
          />

          <button><span>Meow </span></button>

        </form>

        <div className="image">
          <img src={this.state.randomCat} alt="Cat Meme" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>

      </main>
    )
  }
}


export default MemeGenerator