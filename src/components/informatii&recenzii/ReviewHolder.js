import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Review from './Review';

import axios from "axios";
import ReviewButton from './ReviewButton';
import UserContext from "../UserContext";

export class Menu extends Component {

  constructor(props){
    super(props);
    this.state = {
       providerId: props.providerId,
       reviews: [],
       isLoaded: false,
       isEmptyState: false,
       isEditing: false,
       revId: " ",
       isLoadedSimple: false
    }
  }

  static contextType = UserContext;
 
  componentDidMount() {
    axios.get("https://ip-i-r-api.herokuapp.com/api/reviews/?providerId=" + this.state.providerId + "&reviewerId=" + this.context.user._id)
         .then((response) => { 
          if(response.data.data.averageScore === null) this.setState({isEditing: false, isLoadedSimple: true});
          else this.setState({isEditing: true,
                              revId: response.data.data.reviews[0]._id,
                              isLoadedSimple: true});
         });
    axios
      .get("https://ip-i-r-api.herokuapp.com/api/reviews/?providerId=" + this.state.providerId)
      .then((response) => {
        this.setState({
          reviews: response.data.data.reviews,
          isLoaded: true,
        });
      });
    
  }

  

  render() {
    if (!this.state.isLoaded || !this.state.isLoadedSimple) {
      return <p>Loading...</p>;
    } else {
      return (
          <div id="reviewsdiv" class="shadow p-3 mb-5 bg-F3F3F3 rounded">
          <p className="menuTitle">Reviews</p>
         <ReviewButton providerId={this.state.providerId} isEditing={this.state.isEditing} revId={this.state.revId}/>
          {this.state.reviews.map(item =>(
              <div>
                <div className="line"></div>
                <Review
                  id={item._id}
                  userID={item.reviewerId}
                  score={item.score}
                  content={item.description}
                  helpfulness={item.helpfulness}
                  upvotes={item.upvotes}
                  downvotes = {item.downvotes}
                />
              </div>
              ))
          }
        </div>
      );
    }
}
}

export default Menu;
