// Reference topics, part 1 — access & setup, navigation, Message Center, Patient Lists.
// Source: OKTUL Clinical Informatics job aids (joshuad2824-art/providertraining).
window.CERNER_TOPICS_1 = [
  {
    id: 'wifi', cat: 'connect', title: 'Join the AH-AIA Wi-Fi network',
    summary: 'Use AH-AIA for stable hospital Wi-Fi on any device. The one detail people get wrong is the username format.',
    audience: 'All staff',
    keyFacts: [
      'Username must be entered as domain\\username \u2014 include the domain and the backslash, or sign-in fails.',
      'The password is your Active Directory password.',
      'If a CA Certificate dropdown appears, set it to Don\u2019t Validate.'
    ],
    sections: [
      { h: 'iPhone or iPad', steps: [
        'Settings, then Wi-Fi.',
        'Make sure Wi-Fi is on, then choose AH-AIA.',
        'Enter your username as domain\\username, and your password.',
        'Tap Join. If certificate details appear, tap Accept.'
      ]},
      { h: 'Android', steps: [
        'Swipe down and tap the settings gear.',
        'Select Connections \u2014 it may appear as Network & Internet, or Network \u2013 WiFi.',
        'Select WiFi and make sure it is on, then select AH-AIA.',
        'If a CA Certificate dropdown appears, set it to Don\u2019t Validate.',
        'Identity: domain\\username. Leave anonymous identity blank. Password: your AD password.'
      ]},
      { h: 'Mac', steps: [
        'System Preferences, Network, Wi-Fi, then select AH-AIA.',
        'Enter username as domain\\username and your password, then Join.',
        'If certificate details appear, click Accept.'
      ]},
      { h: 'Windows 10', steps: [
        'Left-click the wireless icon at the bottom right to list networks.',
        'Select AH-AIA.',
        'Enter your username as DOMAIN\\USERNAME and your password. Leaving off DOMAIN\\ will block the login.'
      ]},
      { h: 'Windows 7', steps: [
        'Windows icon, Control Panel, Network and Sharing Center.',
        'Top left, Manage wireless networks, Add, Manually create a network profile.',
        'Network name (SSID) AH-AIA, security type WPA2-Enterprise, encryption AES.',
        'Check Start this connection automatically.',
        'Use Move Up so AH-AIA sits at the top of the SSID list \u2014 the device connects to the top entry by default.',
        'On the Security screen, Advanced settings, check Specify authentication mode and set it to User or Computer authentication.'
      ]}
    ],
    notes: [], tags: ['wifi', 'network', 'ah-aia', 'password', 'phone', 'mobile', 'android', 'ios', 'mac', 'windows']
  },
  {
    id: 'citrix', cat: 'connect', title: 'Install Citrix Workspace',
    summary: 'To run Cerner on a personal device you need Citrix Workspace installed first.',
    audience: 'Clinicians',
    keyFacts: [
      'Download the version that matches your operating system.',
      'Do not choose Add Account \u2014 you will not need to enter a URL or an email address.'
    ],
    sections: [
      { h: 'Steps', steps: [
        'Download Citrix Workspace from citrix.com/downloads/workspace-app.',
        'Install the version that matches your operating system.',
        'Skip Add Account when prompted.',
        'Go straight to the remote portal at cloud.ascension.org to reach Cerner.'
      ]}
    ],
    notes: [{ tone: 'info', text: 'The job aid still lists mvd.sjmc.org as the Cerner link. That address is being retired \u2014 use cloud.ascension.org.' }],
    tags: ['citrix', 'workspace', 'install', 'personal device', 'home', 'remote']
  },
  {
    id: 'remote', cat: 'connect', title: 'Work from home or a personal device',
    summary: 'Remote access moved to cloud.ascension.org. One portal, your normal work credentials.',
    audience: 'Anyone working remotely', updated: 'March 2026',
    keyFacts: [
      'Use only cloud.ascension.org. The old mvd.sjmc.org address is being retired.',
      'Sign in with domain\\network-username, for example SJMC\\UName01.',
      'On site you can still open MVD from the desktop Citrix Portal icon.'
    ],
    sections: [
      { h: 'Getting in', steps: [
        'Go to cloud.ascension.org and bookmark it.',
        'Sign in with your domain\\network-username and password.',
        'Under Apps you will see the icons you have access to.',
        'To pin a favourite to your Home tab, find the app icon and click the star.',
        'Confirm your clinical applications open before you need them in a hurry.'
      ]},
      { h: 'Viewing radiology images off site', steps: [
        'Select Desktops, then click the OKTUL Published Desktop.',
        'Open Cerner PowerChart from inside that desktop.',
        'You can now view images from radiology reports.'
      ]},
      { h: 'If something is missing', steps: [
        'Make sure you have the latest Citrix receiver installed.',
        'Use the latest stable Microsoft Edge or Google Chrome.',
        'Missing MVD applications have to be requested by your manager or the medical staff office.'
      ]}
    ],
    notes: [{ tone: 'warning', text: 'The Clinical Imaging Viewer launched from Cerner only works on the Ascension network. Off network it fails \u2014 use the Published Desktop instead.' }],
    tags: ['remote', 'home', 'cloud.ascension.org', 'mvd', 'vpn', 'citrix', 'imaging', 'published desktop']
  },
  {
    id: 'mobile', cat: 'connect', title: 'Set up the Cerner mobile apps',
    summary: 'PowerChart Touch, Cerner Message Center and FetaLink+ put your list, the chart and your inbox on your phone.',
    audience: 'Medical staff and OB nurses',
    keyFacts: [
      'PowerChart Touch: patient list and schedule, review the chart, create and edit notes with templates and dictation, place simple orders.',
      'Cerner Message Center: review and send messages, sign orders on the go.',
      'FetaLink+ is for OB physicians, residents, APRNs, PAs and maternal/child nurses only. Apple iOS only \u2014 Android is pending FDA approval.'
    ],
    sections: [
      { h: 'Steps, on each device you plan to use', steps: [
        'Search Cerner in the App Store and download the apps you need.',
        'Launch the app. The first one will prompt for your access code.',
        'After entering the code, tap Go at the bottom right of the keypad. Do not select the field just below Enter Access Code.',
        'Sign in with your existing Cerner username and password.'
      ]}
    ],
    notes: [{ tone: 'info', text: 'You will get an error at the access code step if the phone has no cellular or Wi-Fi signal.' }],
    tags: ['mobile', 'phone', 'powerchart touch', 'message center', 'fetalink', 'app', 'access code']
  },
  {
    id: 'touch-errors', cat: 'connect', title: 'PowerChart Touch will not let me sign in',
    summary: 'Two errors account for nearly every failed mobile sign-in. Both are fixed on the phone, not in Cerner.',
    audience: 'Providers', updated: 'April 2026',
    keyFacts: [
      '\u201cSorry, but we\u2019re having trouble signing you in\u201d means cached credentials \u2014 clear the browser data.',
      '\u201cAccess to Oracle Health is blocked\u201d means Limit IP Address Tracking is interfering \u2014 turn it off.'
    ],
    sections: [
      { h: 'Error 1 \u2014 trouble signing you in', steps: [
        'Force close the app: swipe up from the bottom and pause, then swipe up on PowerChart Touch.',
        'Open iPhone Settings.',
        'Scroll to and tap Safari, or whichever browser is your default.',
        'Tap Clear History and Website Data, then confirm with Clear History and Data.',
        'Reopen PowerChart Touch. It should prompt for a fresh Microsoft login \u2014 enter your Ascension credentials.'
      ]},
      { h: 'Error 2 \u2014 access blocked by security policy, on Wi-Fi', steps: [
        'Settings, then Wi-Fi.',
        'Tap the blue i next to the connected network.',
        'Scroll down and toggle Limit IP Address Tracking off.'
      ]},
      { h: 'Error 2 \u2014 on cellular data', steps: [
        'Settings, then Cellular.',
        'Cellular Data Options.',
        'Toggle Limit IP Address Tracking off.'
      ]}
    ],
    notes: [{ tone: 'info', text: 'Clearing website data removes browsing history. That is the point \u2014 it is what removes the hidden Microsoft token causing the block.' }],
    tags: ['powerchart touch', 'error', 'sign in', 'login', 'blocked', 'oracle health', 'ip address tracking', 'troubleshoot']
  },
  {
    id: 'dragon', cat: 'connect', title: 'Dictate with Dragon Medical One',
    summary: 'Dragon has to be launched from the Dragon-integrated Cerner icons, which open Cerner and Dragon together.',
    audience: 'All users',
    keyFacts: [
      'Dragon needs a provisioning request and a license \u2014 ask your manager or the medical staff office.',
      'PowerMic Mobile is recommended for best accuracy, but any microphone works.',
      'PowerMicII-NS is the USB handheld. Nuance PowerMic Mobile is the phone app.'
    ],
    sections: [
      { h: 'Using Dragon with Cerner', steps: [
        'Click a Dragon PowerChart or Dragon FirstNet icon \u2014 not the plain Cerner icon.',
        'From the Cerner apps page, open the Dragon folder to find these applications.',
        'In the Dragon Medical One window, verify your username.',
        'Under Microphone, choose your mic.',
        'Log into Cerner.'
      ]},
      { h: 'Dictating into anything else', steps: [
        'Request the Stand-Alone Dragon Extension \u2014 this needs a separate install.',
        'Click the desktop Dragon Medical One icon and log in.',
        'Place your cursor where you want the text.',
        'Click the microphone icon and begin speaking.',
        'If your text editor is not fully supported the text goes to the dictation box \u2014 say \u201ctransfer text\u201d to move it across.'
      ]},
      { h: 'PowerMic Mobile', steps: [
        'Download the PowerMic Mobile app.',
        'Scan the QR code to add the St. John profile.',
        'The app connects to your computer\u2019s Cerner Dragon PowerChart session for dictation.'
      ]}
    ],
    notes: [{ tone: 'info', text: 'If your microphone is not listed, check your computer\u2019s microphone input settings.' }],
    tags: ['dragon', 'dmo', 'dictation', 'voice', 'powermic', 'microphone', 'nuance']
  },
  {
    id: 'epcs', cat: 'connect', title: 'Electronically prescribe a controlled substance',
    summary: 'Oklahoma requires all Schedule II\u2013V prescriptions to be sent electronically. Signing uses Imprivata two-factor.',
    audience: 'All physicians',
    keyFacts: [
      'Oklahoma House Bill 2931 has required electronic prescribing of Schedule II\u2013V since January 1, 2020.',
      'APRNs and PAs cannot send Schedule II prescriptions in Oklahoma.',
      'Signing needs your network password plus a push notification or an Imprivata token code.'
    ],
    sections: [
      { h: 'Steps', steps: [
        'Add order.',
        'Switch the category to Discharge Meds as Rx.',
        'Search for the order.',
        'Verify the pharmacy with the patient. The preferred pharmacy should default into Send To; if none is selected, click Find Pharmacy.',
        'Complete the order details and sign.',
        'In the Electronic Prescription Preview window, check each medication and sign.',
        'Enter your network password in the Confirm your identity window.',
        'Approve the push notification on your device \u2014 an Apple Watch works too.'
      ]},
      { h: 'Schedule II for APRNs and PAs', steps: [
        'Schedule III\u2013V can be prescribed electronically and route straight to the pharmacy.',
        'For Schedule II, start the prescription, right-click and change it to a Proposal.',
        'Enter a physician\u2019s name. The prescription routes to that provider\u2019s Message Center.',
        'It will not reach the pharmacy until the physician signs it.'
      ]}
    ],
    notes: [{ tone: 'info', text: 'If the push notification expired, or that feature is off, the Confirm your identity window asks for an Imprivata token code instead.' }],
    tags: ['epcs', 'controlled substance', 'imprivata', 'prescription', 'schedule ii', 'rx', 'aprn', 'pa', 'two factor']
  },

  {
    id: 'powerchart-window', cat: 'navigate', title: 'The PowerChart window',
    summary: 'Five things to find before you do anything else. What appears on your toolbar depends on your Cerner position.',
    audience: 'All providers',
    image: 'Message_Center/images/image10.png',
    imageCaption: 'The PowerChart Organizer, with Message Center open',
    keyFacts: [
      'Task, Edit, View, Patient, Chart, Links, Notifications, Inbox and Help sit across the very top, with the toolbar underneath.',
      'Message Center is where most providers land at login.',
      'Patient List is the primary way you reach a chart.'
    ],
    sections: [
      { h: 'What is on the toolbar', steps: [
        'Patient List \u2014 your patients and the patients on your unit.',
        'Message Center \u2014 documents, orders, results and refill requests waiting on you.',
        'MPTL and Physician Worklist \u2014 task lists, where your position includes them.',
        'PC TOUCH, Depart and Communicate \u2014 mobile, discharge and messaging shortcuts.',
        'The search box at the top right, for a patient who is not on one of your lists.'
      ]}
    ],
    notes: [{ tone: 'info', text: 'Ascension St. John runs the 2018.01 build. Cerner screenshots and tips you find online often describe newer versions, so menus and labels may not match your screen.' }],
    tags: ['powerchart', 'organizer', 'toolbar', 'window', 'navigation', 'orientation', 'menu bar']
  },
  {
    id: 'chart-tab', cat: 'navigate', title: 'The patient chart tab',
    summary: 'Every chart you open becomes its own tab. Check the name on the tab before you type anything.',
    audience: 'All providers',
    image: 'assets/screens/chart-tab-left.png',
    imageCaption: 'The open patient\u2019s tab',
    image2: 'assets/screens/chart-tab-right.png',
    image2Caption: 'List, Recent and the Name search box',
    keyFacts: [
      'The tab shows the patient name \u2014 with several charts open it is easy to type into the wrong one.',
      'Close the tab, not the application, when you finish with a patient.',
      'Recent is the fastest way back to a chart you just had open.'
    ],
    sections: [
      { h: 'Moving between charts', steps: [
        'Click a tab to switch to that patient.',
        'Use List to go back to your patient list.',
        'Use Recent to reopen a chart you had open a moment ago.',
        'Type in the Name box to search for a patient who is not on a list.',
        'Use the Chart menu at the top to move between views for the patient you have open.'
      ]}
    ],
    notes: [], tags: ['chart tab', 'tabs', 'patient', 'recent', 'list', 'switch', 'navigation']
  },
  {
    id: 'demographics', cat: 'navigate', title: 'The demographics bar',
    summary: 'The band across the top of every chart. Read it every single time you open a patient.',
    audience: 'All providers',
    image: 'assets/screens/demographics-bar-left.png',
    imageCaption: 'Left half of the bar',
    image2: 'assets/screens/demographics-bar-right.png',
    image2Caption: 'Right half of the bar',
    keyFacts: [
      'MRN identifies the person and never changes. Fin# identifies this encounter and changes with every admission.',
      'Allergies sit at the far right \u2014 \u201cno known allergies\u201d and a blank field are not the same thing.',
      'Loc gives facility, unit, room and bed. Isolation shows any precautions in place.'
    ],
    sections: [
      { h: 'What each field tells you', steps: [
        'Name, Age, DOB and Sex \u2014 identity, on the left. Confirm it against the patient in front of you.',
        'MRN and Fin# \u2014 the person, and this encounter.',
        'Allergies, with the encounter type and admission date and time underneath.',
        'Code Status and Portal on the second row.',
        'PCP and Attending \u2014 who else is on this patient. These relationships drive whose patient list the patient appears on.'
      ]}
    ],
    notes: [], tags: ['demographics', 'banner bar', 'mrn', 'fin', 'allergies', 'code status', 'isolation', 'attending', 'location']
  },
  {
    id: 'menus', cat: 'navigate', title: 'The two left-hand menus',
    summary: 'The chart Menu and the Provider View component list are different things. Knowing which is which saves a lot of hunting.',
    audience: 'All providers',
    image: 'assets/screens/provider-view-menu.png',
    imageCaption: 'The Provider View component list',
    keyFacts: [
      'The chart Menu collapses to a vertical tab at the far left edge. Click it to expand, then pin it open.',
      'Inside Provider View, a second list holds the workflow components.',
      'You can drag components into the order you prefer and it sticks to your account.'
    ],
    sections: [
      { h: 'The chart Menu \u2014 the far-left tab', steps: [
        'Click the vertical Menu tab to expand it, then use the pin icon to keep it open.',
        'Results Review \u2014 labs, imaging and other results, grouped and trended.',
        'Orders \u2014 active orders and the order profile.',
        'Medication List and Histories \u2014 home and current medications, problem, procedure and social history.',
        'Documentation \u2014 all notes on the chart. This appears as Provider Note in the live record.'
      ]},
      { h: 'The Provider View component list', steps: [
        'Workflow tabs run across the top: Admit Inpt WF, ClinPic, Manage Inpt WF and any specialty view.',
        'The component list holds Labs, New Order Entry, Chief Complaint, Home Medications, Medications, History of Present Illness and Review of Systems.',
        'Click a component to jump to that section of the page.',
        'Drag to reorder. Training domain settings reset overnight; live settings stick.'
      ]}
    ],
    notes: [], tags: ['menu', 'table of contents', 'toc', 'provider view', 'components', 'navigation', 'pin']
  },
  {
    id: 'find-patient', cat: 'navigate', title: 'Find your patient',
    summary: 'Lists first, search second.',
    audience: 'All providers',
    keyFacts: [
      'Double-click a patient on a list to open the chart. Right-click to choose which view it opens into.',
      'Search by name or identifier when a patient is not on your list.',
      'Confirm you have the right person and the right encounter before you document.'
    ],
    sections: [
      { h: 'Steps', steps: [
        'From a patient list, double-click to open the chart in Provider View.',
        'Or right-click the patient, Open Patient Chart, then the view you want.',
        'To search, use the Name box at the top right of the window.',
        'Check the demographics bar against the patient before entering anything.'
      ]}
    ],
    notes: [], tags: ['patient search', 'find', 'open chart', 'encounter', 'list']
  },

  {
    id: 'message-center', cat: 'message-center', title: 'Message Center',
    summary: 'The communication tool inside Cerner, and the screen most providers land on at login. Sign, review, refuse or approve orders, notes, results and refill requests.',
    audience: 'Physicians',
    image: 'Message_Center/images/image13.png',
    imageCaption: 'Message Center, with the Results folder open',
    keyFacts: [
      'Inbox holds documents, orders, results and messages specifically for you.',
      'Proxies lets you view, modify or add a proxy so someone else can review or sign on your behalf.',
      'The Action Pane at the bottom defaults to Sign.'
    ],
    sections: [
      { h: 'Opening and reviewing inbox items', steps: [
        'In the Inbox Summary, click a folder such as General Message or Results, or a subfolder such as Critical.',
        'Select a range by clicking the first message, holding Shift, and clicking the last. Hold Ctrl to pick individual messages.',
        'The selected message highlights blue on the left, with its detail on the right.',
        'If there are attachments, click the link to open and review the document.',
        'Click Reply for the sender only, or Reply All for everyone.',
        'Compose your message, choose any Additional Message Center Options, then send.',
        'To remove the original once sent, tick the Delete check box.'
      ]},
      { h: 'Approving, forwarding and refusing orders', steps: [
        'Click Orders on the left.',
        'Click Select All on the Orders toolbar.',
        'With the orders highlighted blue, right-click and choose Forward Only, Approve (no dose range checking), or Refuse.',
        'To refuse one order, right-click it and choose Refuse.',
        'Choose a reason \u2014 the options include \u201cthis is not my order\u201d and \u201cthis is not my patient\u201d.',
        'Add detail in Comments if needed, then click OK. The refusal goes to the HIM Refusal Inbox.'
      ]},
      { h: 'Signing and co-signing a document', steps: [
        'Double-click the message to open the document.',
        'Select the Modify icon on the message toolbar.',
        'The document opens for editing \u2014 type within the fields under each heading.',
        'When finished, select Sign / Submit at the bottom right.'
      ]},
      { h: 'Forwarding for review or signature', steps: [
        'At the bottom of the screen the Action Pane automatically selects Sign.',
        'Click Other Forwarding Options and use the dropdown to select Review or Sign.',
        'Search for the provider with the binoculars box \u2014 type last name, first name.',
        'Select Next to bypass the document until later.',
        'Once all required fields are filled, OK & Close and OK & Next become available.'
      ]}
    ],
    notes: [
      { tone: 'info', text: 'Choosing Review or Sign asks the provider you forward to, to review or sign it. Disciplines that require a signer \u2014 residents, for example \u2014 use this constantly.' },
      { tone: 'info', text: 'A nurse who enters an order as Phone with Readback, Verbal with Readback, or Cosign Required sends it to you here to sign.' }
    ],
    tags: ['message center', 'inbox', 'sign', 'cosign', 'co-sign', 'refuse', 'approve', 'proxy', 'forward', 'endorse', 'refill', 'him', 'action pane']
  },
  {
    id: 'patient-lists', cat: 'lists', title: 'Patient Lists',
    summary: 'Lists are the primary way you view your patients. Build the right kinds once and you rarely need to search.',
    audience: 'All providers',
    keyFacts: [
      'A location list updates itself with whoever is at that location. A custom list you maintain by hand.',
      'A relationship list updates itself with patients where you hold that relationship \u2014 admitting, attending or consulting.',
      'Providers often call a printed list their walk list.'
    ],
    sections: [
      { h: 'List by location', steps: [
        'Search the location in alphabetical order.',
        'Select the facility and unit.',
        'Expand a location to display the units within it.',
        'Choose to display patients that have not been discharged from the location.'
      ]},
      { h: 'Custom list', steps: [
        'Create the list, then search for and add each patient.',
        'This type needs you to add and remove patients by hand.',
        'If columns do not populate, right-click the column titles and select Customize Columns.'
      ]},
      { h: 'Relationship list', steps: [
        'Choose the relationship type \u2014 Admitting Physician, Attending Physician, Consulting Physician, or All Visit Relationships.',
        'Choose the location where it applies.',
        'The list then updates itself with patients where you hold that relationship.'
      ]},
      { h: 'Proxy list', steps: [
        'Modify an existing list \u2014 a relationship list works well \u2014 to be a proxy list.',
        'Full Access lets the proxy manipulate the list. Maintain or Read are more limited.',
        'The proxy list shares your list with someone for a set period of time.'
      ]},
      { h: 'Printing your list', steps: [
        'Use the print list icon.',
        'Search your own name and choose your list.',
        'You can also look up a colleague or attending the same way.'
      ]}
    ],
    notes: [
      { tone: 'info', text: 'A discharged list is rarely used at OKTUL. If you build one, choose All Visit Relationships and two days is a common window.' },
      { tone: 'warning', text: 'Provider group lists \u2014 Hospitalist, TOC, AOOK \u2014 exist in the live record only. If patients do not show up, the provider needs to be added to the DCPtools provider list.' }
    ],
    tags: ['patient list', 'lists', 'location', 'custom', 'relationship', 'proxy', 'walk list', 'print', 'columns', 'group list']
  }
];
