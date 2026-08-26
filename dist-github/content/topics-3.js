// Reference topics, part 3 — PerfectServe Clinical Collaboration (iOS).
// Source: OKTUL quick reference guides (joshuad2824-art/providertraining, "Mobile app").
window.CERNER_TOPICS_3 = [
  {
    id: 'ps-overview', cat: 'perfectserve', title: 'PerfectServe Clinical Collaboration \u2014 what it does',
    summary: 'The secure messaging and on-call app on your phone. Six tabs and a side menu, and the menu is where you control what reaches you.',
    audience: 'Providers and staff',
    keyFacts: [
      'The app is called PerfectServe Clinical Collab in the App Store.',
      'Your username is your Ascension email. Your password is your Ascension network password.',
      'What you see depends on your permissions \u2014 Patients in particular has to be enabled by a facility admin.'
    ],
    sections: [
      { h: 'The six tabs', steps: [
        'Messages \u2014 read, reply and create secure text and voice messages with attachments. Swipe the toggle to reach archived messages.',
        'Directory \u2014 find providers and staff, view schedules, and confirm who is on call.',
        'Dialer \u2014 dial any number. Your facility\u2019s dispatch number shows instead of your personal number.',
        'Patients \u2014 view patients and care team assignments, join or leave a care team, and message a patient\u2019s whole care team.',
        'News \u2014 informational announcements broadcast from your facility.',
        'Profile \u2014 your personal profile and picture.'
      ]},
      { h: 'The side menu \u2014 controlling what reaches you', steps: [
        'Status \u2014 toggle between online and do not disturb.',
        'Auto Response \u2014 a predefined or custom automatic reply.',
        'Forward Pages \u2014 send your messages to another person or a broadcast group.',
        'My Rules \u2014 auto response and forwarding for a specific timeframe.',
        'Settings \u2014 alert, call, message and security preferences.',
        'Logout.'
      ]}
    ],
    notes: [], tags: ['perfectserve', 'clinical collaboration', 'cc', 'secure messaging', 'app', 'mobile', 'phone', 'overview', 'tabs', 'paging']
  },
  {
    id: 'ps-login', cat: 'perfectserve', title: 'Log in to PerfectServe on your own phone',
    summary: 'First-time setup on a personal device takes about a dozen steps. After that it is your PIN or Face ID.',
    audience: 'Providers and staff',
    galleryLabel: 'The whole login flow, screen by screen',
    gallery: [
      { src: 'assets/perfectserve/ps-login-01-signin.png', caption: 'Sign in to PerfectServe \u2014 tap Enterprise Login' },
      { src: 'assets/perfectserve/ps-login-02-domain.png', caption: 'Enterprise domain: ascension' },
      { src: 'assets/perfectserve/ps-login-03-ms-signin.png', caption: 'Microsoft sign-in with your Ascension email' },
      { src: 'assets/perfectserve/ps-login-04-password.png', caption: 'Your Ascension network password' },
      { src: 'assets/perfectserve/ps-login-05-duo.png', caption: 'Approve the Duo push' },
      { src: 'assets/perfectserve/ps-login-06-remember.png', caption: 'Duo asks whether to remember this device' },
      { src: 'assets/perfectserve/ps-login-07-validate.png', caption: 'Validate your mobile number' },
      { src: 'assets/perfectserve/ps-login-08-permissions.png', caption: 'The three permissions the app needs' },
      { src: 'assets/perfectserve/ps-login-09-notifications.png', caption: 'Allow notifications' },
      { src: 'assets/perfectserve/ps-login-10-critical.png', caption: 'Allow critical alerts' },
      { src: 'assets/perfectserve/ps-login-11-microphone.png', caption: 'Allow microphone access' },
      { src: 'assets/perfectserve/ps-login-12-biometric.png', caption: 'Enable or skip biometric sign-in' },
      { src: 'assets/perfectserve/ps-login-13-pin.png', caption: 'Create a four-digit PIN' },
      { src: 'assets/perfectserve/ps-login-14-e911.png', caption: 'Accept the e911 disclaimer' },
      { src: 'assets/perfectserve/ps-login-15-roles.png', caption: 'Shift workers: assume your roles' },
      { src: 'assets/perfectserve/ps-login-16-shift-end.png', caption: 'Shift workers: set your shift end time' }
    ],
    keyFacts: [
      'Minimum iOS 16. iOS 17 or above recommended. Apple Watch Series 4 and above.',
      'Enterprise domain is ascension. Username is your Ascension email; password is your network password.',
      'You must allow notifications, critical alerts and microphone access for the app to work correctly.'
    ],
    sections: [
      { h: 'First-time setup', steps: [
        'Open the App Store, search PerfectServe Clinical Collab, download it and select Open.',
        'Tap Enterprise Login.',
        'Type ascension as the enterprise domain, then tap Next.',
        'Enter your Ascension email, tap Next, enter your network password, then tap Sign In.',
        'Complete the Duo push or call to authenticate.',
        'If prompted to remember the device for future logins, choose the option that fits your situation.',
        'Validate your mobile number \u2014 tap Validate, then Send to send the text shown on screen.',
        'Review the permissions list and tap Next. Allow notifications, allow critical alerts, and allow microphone access.',
        'Choose Enable or Skip for biometric login. If you enable it, allow Face ID.',
        'Create a four-digit PIN and re-enter it to confirm.',
        'Accept the e911 disclaimer.'
      ]},
      { h: 'Shift workers only', steps: [
        'Select the roles you are covering for the shift from Available Roles.',
        'Tap Assume Selected Roles.',
        'Select the time your shift ends, then tap Set Shift End Time.'
      ]},
      { h: 'Logging out', steps: [
        'Select Logout from the main menu.',
        'A confirmation window appears \u2014 select Logout to proceed, or exit the window to cancel.'
      ]}
    ],
    notes: [{ tone: 'warning', text: 'If Duo is not set up on your device you cannot finish the login. Call the Ascension Service Desk on 877-635-0515 to get it set up.' }],
    tags: ['perfectserve', 'login', 'byod', 'duo', 'pin', 'face id', 'biometric', 'e911', 'shift', 'roles', 'ios', 'requirements', 'logout']
  },
  {
    id: 'ps-messaging', cat: 'perfectserve', title: 'Send and answer PerfectServe messages',
    summary: 'Secure text, photos and voice memos. Nothing is stored on your phone, and Mark as Done clears your inbox.',
    audience: 'Providers and staff',
    keyFacts: [
      'Photos and audio you attach are never saved to your phone \u2014 they live on the secure platform, for HIPAA.',
      'A message must be read before it can be marked as done.',
      'Icons down the left side of the Messages list show message status.'
    ],
    sections: [
      { h: 'Composing a message', steps: [
        'Select the New Message icon in the bottom right corner.',
        'Find your recipient using Search, Pinned Contacts, My Favorites, Local Groups or Recently Contacted.',
        'To search, type the name of the person or broadcast group \u2014 results update as you type.',
        'Select the message type to display its template. The fields change depending on the template.',
        'Attach adds a photo from your camera or library. Record adds a voice memo. Options toggles things like allow replies and reply notifications.',
        'Click Send. The date and time sit at the top of the message; the sent and read status sits at the bottom.'
      ]},
      { h: 'Responding', steps: [
        'Select the conversation in your Messages.',
        'Tap the Type a message field and write your reply, then press Send.',
        'Camera, Photo and Record attach a picture or an audio message.',
        'Quick Response sends a templated reply.',
        'To reply by phone, press the blue phone icon next to the sender\u2019s name and select Call.'
      ]},
      { h: 'Clearing your inbox with Mark as Done', steps: [
        'One message: swipe it left in the Messages list and select Done. Or open it, tap the three ellipses at the top right, and select Mark as Done.',
        'Several: select the Mark as Done icon, tick the read threads you want, then tap the icon again.',
        'All: select the Mark as Done icon, then Select all, then tap the icon again \u2014 up to 1,000 read threads at once.',
        'Everything you mark lands in the Done tab of your Messages.'
      ]}
    ],
    notes: [
      { tone: 'info', text: 'Mark as Done is not the same as marking messages read. There is no way to mark a message read manually \u2014 you have to open it. Bulk actions skip anything unread.' },
      { tone: 'info', text: 'Search first, then Select all, if you want to clear a specific slice of a big inbox.' }
    ],
    tags: ['perfectserve', 'messaging', 'message', 'compose', 'reply', 'attach', 'voice memo', 'record', 'mark as done', 'archive', 'inbox', 'quick response', 'hipaa']
  },
  {
    id: 'ps-directory', cat: 'perfectserve', title: 'Find people and see who is on call',
    summary: 'The Directory holds every contact, your own groups and favorites, the on-call schedules, and the broadcast groups.',
    audience: 'Providers and staff',
    keyFacts: [
      'Swipe left on a contact to call or message them instantly.',
      'On-call schedule changes apply immediately.',
      'A broadcast group works like a distribution list \u2014 one message reaches every member.'
    ],
    sections: [
      { h: 'How the Directory is organised', steps: [
        'Pinned Contacts \u2014 favorites set for an individual, a department, or an assignable role.',
        'My Favorites \u2014 contacts you starred yourself.',
        'Local Groups \u2014 personal groups you created, visible only in your app.',
        'Recently Contacted \u2014 anyone you messaged or called recently.',
        'Icons on the left show the contact type; a note icon on the far right means there are notes.',
        'Tap a contact to preview their title, organisation, departments, contact methods and notes.'
      ]},
      { h: 'Searching and filtering', steps: [
        'Start typing a name \u2014 the Filter option then appears. Select Filter.',
        'Select Add Filter to narrow by alias, credentials, department, location, market, specialty, title or type.',
        'Add as many filters as you need, then click Save and name the filter so you can reuse it.',
        'The filter shows under the search bar while it is in use. Click it and toggle it off when you are done.'
      ]},
      { h: 'Your own groups and favorites', steps: [
        'To create a group: Directory, the Add symbol, New Group. Name it, then Add Member and search for each contact. Click Save \u2014 it appears under Local Groups.',
        'To edit one: open it from Local Groups, tap the three ellipses, Edit Group. The pencil renames it, Add Member adds people, the minus icon removes them. Save at the top right.',
        'To add a favorite: search the contact, open their details, and click the star at the top right. Favorites live under My Favorites.'
      ]},
      { h: 'Schedule groups and broadcast groups', steps: [
        'A schedule group shows On-Call (who is covering), Members (everyone who covers call), View Schedule, and Favorite.',
        'A broadcast group offers Message and Call for every member at once, Join, Members, and Favorite.',
        'Swipe left on a member\u2019s name inside a group to call or message only that person.'
      ]}
    ],
    notes: [], tags: ['perfectserve', 'directory', 'contacts', 'on call', 'oncall', 'schedule', 'broadcast group', 'local group', 'favorites', 'pinned', 'filter', 'search', 'who is covering']
  },
  {
    id: 'ps-dialer', cat: 'perfectserve', title: 'Place a call without showing your number',
    summary: 'Calling through the app masks your personal number. Calling a hyperlinked number from a message does not.',
    audience: 'Providers and staff',
    keyFacts: [
      'When you place a call inside the app, your personal number is masked.',
      'Tapping a hyperlinked number inside a message does NOT mask your number.',
      'The keypad takes any 10-digit number.'
    ],
    sections: [
      { h: 'What the Dialer gives you', steps: [
        'Keypad \u2014 free-form entry for any 10-digit number.',
        'Call log \u2014 every number you recently dialled.',
        'Settings \u2014 your call preferences.'
      ]}
    ],
    notes: [{ tone: 'warning', text: 'This is the one to remember: a call started from a hyperlinked number in a message exposes your personal number. Dial it on the keypad instead.' }],
    tags: ['perfectserve', 'dialer', 'call', 'phone', 'masked', 'privacy', 'personal number', 'dispatch', 'call log', 'keypad']
  },
  {
    id: 'ps-status', cat: 'perfectserve', title: 'Going offline, and what happens when you do',
    summary: 'Offline stops your alerts but not your messages. Urgent messages come through regardless.',
    audience: 'Providers and staff',
    keyFacts: [
      'The coloured circle on the three-line menu is your status \u2014 green is online, red is offline.',
      'Urgent message types override offline status and still alert you.',
      'Auto responses are not applied by default. You have to turn one on and set a timeframe.'
    ],
    sections: [
      { h: 'Changing your status', steps: [
        'Select the three-line menu to expand the menu options.',
        'Toggle your status.',
        'Optionally enable Auto Response to send a message while you are offline, with instructions for the sender.'
      ]},
      { h: 'What offline actually does', steps: [
        'No alerts \u2014 you get no push notifications and no banner alerts.',
        'Messages still arrive \u2014 they appear in your inbox waiting to be read.',
        'Urgent messages override it \u2014 alerting still applies.',
        'The sender gets a default system message telling them you are offline.',
        'If you set an auto response, the sender gets that first, then the system message.'
      ]},
      { h: 'Messaging someone who is offline', steps: [
        'A pop-up asks you to acknowledge that the recipient is offline.',
        'That is your cue that they will not be alerted \u2014 escalate another way if it cannot wait.'
      ]}
    ],
    notes: [], tags: ['perfectserve', 'status', 'offline', 'online', 'do not disturb', 'dnd', 'urgent', 'alerts', 'notifications', 'availability']
  },
  {
    id: 'ps-away', cat: 'perfectserve', title: 'Cover your messages when you are away',
    summary: 'Three tools, in increasing order of control: an auto response, page forwarding, and rules that do both on a schedule.',
    audience: 'Providers and staff',
    keyFacts: [
      'Auto Response and Forward Pages both need an end date and time.',
      'To stop either one early, go back to it and toggle it off.',
      'A rule can forward, alert, auto respond and stop copying you \u2014 all on a schedule.'
    ],
    sections: [
      { h: 'Auto Response', steps: [
        'Navigate to the main menu and select Auto Response.',
        'Toggle Auto Response on to set the end date and time.',
        'Click Save to set the end date and time.',
        'Enter a custom response, or select one of the ready-made options.'
      ]},
      { h: 'Forward Pages', steps: [
        'Navigate to the main menu and select Forward Pages.',
        'Toggle Forward Pages on to set the end date and time.',
        'Select Forward To and choose the recipients.'
      ]},
      { h: 'My Rules \u2014 creating one', steps: [
        'Expand the main menu and navigate to My Rules, then Select Create Rule.',
        'Enter a name for the policy.',
        'Set the conditions: Schedule for specific days and times, Message Type for specific types or any, and Sent From to limit it to particular senders.',
        'Set the actions: Forward To adds recipients, Alert Me follows your alerting policy, Copy Me toggled off stops you receiving the original, and Auto Response replies to all participants.',
        'Click Save.'
      ]},
      { h: 'My Rules \u2014 turning one on or off', steps: [
        'Expand the main menu and navigate to My Rules.',
        'Locate the policy.',
        'Toggle it on to make it active, or off to make it inactive.'
      ]}
    ],
    notes: [{ tone: 'info', text: 'Forward To on a rule still leaves the message in your own inbox. Toggle Copy Me off if you want it to go only to the other person.' }],
    tags: ['perfectserve', 'auto response', 'forward pages', 'my rules', 'rule', 'away', 'vacation', 'off shift', 'coverage', 'forwarding', 'escalation']
  },
  {
    id: 'ps-care-team', cat: 'perfectserve', title: 'Join a patient\u2019s care team',
    summary: 'If your facility enabled Patients, you can join a care team by knowing the patient\u2019s name, then message the whole team at once.',
    audience: 'Providers with the Patients privilege',
    keyFacts: [
      'Patients is only available to users given the privilege by a facility admin.',
      'Inside Patients you can see patient details, messages, notes and updates, and contact care team members.',
      'You can join or leave a care team yourself.'
    ],
    sections: [
      { h: 'Joining', steps: [
        'Select Patients.',
        'Find the patient with the Search bar, or click Search All Patients and enter the name.',
        'Swipe right on the patient\u2019s name and select Join.',
        'To check the patient\u2019s details first, select the patient, click the three ellipses, and select Join Care Team.'
      ]}
    ],
    notes: [], tags: ['perfectserve', 'patients', 'care team', 'join', 'leave', 'clinical team', 'patient messaging']
  },
  {
    id: 'ps-news', cat: 'perfectserve', title: 'News and announcements',
    summary: 'Informational broadcasts from your facility. You can mute the feeds that are not mandatory.',
    audience: 'Providers and staff',
    keyFacts: [
      'These feeds are informational, not critical.',
      'Alerts can only be turned on or off for feeds that are not mandatory.'
    ],
    sections: [
      { h: 'Reading and muting', steps: [
        'Select News, then select a message to read it.',
        'Use the sub-navigation menu icon at the top right to manage alerts for non-mandatory feeds.',
        'Or use the blue bell icon inside a feed to turn its alerts on or off.'
      ]}
    ],
    notes: [], tags: ['perfectserve', 'news', 'announcements', 'broadcast', 'alerts', 'feed', 'mute']
  }
];
