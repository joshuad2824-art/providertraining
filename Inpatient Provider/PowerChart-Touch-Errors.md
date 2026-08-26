# PowerChart Touch — Mobile App Sign-In Errors

**Audience:** Providers
**System:** PowerChart Touch mobile app (iPhone)
**Date:** 04/08/2026

## Overview
Step-by-step troubleshooting for common sign-in errors on the PowerChart Touch mobile app on iPhone.

## Error #1 — "Sorry, but we're having trouble signing you in"
**Fix: clear cached credentials for PowerChart Touch.**

| What to do | Where to click |
| :-- | :-- |
| 1. Force close the app | Swipe up from the bottom of the screen and pause, then swipe up on PowerChart Touch to close it completely. |
| 2. Open iPhone Settings | Tap the Settings app (gear icon) on the home screen. |
| 3. Locate browser settings | Scroll to and tap **Safari** (or the default browser, e.g., Chrome). |
| 4. Clear cached data | Scroll down and tap **Clear History and Website Data**. |
| 5. Confirm the action | Tap **Clear History and Data** to confirm. |
| 6. Relaunch and log in | Reopen PowerChart Touch. It should prompt for a fresh Microsoft login — enter the correct Ascension credentials. |

> **NOTE:** Clearing website data removes browsing history, which is necessary to remove the hidden Microsoft token causing the block.

## Error #2 — "Access to Oracle Health is blocked"
> **IMPORTANT:** This error means the device's IP-address-tracking setting is interfering with Ascension's security policy. The physician must disable **Limit IP Address Tracking** on their current connection.

Full message: *"Access to Oracle Health is blocked by your organization's security policy. Access to Ascension applications and services using personal VPNs or anonymous proxies is prohibited. Please disconnect from your private VPN or proxy service and try to sign-in again."*

**If using Wi-Fi (Ascension network or home):**
Settings → **Wi-Fi** → tap the blue "i" next to the connected network → scroll down → toggle **Limit IP Address Tracking** OFF.

**If using cellular data (no Wi-Fi):**
Settings → **Cellular** → **Cellular Data Options** → toggle **Limit IP Address Tracking** OFF.

---
*Source: Oklahoma Clinical Informatics, Ascension (internal job aid). Converted from PDF for project-knowledge use.*
