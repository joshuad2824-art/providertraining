// Categories, the five-lesson class, and the facilitator guide.
// Sources: OKTUL provider facilitator guide + job-aid library.
window.CERNER_CATEGORIES = [
  { id: 'connect', name: 'Getting connected', blurb: 'Wi-Fi, Citrix, remote access, phones, dictation, EPCS.' },
  { id: 'navigate', name: 'Finding your way', blurb: 'The window, the chart tab, the demographics bar, the menus.' },
  { id: 'message-center', name: 'Message Center', blurb: 'Your inbox. Signing, co-signing, refusing, proxies.' },
  { id: 'lists', name: 'Patient Lists', blurb: 'Location, custom, relationship and proxy lists.' },
  { id: 'workflow', name: 'Inpatient Workflow', blurb: 'Documenting, med rec, orders, PowerPlans, notes, auto text.' },
  { id: 'discharge', name: 'Discharge', blurb: 'Inpatient and ED discharge, diagnosis, prescriptions.' },
  { id: 'ed', name: 'Emergency Department', blurb: 'LaunchPoint, MD Seen, ED global phrases.' },
  { id: 'perfectserve', name: 'PerfectServe', blurb: 'Secure messaging, the directory, who is on call, and covering your pages.' },
  { id: 'tools', name: 'Other tools', blurb: 'WellSheet, DynaMed, status and level-of-care orders.' }
];

window.CERNER_LESSONS = [
  {
    n: 1, id: 'l1', title: 'Introduction to Cerner', slides: '5\u20137', duration: '15 minutes',
    intro: 'Getting oriented: what PowerChart is, how you get into it, and how to read a chart once you are there.',
    objective: 'Log in, select your role, find a patient, and read the demographics bar and the chart menus with confidence.',
    inClass: [
      'Log in to the Cerner training domain with the credentials for your role.',
      'Open a chart and walk the demographics bar field by field.',
      'Expand and pin the chart Menu, then reorder your Provider View components.'
    ],
    activity: 'Open your assigned training patient, then say out loud what the demographics bar tells you \u2014 allergies, code status, location, attending.',
    topics: ['powerchart-window', 'chart-tab', 'demographics', 'menus', 'find-patient'],
    facNotes: [
      'This material is covered in the Introduction to Cerner eLearning that learners complete before class. Confirm they did it rather than reteaching it.',
      'Display the title slide until it is time to begin. Slides 1\u20134 cover the introduction and training domain login.',
      'Have the training domain login information ready to hand out. The link is in the Important Web Links window in the Adobe Connect classroom.',
      'Ensure the learner is on the Ascension network or connected by VPN.'
    ],
    domain: { app: 'PowerChart', login: 'Assigned training provider', patient: 'Assigned training patient', view: 'Provider View' }
  },
  {
    n: 2, id: 'l2', title: 'Message Center', slides: '8\u201310', duration: '20 minutes',
    intro: 'The communication tool inside Cerner. For most providers it is the first screen at login.',
    objective: 'Work your inbox: sign, review, refuse and approve orders, notes, results and refill requests.',
    inClass: [
      'Review Message Center navigation \u2014 the left-hand menu and the Summary Pane.',
      'Review the Inbox tab: documents, orders, results, and messages or work items for you specifically.',
      'Review the Proxies tab \u2014 view, modify or add a proxy so someone can review or sign for you.',
      'Work the Action Pane: Review or Refuse, forward or comment, then Okay & Close or Okay & Next.',
      'Endorse results, documents and orders that a nurse entered as phone, verbal or cosign required.'
    ],
    activity: 'Independent knowledge check \u2014 work through your own inbox in the training domain. Slide 10.',
    topics: ['message-center'],
    facNotes: [
      'Use the Hospitalist role for the guided demo.',
      'If your ministry has a best practice on how many times a day to check Message Center, say it here.',
      'The Action Pane is used for signing a saved note, reviewing orders, signing orders, refusing orders, and approving refill requests.',
      'Message Center flier: link to be added.'
    ],
    domain: { app: 'PowerChart', login: 'Assigned training provider, Hospitalist role', patient: 'Assigned training patient', view: 'Message Center' }
  },
  {
    n: 3, id: 'l3', title: 'Patient Lists', slides: '11\u201313', duration: '20 minutes',
    intro: 'Lists let you see your patients and the patients on your unit at a glance. They are the primary way into a chart.',
    objective: 'Build location, custom, relationship and proxy lists, and print a walk list.',
    inClass: [
      'Create a list by location, and discuss how it updates itself.',
      'Create a custom list and add two patients by search.',
      'Create a relationship list \u2014 admitting, attending, consulting, or all visit relationships.',
      'Modify a list to be a proxy list, and choose Full Access, Maintain or Read.',
      'Print a physician list \u2014 the walk list.'
    ],
    activity: 'Independent knowledge check \u2014 build a relationship list and add your two training patients. Slide 13.',
    topics: ['patient-lists', 'find-patient'],
    facNotes: [
      'Suggest list types by specialty, including resident groups where appropriate.',
      'Show how to look up a colleague or attending using the print list icon.',
      'A discharged list is rarely used at OKTUL. Two days is a common window if they build one.',
      'Provider group lists \u2014 Hospitalist, TOC, AOOK \u2014 are live-record only. Missing patients mean the provider needs adding to the DCPtools provider list.',
      'Case Selection, Periop Tracking and Tracking List are not available in the training domain. Show providers where to find them based on their practice.'
    ],
    domain: { app: 'PowerChart', login: 'Assigned training provider, Hospitalist role', patient: 'Two assigned training patients', view: 'Patient Lists' }
  },
  {
    n: 4, id: 'l4', title: 'Inpatient Workflow', slides: '14\u201330', duration: '50 minutes',
    intro: 'The workflow pages let you document and create a note at the same time. This is the longest lesson, in five topics.',
    objective: 'Complete the inpatient workflow for a patient: problem list, tagging, medication reconciliation, orders and PowerPlans, and a note.',
    inClass: [
      'Topic 1 \u2014 navigate and set up the workflow pages, and move panes to the right window. Slides 14\u201316.',
      'Topic 2 \u2014 complete the workflow: problem list, priorities, tagging a result, auto text. Slides 17\u201319.',
      'Topic 3 \u2014 medication reconciliation and prescriptions. Slides 20\u201322.',
      'Topic 4 \u2014 placing orders and PowerPlans. Slides 23\u201327.',
      'Topic 5 \u2014 create a note. Slides 28\u201330.'
    ],
    activity: 'Four independent knowledge checks, one per topic. Slides 16, 19, 22, 26, 27 and 30.',
    topics: ['workflow-navigate', 'workflow-complete', 'med-rec', 'orders-powerplans', 'order-favorites', 'create-note', 'autotext', 'autotext-copy', 'dyndoc'],
    facNotes: [
      'For training, use this component order: Subjective/HPI, Review of Systems, Objective/Physical Exam, Assessment and Plan, Opioid Review. Different specialties may differ.',
      'Have providers move panes across by clicking the side arrow in the order they want them \u2014 click order sets side-pane order.',
      'Provider View adapts to screen size. On a small screen, reduce scaling to 100% before changing resolution.',
      'Suggested problem search: Heartburn. Set Chest pain as priority 1 and Heartburn as priority 2.',
      'Suggested tagging demo: Diagnostics, XR Chest 1 View, highlight findings, Tag, Refresh, then drag onto Chest pain.',
      'Suggested order examples: CBC, or Chest AP/Lat. Suggested PowerPlan: CARD Chest Pain Intermediate Risk OC.',
      'Complete medication admission before the admission PowerPlans \u2014 it saves reviewing the same medications twice.',
      'Global phrases \u2014 .ros, .diagnosis, .admitdate \u2014 are not in the training domain. Review them in the live record section.',
      'Fliers still to add: discharge workflow, order favorites, medication reconciliation, PowerPlan add to phase, provider status level of care, coder job aid, tagging results.'
    ],
    domain: { app: 'PowerChart', login: 'Assigned training provider', patient: 'Assigned training patient', view: 'Provider View \u2014 Inpatient Workflow' }
  },
  {
    n: 5, id: 'l5', title: 'Patient Discharge', slides: '31\u201334', duration: '25 minutes',
    intro: 'Discharge mirrors the inpatient workflow. The notes you already took do most of the work.',
    objective: 'Discharge a patient: diagnosis, discharge orders, medication reconciliation, education, follow-up and the discharge note.',
    inClass: [
      'Move Objective/Physical Exam, Subjective/HPI and Hospital Course to the right side of the window.',
      'Set the discharge diagnosis \u2014 a This Visit action is required, then Modify the working diagnosis to a discharge diagnosis.',
      'Discharge order entry: DISC \u2014 Discharge Orders, modify in the cart, then Initiate Now.',
      'Discharge medication reconciliation, and Create New Rx for prescriptions.',
      'Patient education, follow-up, and the Discharge Note Acute.'
    ],
    activity: 'Independent knowledge check \u2014 discharge your training patient end to end. Slide 34.',
    topics: ['inpatient-discharge', 'med-rec', 'epcs', 'ed-discharge-workflow', 'ed-discharge-diagnosis'],
    facNotes: [
      'Discharge Order Entry is called Discharge and New Order Entry in the live record. Documentation is called Provider Note.',
      'Discharge Note Acute is called Discharge Summary Note in the live record.',
      'Show Med General Discharge in the live record.',
      'Mention the EPCS workflow with Imprivata during the prescription step.',
      'For General Diet you have to select Unrestricted in the details.',
      'Fliers still to add: Imprivata, custom education.'
    ],
    domain: { app: 'PowerChart', login: 'Assigned training provider, Hospitalist role', patient: 'Assigned training patient', view: 'Provider View \u2014 Inpatient Discharge' }
  }
];

window.CERNER_FACILITATOR = {
  course: {
    name: 'Cerner Standard Functionalities for Providers',
    description: 'In this course we cover the Cerner standard functionalities that all providers use.',
    prework: 'Introduction to Cerner \u2014 the eLearning module in MyLearning. Confirm completion before class.',
    postwork: 'Additional time is recommended for providers to access and customise their Cerner accounts \u2014 a market-specific customisation lab where they log in with their own account and set up favorites, note types, auto text and anything department-specific.',
    duration: '2 hours',
    author: 'Jason Thorne, Instructional Designer, ECI',
    system: 'Aligned with the Cerner National Training Domain. Requires a VPN connection. Learner login credentials are issued by market.',
    roles: 'Providers in Anesthesia, Behavioral Health, Children\u2019s (Perinatology, Pediatric, Pediatric ED, Children\u2019s ICU, NICU), ED, Lab AP Pathology, Perioperative, Hospitalist, Intensivist, Mid-Level (PA/NP), Oncology, Palliative Care, Specialty Medicine, Radiology, Acute Rehab, Women\u2019s Health (Anesthesiology, OB, Pediatrics), and Residents.',
    materials: ['Training presentation', 'eLearning pre-work', 'Video tutorials embedded throughout the facilitator guide'],
    objectives: [
      'Identify common functionalities in the Cerner patient record.',
      'Use the Message Center and Patient Lists.',
      'Complete the inpatient workflow for a patient.',
      'Discharge a patient.'
    ]
  },
  strategy: [
    { h: 'Tell', t: 'Introduce the learner to the topic and give a real-world example of when they will use it.' },
    { h: 'Show', t: 'Give a guided demonstration in the Cerner training domain.' },
    { h: 'Do', t: 'Have the learner follow along in the training domain during the demonstration.' },
    { h: 'Apply', t: 'Assist the learner through a scenario-based activity. This is where you assess learning.' },
    { h: 'On the job', t: 'Videos are embedded for your preparation and are also available to learners for on-demand support afterwards.' }
  ],
  strategyNote: 'Guided demo means you demonstrate and the learner follows along on their own machine. An independent knowledge check means the learner follows instructions while you assist as needed. Tell learners up front that some items may be named differently in the live record than in the training domain, but the functionality is the same.',
  domain: [
    'Every learner needs training domain access for the whole course \u2014 that is where all demonstrations and activities happen.',
    'Give each learner the credentials that match their role.',
    'VPN access is required if they log in remotely.',
    'Training domain users and patients refresh nightly, midnight to 4 a.m. Eastern. Anything set up in class is gone the next morning.'
  ],
  virtual: [
    'Adobe Connect is the virtual platform. Send the classroom link by email; learners use the browser version and should not download the application.',
    'Duplicate the Cerner Core Content classroom template and reuse the same room each session \u2014 clear chat, Q&A and polls before each new class.',
    'Learners should have exactly two windows open: the Adobe Connect classroom in Chrome, and the Cerner training domain.',
    'During independent activities, have learners share their screen so you can monitor participation and help.',
    'Encourage the Actions button at the top of the screen, or the chat and Q&A window, for questions.',
    'You need a machine on the Ascension network or VPN, two monitors \u2014 classroom on one, training domain on the other \u2014 and a webcam and headset. Be on camera for the introduction and the wrap up.',
    'Learners need a machine on the network or VPN, plus a webcam and headset.',
    'If Adobe Connect fails on the day, Google Meet is a reasonable backup. Talk to leadership about a longer-term contingency.'
  ],
  providerTools: [
    'Set up their password.',
    'EPCS with Imprivata for controlled substances.',
    'Phone applications: PerfectServe, Dragon Medical One, PowerChart Touch. OB also needs FetaLink+.',
    'Cerner from home needs Citrix Workspace. Share the link in the introduction email and have them check their operating system \u2014 there is no account to set up.'
  ],
  prod: [
    'Patient list, including the provider group list.',
    'Case selection and periop tracking.',
    'Tracking list.',
    'Patient search.',
    'Custom and specialty MPages.',
    'Shared favorites in New Order Entry, order favorites, shared orders.',
    'Auto text copy utility.',
    'Global phrases: \\PE, \\ROS, =labs, =dx, =i&o.',
    'Note types: history and physical, advance care discussion, discharge summary, consultation report, operative report, procedure record, progress note.',
    'Dictation \u2014 daily progress has to be completed in Cerner. Send other requirements to HIM.',
    'Templates and favorites.',
    'Residents and mid-levels \u2014 sending notes for endorsement.',
    'Discharge workflow, adding the tab, and showing orders.'
  ],
  assessment: [
    'Informal: knowledge checks for each topic, as simulation activities in the training domain.',
    'Formal: the required provider post test, run as a class. Slide 37.',
    'Learner reaction survey immediately after training \u2014 QR code and link are on the closing slides.',
    'Behaviour change surveys go to the participant and their supervisor 60 days post training.',
    'Facilitators are required to provide course completion information for every learner.'
  ],
  support: [
    { who: 'Clinical Informatics \u2014 hospital team', how: 'ClinicalInformaticsHospitals@sjmc.org \u00b7 918-744-3088, Monday to Friday' },
    { who: 'Clinical Informatics \u2014 AMG clinic team', how: 'OKTUL-DL-SJCAmbulatoryClinicalInformatics@ascension.org' }
  ]
};
