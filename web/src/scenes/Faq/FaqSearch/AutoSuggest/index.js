import React, { Component, Fragment } from "react";
import { Link } from "react-scroll";
class Autocomplete extends Component {
  static defaultProps = {
    suggestions: []
  };

  constructor(props) {
    super(props);

    this.state = {
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ""
    };
  }

  onChange = e => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.question.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    this.setState({
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  onClick = (e, categoryId) => {
    this.props.onIdChange(categoryId);
    this.props.categories.findIndex(category => {
      return category.id === categoryId
        ? this.props.history.push(
            `/faq/${category.name.replace(/\s/g, "-").toLowerCase()}`
          )
        : null;
    });

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
                // <li
                //   key={suggestion.id + index}
                //   onClick={e => {
                //     onClick(e, suggestion.category_id);
                //   }}
                // >
                //   {suggestion.question}
                // </li>
                <div>
                  <Link
                    onClick={e => {
                      onClick(e, suggestion.category_id);
                    }}
                    key={suggestion.id + index}
                    activeClass="active"
                    to={suggestion.id}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className="nav-item"
                  >
                    {suggestion.question}
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
        {suggestionsListComponent}
      </Fragment>
    );
  }
}
export default Autocomplete;
