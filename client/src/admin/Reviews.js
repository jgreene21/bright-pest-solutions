import React from 'react';
import { Button, Header, Segment, Icon } from "semantic-ui-react";
import axios from 'axios';
import ReviewForm from './ReviewForm';

class Reviews extends React.Component {
state = {
  review: {},
  toggleForm: false,
}

componentDidMount(){
  const review_id = this.props.match.params.id;
  axios.get(`/api/reviews/${review_id}`)
  .then((res) => {
    this.setState({ review: res.data, });
  }).catch((err) => {
    console.log(err)
  })
}

deleteReview = (id) => {
  axios.delete(`/api/reviews/${id}`)
    .then((res)=>{
      this.props.history.push('/reviews')
    })
}
toggleEditForm = () => {
  this.setState({toggleForm: !this.state.toggleForm})
}

editReview = (id, review) => {
  axios.put(`/api/reviews/${id}`, review)
  .then(res => {
    this.setState({review: res.data })
  }).catch((err) => {
    console.log(err)
  })
}

render(){
  const {stars, title, body, author, id, reviewId} = this.state.review
  return(
    <div style={{marginBottom: "5%", marginTop: "5%", marginLeft: "5%"}}>
      <Segment style={{background: "lightblue"}}>
        <Header as="h1">{ name }</Header>
      </Segment>
      <br />
      <br />
      <Items props reviewId={this.props.match.params.id} />
      <br />
      <br />
      <Button 
        color="black" 
        onClick={this.props.history.goBack}>Back</Button>
      <Button color="red" onClick={() => this.deleteReview(this.props.match.params.id)}>
      <Icon name="trash" /></Button>
    <button onClick={this.toggleEditForm}>Edit review</button>
    { this.state.toggleForm ? (
    <ReviewForm  {...this.state.review} edit={this.editReview} toggle={this.toggleEditForm}/> ) : (<></>)}
  </div>
  )
}
};

export default Reviews;