// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// <msalConfigSnippet>
const msalConfig = {
  auth: {
    clientId: '765221b8-fb88-4f07-a1ef-b40f3ad08d91',
    redirectUri: 'http://localhost:8080'
  }
};

const msalRequest = {
  scopes: [
    'user.read',
    'mailboxsettings.read',
    'calendars.readwrite'
  ]
}
// </msalConfigSnippet>
