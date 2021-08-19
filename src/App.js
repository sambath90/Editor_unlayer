import React, { Component } from 'react';
import './App.css';
import Crypto from "crypto";
import EmailEditor from 'react-email-editor'

class App extends Component {

//   useEffect(() => {

//     const signature = Crypto
//         .createHmac("sha256", "1qTCAXQ9oEJHYrlJkHYQXFsiLBwDIxaTg99zJ29SbijtwUvygpZAbClzuyyCmnMp") // secret key (keep safe!)
//         .update("655CAA60-7EFE-410C-B13A-0323682F031A")
//         .digest("hex");
//     console.log({
//         user: {
//             id: "655CAA60-7EFE-410C-B13A-0323682F031A",
//             signature: signature,
//             name: 'Sambath Selvam', // optional
//             email: 's.sambath90@gmail.com' // optional
//         }
//     });
//     console.log("Running HOST:: ", window.location.origin);
//         setTimeout(() => {
//             window.unlayer.init({
//                 id: 'editor-container',
//                 projectId: 33005,
//                 displayMode: 'web',
//                 customJS: [`${window.location.origin}/unlayer/custom.js`],
//                 tools: {
//                     'custom#my_tool': {
//                         data: {
//                             customHostUrl: window.location.origin
//                         }
//                     }
//                 },
//                 user: {
//                     id: "655CAA60-7EFE-410C-B13A-0323682F031A",
//                     signature: signature,
//                     name: 'Sambath Selvam', // optional
//                     email: 's.sambath90@gmail.com' // optional
//                 }
//             });

//         }, 1000);
    

// });

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
            window.location.protocol + '//' + window.location.host + '/custom.js',
          ],
          user: {
            id: "655CAA60-7EFE-410C-B13A-0323682F031A",
            signature: signature,
            name: 'Sambath Selvam', // optional
            email: 's.sambath90@gmail.com' // optional
        },
        tools: {
              'custom#my_tool': {
                  data: {
                      customHostUrl: window.location.origin
                  }
              }
          },
          displayMode: 'web'
        }}
      />
    );
  }
}

export default App;
