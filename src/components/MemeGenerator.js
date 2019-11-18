import React from "react"

class MemeGenerator extends React.Component {
  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg", // starter image
      allMemeImages: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes") // obtains the data
    .then(response => response.json()) // converts to JSON
    .then(response => {
      const {memes} = response.data // extracts separated meme info from response data
      this.setState({ allMemeImages: memes }) // stores all meme objects in state
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
    const randomNum = Math.floor(Math.random() * this.state.allMemeImages.length)
    const randomUrl = this.state.allMemeImages[randomNum].url 
    this.setState({ randomImage: randomUrl })
  }

  render() {
    return (
      <div>

        <form className="meme-form" onSubmit={this.handleSubmit}>

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

          <button>Meow</button>

        </form>

        <div className="meme">
          <img src={this.state.randomImage} alt="Meme" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>

      </div>
    )
  }
}


export default MemeGenerator