import React, { Component } from 'react';
import { DropdownButton, MenuItem, Button } from 'react-bootstrap';
import { For } from 'jsx-control-statements';

class LoadFNAPreset extends Component {
  constructor(props) {
    super(props);

    this.state = {list: this._recoverFNAList()};

    this.updateState = this.updateState.bind(this);
    this.loadSelectedFNA = this.loadSelectedFNA.bind(this);
  }

  updateState() {
    console.log(this._recoverFNAList());
    this.setState({list: this._recoverFNAList()});
  }

  loadSelectedFNA() {
    // IMPORT SELECT FNA
  }

  _recoverFNAList() {
    const fna_list = JSON.parse(localStorage.getItem('fna_list'));
    return fna_list ? fna_list : [];
  }

  render() {
    return (
      <form>
        <DropdownButton
          title={"title"}
          key={"banana"}
          id={`dropdown-basic-${"banana"}`}
          onToggle={this.updateState}
          onSelect={this.loadSelectedFNA}
        >
          <For each="item" of={this.state.list}>
            <MenuItem eventKey={item.filename}>{item.filename}</MenuItem>
          </For>
        </DropdownButton>
      </form>
    )
  }
}

export default LoadFNAPreset;
