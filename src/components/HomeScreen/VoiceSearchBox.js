import React from 'react';

import './VoiceSearchBox.css';

const VoiceSearchBox = ({ voiceText, clearVoiceSearch }) => {
  return (
    <div className="container-fluid voice-search">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Voice Search</h5>
            <button
              type="button"
              className="close"
              onClick={() => clearVoiceSearch()}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body py-5 d-flex flex-column align-items-center justify-content-center">
            <div className="microphone d-flex align-items-center justify-content-center">
              <i className="fa fa-microphone"></i>
            </div>
            <p className="text py-2">Speak</p>
            <p className="speakingText">{voiceText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceSearchBox;
