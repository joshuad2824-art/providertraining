/* Teaching scaffolding for the self-paced module.
 *
 * The topic files carry the reference material — what the job aid says. This
 * file carries what a facilitator used to supply on top of it, keyed by the
 * same topic ids:
 *
 *   why    Tell.  Why this matters and when you actually hit it. One or two
 *          sentences, spoken to the learner.
 *   tryIt  Do.    What to do right now in the training domain. Written so a
 *          learner alone at a laptop can follow it without a demonstration.
 *   check  Apply. One question, answerable from the topic's own keyFacts,
 *          steps or notes — never from outside knowledge. `answer` is the
 *          index into `options`; `why` explains the answer either way.
 *
 * Every check is grounded in the matching topic entry. If a job aid changes,
 * change the topic first, then the check that rests on it.
 */
window.CERNER_TEACHING = {

  /* ---------- Getting connected ---------- */

  'wifi': {
    why: 'Before anything else works on your own phone or laptop, you have to be on the hospital network. Nearly every failed sign-in here is the same mistake in the username field.',
    tryIt: [
      'Open the Wi-Fi settings on the phone you actually carry and look for AH-AIA.',
      'Type your username the long way — your domain, a backslash, then your username — and use your Active Directory password.',
      'If a CA Certificate dropdown appears, set it to Don’t Validate before you tap Join.'
    ],
    check: {
      q: 'You type your username and password for AH-AIA and the sign-in fails immediately. What is the first thing to check?',
      options: [
        'That you entered the username as domain\\username, including the backslash',
        'That you are standing close enough to an access point',
        'That your Active Directory password has not expired'
      ],
      answer: 0,
      why: 'The username has to include the domain and the backslash. Leaving it off blocks the login outright — it is the single most common cause. An expired password is worth ruling out second.'
    }
  },

  'citrix': {
    why: 'Citrix Workspace is the container Cerner runs inside on a device the hospital does not own. No Citrix, no Cerner from home.',
    tryIt: [
      'Check whether Citrix Workspace is already installed on your home machine.',
      'If not, download the version matching your operating system from citrix.com/downloads/workspace-app.',
      'Install it — and when it offers Add Account, skip it.'
    ],
    check: {
      q: 'The installer prompts you to Add Account. What should you do?',
      options: [
        'Skip it — you reach Cerner through the portal, not through an account in the app',
        'Enter cloud.ascension.org as the account URL',
        'Enter your Ascension email address'
      ],
      answer: 0,
      why: 'Skip Add Account. You will never need to enter a URL or an email there — you go straight to the remote portal at cloud.ascension.org instead.'
    }
  },

  'remote': {
    why: 'Working from home is one address and your normal credentials. The catch is radiology images, which fail in a way that looks like a broken account rather than a network restriction.',
    tryIt: [
      'Go to cloud.ascension.org and bookmark it. Do not use the old mvd.sjmc.org address.',
      'Sign in with your domain\\network-username — for example SJMC\\UName01.',
      'Find an app you use often and click its star to pin it to your Home tab.',
      'Open your clinical applications once now, while nothing depends on it.'
    ],
    check: {
      q: 'From home you open PowerChart through the portal, but the Clinical Imaging Viewer will not load a radiology image. What is the fix?',
      options: [
        'Open the OKTUL Published Desktop under Desktops, and launch PowerChart from inside it',
        'Reinstall Citrix Workspace and try again',
        'Request imaging access from the medical staff office'
      ],
      answer: 0,
      why: 'The viewer launched from Cerner only works on the Ascension network. Off network you go through Desktops, open the OKTUL Published Desktop, and run PowerChart inside that.'
    }
  },

  'mobile': {
    why: 'The mobile apps put your list, the chart and your inbox in your pocket. Setup has one step people reliably get wrong, at the access code.',
    tryIt: [
      'Search Cerner in the App Store and download the apps for your role.',
      'Launch the first one and enter your access code.',
      'Tap Go at the bottom right of the keypad — not the field just below Enter Access Code.',
      'Sign in with your existing Cerner username and password.'
    ],
    check: {
      q: 'You are on the Enter Access Code screen and nothing happens after you type the code. What went wrong?',
      options: [
        'You need to tap Go at the bottom right of the keypad, not the field below the code box',
        'The access code has to be entered twice to confirm',
        'The app needs to be reinstalled'
      ],
      answer: 0,
      why: 'Tap Go at the bottom right of the keypad. Selecting the field just below Enter Access Code is the usual wrong turn. Separately, you will get an error here if the phone has no cellular or Wi-Fi signal.'
    }
  },

  'touch-errors': {
    why: 'Two errors account for nearly every failed PowerChart Touch sign-in, and neither is fixed in Cerner. Recognising which one you have saves a call.',
    tryIt: [
      'Read both error messages below and note which one you have seen.',
      'For “trouble signing you in”: force close the app, then clear history and website data in Safari.',
      'For “access is blocked”: turn off Limit IP Address Tracking — under Wi-Fi for the network you are on, or under Cellular Data Options.'
    ],
    check: {
      q: '“Access to Oracle Health is blocked” appears when you open PowerChart Touch. What is causing it?',
      options: [
        'Limit IP Address Tracking is interfering — turn it off for that network',
        'Cached credentials — clear history and website data',
        'Your account has been locked and needs the Service Desk'
      ],
      answer: 0,
      why: 'That message points to Limit IP Address Tracking. Cached credentials produce the other error — “Sorry, but we’re having trouble signing you in” — which is the one you clear browser data for.'
    }
  },

  'dragon': {
    why: 'Dragon only works with Cerner if you launch it the right way. Opening the plain Cerner icon and then wondering why dictation is dead is a common half hour lost.',
    tryIt: [
      'Find the Dragon folder on the Cerner apps page.',
      'Open a Dragon PowerChart or Dragon FirstNet icon — not the plain Cerner icon.',
      'Verify your username in the Dragon Medical One window, then pick your microphone.',
      'Log into Cerner from there.'
    ],
    check: {
      q: 'You opened Cerner from the usual PowerChart icon and Dragon is not dictating. Why?',
      options: [
        'Dragon has to be launched from a Dragon-integrated icon, which opens Cerner and Dragon together',
        'Dragon needs to be started first and Cerner second',
        'Only PowerMic Mobile works inside Cerner'
      ],
      answer: 0,
      why: 'The Dragon PowerChart and Dragon FirstNet icons open both applications together. The plain Cerner icon opens Cerner alone. Any microphone works, though PowerMic Mobile is recommended for accuracy.'
    }
  },

  'epcs': {
    why: 'Oklahoma has required electronic prescribing for controlled substances since 2020, so this is not optional. The part worth knowing cold is what changes if you are an APRN or a PA.',
    tryIt: [
      'Walk the order path: Add order, switch the category to Discharge Meds as Rx, then search the order.',
      'Check that the preferred pharmacy defaulted into Send To. If it is empty, click Find Pharmacy.',
      'Note where the two-factor step lands — network password, then a push notification or an Imprivata token code.'
    ],
    check: {
      q: 'You are an APRN and need to prescribe a Schedule II medication in Oklahoma. What happens?',
      options: [
        'You start it, right-click to change it to a Proposal, and enter a physician’s name to route it to them',
        'You sign it with Imprivata like any other controlled substance',
        'You can send it electronically but the pharmacy must call to confirm'
      ],
      answer: 0,
      why: 'APRNs and PAs cannot send Schedule II prescriptions in Oklahoma. Changing it to a Proposal routes it to a physician’s Message Center, and it does not reach the pharmacy until that physician signs. Schedule III–V go straight through.'
    }
  },

  /* ---------- Finding your way ---------- */

  'powerchart-window': {
    why: 'Five landmarks. Find them once and the rest of the chart stops feeling like a maze.',
    tryIt: [
      'Log in and, without clicking anything, locate the menu bar, the toolbar, and the search box at the top right.',
      'Find the Patient List and Message Center buttons on the toolbar.',
      'Note which role tools you have — MPTL, Physician Worklist, PC TOUCH, Depart, Communicate. What appears depends on your Cerner position.'
    ],
    check: {
      q: 'A colleague describes a menu you cannot find, and their screenshot does not match your screen. What is the most likely explanation?',
      options: [
        'Ascension St. John runs the 2018.01 build, so newer Cerner material describes a different version',
        'Their chart is open in FirstNet and yours is in PowerChart',
        'Your Cerner position is missing a licence'
      ],
      answer: 0,
      why: 'Screenshots and tips online usually describe newer builds. Toolbar differences between colleagues are a separate thing — those come from your Cerner position.'
    }
  },

  'chart-tab': {
    why: 'With four charts open it is genuinely easy to type into the wrong one. The tab is the guard rail.',
    tryIt: [
      'Open two training patients so you have two tabs.',
      'Switch between them by clicking the tabs, and watch the name change.',
      'Use Recent to reopen one you just closed, then close a tab — the tab, not the application.'
    ],
    check: {
      q: 'You have finished with a patient. What should you close?',
      options: [
        'The patient’s tab, leaving PowerChart open',
        'PowerChart itself, to clear the session',
        'Nothing — tabs close themselves when you open the next patient'
      ],
      answer: 0,
      why: 'Close the tab, not the application. Closing charts you are done with keeps the window manageable and cuts the risk of documenting on the wrong patient.'
    }
  },

  'demographics': {
    why: 'This is the strip you read every single time you open a patient. Two of its fields look interchangeable and are not.',
    tryIt: [
      'Open a training patient and read the bar left to right without clicking anything.',
      'Find MRN and Fin#, and say out loud which one changes when the patient is readmitted.',
      'Find Allergies at the far right, then Code Status, Loc and Isolation on the second row.'
    ],
    check: {
      q: 'The same patient is admitted again six months later. Which identifier changes?',
      options: [
        'Fin#, because it identifies the encounter',
        'MRN, because it identifies the admission',
        'Neither — both stay with the patient for life'
      ],
      answer: 0,
      why: 'MRN identifies the person and never changes. Fin# identifies this encounter, so it changes with every admission.'
    }
  },

  'menus': {
    why: 'There are two menus on the left and they hold different things. Knowing which is which is the difference between finding a result in five seconds and hunting for two minutes.',
    tryIt: [
      'Click the vertical Menu tab at the far left edge to expand it, then pin it open with the pin icon.',
      'Find Results Review, Orders, Medication List, Histories and Documentation in it.',
      'Now look inside Provider View for the second list — the component list — and click a component to jump to that section.',
      'Drag one component into the order you prefer.'
    ],
    check: {
      q: 'You rearrange your Provider View components during a training class. The next morning they are back to the default. Why?',
      options: [
        'Training domain settings reset overnight. In the live record the order sticks to your account',
        'Component order is set by your Cerner position and cannot be changed',
        'You have to click Save on the component list for it to persist'
      ],
      answer: 0,
      why: 'Component order does stick to your account — but the training domain resets every night. Anything you arrange in training will be gone the next morning.'
    }
  },

  'find-patient': {
    why: 'Lists first, search second. The habit worth building is the check you do after you open the chart, not before.',
    tryIt: [
      'From a patient list, double-click a patient to open straight into Provider View.',
      'Go back and right-click a different patient instead — Open Patient Chart — and pick the view you want.',
      'Use the Name box at the top right to find someone who is not on a list.',
      'Every time: read the demographics bar against the patient before you enter anything.'
    ],
    check: {
      q: 'You want to open a chart into a specific view rather than the default. How?',
      options: [
        'Right-click the patient on the list, Open Patient Chart, then choose the view',
        'Double-click the patient and change the view once it opens',
        'Open the chart and use the Chart menu at the top'
      ],
      answer: 0,
      why: 'Right-click gives you the choice of view on the way in. Double-click opens Provider View. The Chart menu does move you between views once you are in, but the question was how to choose on opening.'
    }
  },

  /* ---------- Message Center ---------- */

  'message-center': {
    why: 'For most providers this is the first screen at login and the last one before you leave. Everything waiting on your signature arrives here.',
    tryIt: [
      'Open Message Center and find the three tabs — Inbox, Proxies, Pools.',
      'In the Inbox Summary, open a folder such as Results, then a subfolder such as Critical.',
      'Select a range: click the first message, hold Shift, click the last. Then try Ctrl for individual ones.',
      'Open a document, click Modify, type into a field, and note where Sign / Submit sits.',
      'Find the Action Pane at the bottom and open Other Forwarding Options.'
    ],
    check: {
      q: 'A nurse enters an order as Phone with Readback. Where does it go?',
      options: [
        'To your Message Center, for you to sign',
        'Straight to pharmacy, with a copy to you',
        'To the HIM Refusal Inbox for review'
      ],
      answer: 0,
      why: 'Phone with Readback, Verbal with Readback and Cosign Required all route the order to you here to sign. The HIM Refusal Inbox is where an order goes when you refuse it.'
    }
  },

  /* ---------- Patient Lists ---------- */

  'patient-lists': {
    why: 'Lists are how you reach a chart. Build the right kind once and you will rarely search again — but the kinds behave differently, and picking wrong means maintaining a list by hand forever.',
    tryIt: [
      'Create a list by location: search the location alphabetically, select facility and unit, and choose to show patients not yet discharged.',
      'Create a custom list and add two patients by search. Notice that you have to add and remove these by hand.',
      'Create a relationship list — Admitting, Attending, Consulting, or All Visit Relationships — and see that it fills itself.',
      'Print a list with the print icon, searching your own name.'
    ],
    check: {
      q: 'You want a list that keeps itself current with every patient where you are the attending. Which type?',
      options: [
        'A relationship list, set to Attending Physician',
        'A custom list, which you add to as patients arrive',
        'A location list for the units you cover'
      ],
      answer: 0,
      why: 'A relationship list updates itself with patients where you hold that relationship. A custom list you maintain by hand; a location list follows the location, not you.'
    }
  },

  /* ---------- Inpatient Workflow ---------- */

  'workflow-navigate': {
    why: 'The workflow pages let you document and write the note in one pass. Ten minutes setting them up the way you think buys you time on every shift after.',
    tryIt: [
      'Open Provider View — right-click a patient, Open Patient Chart, Provider View. Or double-click from a list.',
      'Find these components: Subjective / History of Present Illness, Review of Systems, Objective / Physical Exam, Assessment and Plan, Opioid Review.',
      'Drag them into the order that suits how you work.',
      'Click the side arrow on Subjective / HPI to move it to the right-hand window, then do ROS, Objective / PE and Assessment and Plan — in the order you want them to appear.'
    ],
    check: {
      q: 'You move four panes to the right-hand window. What decides the order they appear in?',
      options: [
        'The order you click them',
        'The order they sit in on the left-hand page',
        'Alphabetical, always'
      ],
      answer: 0,
      why: 'They land in the order you click them, so click deliberately. If the windows will not all fit, reduce display scaling to 100% before changing resolution — 1920 by 1080 at 100% shows everything.'
    }
  },

  'workflow-complete': {
    why: 'This is where the documentation actually gets entered — and where two features, tagging and auto text, do most of the typing for you.',
    tryIt: [
      'Add a problem: Add problem, search it, add it to This Visit. Then Modify it to set priority 1.',
      'Add a second problem and set priority 2 — watch the priority options change as you go.',
      'Go to Diagnostics, open a result such as XR Chest 1 View, highlight the findings and click Tag.',
      'Click Refresh, then drag the tag onto the matching diagnosis.',
      'In a component, type a period followed by meds until meds-home appears, and select it.'
    ],
    check: {
      q: 'You tagged a finding in a chest X-ray. What do you do with the tag next?',
      options: [
        'Refresh, then drag it onto the matching diagnosis so it is cited in your note',
        'Nothing — tagging alone inserts it into the note',
        'Copy it and paste it into the Assessment and Plan'
      ],
      answer: 0,
      why: 'Click Refresh to see the tag appear in Provider View, then drag it onto the matching diagnosis. That is what cites it in your note.'
    }
  },

  'med-rec': {
    why: 'Reconciliation is the step most likely to be blocked by something someone else has not done yet. Knowing the dependency saves you a confused five minutes.',
    tryIt: [
      'From the Menu, open the Orders or Medication List tab.',
      'Open the Reconciliation dropdown and choose Admission.',
      'Work down the list choosing Continue or Do Not Continue — green triangle continues, red square stops.',
      'Watch the right-hand Orders After Reconciliation column fill as you go, then Reconcile and Sign at the bottom right.',
      'Find the orange star and the unreconciled count at the bottom right.'
    ],
    check: {
      q: 'Admission reconciliation will not let you complete it. What is the most likely reason?',
      options: [
        'Document Medications by Hx has not been done yet',
        'You have not signed the admission PowerPlans',
        'The patient has no preferred pharmacy set'
      ],
      answer: 0,
      why: 'Admission reconciliation cannot be completed until Document Medications by Hx is done — usually by the nurse or a pharmacy technician. If it is not done, select Meds History yourself and click Document History. Do reconciliation before your admission PowerPlans, not after.'
    }
  },

  'orders-powerplans': {
    why: 'A PowerPlan is a whole set of orders for a diagnosis or an admission. The two things worth knowing are how to read the icons and what Plan for Later actually commits you to.',
    tryIt: [
      'Place one single order: New Order Entry, type the name, click it once, and find it in the cart at the top right.',
      'Click Modify details, then right-click and Add to Favorites.',
      'Now search for a PowerPlan and select it. Look for the pizza-box icon to the left of the plan name.',
      'Complete the details — required fields are highlighted yellow or marked with an asterisk.',
      'Choose Plan for Later, then Sign, then refresh.'
    ],
    check: {
      q: 'What is the difference between Plan for Later and Initiate Now?',
      options: [
        'Plan for Later leaves the nurse to initiate at the right time; Initiate Now acts immediately',
        'Plan for Later saves a draft that only you can see',
        'Plan for Later schedules the orders for the following morning'
      ],
      answer: 0,
      why: 'Plan for Later means the nurse initiates at the right time. An initiated plan shows bold text in the View column; a planned one is not bold — and you can right-click under Plans to Initiate Now.'
    }
  },

  'order-favorites': {
    why: 'The orders you place twenty times a week should take two clicks. You can also borrow a colleague’s PowerPlan favorites rather than building your own from nothing.',
    tryIt: [
      'Add an order, complete the details you want saved with it, then right-click and Add to Favorites.',
      'Use Create Folder to group them — Lab, Rad, PRN, Pain Medications.',
      'Tick Sort favorites alphabetically, or use the up and down arrows to re-sequence.',
      'Now filter by Shared in New Order Entry, type a colleague’s name, and open My Plan Favorites.',
      'Click Modify Order Details on one of theirs, adjust it, and Save as My Favorite.'
    ],
    check: {
      q: 'Your favorites are not in the order you expected. What controls it?',
      options: [
        'They sort by the order you added them, unless you tick Sort favorites alphabetically',
        'They always sort alphabetically',
        'They sort by how often you use them'
      ],
      answer: 0,
      why: 'Added order is the default. Tick Sort favorites alphabetically, or select an item and use the arrows. If you work in the ED, note that folders must use the EDLP naming convention to appear in LaunchPoint.'
    }
  },

  'create-note': {
    why: 'If you documented in the workflow, the note is mostly written before you open it. What matters is knowing what each button at the bottom actually commits.',
    tryIt: [
      'From the Inpatient Workflow, use Create Note, then Other Note, and search a type such as Admission H & P.',
      'Notice the note already contains what you documented in the workflow.',
      'Look for the Tag section — any tagged items you did not use appear there. Drag each to the right place.',
      'Try Save, then find the note again and Modify it, choosing Revise.',
      'Open the Action Pane, click Other Forwarding Options, and search an attending by last name, first name.'
    ],
    check: {
      q: 'You Save a note rather than signing it. Who can see it?',
      options: [
        'Only you — other providers cannot see a saved note',
        'Anyone with the chart open, marked as a draft',
        'The attending it is addressed to'
      ],
      answer: 0,
      why: 'Save holds the note for you to finish later, and other providers cannot see it. Sign / Submit is what makes it part of the record. A note created in error is marked In Error with a comment, never deleted.'
    }
  },

  'autotext': {
    why: 'AutoText is the difference between typing a physical exam and triggering one. Everything hinges on the symbol at the front.',
    tryIt: [
      'Click into a documentation field and open the Auto-Text Manager.',
      'Type a symbol tied to an AutoText — a percent sign, say — and watch every phrase under it appear.',
      'Double-click one to drop it into your note, then edit around it.',
      'Now create your own: My Phrase tab, blue plus, an abbreviation starting with a symbol plus your initials.',
      'Build the content, click Save, and use it by typing the abbreviation.'
    ],
    check: {
      q: 'You created an AutoText but typing the abbreviation does nothing. What is worth checking first?',
      options: [
        'That it begins with a special character, and that you matched the case exactly',
        'That the phrase has been made public',
        'That you are in Message Center rather than the note'
      ],
      answer: 0,
      why: 'Every AutoText begins with a special character — period, slash, percent, ampersand — and AutoText is case-sensitive. An asterisk is not allowed in an abbreviation. To use AutoText in a Message Center message the content has to be converted to RTF.'
    }
  },

  'autotext-copy': {
    why: 'Someone in your department has already built the phrases you need. This tool copies them into your library rather than making you retype them.',
    tryIt: [
      'From the Organizer, select Auto Text Copy Utility — it is also on the View menu.',
      'Type a provider’s name in the search user field on the left.',
      'Click an AutoText, then Copy. Hold Shift to take several, or tick select all.',
      'Change the abbreviation and description in the Copy Auto Text window if you want.',
      'Click Log out.'
    ],
    check: {
      q: 'You have copied one provider’s AutoText and want to copy another’s. What has to happen first?',
      options: [
        'Log out — it is required between copying AutoTexts',
        'Refresh the utility from the View menu',
        'Nothing; you can move straight to the next provider'
      ],
      answer: 0,
      why: 'The log out at the end is not optional. It is required between copying AutoTexts.'
    }
  },

  'dyndoc': {
    why: 'This changed in November 2025. If you learned Cerner before that, the documentation boxes are no longer where you left them.',
    tryIt: [
      'Find the Workspace on your workflow page — the documentation boxes live there now, and nowhere else.',
      'Select Settings at the upper right and try Small, Medium and Large, then drag the divider instead.',
      'In Settings, move the Documentation Components first, arrange the order, and Apply.',
      'Set a pull-forward option on one component and note what it does.'
    ],
    check: {
      q: 'You want a component to pull forward what you personally charted last time on this patient. Which option?',
      options: [
        'My Last',
        'Most Recent',
        'None'
      ],
      answer: 0,
      why: 'My Last pulls forward what you last charted for that patient in that component. Most Recent pulls the latest by any user. None is the default and pulls nothing. You can look back up to 180 days. This does not include PowerNote.'
    }
  },

  /* ---------- Discharge ---------- */

  'inpatient-discharge': {
    why: 'Discharge mirrors the inpatient workflow, so the notes you already took do most of the work. One step blocks the rest if you skip it.',
    tryIt: [
      'Move Objective / Physical Exam, Subjective / HPI and Hospital Course to the right side of the window.',
      'Click your chosen diagnosis, then Modify, change the working diagnosis to a discharge diagnosis, and Save.',
      'Place order DISC — Discharge Orders, go to the cart, and Modify. Watch for restrictions such as General Diet, where you must select Unrestricted in the details.',
      'Click Initiate Now — you may need to sign twice more.',
      'Run discharge medication reconciliation from the Discharge link, and use the pill bottle icon to write a prescription.'
    ],
    check: {
      q: 'The Discharge Diagnosis section will not complete. What is missing?',
      options: [
        'A This Visit action on the diagnosis, before you can complete it',
        'A signed discharge order',
        'Patient education, which has to be added first'
      ],
      answer: 0,
      why: 'Discharge Diagnosis needs a This Visit action first. Then Modify the working diagnosis to a discharge diagnosis and save.'
    }
  },

  'ed-discharge-workflow': {
    why: 'The ED Discharge Workflow was remodelled in March 2026. It now tells you what is still outstanding, if you know what the marks mean.',
    tryIt: [
      'Open the ED Discharge Workflow and find the red stars — those are the required steps.',
      'Work Discharge Diagnosis: Add as, add the problem, then document a chronic problem or select No Chronic Problem.',
      'Add Patient Education, then a Follow Up — Modify it to set when, an address and comments, and save it as a template.',
      'Search and select a prescription and complete the details.',
      'Select the plus on the order profile, then Discharge, then sign in the order tray.'
    ],
    check: {
      q: 'What does a green checkmark mean on the ED Discharge Workflow?',
      options: [
        'That step is complete',
        'That step is required',
        'That step has been skipped deliberately'
      ],
      answer: 0,
      why: 'A green checkmark means the step is done. A red star marks a step as required. The older Depart Process remains available until further notice.'
    }
  },

  'ed-discharge-diagnosis': {
    why: 'The remodelled note will not let you finish without a chronic problem — and the search does not show you chronic problems until you tell it to.',
    tryIt: [
      'Go to your ED Provider workflow, or your Discharge/Admit workflow, before completing the note.',
      'Navigate to the Problem list, or Discharge Diagnosis, and go to Add Problem.',
      'Type the diagnosis and select it.',
      'Now toggle the search from This visit to Chronic and search again.',
      'Try the header hyperlink to jump to Problems and Diagnoses, then Back to return.'
    ],
    check: {
      q: 'You search for a chronic problem and nothing relevant appears. What have you missed?',
      options: [
        'The search is still set to This visit — toggle it to Chronic, or This visit and chronic',
        'Chronic problems can only be added from the chart Menu',
        'The patient has no chronic problems recorded, so you must add one to their history first'
      ],
      answer: 0,
      why: 'Toggle the search from This visit to Chronic. There is also a No chronic problems option if that is genuinely the case — the component requires one or the other to complete.'
    }
  },

  /* ---------- Emergency Department ---------- */

  'ed-launchpoint': {
    why: 'ED order favorites are invisible in LaunchPoint unless the folders are named exactly right. It looks like a permissions problem and is not.',
    tryIt: [
      'In Orders, select the down arrow next to the star, then Organize Favorites.',
      'Select a folder and choose Rename.',
      'Retype it to the EDLP convention — Medications becomes EDLP Meds, Labs becomes EDLP Lab, EKG becomes EDLP EKG.',
      'Do the same for Imaging, Patient Care and Consults: EDLP Imaging, EDLP PatCare, EDLP Consults.',
      'Select Close, then check LaunchPoint.'
    ],
    check: {
      q: 'Your order favorites do not appear in LaunchPoint. What is the fix?',
      options: [
        'Rename the folders to the EDLP convention exactly',
        'Ask an administrator to enable favorites for your position',
        'Re-add the orders from inside LaunchPoint rather than from Orders'
      ],
      answer: 0,
      why: 'Folders must use the EDLP naming convention exactly. Once renamed they appear in LaunchPoint order favorites, above the line. Note the screenshots in the original job aid show an incorrect convention — use the names in the topic.'
    }
  },

  'md-seen': {
    why: 'The time you put here is the door-to-doc metric. It is two fields, and there are shortcuts for both.',
    tryIt: [
      'In the Provider Notification column, find the icon telling you MD Seen still needs completing.',
      'Select the provider notification, then click the blue Document.',
      'Type T in the date field and N in the time field.',
      'Select the teal check mark to sign.'
    ],
    check: {
      q: 'What do T and N do in the MD Seen date and time fields?',
      options: [
        'T pulls today’s date; N enters the current time',
        'T is a template; N is a null value',
        'Both mark the field as not applicable'
      ],
      answer: 0,
      why: 'Typing T in the date field pulls today’s date, and N in the time field enters the current time.'
    }
  },

  'ed-autotext': {
    why: 'The ED has a large library of global phrases already built. Knowing the naming pattern means you can guess a trigger rather than look it up.',
    tryIt: [
      'In a documentation field, type \\PE and look at what the adult physical exam phrase inserts.',
      'Try \\ROS for the adult review of systems.',
      'Try the complaint pattern: //pe or //ros plus the complaint — //pebackpain, //rosheadache.',
      'For an injury, add the site and side — //pekneeinjurypainltknee.',
      'If you cannot remember a trigger, open the Auto-Text Manager and browse public phrases.'
    ],
    check: {
      q: 'You need the phrase that satisfies the Joint Commission requirement for procedural consent. Which trigger?',
      options: [
        '\\Consent',
        '//peconsent',
        '=Consent'
      ],
      answer: 0,
      why: '\\Consent is the procedural consent phrase and \\Restraints is the restraints one — both written to satisfy Joint Commission requirements. The // pattern is for complaint-based exam and review-of-systems phrases; =Labs covers labs and diagnostics if admitted.'
    }
  },

  /* ---------- PerfectServe ---------- */

  'ps-overview': {
    why: 'PerfectServe is where your pages and secure messages arrive. Six tabs do the work, but the side menu is what controls whether anything reaches you at all.',
    tryIt: [
      'Open the app and visit each of the six tabs — Messages, Directory, Dialer, Patients, News, Profile.',
      'Open the side menu and find Status, Auto Response, Forward Pages, My Rules and Settings.',
      'Note which tabs you actually have. Patients has to be enabled by a facility admin.'
    ],
    check: {
      q: 'Which part of the app controls whether messages alert you?',
      options: [
        'The side menu — Status, Auto Response, Forward Pages and My Rules',
        'The Profile tab',
        'The Settings inside the Dialer'
      ],
      answer: 0,
      why: 'The side menu is where you control what reaches you. The six tabs are for doing the work; the side menu decides whether you hear about it.'
    }
  },

  'ps-login': {
    why: 'First-time setup on your own phone is about a dozen steps, and three of the permission prompts are not optional if you want the app to work.',
    tryIt: [
      'Download PerfectServe Clinical Collab and tap Enterprise Login.',
      'Type ascension as the enterprise domain.',
      'Sign in with your Ascension email and network password, then complete the Duo push.',
      'Validate your mobile number, then allow notifications, critical alerts and microphone access.',
      'Set up Face ID if you want it, create a four-digit PIN, and accept the e911 disclaimer.'
    ],
    check: {
      q: 'You reach the Duo step and cannot complete it because Duo is not set up on your phone. What now?',
      options: [
        'Call the Ascension Service Desk on 877-635-0515 to get Duo set up',
        'Skip Duo and finish with the PIN instead',
        'Use Enterprise Login a second time to bypass it'
      ],
      answer: 0,
      why: 'Without Duo on your device you cannot finish the login at all. The Service Desk sets it up. Note the app also needs notifications, critical alerts and microphone access allowed to work correctly.'
    }
  },

  'ps-messaging': {
    why: 'Secure messaging with photos and voice memos, and an inbox that will bury you unless you use Mark as Done. One rule about Mark as Done surprises everyone.',
    tryIt: [
      'Tap the New Message icon at the bottom right and find a recipient by search.',
      'Pick a message type and watch the template fields change.',
      'Try Attach for a photo and Record for a voice memo.',
      'Clear one message: swipe it left and select Done.',
      'Now try the bulk route: Mark as Done icon, Select all, then the icon again.'
    ],
    check: {
      q: 'You use Select all with Mark as Done and some messages stay in your inbox. Why?',
      options: [
        'A message has to be read before it can be marked as done — bulk actions skip unread ones',
        'Only 100 messages can be cleared at a time',
        'Messages with attachments cannot be marked as done'
      ],
      answer: 0,
      why: 'A message must be read before it can be marked as done, and there is no way to mark one read manually — you have to open it. Bulk actions handle up to 1,000 read threads. Search first, then Select all, to clear a specific slice.'
    }
  },

  'ps-directory': {
    why: 'The Directory answers the question you actually have at 2am: who is covering this service right now.',
    tryIt: [
      'Open Directory and look at how it is organised — Pinned Contacts, My Favorites, Local Groups, Recently Contacted.',
      'Search a name, then select Filter and Add Filter to narrow by department or specialty. Save the filter and name it.',
      'Open a schedule group and find On-Call, Members and View Schedule.',
      'Swipe left on a contact to call or message them instantly.',
      'Star someone to add them to My Favorites.'
    ],
    check: {
      q: 'The on-call schedule changes at handover. When does the app reflect it?',
      options: [
        'Immediately',
        'At the next scheduled sync, usually within an hour',
        'When you pull to refresh the Directory'
      ],
      answer: 0,
      why: 'On-call schedule changes apply immediately, so the person the Directory shows is the person covering.'
    }
  },

  'ps-dialer': {
    why: 'Calling through the app hides your personal number. There is exactly one way to accidentally expose it, and it is an easy mistake to make.',
    tryIt: [
      'Open Dialer and look at the three parts — keypad, call log, settings.',
      'Dial a 10-digit number on the keypad and note that your facility’s dispatch number shows, not yours.',
      'Now find a message containing a hyperlinked phone number and notice the difference.'
    ],
    check: {
      q: 'A message contains a phone number as a tappable link. You tap it and the call connects. What has happened to your personal number?',
      options: [
        'It is exposed — a hyperlinked number does not mask it. Dial it on the keypad instead',
        'It is masked, the same as any call from the app',
        'It is masked only if you are on Wi-Fi'
      ],
      answer: 0,
      why: 'This is the one to remember. Calls you place inside the app mask your number; tapping a hyperlinked number in a message does not. Type it on the keypad instead.'
    }
  },

  'ps-status': {
    why: 'Going offline does less than most people assume. Knowing exactly what it stops matters when you are the one being paged.',
    tryIt: [
      'Select the three-line menu and find the coloured circle — green is online, red is offline.',
      'Toggle your status and note what the app tells you.',
      'Turn on an Auto Response and write something a sender could actually act on.',
      'Now message a colleague who is offline and read the pop-up you get.'
    ],
    check: {
      q: 'You set yourself offline. What still gets through?',
      options: [
        'Urgent message types, which override offline status and still alert you',
        'Nothing — offline suppresses all alerting without exception',
        'Only messages from people in your Pinned Contacts'
      ],
      answer: 0,
      why: 'Offline stops push notifications and banner alerts, and ordinary messages still land in your inbox unannounced. Urgent types override it. Auto responses are off by default — you have to turn one on and set a timeframe.'
    }
  },

  'ps-away': {
    why: 'Three tools of increasing power for covering your messages. The one thing people get wrong is assuming forwarding takes the message off their own plate.',
    tryIt: [
      'Set an Auto Response: main menu, Auto Response, toggle on, set an end date and time, Save.',
      'Set Forward Pages: toggle on, set the end date and time, then Forward To and choose recipients.',
      'Create a rule: My Rules, Create Rule, name it, set a Schedule and Message Type, then set Forward To.',
      'On that rule, find Copy Me and decide whether you want the original as well.'
    ],
    check: {
      q: 'You set up Forward To on a rule. Where do the messages go?',
      options: [
        'To the other person and to your own inbox, unless you toggle Copy Me off',
        'Only to the other person',
        'Only to you, with a notification sent to them'
      ],
      answer: 0,
      why: 'Forward To still leaves the message in your own inbox. Toggle Copy Me off if you want it to go only to the other person. Both Auto Response and Forward Pages need an end date and time; to stop either early, go back and toggle it off.'
    }
  },

  'ps-care-team': {
    why: 'If your facility turned on Patients, you can put yourself on a care team and reach everyone caring for that patient with one message.',
    tryIt: [
      'Select Patients. If the tab is not there, it has not been enabled for you.',
      'Find a patient with the Search bar, or Search All Patients and enter the name.',
      'Swipe right on the patient’s name and select Join.',
      'Or open the patient, click the three ellipses, and select Join Care Team.'
    ],
    check: {
      q: 'The Patients tab does not appear in your app. Why?',
      options: [
        'It has to be enabled for you by a facility admin',
        'It only appears when you have patients assigned',
        'It is only available on iOS'
      ],
      answer: 0,
      why: 'Patients is only available to users given the privilege by a facility admin. What you see in the app depends on your permissions.'
    }
  },

  'ps-news': {
    why: 'Announcements from your facility. Informational rather than critical, and you can turn most of them down.',
    tryIt: [
      'Select News and open a message.',
      'Use the sub-navigation menu icon at the top right to manage alerts.',
      'Open a feed and use the blue bell icon to turn its alerts on or off.'
    ],
    check: {
      q: 'You want to mute a News feed and there is no option to. Why not?',
      options: [
        'That feed is mandatory — alerts can only be toggled for non-mandatory feeds',
        'Muting is a device setting, not an app setting',
        'You have to mute feeds from the Profile tab'
      ],
      answer: 0,
      why: 'Alerts can only be turned on or off for feeds that are not mandatory. These feeds are informational rather than critical.'
    }
  },

  /* ---------- Other tools ---------- */

  'wellsheet': {
    why: 'A rounding and handoff layer over Cerner. It will draft a hospital course for you — and that draft comes with an obligation.',
    tryIt: [
      'Find WellSheet on the Cerner toolbar, or under View, WellSheet.',
      'Select your Handoff Type from the dropdown — Hospitalist, Nursing, Surgery and others.',
      'Open a patient and use the chevron to review labs, diagnostics, notes and vitals.',
      'Under My Notes, use Generate to create a Draft Hospital Course, then read it against the chart.',
      'Open discharge planning from the patient card and set Medically Cleared, a date and a disposition.'
    ],
    check: {
      q: 'You generate a Draft Hospital Course in WellSheet. What is required of you before it is used?',
      options: [
        'Review it against the chart — it is AI-generated and a clinician must check it for accuracy',
        'Nothing; it is drawn directly from the chart and is accurate by construction',
        'Have a second provider co-sign it'
      ],
      answer: 0,
      why: 'The Draft Hospital Course is AI-generated and WellSheet shows a disclaimer to that effect — the chart has to be reviewed by a clinician for accuracy. Note too that a handoff note does not replace your provider notes, which are still completed in Cerner.'
    }
  },

  'dynamed': {
    why: 'Evidence-based reference, free to you, with CME tracking. There is one thing you must do on site before it works anywhere else.',
    tryIt: [
      'While you are at an Ascension St. John location and on the network, go to dynamed.com.',
      'Click the person icon at the upper right, then Register now, and complete the form.',
      'Click the CME ticker next to the person icon, then Settings, and set up the credits you need.',
      'For the phone app: join AH-AIA, download DynaMed, then Institutional Network and Authenticate.'
    ],
    check: {
      q: 'You try to link your DynaMed account from home and it will not connect to the subscription. Why?',
      options: [
        'You have to be at an Ascension St. John location, on the network, to link the account. After that it works anywhere',
        'Personal accounts cannot be linked to an institutional subscription',
        'The link expires and has to be renewed each year'
      ],
      answer: 0,
      why: 'Linking has to happen on the network at an Ascension St. John location. Once linked you can use DynaMed from anywhere — though you do have to consent to personal data collection to use it off network and to track CME or MOC.'
    }
  },

  'provider-status': {
    why: 'Status and level-of-care orders drive what the hospital can bill. Getting them right is the single biggest lever you have on denials.',
    tryIt: [
      'Open the Orders component and view the Order Profile — orders are grouped by activity type. Review the current orders first.',
      'Find the three kinds available: Patient Status Change, Admit Status Orders, Discharge Status Orders.',
      'Select the appropriate one from the main menu, complete the details, and click Done.'
    ],
    check: {
      q: 'You are admitting a patient on a PowerPlan. What should you do about the patient status order?',
      options: [
        'Place it in addition to the PowerPlans for the stay',
        'Skip it — the admission PowerPlan sets status',
        'Place it only if the level of care changes later'
      ],
      answer: 0,
      why: 'Patient status orders go in addition to the PowerPlans, not instead of them. Level of Care defines what the hospital can bill, and a status order also notifies Registration and the Patient Logistics Center for patient movement.'
    }
  }

};
