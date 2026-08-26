/* The self-paced module: what it covers, in what order.
 *
 * The module is a flat ordered list of screens. Three kinds:
 *
 *   page   Hand-authored teaching, written as blocks (see the block vocabulary
 *          below). Set `covers` to a topic id when the page teaches that topic
 *          better than a generated screen would — the module then attaches that
 *          topic's Try it and knowledge check to the page, and does not
 *          generate a separate screen for it.
 *   unit   A short opener: what this unit is for and why it is worth your time.
 *   topic  Expands at runtime into a full screen from the topic entry plus its
 *          CERNER_TEACHING entry. One per topic id.
 *
 * Every topic in CERNER_TOPICS_1/2/3 must appear exactly once, either as a
 * `topic` screen or as the `covers` of a page. The module checks this on load
 * and reports any topic it cannot account for, so a topic added to the library
 * without a home here is a visible failure rather than a silent omission.
 *
 * Block vocabulary:
 *   lede    { text }                    the large opening paragraph
 *   para    { text }                    body text
 *   cards   { items:[{h,p}] }           the card grid
 *   numbers { items:[{h,p}] }           numbered callouts, numbered for you
 *   facts   { h, items:[] }             a bulleted panel
 *   steps   { h, items:[] }             numbered steps
 *   alert   { tone, title, text }       info | warning | success
 *   image   { src, caption }
 *   gallery { label, items:[{src,caption}] }
 */
window.CERNER_MODULE = [

  { kind: 'page', unit: 'Getting started', label: 'Welcome', hero: true, blocks: [
    { t: 'lede', text: 'For providers, physicians and mid‑levels. This is the whole Cerner course — everything the instructor-led class used to cover, and every provider job aid, in one place you can work through on your own.' },
    { t: 'cards', items: [
      { h: 'About 90 minutes', p: 'Longer than a sitting, and it is not meant to be one. Your place is saved as you go.' },
      { h: 'Self‑paced', p: 'No audio, no video to keep up with, no scheduled class. Read, then do it in the training domain.' },
      { h: 'Complete', p: 'All 41 provider topics. Nothing is held back for a facilitator to cover with you later.' }
    ] },
    { t: 'alert', tone: 'info', title: 'This is the provider path only.', text: 'Nurse, PCT and department-specific views have been removed so you can move straight to what you will use in the patient chart.' }
  ] },

  { kind: 'page', unit: 'Getting started', label: 'How to use this module', blocks: [
    { t: 'lede', text: 'Read a screen, then do the thing it describes in the Cerner training domain. The doing is the part that sticks.' },
    { t: 'cards', items: [
      { h: 'Try it now', p: 'Most screens end with a short list of things to do in the training domain. Work with two windows open — this module, and Cerner.' },
      { h: 'Check yourself', p: 'Then a question. Answer it before you read the explanation; getting it wrong first is how you find out what you actually understood.' },
      { h: 'Next and Back', p: 'Buttons at the bottom of every screen. Your place is remembered if you close the module and come back to it tomorrow.' },
      { h: 'Contents menu', p: 'The list on the left jumps to any screen. Use it to skip a unit that is not yours, or to come back to one topic later as a job aid.' }
    ] },
    { t: 'facts', h: 'What you need in front of you', items: [
      'A laptop on the Ascension network, or connected by VPN.',
      'Your training domain credentials for your role. If you do not have them, ask your manager or the medical staff office.',
      'This module and the Cerner training domain, side by side.'
    ] },
    { t: 'alert', tone: 'warning', title: 'Training accounts and patients reset overnight.', text: 'Anything you build, arrange or save in the training domain will be gone the next morning. That is expected — practise freely.' }
  ] },

  { kind: 'page', unit: 'Getting started', label: 'What you will be able to do', blocks: [
    { t: 'lede', text: 'By the end of this module you will have done each of these at least once, not just read about them.' },
    { t: 'numbers', items: [
      { h: 'Get connected', p: 'Join the hospital network, reach Cerner from home, set up the mobile apps, dictate, and prescribe a controlled substance.' },
      { h: 'Navigate the chart', p: 'Log in, choose your role, find a patient, and read the demographics bar and both left-hand menus with confidence.' },
      { h: 'Work your inbox and your lists', p: 'Sign, review and refuse in Message Center. Build location, custom, relationship and proxy lists.' },
      { h: 'Complete the inpatient workflow', p: 'Problem list, tagging, medication reconciliation, orders and PowerPlans, auto text, and a signed note.' },
      { h: 'Discharge a patient', p: 'Inpatient and ED discharge, the diagnosis, prescriptions, education and follow-up.' },
      { h: 'Use the tools around Cerner', p: 'PerfectServe for messages and on-call, WellSheet for rounding and handoff, DynaMed for reference.' }
    ] }
  ] },

  { kind: 'page', unit: 'About PowerChart', label: 'One record, one chart', blocks: [
    { t: 'lede', text: 'PowerChart is the electronic health record you will use for the patients you care for. Your care team shares one record, so you don’t have to repeat yourself.' },
    { t: 'para', text: 'In PowerChart you will review results, place orders and PowerPlans, reconcile medications, document your assessment, and create and sign notes.' },
    { t: 'cards', items: [
      { h: 'PowerChart', p: 'The main chart. Inpatient, ambulatory and specialty views all live here.' },
      { h: 'FirstNet', p: 'The emergency department view, built around the ED tracking board, called LaunchPoint.' },
      { h: 'Your Cerner position', p: 'Perioperative and specialty content is built into PowerChart and released by Cerner position. What you see is set by the position you were given, not by a separate application.' }
    ] },
    { t: 'alert', tone: 'info', title: 'Different doors, same chart.', text: 'Whichever application you open, you are looking at the same patient record — only the view and the starting screen change. Ascension St. John runs the 2018.01 build, so Cerner screenshots and tips you find online may not match your screen.' }
  ] },

  { kind: 'page', unit: 'About PowerChart', label: 'Who else is in the chart', blocks: [
    { t: 'lede', text: 'You are one of many people documenting on the same patient. Knowing who does what saves you duplicate work.' },
    { t: 'cards', items: [
      { h: 'Providers', p: 'Physicians, mid‑levels and residents. Orders, workflow documentation, notes, discharge.' },
      { h: 'Nursing', p: 'Assessments, medication administration, patient education, and orders taken by phone or verbally that come to you to sign.' },
      { h: 'Pharmacy', p: 'Reviews and verifies medication orders. Pharmacy technicians often complete the medication history before you review it.' },
      { h: 'Ancillary and therapy', p: 'Lab, imaging, respiratory, rehab and case management document in the same chart and results flow back to you.' }
    ] }
  ] },

  { kind: 'unit', unit: 'Getting connected', label: 'Before you can do anything',
    lede: 'Seven things that have to work before Cerner is any use to you — the network, the portal, your phone, your microphone, and the two-factor set-up for controlled substances.',
    note: 'If you are already connected and prescribing, skim this unit and move on. Come back to it the first time something breaks.' },

  { kind: 'topic', unit: 'Getting connected', topic: 'wifi' },
  { kind: 'topic', unit: 'Getting connected', topic: 'citrix' },
  { kind: 'topic', unit: 'Getting connected', topic: 'remote' },
  { kind: 'topic', unit: 'Getting connected', topic: 'mobile' },
  { kind: 'topic', unit: 'Getting connected', topic: 'touch-errors' },
  { kind: 'topic', unit: 'Getting connected', topic: 'dragon' },
  { kind: 'topic', unit: 'Getting connected', topic: 'epcs' },

  { kind: 'page', unit: 'Getting in', label: 'Access PowerChart', blocks: [
    { t: 'lede', text: 'How you open PowerChart depends on where you are.' },
    { t: 'cards', items: [
      { h: 'On an Ascension workstation', p: 'Open PowerChart from the desktop, or from the Citrix Portal icon for MVD applications. On site, join the AH-AIA network — your Wi‑Fi username is your domain\\username.' },
      { h: 'From home', p: 'Install Citrix Workspace, then sign in at cloud.ascension.org with your domain\\username. The old mvd.sjmc.org address is being retired. To view radiology images off site, open the OKTUL Published Desktop under Desktops rather than launching the viewer from Cerner.' },
      { h: 'On your phone', p: 'Provider phone applications include PowerChart Touch, Message Center, Dragon Medical One and PerfectServe. Obstetrics also uses FetaLink+.' }
    ] },
    { t: 'alert', tone: 'info', title: 'Two things to set up early.', text: 'Set your password, and set up EPCS with Imprivata if you prescribe controlled substances. Clinical Informatics can help: 918-744-3088, Monday to Friday.' }
  ] },

  { kind: 'page', unit: 'Getting in', label: 'Log in', blocks: [
    { t: 'lede', text: 'Enter your username and password on the PowerChart sign‑in window.' },
    { t: 'imageslot', id: 'cerner-login', placeholder: 'Drop the PowerChart login screenshot', caption: 'PowerChart sign‑in window' },
    { t: 'cards', items: [
      { h: 'In the training domain', p: 'Use the training username issued for your role. Training accounts and patients reset nightly, so anything you save while working through this module will be gone the next morning.' },
      { h: 'In the live record', p: 'You use your own credentials. Some items are named differently in the live record than in training — the function is the same.' }
    ] }
  ] },

  { kind: 'page', unit: 'Getting in', label: 'Select your role', blocks: [
    { t: 'lede', text: 'Cerner asks which role you are working in. Your answer sets the view you land on.' },
    { t: 'para', text: 'Choose the provider role that matches the work you are about to do. Most providers land in the Message Center; in the emergency department you land on the ED tracking board, and in a perioperative area you land in case selection.' },
    { t: 'imageslot', id: 'cerner-role', placeholder: 'Drop the role selection screenshot', caption: 'Role selection window' },
    { t: 'alert', tone: 'warning', title: 'Pick the wrong role and nothing lines up.', text: 'Your default view and available tools will not match your work. Close PowerChart and reopen it to choose again.' }
  ] },

  { kind: 'unit', unit: 'Finding your way', label: 'The chart, and how to read it',
    lede: 'Five landmarks in the window, and the strip across the top of every chart. This is the unit that stops Cerner feeling like a maze.',
    note: 'Do this one at a laptop with a training patient open. It is almost entirely about recognising things on screen.' },

  { kind: 'page', unit: 'Finding your way', label: 'The PowerChart window', covers: 'powerchart-window', blocks: [
    { t: 'lede', text: 'Five things to find before you do anything else.' },
    { t: 'numbers', items: [
      { h: 'Menu bar and toolbar', p: 'Task, Edit, View, Patient, Chart, Links, Notifications, Inbox and Help across the very top, with the toolbar underneath.' },
      { h: 'Message Center', p: 'Where you land at login. Inbox, Proxies and Pools tabs, with the Inbox Summary listing the documents, orders, results and refill requests waiting on you.' },
      { h: 'Patient Lists', p: 'Opens your patient lists — your patients, and the patients on your unit. This is the primary way you reach a chart.' },
      { h: 'Role tools', p: 'MPTL, Physician Worklist, PC TOUCH, Depart and Communicate sit on the toolbar. What appears depends on your role.' },
      { h: 'Search', p: 'Top right. Use it for a patient who is not on one of your lists.' }
    ] }
  ] },

  { kind: 'page', unit: 'Finding your way', label: 'Find your patient', covers: 'find-patient', blocks: [
    { t: 'lede', text: 'Lists first, search second.' },
    { t: 'imageslot', id: 'cerner-search', placeholder: 'Drop the patient search screenshot', caption: 'Patient search window' },
    { t: 'cards', items: [
      { h: 'From a patient list', p: 'Double‑click a patient to open the chart, or right‑click to choose exactly which view you want to open into.' },
      { h: 'From search', p: 'Search by name or identifier when a patient is not on your list. Confirm you have the right person and the right encounter before you document.' },
      { h: 'Building lists', p: 'Location, custom, relationship and proxy lists have their own unit later in this module.' }
    ] }
  ] },

  { kind: 'page', unit: 'Finding your way', label: 'The patient chart tab', covers: 'chart-tab', blocks: [
    { t: 'lede', text: 'Every chart you open becomes its own tab.' },
    { t: 'gallery', label: 'The chart tab and its controls', items: [
      { src: 'assets/screens/chart-tab-left.png', caption: 'The open patient’s tab' },
      { src: 'assets/screens/chart-tab-right.png', caption: 'List, Recent and the Name search box' }
    ] },
    { t: 'numbers', items: [
      { h: 'The tab shows the patient name', p: 'Check it before you enter anything. With several charts open it is easy to type into the wrong one.' },
      { h: 'Close the tab, not the application', p: 'When you finish with a patient. Closing charts you are done with keeps the window manageable.' },
      { h: 'List, Recent and the Name box', p: 'Top right. Recent is the fastest way back to a chart you just had open; use Name to search for a patient who is not on a list.' }
    ] }
  ] },

  { kind: 'page', unit: 'Finding your way', label: 'The demographics bar', covers: 'demographics', blocks: [
    { t: 'lede', text: 'The band across the top of every chart. Read it every time you open a patient.' },
    { t: 'gallery', label: 'One continuous strip, shown in two halves so it stays readable', items: [
      { src: 'assets/screens/demographics-bar-left.png', caption: 'Left half' },
      { src: 'assets/screens/demographics-bar-right.png', caption: 'Right half' }
    ] },
    { t: 'numbers', items: [
      { h: 'Name, Age, DOB, Sex', p: 'Identity, on the left. Confirm it against the patient in front of you before you document.' },
      { h: 'MRN and Fin#', p: 'MRN identifies the person and never changes. Fin# identifies this encounter, so it changes with every admission.' },
      { h: 'Allergies', p: 'Far right, above the encounter type and admission date and time. Check it before ordering — “no known allergies” and a blank field are not the same thing.' },
      { h: 'Code Status, Loc, Isolation', p: 'Code Status and Portal on the second row. Loc gives unit, room and bed. Isolation shows any precautions in place.' }
    ] }
  ] },

  { kind: 'page', unit: 'Finding your way', label: 'The two left-hand menus', covers: 'menus', blocks: [
    { t: 'lede', text: 'Two menus sit on the left. The chart Menu collapses to a vertical tab at the far edge; inside Provider View, a second list holds the workflow components.' },
    { t: 'imageslot', id: 'cerner-toc', src: 'assets/screens/provider-view-menu.png', placeholder: 'Drop the Provider View menu screenshot', caption: 'Provider View component list' },
    { t: 'cards', items: [
      { h: 'Menu (the far-left tab)', p: 'The chart table of contents. Click the vertical Menu tab to expand it, then pin it open with the pin icon. Results Review, Orders, Medication List, Histories and Documentation live here.' },
      { h: 'Workflow tabs', p: 'Admit Inpt WF, ClinPic, Manage Inpt WF and any specialty view run across the top of Provider View.' },
      { h: 'Component list', p: 'Labs, New Order Entry, Chief Complaint, Home Medications, Medications, History of Present Illness, Review of Systems. Click one to jump to that section of the page.' },
      { h: 'Reorder it to suit you', p: 'You can drag components into the order you prefer and it sticks to your account. Training domain settings reset overnight.' }
    ] }
  ] },

  { kind: 'unit', unit: 'Message Center', label: 'Your inbox',
    lede: 'The communication tool inside Cerner, and the screen most providers land on at login. Everything waiting on your signature arrives here.',
    note: 'This was lesson 2 of the instructor-led class.' },

  { kind: 'topic', unit: 'Message Center', topic: 'message-center' },

  { kind: 'unit', unit: 'Patient Lists', label: 'How you reach a chart',
    lede: 'Lists are the primary way you view your patients. Build the right kinds once and you will rarely need to search again.',
    note: 'This was lesson 3 of the instructor-led class.' },

  { kind: 'topic', unit: 'Patient Lists', topic: 'patient-lists' },

  { kind: 'unit', unit: 'Inpatient Workflow', label: 'Document and write the note at once',
    lede: 'The longest unit, and the one that pays back most. The workflow pages let you document and create a note in a single pass — nine topics, from setting the page up to signing the note.',
    note: 'This was lesson 4, the longest lesson of the instructor-led class. Take it in two sittings if you need to.' },

  { kind: 'topic', unit: 'Inpatient Workflow', topic: 'workflow-navigate' },
  { kind: 'topic', unit: 'Inpatient Workflow', topic: 'workflow-complete' },
  { kind: 'topic', unit: 'Inpatient Workflow', topic: 'med-rec' },
  { kind: 'topic', unit: 'Inpatient Workflow', topic: 'orders-powerplans' },
  { kind: 'topic', unit: 'Inpatient Workflow', topic: 'order-favorites' },

  { kind: 'page', unit: 'Inpatient Workflow', label: 'Documentation and notes', covers: 'create-note', blocks: [
    { t: 'lede', text: 'Where notes live, and what the buttons at the bottom of a note actually do.' },
    { t: 'imageslot', id: 'cerner-notes', src: 'Message_Center/images/image1.png', placeholder: 'Drop the documentation / notes screenshot', caption: 'A note open for editing' },
    { t: 'cards', items: [
      { h: 'Sign / Submit', p: 'Completes the note and makes it part of the record.' },
      { h: 'Save', p: 'Holds the note for you to finish later. Other providers cannot see a saved note.' },
      { h: 'Revise or Addend', p: 'Find the note under Documentation, select it, and choose Modify to revise or add to it.' },
      { h: 'In Error', p: 'For a note created on the wrong patient or in the wrong place. Add a comment explaining why.' },
      { h: 'Forward', p: 'The Action Pane defaults to Sign. Use Other Forwarding Options to send the note to another provider to Review or Sign, then find them with the binoculars search.' }
    ] },
    { t: 'alert', tone: 'info', title: 'Notes that need an attending.', text: 'Your notes route to an attending to sign. Forward from the Action Pane and choose Sign, then search the attending by last name, first name.' }
  ] },

  { kind: 'topic', unit: 'Inpatient Workflow', topic: 'autotext' },
  { kind: 'topic', unit: 'Inpatient Workflow', topic: 'autotext-copy' },
  { kind: 'topic', unit: 'Inpatient Workflow', topic: 'dyndoc' },

  { kind: 'unit', unit: 'Discharge', label: 'Getting the patient out',
    lede: 'Discharge mirrors the inpatient workflow — the notes you already took do most of the work. Inpatient and ED discharge differ enough to be worth both.',
    note: 'This was lesson 5 of the instructor-led class.' },

  { kind: 'topic', unit: 'Discharge', topic: 'inpatient-discharge' },
  { kind: 'topic', unit: 'Discharge', topic: 'ed-discharge-workflow' },
  { kind: 'topic', unit: 'Discharge', topic: 'ed-discharge-diagnosis' },

  { kind: 'unit', unit: 'Emergency Department', label: 'FirstNet and LaunchPoint',
    lede: 'Three things specific to the emergency department: making your favorites visible in LaunchPoint, setting the door-to-doc time, and the global phrase library.',
    note: 'Skip this unit if you do not work in the ED.' },

  { kind: 'topic', unit: 'Emergency Department', topic: 'ed-launchpoint' },
  { kind: 'topic', unit: 'Emergency Department', topic: 'md-seen' },
  { kind: 'topic', unit: 'Emergency Department', topic: 'ed-autotext' },

  { kind: 'unit', unit: 'PerfectServe', label: 'Messages, and who is on call',
    lede: 'The secure messaging and on-call app on your phone. Nine topics: getting in, sending and clearing messages, finding who is covering, and controlling what reaches you when you are off.',
    note: 'Do this unit with your phone in your hand rather than at the laptop.' },

  { kind: 'topic', unit: 'PerfectServe', topic: 'ps-overview' },
  { kind: 'topic', unit: 'PerfectServe', topic: 'ps-login' },
  { kind: 'topic', unit: 'PerfectServe', topic: 'ps-messaging' },
  { kind: 'topic', unit: 'PerfectServe', topic: 'ps-directory' },
  { kind: 'topic', unit: 'PerfectServe', topic: 'ps-dialer' },
  { kind: 'topic', unit: 'PerfectServe', topic: 'ps-status' },
  { kind: 'topic', unit: 'PerfectServe', topic: 'ps-away' },
  { kind: 'topic', unit: 'PerfectServe', topic: 'ps-care-team' },
  { kind: 'topic', unit: 'PerfectServe', topic: 'ps-news' },

  { kind: 'unit', unit: 'Other tools', label: 'Around the edges of Cerner',
    lede: 'Three tools that sit alongside the chart: rounding and handoff, clinical reference, and the status orders that decide what the hospital can bill.',
    note: 'Short unit. The last one matters more than its length suggests.' },

  { kind: 'topic', unit: 'Other tools', topic: 'wellsheet' },
  { kind: 'topic', unit: 'Other tools', topic: 'dynamed' },
  { kind: 'topic', unit: 'Other tools', topic: 'provider-status' },

  { kind: 'page', unit: 'Wrap up', label: 'What comes next', blocks: [
    { t: 'lede', text: 'That is the whole course. Everything the instructor-led class covered, plus every provider job aid, is now behind you.' },
    { t: 'para', text: 'None of it has to stay in your head. Cerner for Providers holds all 41 topics with a search box — use it at the moment you need something rather than trying to remember it now.' },
    { t: 'cards', items: [
      { h: 'Customise your account', p: 'The one thing this module cannot do for you. Log into the live record and set up your favorites, note types and auto text for the way you actually work.' },
      { h: 'Keep the reference open', p: 'Cerner for Providers is searchable and works offline. Put it on your phone and your desktop.' },
      { h: 'When something is wrong', p: 'A screen that has changed, a step that does not work: tell the OKTUL provider training team, so the job aid and this module stay in step.' },
      { h: 'When you are stuck', p: 'Clinical Informatics, 918-744-3088, Monday to Friday. Access problems and workflows behaving oddly both go here.' }
    ] },
    { t: 'alert', tone: 'info', title: 'A facilitator is still available.', text: 'Working through this alone is the point, but it does not mean you are on your own. If a topic did not land, ask for a session on that topic rather than repeating the whole course.' }
  ] },

  { kind: 'attest', unit: 'Wrap up', label: 'Attestation' },
  { kind: 'done', unit: 'Wrap up', label: 'Module complete' }

];
