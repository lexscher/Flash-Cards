import React, { Component } from "react";
import { Input, Button, Form } from "semantic-ui-react";
import InputItem from "./input-item";
import "./style.css";


class CreateDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTitle: "",
      cardInputs: [
        { front: "", back: "" },
        { front: "", back: "" },
        { front: "", back: "" },
        { front: "", back: "" },
        { front: "", back: "" }
      ]
    };
    this.renderCards = this.renderCards.bind(this);
    this.addEmptyCard = this.addEmptyCard.bind(this);
    this.handleFrontInput = this.handleFrontInput.bind(this);
    this.handleBackInput = this.handleBackInput.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //
  // }

  renderCards() {
    const cards = [];
    for (let i = 0; i < this.state.cardInputs.length; i++) {
      cards.push(
        <InputItem
          key={i}
          arrIndex={i}
          handleFrontInput={this.handleFrontInput}
          handleBackInput={this.handleBackInput}
        />
      );
    }
    return cards;
  }

  addEmptyCard() {
    const emptyObject = { front: "", back: "" };
    this.setState({
      cardInputs: [...this.state.cardInputs, emptyObject]
    });
  }

  handleFrontInput(index, evt) {
    const value = evt.target.value;
    const tempState = this.state.cardInputs;
    tempState[index].front = value;
    this.setState({
      cardInputs: tempState
    });
  }

  handleBackInput(index, evt) {
    const value = evt.target.value;
    const tempState = this.state.cardInputs;
    tempState[index].back = value;
    this.setState({
      cardInputs: tempState
    });
  }

  handleTitleChange(evt) {
    this.setState({
      newTitle: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    // TODO: make this post data
    console.log("Submitted");
  }

  render() {
    return (
      <div className="create-deck">
        <h2>Create Deck</h2>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            placeholder="Deck Title"
            value={this.state.newTitle}
            onChange={this.handleTitleChange}
          />
          {this.renderCards()}
          <Button type="button" onClick={this.addEmptyCard}>
            Add Card
          </Button>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default CreateDeck;
