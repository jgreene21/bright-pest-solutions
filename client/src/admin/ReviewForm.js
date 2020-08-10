import React from "react";
import { Form, Button, Header } from "semantic-ui-react";
import axios from "axios";
import StarRating from "../components/StarRating";
import Review from "../components/Review";

class ReviewForm extends React.Component {
  state = {
    stars:'',
    title: '',
    body: '',
    author: ''
  }

  componentDidMount() {
    if (this.props.id) {
      this.setState({
        stars: this.props.stars,
        title: this.props.title,
        body: this.props.body,
        author: this.props.author })
    } 
  }

  handleChange = (e) => {
    console.log(e)
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    console.log(e)
    e.preventDefault()
    // check if props, if so do edit function, otherwise do add
    const review = { ...this.state }
    if (this.props.id) {
      this.props.edit(this.props.id, review)
      this.props.toggle()

    } else {        
        axios.post('/api/reviews', review)
        .then((res) => {
          console.log(res)
          this.setState({name:''})
          this.props.history.push('/reviews')
        }).catch((err) => {
          console.log(err)
        })
      }
  }

  render(){
    const {stars, title, body, author} = this.state
    return(
      <div>
      <Header as='h1'>{this.props.id ? "Edit Review" : "New Review"}</Header>
      <Form onSubmit={this.handleSubmit}>
        <StarRating 
        value={stars}
        onChange={this.handleChange}
        />
        <Form.Group widths="equal">
          <Form.Input
            label="Title"
            name="title"
            placeholder="Title"
            value={title}
            onChange={this.handleChange}
          />
          <Form.TextArea 
          label="Body"
          name="body"
          placeholder='Tell us about your experience with Bright Pest Solutions...' 
          value={body}
          onChange={this.handleChange}
          />
           <Form.Input
            label="First Name and Last Initial (City)"
            name="author"
            placeholder=""
            value={author}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button color="blue">Submit</Button>
      </Form>
      </div>
    )
  }
};

export default ReviewForm; 