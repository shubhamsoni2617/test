import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
class Autocomplete extends Component {
  static defaultProps = {
    suggestions: []
  };

  constructor(props) {
    super(props);

    this.state = {
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: "",
      helperText: null
    };
  }

  onChange = e => {
    const { suggestions, categories } = this.props;
    let allSuggestions = [];
    suggestions.flatMap(element => {
      return element.category_id.map(x => {
        return categories.findIndex((category, i) => {
          if (category.id === x) {
            allSuggestions.push({
              ...element,
              category_id: x,
              category_name: category.name
            });
          }
        });
      });
    });

    let userInput = e.currentTarget.value;
    let helperText = null;
    let filteredSuggestions = allSuggestions.filter(
      suggestion =>
        suggestion.question.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    if (userInput.length < 3) {
      console.log(userInput);
      filteredSuggestions = [];

      helperText = "Please enter atleast 3 characters";
    }
    this.setState({
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value,
      helperText
    });
  };

  onClick = (e, categoryId, questionId) => {
    this.props.onQuestionIdChange(questionId);
    console.log(categoryId);
    this.setState({
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

  render() {
    const {
      onChange,
      onClick,
      state: { filteredSuggestions, showSuggestions, userInput }
    } = this;
    let suggestionsListComponent;
    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              return (
                <div key={suggestion.id + suggestion.category_id}>
                  <Link
                    to={`/faq/${suggestion.category_name
                      .replace(/\s/g, "-")
                      .toLowerCase()}`}
                    className="nav-item"
                    onClick={e => {
                      onClick(e, suggestion.category_id, suggestion.id);
                    }}
                  >
                    {suggestion.question} in {suggestion.category_name}
                  </Link>
                  <br />
                </div>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <em>No suggestions, you're on your own!</em>
          </div>
        );
      }
    }
    return (
      <Fragment>
        <input
          className="inputAuto"
          type="text"
          onChange={onChange}
          value={userInput}
        />
        {this.state.helperText ? <em>{this.state.helperText}</em> : null}
        {suggestionsListComponent}
      </Fragment>
    );
  }
}
export default Autocomplete;
