import React from 'react'
import Header from "./Header"
class PhotoGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            Images:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(event){
        const {value} = event.target
        const clientId = "yG8RNNUwwaU16Q-HyHgcFfdlDYprYIskEkLtjon5zs4"
        fetch("https://api.unsplash.com/search/photos?page=1&query="+[value]+"&client_id="+[clientId])
        .then(
            response => response.json()
        )
        .then(response =>{
            this.setState({Images:response.results})
        })
    }
    handleChange(event) {
        const {name,value} = event.target
        this.setState({[name] : value})
    }

    render() {
        return(
            <div>
                <Header handleClick = {this.handleClick} handleChange={this.handleChange}  data = {this.state}/>
            </div>)

    }
}
export default PhotoGenerator