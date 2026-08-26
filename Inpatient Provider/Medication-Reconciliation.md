# Medication Reconciliation

**Audience:** Physicians
**System:** Cerner PowerChart

## Overview
The **Medication Reconciliation** toolbar button lets a physician efficiently reconcile a patient's documented medication list and make an accurate decision on each medication order. The process should center on a single, up-to-date medication source with all necessary order details.

## Admission Medication Reconciliation (from the Menu)
> Med Rec can be completed from the Menu in PowerChart via either the **Orders** or **Medication List** tab.

1. Select the **Orders** or **Medication List** tab from the Menu.
   - **IMPORTANT:** Admission Reconciliation can't be completed until **Document Medications by Hx** is done — by adding home medications, or by selecting **No Known Home Medications** or **Unable to Obtain Information**.
2. Select the **Reconciliation** dropdown and click **Admission**.
3. Choose a **Reconciliation Action** for each med — **Continue** or **Do Not Continue**. Current meds appear on the left; reconciled ones populate **Orders After Reconciliation** on the right.
4. To add medications for the hospital stay, open the orders screen and complete the additional orders.
5. Unreconciled orders show an **orange star** icon, and an alert at the bottom-right shows how many remain.
6. When complete, click **Reconcile and Sign** (bottom-right).

**Admission reconciliation status — Complete** when all are true:
- At least one admission reconciliation is recorded on the current encounter.
- All active orders that qualified at the time of the most recent admission reconciliation have been reconciled.
- No new historical medications were documented between the most recent admission reconciliation and the first transfer/discharge reconciliation.

> **NOTE:** If an Admission or Discharge Reconciliation is **incomplete**, the blue **chasing-arrows** icon appears.

## Non-medication orders
Non-medication orders go under a **Non-Medications** category in **Current Medications** (the category appears once the first non-med order is added). Reconciliation options aren't available for new non-medication orders.

1. In the enhanced med-rec view, click **+Add** to open the Add Order window.
2. Search for and select the order — it's filed under the appropriate clinical category.
3. Click **Done**. Validations and alert checking for signing occur.

> Cancelling the reconciliation prompts: *"All pending actions will be lost. Do you wish to continue?"* Choosing to lose unsigned data discards new orders; otherwise you return to the reconciliation window.

## Discharge Medication Reconciliation
1. Click **Reconciliation** in the Medication List of the PowerOrders component and select **Discharge**.
2. Follow the same steps as Admission Reconciliation.
3. There is now a **middle column** to order prescriptions for discharge.
4. All prescription orders route to the patient's pharmacy of choice.

## From the Workflow MPage
Admission and Discharge Med Rec can also be done from your Inpatient Workflow MPage via the **Medications** or **Home Medications** component — select **Admit** or **Discharge**.

## Support
- Hospital team: ClinicalInformaticshospitals@sjmc.org · 918-744-3088 (Mon–Fri)
- AMG Clinic team: OKTUL-DL-SJCAmbulatoryClinicalInformatics@ascension.org

---
*Source: Oklahoma Clinical Informatics, Ascension (internal job aid). Converted from PDF for project-knowledge use.*
