// Reference topics, part 2 — inpatient workflow, discharge, ED layer, reference tools.
// Source: OKTUL Clinical Informatics job aids (joshuad2824-art/providertraining).
window.CERNER_TOPICS_2 = [
  {
    id: 'workflow-navigate', cat: 'workflow', title: 'Navigating the workflow pages',
    summary: 'The Inpatient Workflow lets you document and create a note at the same time. Setting it up once makes every shift faster.',
    audience: 'All providers',
    keyFacts: [
      'Reach Provider View from Message Center or a patient list by right-clicking, or from Chart at the top of the window.',
      'You can reorder the components and the order sticks to your account.',
      'Move panes to the right-hand window by clicking the side arrow \u2014 they land in the order you click them.'
    ],
    sections: [
      { h: 'Opening Provider View', steps: [
        'From Message Center or a patient list, right-click the patient, Open Patient Chart, then Provider View.',
        'From a patient list, double-click to open straight into Provider View.',
        'From the top bar, click Chart then Provider View.',
        'Or search by name in the box at the top right.'
      ]},
      { h: 'Setting up your order', steps: [
        'Subjective / History of Present Illness.',
        'Review of Systems.',
        'Objective / Physical Exam.',
        'Assessment and Plan.',
        'Opioid Review.',
        'Drag to put them in the order you prefer \u2014 different specialties will want different arrangements.'
      ]},
      { h: 'Moving panes to the right window', steps: [
        'Click the side arrow on Subjective / History of Present Illness.',
        'Repeat for Review of Systems, Objective / Physical Exam, and Assessment and Plan.',
        'Click them in the order you want them to appear \u2014 that click order sets the side-pane order.'
      ]}
    ],
    notes: [
      { tone: 'info', text: 'Provider View adapts to your screen size. If windows will not all fit, reduce display scaling to 100% under Settings, Display before changing the resolution. 1920 by 1080 at 100% scaling shows everything.' },
      { tone: 'warning', text: 'Training domain settings reset every night. Anything you arrange in class will be gone the next morning.' }
    ],
    tags: ['inpatient workflow', 'provider view', 'mpage', 'components', 'reorder', 'panes', 'setup', 'scaling', 'resolution']
  },
  {
    id: 'workflow-complete', cat: 'workflow', title: 'Completing the workflow \u2014 problems, tagging and auto text',
    summary: 'Where documentation is actually entered. Tagging results and auto text do most of the typing for you.',
    audience: 'All providers',
    keyFacts: [
      'Set diagnosis priorities on the problem list \u2014 the priority options change as you add them.',
      'Tag a finding in a result, then drag the tag onto the matching diagnosis. The tag is cited in your note.',
      'Auto text is triggered by a symbol. Typing a period then meds until meds-home appears is a common example.'
    ],
    sections: [
      { h: 'Problem list', steps: [
        'Review Add problem and search for the problem, then add it to This Visit.',
        'Modify a diagnosis to set a priority \u2014 priority 1, then priority 2, and so on.',
        'Note that the priority options change as you add priorities.'
      ]},
      { h: 'Tagging a result into your note', steps: [
        'Navigate to Diagnostics and click the result, for example XR Chest 1 View.',
        'Highlight the findings, then click Tag.',
        'Note the View Image button while you are there.',
        'Click Refresh to see the tag appear in Provider View.',
        'Drag the tag onto the matching diagnosis.'
      ]},
      { h: 'Using auto text in a component', steps: [
        'Click into the component \u2014 for example the Heartburn window.',
        'Type a period followed by the trigger, such as meds, until meds-home appears, then select it.',
        'Add your own comment around the pulled-in text.',
        'Follow the same pattern for Subjective / History of Present Illness, Review of Systems and Objective / Physical Exam.'
      ]}
    ],
    notes: [{ tone: 'info', text: 'Ascension is optimising the problem list for providers. A policy is expected \u2014 check with Clinical Informatics for the current guidance.' }],
    tags: ['problem list', 'diagnosis', 'priority', 'tag', 'tagging', 'auto text', 'autotext', 'documentation', 'hpi', 'ros', 'physical exam']
  },
  {
    id: 'med-rec', cat: 'workflow', title: 'Medication Reconciliation',
    summary: 'Admission and discharge reconciliation, from the Menu or straight off your workflow page.',
    audience: 'Physicians',
    image: 'Med_Recs/images/image7.png',
    imageCaption: 'Orders prior to reconciliation on the left, orders after reconciliation on the right',
    keyFacts: [
      'Admission reconciliation cannot be completed until Document Medications by Hx is done.',
      'Green triangle continues a medication. Red square stops it.',
      'Unreconciled orders show an orange star, with a count at the bottom right.'
    ],
    sections: [
      { h: 'Admission reconciliation', steps: [
        'Select the Orders or Medication List tab from the Menu.',
        'Select the Reconciliation dropdown and click Admission.',
        'Choose Continue or Do Not Continue for each medication. Current medications are on the left; reconciled ones populate Orders After Reconciliation on the right.',
        'To add medications for the hospital stay, open the orders screen and complete the additional orders.',
        'When everything is handled, click Reconcile and Sign at the bottom right.'
      ]},
      { h: 'Before you start \u2014 medication history', steps: [
        'Medication history is usually completed by the nurse or pharmacy technician before you review it.',
        'If it is not done, select Meds History. You can add medications from that screen.',
        'Click Document History when finished.',
        'For preferred pharmacy, search the pharmacy, right-click, Add to Patient Preferred, then OK.'
      ]},
      { h: 'Discharge reconciliation', steps: [
        'Click Reconciliation in the Medication List of the PowerOrders component and select Discharge.',
        'Work through it the same way as admission.',
        'A middle column lets you order prescriptions for discharge.',
        'All prescription orders route to the patient\u2019s pharmacy of choice.'
      ]},
      { h: 'Non-medication orders', steps: [
        'Non-medication orders sit under a Non-Medications category in Current Medications.',
        'Click +Add to open the Add Order window.',
        'Search for and select the order \u2014 it files under the appropriate clinical category.',
        'Click Done. Reconciliation options are not available for new non-medication orders.'
      ]}
    ],
    notes: [
      { tone: 'info', text: 'Complete admission medication reconciliation before your admission PowerPlans. That saves you reviewing the same medications again during the plan.' },
      { tone: 'info', text: 'A blue chasing-arrows icon means an admission or discharge reconciliation is incomplete.' },
      { tone: 'warning', text: 'Cancelling asks whether to lose all pending actions. Choosing to lose unsigned data discards the new orders.' }
    ],
    tags: ['medication reconciliation', 'med rec', 'admission', 'discharge', 'meds history', 'pharmacy', 'reconcile and sign', 'continue', 'stop']
  },
  {
    id: 'orders-powerplans', cat: 'workflow', title: 'Orders and PowerPlans',
    summary: 'Orders can go in one at a time or as a PowerPlan \u2014 a whole group of orders for a diagnosis or an admission.',
    audience: 'All providers',
    image: 'Orders/images/image10.png',
    imageCaption: 'Searching for an order in the Add Order window',
    keyFacts: [
      'The PowerPlan icon looks like a pizza box, to the left of the plan name. A subphase icon is a double pizza box.',
      'Shaded pre-selected orders are mandatory and cannot be deselected.',
      'Plan for Later means the nurse initiates at the right time. Initiate Now acts immediately.'
    ],
    sections: [
      { h: 'A single order', steps: [
        'From the workflow, click New Order Entry, or +Add from the Menu \u2014 both open the same screen.',
        'Start typing the order name and click it once when it appears.',
        'It lands in the envelope at the top right, the shopping cart.',
        'Click Modify details to edit the order or add detail.',
        'Right-click the order to Add to Favorites if you use it regularly.',
        'Sign, then refresh. After signing you can right-click to modify, discontinue or remove.'
      ]},
      { h: 'Ordering a PowerPlan', steps: [
        'In the Orders window, search for the plan as you would any orderable.',
        'Select the plan and click Done.',
        'Complete the order details by selecting and deselecting the pre-built options.',
        'Fill anything required \u2014 a blue circle with a white X appears in the Details tab, and required fields are highlighted yellow or marked with an asterisk.',
        'Add Special Instructions if needed.',
        'Choose Plan for Later or Initiate Now.',
        'Sign, then refresh.'
      ]},
      { h: 'Subphase orders', steps: [
        'Click the order name next to the double pizza box icon to open the detail screen.',
        'Select the options to include in the subphase order.',
        'Click the Return to tab at the top or bottom to go back to the main order.',
        'Complete with Initiate Now or Plan for Later.'
      ]},
      { h: 'Add to Phase', steps: [
        'Click the blue plus near Add to Phase in the Orders toolbar.',
        'Choose the order type \u2014 an outcome or intervention, a medication, or a prescription for the patient\u2019s pharmacy.',
        'Start typing the order name and select it, then click Done.',
        'Click Orders for Signature at the bottom right, then Sign.',
        'The Orders page shows Processing \u2014 Please Refresh. Refresh with the chasing-arrows icon at the top right.',
        'The added order now appears under its heading in the PowerPlan. Click Sign to finish.'
      ]}
    ],
    notes: [
      { tone: 'info', text: 'Other icons worth knowing: glasses means a nurse needs to review the order; a mortar and pestle means pharmacy needs to review it.' },
      { tone: 'info', text: 'An initiated plan shows bold text in the View column. A planned one is not bold. Right-click under Plans to Initiate Now.' },
      { tone: 'info', text: 'The lightbulb icon shows excluded PowerPlan components.' }
    ],
    tags: ['orders', 'powerplan', 'power plan', 'add to phase', 'subphase', 'initiate now', 'plan for later', 'sign', 'order sentence', 'pizza box']
  },
  {
    id: 'order-favorites', cat: 'workflow', title: 'Order favorites and shared favorites',
    summary: 'Save the orders you place constantly, group them into folders, and borrow another provider\u2019s PowerPlan favorites.',
    audience: 'Medical staff',
    keyFacts: [
      'Right-click any order and choose Add to Favorites.',
      'Favorites sort by the order you added them unless you tick Sort favorites alphabetically.',
      'You can use another clinician\u2019s shared favorites and save them as your own.'
    ],
    sections: [
      { h: 'Saving an individual favorite', steps: [
        'From the patient\u2019s chart, click Add on the Orders tab.',
        'Search and select the order, then click Done.',
        'Complete the Order Entry Details you want saved with it.',
        'Right-click the order and choose Add to Favorites.',
        'Click OK to save to the main folder, or Create Folder for a new one.',
        'Click Favorites in the Add Order window to check it saved.'
      ]},
      { h: 'Organising favorites', steps: [
        'In the Add Order dialog, expand Organize Favorites using the black arrow next to the star.',
        'Use Create Folder to group orders \u2014 Lab, Rad, PRN, Pain Medications.',
        'Drag and drop orders between folders.',
        'Tick Sort favorites alphabetically, or select an item and use the up and down arrows to re-sequence.',
        'To remove one, click Favorites, right-click the order, Remove from Favorites, then Done.'
      ]},
      { h: 'Saving a PowerPlan favorite', steps: [
        'In the Orders component, click Add.',
        'Type the PowerPlan name in the Find box and press Enter.',
        'Right-click the PowerPlan, Add to Favorites, then Done. It lands in My Favorite Plans.',
        'To customise first: double-click the plan, check or uncheck orders, use Add to Phase, or right-click and Modify.',
        'Click Save as My Favorite, rename if you like, then OK.'
      ]},
      { h: 'Using shared favorites', steps: [
        'In the New Order Entry component, filter by Shared and type the clinician\u2019s name.',
        'Select My Plan Favorites to see their saved PowerPlans.',
        'Click the PowerPlan, then the Orders for Signature icon at the top right to view details.',
        'Click Modify Order Details, adjust as needed, then Save as My Favorite.'
      ]},
      { h: 'Quick Orders', steps: [
        'The Quick Orders page combines frequently used orders into a one-page catalogue.',
        'To add a favorite folder: top right, down arrow, Add Folder, scroll to the folder and click Select.'
      ]}
    ],
    notes: [{ tone: 'info', text: 'ED providers must name favorite folders to the EDLP convention for them to appear in LaunchPoint. See the ED LaunchPoint topic.' }],
    tags: ['order favorites', 'favorites', 'folders', 'quick orders', 'shared', 'powerplan favorite', 'organize']
  },
  {
    id: 'create-note', cat: 'workflow', title: 'Create a note',
    summary: 'If you documented in the workflow, the note is largely written already. Tags and auto text fill in the rest.',
    audience: 'All providers',
    image: 'Message_Center/images/image1.png',
    imageCaption: 'A note open for editing, with Sign/Submit, Save, Save & Close and Cancel along the bottom',
    keyFacts: [
      'Sign / Submit completes the note and makes it part of the record.',
      'Save holds the note for you \u2014 other providers cannot see a saved note.',
      'A note done in error is marked In Error with a comment, not deleted.'
    ],
    sections: [
      { h: 'Creating the note', steps: [
        'Review Create Note and the options at the bottom of the Inpatient Workflow.',
        'Select Other Note and search for the type you want, for example Admission H & P.',
        'The note opens already containing what you documented during the workflow.',
        'Hover to Refresh, enter text, or remove a section.',
        'The Tag section appears if any tagged items remain unused \u2014 drag each to the right location.',
        'Finish with Sign / Submit, or Save to come back to it.'
      ]},
      { h: 'Changing a note after the fact', steps: [
        'Find the note under Documentation in the chart Menu.',
        'Select your note and click Modify.',
        'Choose Revise or Addend.',
        'If the note was created in error, click In Error and add a comment explaining why.'
      ]},
      { h: 'Sending a note for endorsement', steps: [
        'The Action Pane defaults to Sign.',
        'Click Other Forwarding Options and choose Review or Sign.',
        'Search the attending with the binoculars box \u2014 last name, first name.',
        'The note lands in their Message Center.'
      ]}
    ],
    notes: [
      { tone: 'info', text: 'Documentation is called Provider Note in the live record.' },
      { tone: 'info', text: 'Global phrases such as \\PE, \\ROS, =labs and =dx are not available in the training domain. They work in the live record.' }
    ],
    tags: ['note', 'create note', 'dynamic documentation', 'sign submit', 'save', 'modify', 'revise', 'addend', 'in error', 'endorsement', 'h&p', 'progress note']
  },
  {
    id: 'autotext', cat: 'workflow', title: 'AutoText \u2014 create, edit and use phrases',
    summary: 'Keyboard shortcuts that populate a note with chart information. Personal phrases are yours; public ones are shared.',
    audience: 'Medical staff',
    keyFacts: [
      'Every AutoText begins with a special character \u2014 a period, slash, percent sign, ampersand.',
      'AutoText is case-sensitive, and asterisk is not allowed in an abbreviation.',
      'The Auto-Text Manager is available in Message Center, Physician Documentation, the HPI, ROS and PE components, and Discharge Follow-Up.'
    ],
    sections: [
      { h: 'Using a phrase', steps: [
        'Click in a documentation field, then open the Auto-Text Manager.',
        'Type the symbol tied to the AutoText, for example a percent sign. All phrases under that symbol appear.',
        'Double-click the one you want \u2014 it drops into your note.',
        'Edit the pulled-in documentation as needed.'
      ]},
      { h: 'Creating a personal phrase', steps: [
        'Click in a documentation field and open the Auto-Text Manager.',
        'On the My Phrase tab, click the blue plus.',
        'In Abbreviation, type a short trigger starting with a symbol. A symbol plus your initials makes your own phrases easy to find.',
        'In Description, type the full name of the phrase.',
        'Build the content in the white space at the bottom \u2014 use the format bar for sections and headers.',
        'Use Insert Templates/Tokens to pull patient-specific data, Create Drop List for a dropdown, and Use Blank Default to stop the first dropdown item auto-inserting.',
        'Click Save, then use it by typing the abbreviation in a documentation field.'
      ]},
      { h: 'Editing, duplicating and deleting', steps: [
        'Open the Auto-Text tool and find the phrase under My Phrases.',
        'Edit opens the window to change the content, abbreviation and description.',
        'Duplicate copies it \u2014 remember to change the abbreviation.',
        'Delete asks you to confirm.'
      ]},
      { h: 'Making a public phrase your own', steps: [
        'Open the Auto-Text tool and go to the Public Phrases tab.',
        'Find a phrase at the bottom left; use Next to page through.',
        'When the detail appears on the right, click Duplicate.',
        'Rename the abbreviation and description, edit the content, and it saves under My Phrases.'
      ]}
    ],
    notes: [{ tone: 'info', text: 'To use AutoText in Message Center messages, the content has to be converted to RTF.' }],
    tags: ['autotext', 'auto text', 'phrases', 'shortcut', 'macro', 'template', 'token', 'drop list', 'public phrase', 'my phrase']
  },
  {
    id: 'autotext-copy', cat: 'workflow', title: 'AutoText Copy Utility',
    summary: 'Copy another provider\u2019s phrases into your own library instead of building them from scratch.',
    audience: 'Providers and scribes',
    keyFacts: [
      'Search another user\u2019s personal or shared AutoText and copy one, several, or all of it.',
      'You can also use it to view your own library and remove phrases.',
      'A log out is required between copying AutoTexts.'
    ],
    sections: [
      { h: 'Steps', steps: [
        'From the Organizer, select Auto Text Copy Utility \u2014 it is also on the View menu.',
        'In the search user field on the left, type the provider whose AutoText you want.',
        'Click the AutoText, then click Copy.',
        'For a long list, use the search auto text field. Hold Shift to pick several. Tick select all for everything.',
        'In the Copy Auto Text window, change the abbreviation and description if you want.',
        'Click Log out.'
      ]}
    ],
    notes: [{ tone: 'warning', text: 'The log out at the end is not optional \u2014 it is required between copying AutoTexts.' }],
    tags: ['autotext copy utility', 'copy', 'auto text', 'scribe', 'organizer', 'borrow']
  },
  {
    id: 'dyndoc', cat: 'workflow', title: 'The Workspace \u2014 Dynamic Documentation enhancements',
    summary: 'Since November 2025 the documentation boxes live inside the Workspace on your workflow page, and they can pull forward what you charted last time.',
    audience: 'All providers', updated: 'Live 20 November 2025',
    keyFacts: [
      'Documentation boxes now live exclusively in the Workspace and no longer appear separately in the workflow menu.',
      'You can look back up to 180 days.',
      'This does not include PowerNote.'
    ],
    sections: [
      { h: 'Setting up the Workspace', steps: [
        'To resize, select Settings at the upper right of the Workspace and choose Small, Medium or Large \u2014 or drag the divider.',
        'Use Toggle Workspace on the MPages ViewPoint toolbar to hide or show the pane.',
        'In Settings, put the Documentation Components first and arrange the component order, then click Apply.'
      ]},
      { h: 'Pull-forward options for documentation components', steps: [
        'None \u2014 pulls nothing forward. This is the default.',
        'My Last \u2014 pulls forward what you last charted for that patient in that component.',
        'Most Recent \u2014 pulls forward the most recent documentation by any user for that patient in that component.'
      ]},
      { h: 'Assessment and Plan templates', steps: [
        'Pull-forward choices: None, My Last Problem, Most Recent Problem, My Last Comment Box, Most Recent Comment Box.',
        'Standard \u2014 the usual Assessment and Plan.',
        'Diagnosis Only \u2014 no orders pull in.',
        'Inpatient \u2014 active orders from the last 12 hours.',
        'Outpatient \u2014 active orders from the last 48 hours.'
      ]}
    ],
    notes: [], tags: ['workspace', 'dynamic documentation', 'dyndoc', 'pull forward', 'my last', 'most recent', 'assessment and plan', 'template', 'toggle workspace']
  },

  {
    id: 'inpatient-discharge', cat: 'discharge', title: 'Inpatient discharge',
    summary: 'The discharge workflow mirrors the inpatient workflow. Tags and auto text carry your documentation into the discharge note.',
    audience: 'All providers',
    keyFacts: [
      'Discharge Diagnosis needs a This Visit action before you can complete it.',
      'Change the working diagnosis to a discharge diagnosis via Modify, then save.',
      'The Order Profile sends you to Discharge Order Entry \u2014 called Discharge and New Order Entry in the live record.'
    ],
    sections: [
      { h: 'Setting up and documenting', steps: [
        'Objective / Physical Exam, Subjective / History of Present Illness and Hospital Course can all be moved to the right side of the window.',
        'Use Tag and auto text to fill the sections efficiently.',
        'Click your chosen diagnosis. A box opens on the right.',
        'Click Modify, change the working diagnosis to a discharge diagnosis, then Save.'
      ]},
      { h: 'Discharge orders', steps: [
        'Place order DISC \u2014 Discharge Orders, then go to the cart and Modify.',
        'Note any restrictions \u2014 for example Activity As Tolerated, or General Diet where you must select Unrestricted in the details.',
        'Click Initiate Now. You may need to sign twice more.'
      ]},
      { h: 'Discharge medication reconciliation', steps: [
        'Navigate to the Medication Reconciliation section and use the Discharge link on the right.',
        'Review each medication. Green triangle continues, red square stops.',
        'Create New Rx \u2014 the pill bottle icon \u2014 to write a prescription.',
        'Controlled substances go through the EPCS workflow with Imprivata.'
      ]},
      { h: 'Education, follow-up and the note', steps: [
        'Patient Education is often completed by the nurse. Suggestions are based on This Visit problems \u2014 click to add them, and they appear under Added Education.',
        'You can add custom education or modify what has been chosen.',
        'Follow Up has some defaulted options; once clicked they can be modified below.',
        'Complete the Discharge Note Acute \u2014 called Discharge Summary Note in the live record. Smart Templates populate some fields from the chart.',
        'Sign / Submit when complete.'
      ]}
    ],
    notes: [], tags: ['discharge', 'inpatient discharge', 'discharge order', 'discharge diagnosis', 'patient education', 'follow up', 'discharge summary', 'prescription', 'hospital course']
  },
  {
    id: 'ed-discharge-workflow', cat: 'discharge', title: 'ED discharge workflow',
    summary: 'The remodelled ED Discharge Workflow, live since March 2026. A red star marks a required step; a green checkmark means it is done.',
    audience: 'Emergency providers', updated: 'Live 18 March 2026',
    keyFacts: [
      'A red star marks required steps. A green checkmark appears when a step is complete.',
      'You must document a chronic problem, or select No Chronic Problem, to complete the diagnosis section.',
      'The older Depart Process stays available until further notice.'
    ],
    sections: [
      { h: 'Working through the discharge', steps: [
        'Discharge Diagnosis \u2014 select Add as, then add the problem. Document a chronic problem or select No Chronic Problem.',
        'Patient Education \u2014 select, add and modify if you want.',
        'Follow Up \u2014 select the follow-up; it lands in Added Follow Ups. Click Modify to add when to follow up, an address and free-text comments. You can save the template for future patients.',
        'Prescriptions \u2014 search for and select the prescription, then complete the details.',
        'Discharge Order \u2014 select the plus on the order profile, then Discharge. Modify details, then go to the order tray to sign the prescriptions and discharge orders.',
        'Create Note.'
      ]}
    ],
    notes: [], tags: ['ed discharge', 'discharge workflow', 'note remodel', 'firstnet', 'depart process', 'follow up', 'patient education', 'prescription']
  },
  {
    id: 'ed-discharge-diagnosis', cat: 'discharge', title: 'ED discharge diagnosis and ICD-10',
    summary: 'How to document the ICD-10 discharge diagnosis in the remodelled note, including the required chronic problem.',
    audience: 'Emergency providers',
    keyFacts: [
      'The discharge diagnosis component requires a chronic problem to be completed.',
      'There is an option to select No chronic problems.',
      'Toggle the search from This visit to Chronic, or This visit and chronic, to find one.'
    ],
    sections: [
      { h: 'Steps', steps: [
        'Before completing your note, go to your ED Provider workflow, or your Discharge/Admit workflow.',
        'Navigate to the Problem list, or to Discharge Diagnosis in the Discharge/Admit workflow.',
        'Go to Add Problem.',
        'Start typing the diagnosis and select the right one.',
        'For a chronic problem, toggle the search from This visit to Chronic, then search.',
        'To use the familiar problem list instead, select the header hyperlink to jump to Problems and Diagnoses in the chart Menu, enter the diagnosis as before, then select Back to return.'
      ]},
      { h: 'Assessment and Plan selection', steps: [
        'In the clinical workspace, use the dropdown to choose the view you want.',
        'Outpatient \u2014 Assessment and Plan includes orders from the ED visit.',
        'Diagnosis only \u2014 Assessment and Plan shows the diagnosis alone.'
      ]}
    ],
    notes: [], tags: ['ed', 'discharge diagnosis', 'icd-10', 'chronic problem', 'problem list', 'assessment and plan', 'note remodel']
  },

  {
    id: 'ed-launchpoint', cat: 'ed', title: 'ED LaunchPoint favorite folders',
    summary: 'Your order favorites only show in LaunchPoint if the folders are named to the EDLP convention.',
    audience: 'ED providers',
    keyFacts: [
      'Folders must use the EDLP naming convention exactly.',
      'Once renamed, they appear in LaunchPoint order favorites above the line.'
    ],
    sections: [
      { h: 'Steps', steps: [
        'In Orders, select the down arrow next to the star, then Organize Favorites.',
        'Select the folder to rename and choose Rename.',
        'Retype the name to the EDLP convention.',
        'Select Close.'
      ]},
      { h: 'The naming convention', steps: [
        'Medications becomes EDLP Meds.',
        'Labs becomes EDLP Lab.',
        'EKG becomes EDLP EKG.',
        'Imaging becomes EDLP Imaging.',
        'Patient Care becomes EDLP PatCare.',
        'Consults becomes EDLP Consults.'
      ]}
    ],
    notes: [{ tone: 'warning', text: 'The screenshots in the original job aid show an incorrect naming convention. Use the names listed here.' }],
    tags: ['ed', 'launchpoint', 'edlp', 'favorites', 'folders', 'rename', 'firstnet', 'orders']
  },
  {
    id: 'md-seen', cat: 'ed', title: 'MD Seen \u2014 setting the door-to-doc time',
    summary: 'The time you document here establishes door-to-doc, a key ED throughput and quality metric.',
    audience: 'Emergency providers',
    keyFacts: [
      'The icon in the Provider Notification column tells you MD Seen still needs completing.',
      'Typing T in the date field pulls today\u2019s date. Typing N in the time field enters the current time.'
    ],
    sections: [
      { h: 'Steps', steps: [
        'In the Provider Notification column for the patient you are starting on, select the provider notification.',
        'Click the blue Document.',
        'Document the date and time.',
        'Select the teal check mark to sign the MD Seen.'
      ]}
    ],
    notes: [], tags: ['md seen', 'door to doc', 'ed', 'launchpoint', 'provider notification', 'throughput', 'firstnet']
  },
  {
    id: 'ed-autotext', cat: 'ed', title: 'ED global AutoText phrases',
    summary: 'The global phrases available in the emergency department. Type the trigger in a documentation field to insert the phrase.',
    audience: 'ED providers', updated: 'Live 18 March 2026',
    keyFacts: [
      'Physical exam triggers start //pe. Review of systems triggers start //ros.',
      'General phrases: \\PE for the adult physical exam, \\ROS for the adult review of systems, =Labs for labs and diagnostics if admitted.',
      '\\Restraints and \\Consent satisfy Joint Commission requirements for restraints and procedural consent.'
    ],
    sections: [
      { h: 'How to find the one you need', steps: [
        'Complaint-based phrases follow the pattern //pe or //ros plus the complaint \u2014 //pebackpain, //rosheadache, //peadultsorethroat.',
        'Injury phrases name the site, and sometimes a side \u2014 //pekneeinjurypainltknee, //pehandinjurypainrtwrist.',
        'For trauma procedures, type shift in the free-text field under Procedure.',
        'If you cannot remember a trigger, open the Auto-Text Manager and browse the public phrases.'
      ]},
      { h: 'The general phrases most people use', steps: [
        '\\PE \u2014 general adult physical exam.',
        '\\ROS \u2014 general adult review of systems.',
        '=Labs \u2014 labs and diagnostics, for an admitted patient.',
        '\\Restraints \u2014 the restraints phrase.',
        '\\Consent \u2014 the procedural consent phrase.'
      ]}
    ],
    notes: [{ tone: 'info', text: 'These are available in PowerNote ED and in Dynamic Documentation for inpatient provider notes. The full trigger list lives with Clinical Informatics.' }],
    tags: ['ed autotext', 'global phrases', 'trigger', 'physical exam', 'review of systems', 'restraints', 'consent', 'tjc', 'powernote']
  },

  {
    id: 'wellsheet', cat: 'tools', title: 'WellSheet \u2014 rounding and handoff',
    summary: 'A rounding and handoff overlay on Cerner. Your list plus each patient\u2019s pertinent labs, imaging and vitals in one view.',
    audience: 'Providers, nursing, case management',
    keyFacts: [
      'Find it on the top toolbar of Cerner, or under View, WellSheet. Also in the chart from the inpatient workflow or the bottom of the Menu.',
      'Handoff types: Case Management, Emergency Department, Hospitalist, Nursing, Surgery, Trauma.',
      'The Draft Hospital Course is AI-generated and must be reviewed against the chart.'
    ],
    sections: [
      { h: 'Handoff notes', steps: [
        'Select the Handoff Type from the dropdown.',
        'Use List Filtering, the List / Full toggle, Toggle Handoff Notes, Edit Handoff and List Printing.',
        'Within a patient, the Handoff tab holds the relevant notes and tasks.',
        'My Notes holds Note to Self, Draft A&P and Draft Hospital Course.',
        'Use Generate to create the draft hospital course, and Copy hospital course to copy it.'
      ]},
      { h: 'Reviewing a patient', steps: [
        'Select the chevron to review labs, diagnostics, notes and vital signs.',
        'Use the left Navigate pane \u2014 Recent, Meds, Results, Docs, Views.',
        'Mobile Notifications come prefilled with chart data and update in real time on your phone.',
        'Risk Calculators come prefilled, and results can be copied into your notes.',
        'Pinned Views and condition-specific Select Views \u2014 AF, DM, CHF, HTN, Sepsis and others \u2014 are editable with Edit View.'
      ]},
      { h: 'Discharge planning', steps: [
        'Open discharge planning from the patient card.',
        'Set Medically Cleared, a Discharge Date, and a Discharge Disposition.',
        'Record Clinical Barriers and Discharge Barriers.',
        'Set status flags \u2014 Pregnancy, Foley, CVC, pacer wires, chest tubes, POD, I-PASS.',
        'The Discharges tab in the top navigation gives the census list, sortable by any column header.'
      ]}
    ],
    notes: [
      { tone: 'warning', text: 'A handoff note does not replace your provider notes. Those are still completed from the patient\u2019s chart in Cerner.' },
      { tone: 'warning', text: 'The Draft Hospital Course is generated by AI. WellSheet shows a disclaimer \u2014 the chart must be reviewed by a clinician for accuracy.' }
    ],
    tags: ['wellsheet', 'handoff', 'rounding', 'discharge planning', 'hospital course', 'risk calculator', 'census', 'i-pass']
  },
  {
    id: 'dynamed', cat: 'tools', title: 'DynaMed clinical reference',
    summary: 'An evidence-based reference available to all Ascension St. John associates and affiliated medical staff, with CME tracking.',
    audience: 'All clinicians',
    keyFacts: [
      'You must be at an Ascension St. John location, on the network, to link your account to the subscription.',
      'Once linked, you can use DynaMed from anywhere.',
      'You have to consent to personal data collection to use it off network and to track CME or MOC.'
    ],
    sections: [
      { h: 'Creating your account', steps: [
        'Go to dynamed.com.',
        'Click the person icon at the upper right.',
        'Click Register now and complete the form.',
        'Click the CME ticker at the upper right, next to the person icon.',
        'Click the Settings icon and adjust settings for the CME or MOC credits you need.'
      ]},
      { h: 'The mobile app', steps: [
        'Connect your phone to the AH-AIA Wi-Fi network.',
        'Search DynaMed in the App Store or Google Play.',
        'Download and open the app.',
        'Tap Institutional Network, then Authenticate, then choose a download-content method.'
      ]}
    ],
    notes: [], tags: ['dynamed', 'evidence', 'reference', 'cme', 'moc', 'ebsco', 'mobile app']
  },
  {
    id: 'provider-status', cat: 'tools', title: 'Provider Status and Level of Care orders',
    summary: 'Status and level-of-care orders drive billing. Accuracy here is what reduces denials.',
    audience: 'Physicians',
    keyFacts: [
      'Level of Care defines what the hospital can bill.',
      'Place patient status orders in addition to the PowerPlans for the stay, not instead of them.',
      'A status order notifies Registration and the Patient Logistics Center for patient movement.'
    ],
    sections: [
      { h: 'What is available', steps: [
        'Patient Status Change Orders.',
        'Admit Status Orders (ASO).',
        'Discharge Status Orders (DSO).'
      ]},
      { h: 'Steps', steps: [
        'Go to the Orders component to view the Order Profile \u2014 orders are grouped by activity type. Review current orders first.',
        'Select the appropriate Patient Status Change, Admit, or Discharge order from the main menu.',
        'Select the order and complete the order details.',
        'Click Done.'
      ]}
    ],
    notes: [{ tone: 'info', text: 'A status order simplifies ordering, prevents inadvertent changes to status and expected length of care, and helps nursing communicate transfer needs within the level of care you ordered.' }],
    tags: ['provider status', 'level of care', 'pso', 'aso', 'dso', 'billing', 'denials', 'admit status', 'transfer']
  }
];
