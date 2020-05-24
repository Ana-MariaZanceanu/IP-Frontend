import React from "react";
import { Button } from "react-bootstrap";
import * as api from "../api";

class MultipleImageUpload extends React.Component {
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
    api.uploadMultiple(this.state).then(() => {
      window.location.reload(true);
    });
  }

  onChange(e) {
    this.setState({ file: e.target.files });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          class="actual_button"
          type="file"
          name="myImage"
          multiple
          onChange={this.onChange}
        />
        <Button type="submit" variant="outline-danger">
          Upload
        </Button>
      </form>
    );
  }
}

export default MultipleImageUpload;
