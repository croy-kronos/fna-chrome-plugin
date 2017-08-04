import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import SaveFNAPreset from './SaveFNAPreset.js';
import LoadFNAPreset from './LoadFNAPreset.js';

class FNAPreset extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Panel header={ <h4>Presets ABF</h4> }>
          <SaveFNAPreset />
          <LoadFNAPreset />
        </Panel>
    );
  }
}

export default FNAPreset;
