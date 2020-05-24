import React from "react";
import { Button } from "react-bootstrap";
import * as api from "../api";

class SingleImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.userId,
      file: null,
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    api.uploadSingle(this.state).then(() => {
      window.location.reload(true);
    });
  }

  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <p>Upload a photo</p>
        <input type="file" name="myImage" onChange={this.onChange} />
        <div className="add_button">
          <Button type="submit" className="actual_button">
            Upload
          </Button>
        </div>
      </form>
    );
  }
}

export default SingleImageUpload;
