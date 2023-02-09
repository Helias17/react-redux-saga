import React from "react";
import { connect } from "react-redux";
import { createPost, showAlert } from "../redux/actions";
import { Alert } from "./Alert";

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: "" };
  }

  submitHandler = (e) => {
    e.preventDefault();

    const { title } = this.state;

    if (!title.trim()) {
      this.props.showAlert("Please, enter the title");
    }

    const newPost = { title, id: Date.now().toString() };
    this.setState({ title: "" });
    this.props.createPost(newPost);
    console.log(newPost);
  };

  handleInputChange = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <h1>Post Form</h1>
        <div className="form-group">
          <label htmlFor="title">Posts's title</label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={this.state.title}
            name="title"
            onChange={this.handleInputChange}
          />
          {this.props.alert && <Alert text={this.props.alert} />}
        </div>
        <button className="btn btn-success" type="submit">
          Create post
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  createPost,
  showAlert,
};

const mapStateToProps = (state) => ({
  alert: state.app.alert,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
