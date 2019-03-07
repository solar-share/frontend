import React, { Component } from "react";
import {
  FormInput,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "shards-react";

class InputGroups extends Component{
  constructor(props) {
    super(props)
    this.state = {
      value: 100
    }
  }
  render() {
    return (
      <div>
        <InputGroup className="mb-3">
          <InputGroupAddon type="prepend">
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <FormInput value={this.state.value} onChange={(e) => {this.setState({value: e.target.value})}} />
          <InputGroupAddon type="append">
            <InputGroupText>.00</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    )
  }
}

export default InputGroups;
