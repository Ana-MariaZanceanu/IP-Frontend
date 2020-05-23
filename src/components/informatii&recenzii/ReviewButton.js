import React, {Component} from 'react'
import FormReview from './FormReview'
import Button from 'react-bootstrap/Button'

class ReviewButton extends Component{
  constructor(props){
    super(props);
    this.state = {
      expanded: false,
      providerId: props.providerId,
      isEditing: props.isEditing,
      revId: props.revId
    }
  }

  showButton = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render(){
    return(
      <div>
        {!this.state.expanded && !this.state.isEditing && (
          <Button variant="outline-success" onClick={this.showButton} block>Add a review! </Button>
        )}
        {!this.state.expanded && this.state.isEditing && (
          <Button variant="outline-success" onClick={this.showButton} block>Edit your review! </Button>
        )}
        {this.state.expanded && (
          <FormReview provider={this.state.providerId} isEditing={this.state.isEditing} revId={this.state.revId}/>
        )}
      </div>
    );
  }

}

export default ReviewButton;