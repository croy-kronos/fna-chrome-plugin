import React, { Component } from 'react';
import { FormGroup, HelpBlock, ControlLabel, FormControl, Button } from 'react-bootstrap';

class SaveFNAPreset extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      status: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.saveFNA = this.saveFNA.bind(this);
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 0) return 'success';
  }

  _recoverFNAList() {
    const fna_list = JSON.parse(localStorage.getItem('fna_list'));
    return fna_list ? fna_list : [];
  }

  _addFNAToList(fna_json) {
    const fna_list = this._recoverFNAList();
    fna_list.push(fna_json);

    return fna_list;
  }

  saveFNA() {
    if (this.getValidationState() == 'success') {
      const fna_json = {screen_name: "Georgio Simario", age: 55}; // RECOVER FNA JSON FROM BROWSER
      const new_list = this._addFNAToList(fna_json);

      localStorage.setItem('fna_list', JSON.stringify(new_list));
      this.setState({ status: "Sauvegarde reussie", value: "" });
    } else {
      this.setState({ status: "Le nom de l'ABF ne peut etre vide" });
    }
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form>
        <FormGroup
          controlId="formSaveFNAToPresets"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Sauvegarder l'ABF dans la liste</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Nom de l'ABF"
            onChange={this.handleChange}
          />
          <Button
            bsStyle="default"
            onClick={this.saveFNA}
          >
          Enregistrer
          </Button>
          <HelpBlock>{this.state.status}</HelpBlock>

        </FormGroup>
      </form>
    );
  }
}

export default SaveFNAPreset;
