unlayer.registerTool({
  name: 'my_tool',
  label: 'Reg Form',
  icon: 'fa-user',
  type: "whatever",
  category: "contents",
  options: {
    default: {
      title: null,
    },
    text: {
      title: "Text",
      position: 1,
      options: {
        color: {
          label: "Color",
          defaultValue: "#000",
          widget: "text_color",
        },
      },
    },
  },
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render(values) {
        console.log("custome js values", values);
        return `
          <div>
          <input type="hidden" id="hdCompanyId" value="{CompanyId}">
          <input type="hidden" id="hdCampaignId" value="{CampaignId}">
          <input type="hidden" id="hdPerClickAmount" value="{PerClick}">
          <input type="hidden" id="hdMainOfferAmount" value="{MainOffer}">
          <input type="hidden" id="hdUpsellsAmount" value="{Upsells}">
          <input type="hidden" id="hdCampaignRegisterUrl" value="{CampaignRegisterUrl}">
            <div style="padding-top:10px">
              <div style="display: flex;flex-direction: column;">
              <div>
                  <label style="color: ${values.color};opacity: .5;letter-spacing: 0;line-height: 22px;font-size: 14px;">Email Address </label>
                  <span style="color: #ff4d4f;font-size: 14px;">*</span>
               </div>

                <div style="width:100%">
                  <input onkeyup="validateForm(this)" id="email" name="email" style="
                  border: none;
                  width:100%;
                  border-bottom: 1.43px solid #d8d8d8;
                  color: #2a2727;
                  font-family: Gilroy-Medium;
                  font-size: 16px;
                  font-weight: 500;
                  letter-spacing: 0;
                  padding: 0;
                  height: 30px;
                  outline: none;
                  background: transparent;"/>
                  <span style="color:#ff4d4f;font-size: 14px;display:none;">Please input a valid email (Ex: abc@example.com)</span>
                </div>
              </div>
            </div>
            <div style="padding-top:10px">
              <div style="display: flex;flex-direction: column;">
                <label style="color: ${values.color};opacity: .5;letter-spacing: 0;line-height: 22px;font-size: 14px;">First Name</label>
                <div style="width:100%">
                  <input id="firstname" name="firstname" style="
                  border: none;
                  width:100%;
                  border-bottom: 1.43px solid #d8d8d8;
                  color: #2a2727;
                  font-family: Gilroy-Medium;
                  font-size: 16px;
                  font-weight: 500;
                  letter-spacing: 0;
                  padding: 0;
                  height: 30px;
                  outline: none;
                  background: transparent;"/>
                </div>
              </div>
            </div>
            <div style="padding-top:10px">
              <div style="display: flex;flex-direction: column;">
                <label style="color: ${values.color};opacity: .5;letter-spacing: 0;line-height: 22px;font-size: 14px;">Last Name</label>
                <div style="width:100%">
                  <input id="lastname" name="lastname" style="
                  border: none;
                  width:100%;
                  border-bottom: 1.43px solid #d8d8d8;
                  color: #2a2727;
                  font-family: Gilroy-Medium;
                  font-size: 16px;
                  font-weight: 500;
                  letter-spacing: 0;
                  padding: 0;
                  height: 30px;
                  outline: none;
                  background: transparent;"/>
                </div>
              </div>
            </div>
            <div style="padding-top:10px">
              <div style="display: flex;flex-direction: column;">
                <label style="color: ${values.color};opacity: .5;letter-spacing: 0;line-height: 22px;font-size: 14px;">Phone Number</label>
                <div style="width:100%;border-bottom: 1.43px solid #d8d8d8;display: flex;align-items: center;">
                  <span>+1</span>
                  <input onkeyup="validatePhonenumber(this)" id="phonenumber" name="phonenumber" maxlength="10" style="
                  margin-left:10px;
                  border: none;
                  width:100%;
                  color: #2a2727;
                  font-family: Gilroy-Medium;
                  font-size: 16px;
                  font-weight: 500;
                  letter-spacing: 0;
                  padding: 0;
                  height: 30px;
                  outline: none;
                  background: transparent;"/>
                </div>
                <span style="color: #ff4d4f;font-size: 14px;display: none;">Phone Number must be atleast 10 characters</span>
              </div>
            </div>
            <div style="padding:20px 0 10px 0">
              <div style="display: flex;flex-direction: row;align-items:center">
                <input id="chkTOS" onchange="validateForm(this)" type="checkbox" name="terms" style="margin:0">
                <div style="padding-left:10px">I agree to the <a target="_blank" href="${values.data.customHostUrl}/terms-of-Service-view/{CompanyId}/{CampaignId}" style="text-decoration: underline;cursor: pointer;color:black; font-weight:bold">Terms of Service</a> for {CampaignName}.
                </div>
              </div>
            </div>
            <div style="padding:10px 0">
              <div style="display: flex;flex-direction: row;align-items:center">
                <input id="chkTermAndCondition" onchange="validateForm(this)" type="checkbox" name="terms" style="margin:0">
                <div style="padding-left:10px">I agree to the <a target="_blank" href="${values.data.customHostUrl}/terms-and-conditions" style="text-decoration: underline;cursor: pointer;color:black; font-weight:bold">Terms and Conditions</a> for Trackfiliates.
                </div>
              </div>
            </div>
            <div style="padding:10px 0">
            <span id="spinLoader"></span>
              <button disabled id="btnInviteSubmit" onclick="return SendCampaignRequest();" style="
                  width: 100%;
                  border-radius: 25px;
                  font-weight: 700;
                  letter-spacing: 0;
                  height: 51px;
                  background: linear-gradient(180deg,#1ec8ff,#0062ef);
                  outline: navajowhite;
                  border: navajowhite;
                  color: white;
                  cursor: pointer;
              ">Request Access</button>
            </div>
          </div>
        `;
      },
    }),
    exporters: {
      web: function (values) {
        return `
        <div>
        <input type="hidden" id="hdCompanyId" value="{CompanyId}">
        <input type="hidden" id="hdCampaignId" value="{CampaignId}">
        <input type="hidden" id="hdPerClickAmount" value="{PerClick}">
        <input type="hidden" id="hdMainOfferAmount" value="{MainOffer}">
        <input type="hidden" id="hdUpsellsAmount" value="{Upsells}">
        <input type="hidden" id="hdCampaignRegisterUrl" value="{CampaignRegisterUrl}">
          <div style="padding-top:10px">
            <div style="display: flex;flex-direction: column;">
            <div>
                <label style="color: ${values.color};opacity: .5;letter-spacing: 0;line-height: 22px;font-size: 14px;">Email Address </label>
                <span style="color: #ff4d4f;font-size: 14px;">*</span>
             </div>

              <div style="width:100%">
                <input onkeyup="validateForm(this)" id="email" name="email" style="
                border: none;
                width:100%;
                border-bottom: 1.43px solid #d8d8d8;
                color: #2a2727;
                font-family: Gilroy-Medium;
                font-size: 16px;
                font-weight: 500;
                letter-spacing: 0;
                padding: 0;
                height: 30px;
                outline: none;
                background: transparent;"/>
                <span style="color:#ff4d4f;font-size: 14px;display:none;">Please input a valid email (Ex: abc@example.com)</span>
              </div>
            </div>
          </div>
          <div style="padding-top:10px">
            <div style="display: flex;flex-direction: column;">
              <label style="color: ${values.color};opacity: .5;letter-spacing: 0;line-height: 22px;font-size: 14px;">First Name</label>
              <div style="width:100%">
                <input id="firstname" name="firstname" style="
                border: none;
                width:100%;
                border-bottom: 1.43px solid #d8d8d8;
                color: #2a2727;
                font-family: Gilroy-Medium;
                font-size: 16px;
                font-weight: 500;
                letter-spacing: 0;
                padding: 0;
                height: 30px;
                outline: none;
                background: transparent;"/>
              </div>
            </div>
          </div>
          <div style="padding-top:10px">
            <div style="display: flex;flex-direction: column;">
              <label style="color: ${values.color};opacity: .5;letter-spacing: 0;line-height: 22px;font-size: 14px;">Last Name</label>
              <div style="width:100%">
                <input id="lastname" name="lastname" style="
                border: none;
                width:100%;
                border-bottom: 1.43px solid #d8d8d8;
                color: #2a2727;
                font-family: Gilroy-Medium;
                font-size: 16px;
                font-weight: 500;
                letter-spacing: 0;
                padding: 0;
                height: 30px;
                outline: none;
                background: transparent;"/>
              </div>
            </div>
          </div>
          <div style="padding-top:10px">
            <div style="display: flex;flex-direction: column;">
              <label style="color: ${values.color};opacity: .5;letter-spacing: 0;line-height: 22px;font-size: 14px;">Phone Number</label>
              <div style="width:100%;border-bottom: 1.43px solid #d8d8d8;display: flex;align-items: center;">
                <span>+1</span>
                <input onkeyup="validatePhonenumber(this)" id="phonenumber" name="phonenumber" maxlength="10" style="
                margin-left:10px;
                border: none;
                width:100%;
                color: #2a2727;
                font-family: Gilroy-Medium;
                font-size: 16px;
                font-weight: 500;
                letter-spacing: 0;
                padding: 0;
                height: 30px;
                outline: none;
                background: transparent;"/>
              </div>
              <span style="color: #ff4d4f;font-size: 14px;display: none;">Phone Number must be atleast 10 characters</span>
            </div>
          </div>
          <div style="padding:20px 0 10px 0">
            <div style="display: flex;flex-direction: row;align-items:center">
              <input id="chkTOS" onchange="validateForm(this)" type="checkbox" name="terms" style="margin:0">
              <div style="padding-left:10px">I agree to the <a target="_blank" href="${values.data.customHostUrl}/terms-of-Service-view/{CompanyId}/{CampaignId}" style="text-decoration: underline;cursor: pointer;color:black; font-weight:bold">Terms of Service</a> for {CampaignName}.
              </div>
            </div>
          </div>
          <div style="padding:10px 0">
            <div style="display: flex;flex-direction: row;align-items:center">
              <input id="chkTermAndCondition" onchange="validateForm(this)" type="checkbox" name="terms" style="margin:0">
              <div style="padding-left:10px">I agree to the <a target="_blank" href="${values.data.customHostUrl}/terms-and-conditions" style="text-decoration: underline;cursor: pointer;color:black; font-weight:bold">Terms and Conditions</a> for Trackfiliates.
              </div>
            </div>
          </div>
          <div style="padding:10px 0">
          <span id="spinLoader"></span>
            <button disabled id="btnInviteSubmit" onclick="return SendCampaignRequest();" style="
                width: 100%;
                border-radius: 25px;
                font-weight: 700;
                letter-spacing: 0;
                height: 51px;
                background: linear-gradient(180deg,#1ec8ff,#0062ef);
                outline: navajowhite;
                border: navajowhite;
                color: white;
                cursor: pointer;
            ">Request Access</button>
          </div>
        </div>
      `;
      },
      email: function (values) {
        return `
          <div>
          <input type="hidden" id="hdCompanyId" value="{CompanyId}">
          <input type="hidden" id="hdCampaignId" value="{CampaignId}">
          <input type="hidden" id="hdPerClickAmount" value="{PerClick}">
          <input type="hidden" id="hdMainOfferAmount" value="{MainOffer}">
          <input type="hidden" id="hdUpsellsAmount" value="{Upsells}">
          <input type="hidden" id="hdCampaignRegisterUrl" value="{CampaignRegisterUrl}">
            <div style="padding-top:10px">
              <div style="display: flex;flex-direction: column;">
              <div>
                  <label style="color: ${values.color};opacity: .5;letter-spacing: 0;line-height: 22px;font-size: 14px;">Email Address </label>
                  <span style="color: #ff4d4f;font-size: 14px;">*</span>
               </div>

                <div style="width:100%">
                  <input onkeyup="validateForm(this)" id="email" name="email" style="
                  border: none;
                  width:100%;
                  border-bottom: 1.43px solid #d8d8d8;
                  color: #2a2727;
                  font-family: Gilroy-Medium;
                  font-size: 16px;
                  font-weight: 500;
                  letter-spacing: 0;
                  padding: 0;
                  height: 30px;
                  outline: none;
                  background: transparent;"/>
                  <span style="color:#ff4d4f;font-size: 14px;display:none;">Please input a valid email (Ex: abc@example.com)</span>
                </div>
              </div>
            </div>
            <div style="padding-top:10px">
              <div style="display: flex;flex-direction: column;">
                <label style="color: ${values.color};opacity: .5;letter-spacing: 0;line-height: 22px;font-size: 14px;">First Name</label>
                <div style="width:100%">
                  <input id="firstname" name="firstname" style="
                  border: none;
                  width:100%;
                  border-bottom: 1.43px solid #d8d8d8;
                  color: #2a2727;
                  font-family: Gilroy-Medium;
                  font-size: 16px;
                  font-weight: 500;
                  letter-spacing: 0;
                  padding: 0;
                  height: 30px;
                  outline: none;
                  background: transparent;"/>
                </div>
              </div>
            </div>
            <div style="padding-top:10px">
              <div style="display: flex;flex-direction: column;">
                <label style="color: ${values.color};opacity: .5;letter-spacing: 0;line-height: 22px;font-size: 14px;">Last Name</label>
                <div style="width:100%">
                  <input id="lastname" name="lastname" style="
                  border: none;
                  width:100%;
                  border-bottom: 1.43px solid #d8d8d8;
                  color: #2a2727;
                  font-family: Gilroy-Medium;
                  font-size: 16px;
                  font-weight: 500;
                  letter-spacing: 0;
                  padding: 0;
                  height: 30px;
                  outline: none;
                  background: transparent;"/>
                </div>
              </div>
            </div>
            <div style="padding-top:10px">
              <div style="display: flex;flex-direction: column;">
                <label style="color: ${values.color};opacity: .5;letter-spacing: 0;line-height: 22px;font-size: 14px;">Phone Number</label>
                <div style="width:100%;border-bottom: 1.43px solid #d8d8d8;display: flex;align-items: center;">
                  <span>+1</span>
                  <input onkeyup="validatePhonenumber(this)" id="phonenumber" name="phonenumber" maxlength="10" style="
                  margin-left:10px;
                  border: none;
                  width:100%;
                  color: #2a2727;
                  font-family: Gilroy-Medium;
                  font-size: 16px;
                  font-weight: 500;
                  letter-spacing: 0;
                  padding: 0;
                  height: 30px;
                  outline: none;
                  background: transparent;"/>
                </div>
                <span style="color: #ff4d4f;font-size: 14px;display: none;">Phone Number must be atleast 10 characters</span>
              </div>
            </div>
            <div style="padding:20px 0 10px 0">
              <div style="display: flex;flex-direction: row;align-items:center">
                <input id="chkTOS" onchange="validateForm(this)" type="checkbox" name="terms" style="margin:0">
                <div style="padding-left:10px">I agree to the <a target="_blank" href="${values.data.customHostUrl}/terms-of-Service-view/{CompanyId}/{CampaignId}" style="text-decoration: underline;cursor: pointer;color:black; font-weight:bold">Terms of Service</a> for {CampaignName}.
                </div>
              </div>
            </div>
            <div style="padding:10px 0">
              <div style="display: flex;flex-direction: row;align-items:center">
                <input id="chkTermAndCondition" onchange="validateForm(this)" type="checkbox" name="terms" style="margin:0">
                <div style="padding-left:10px">I agree to the <a target="_blank" href="${values.data.customHostUrl}/terms-and-conditions" style="text-decoration: underline;cursor: pointer;color:black; font-weight:bold">Terms and Conditions</a> for Trackfiliates.
                </div>
              </div>
            </div>
            <div style="padding:10px 0">
            <span id="spinLoader"></span>
              <button disabled id="btnInviteSubmit" onclick="return SendCampaignRequest();" style="
                  width: 100%;
                  border-radius: 25px;
                  font-weight: 700;
                  letter-spacing: 0;
                  height: 51px;
                  background: linear-gradient(180deg,#1ec8ff,#0062ef);
                  outline: navajowhite;
                  border: navajowhite;
                  color: white;
                  cursor: pointer;
              ">Request Access</button>
            </div>
          </div>
        `;
      },
    },
    head: {
      css: function (values) {
        return {};
      },
      js: function (values) {

        return `
         
      function SendCampaignRequest(){
        var data =   {
             affiliateTitle: document.getElementById("firstname").value + " "+ document.getElementById("lastname").value,
             email: document.getElementById("email").value,
             phone: document.getElementById("phonenumber").value,
             cpc: document.getElementById("hdPerClickAmount").value,
             step1: document.getElementById("hdMainOfferAmount").value,
             step2: document.getElementById("hdUpsellsAmount").value,
             campaignId: document.getElementById("hdCampaignId").value,
             companyId: document.getElementById("hdCompanyId").value
         };
             console.log(data);
             var xhr = new XMLHttpRequest();
             
             xhr.open("POST", '{CampaignRegisterUrl}', true);
             
             xhr.setRequestHeader("Content-Type", "application/json");
             
             xhr.onreadystatechange = function() {
                 if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                    alert(xhr.responseText);
                    console.log(xhr.responseText);
                 }
             };
             xhr.send(JSON.stringify(data));
             
       }
      
        `;

      },
    },
  },
});

unlayer.registerPropertyEditor({
  name: "text_color",
  layout: "bottom",
  Widget: unlayer.createWidget({
    render(value) {
      return `
        <input class="color-value" value=${value} />
        <button class="red">Red</button>
        <button class="green">Green</button>
        <button class="blue">Blue</button>
      `;
    },
    mount(node, value, updateValue) {
      var input = node.getElementsByClassName("color-value")[0];
      input.onchange = function (event) {
        updateValue(event.target.value);
      };

      var redButton = node.getElementsByClassName("red")[0];
      redButton.onclick = function () {
        updateValue("#f00");
      };

      var greenButton = node.getElementsByClassName("green")[0];
      greenButton.onclick = function () {
        updateValue("#0f0");
      };

      var blueButton = node.getElementsByClassName("blue")[0];
      blueButton.onclick = function () {
        updateValue("#00f");
      };
    },
  }),
});
