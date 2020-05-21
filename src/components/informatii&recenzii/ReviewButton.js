import React, {Component} from 'react'
import FormReview from './FormReview'
import Button from 'react-bootstrap/Button'

class ReviewButton extends Component{
  constructor(props){
    super(props);
    this.state = {
      expanded: false
    }
  }

  showButton = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render(){
    return(
      <div>
        {!this.state.expanded && (
          <Button variant="outline-info" onClick={this.showButton} block>Add a review! </Button>
        )}
        {this.state.expanded && (
          <FormReview />
        )}
      </div>
    );
  }

}

export default ReviewButton;