import React, { Component } from 'react';
import './App.css';
import Crypto from "crypto";
import EmailEditor from 'react-email-editor'

class App extends Component {
  render() {

    const signature = Crypto
    .createHmac("sha256", "1qTCAXQ9oEJHYrlJkHYQXFsiLBwDIxaTg99zJ29SbijtwUvygpZAbClzuyyCmnMp") // secret key (keep safe!)
    .update("655CAA60-7EFE-410C-B13A-0323682F031A")
    .digest("hex");
    console.log(signature, window.location.protocol + '//' + window.location.host + '/custom.js');

    return (
      <EmailEditor
        projectId={33005}
        options={{
          customJS: [
            'https://devapp.trackfiliates.com/unlayer/custom.js',
          ],
          user: {
            id: "655CAA60-7EFE-410C-B13A-0323682F031A",
            signature: signature,
            name: 'Sambath Selvam', // optional
            email: 's.sambath90@gmail.com' // optional
        }
        }}
      />
    );
  }
}

export default App;
