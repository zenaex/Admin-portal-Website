# Waitlist → Google Sheets (Apps Script)

1. Create a Google Sheet. Add a header row, e.g.  
   `Timestamp | First name | Last name | Email | Phone | Referrer | User agent`
2. **Extensions → Apps Script**. Paste the code below.
3. Replace `YOUR_SPREADSHEET_ID` with the ID from the Sheet URL (`https://docs.google.com/spreadsheets/d/THIS_PART/edit`).
4. **Deploy → New deployment** → type **Web app** → Execute as **Me** → Who has access: **Anyone** → Deploy. Copy the **Web app URL** (ends with `/exec`).
5. Set `VITE_WAITLIST_ENDPOINT` in `.env` to that URL, or rely on the default in `WaitlistPage.tsx` after updating the fallback.

```js
function doPost(e) {
  var p = e.parameter;
  var ss = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID');
  var sheet = ss.getSheets()[0];

  sheet.appendRow([
    new Date(),
    p.firstName || '',
    p.lastName || '',
    p.email || '',
    p.phone || '',
    p.referrer || '',
    p.userAgent || '',
  ]);

  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(
    ContentService.MimeType.JSON
  );
}
```

The site sends `POST` with `Content-Type: application/x-www-form-urlencoded` and fields: `firstName`, `lastName`, `email`, `phone`, `referrer`, `userAgent`.
