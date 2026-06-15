# Waitlist → Google Sheets (SheetDB)

The waitlist form at `/waitlist` posts sign-ups to a Google Sheet via [SheetDB](https://sheetdb.io).

## 1. Create the Google Sheet

Create a new sheet with **row 1 headers** (exact spelling — SheetDB maps JSON keys to these columns):

| firstName | lastName | email | phone | referrer | userAgent | timestamp |
|-----------|----------|-------|-------|----------|-----------|-----------|

## 2. Connect SheetDB

1. Sign up at [sheetdb.io](https://sheetdb.io)
2. **Create API** → paste your Google Sheet URL
3. Share the sheet with the SheetDB service account when prompted
4. Copy your API endpoint: `https://sheetdb.io/api/v1/{API_ID}`

### Recommended settings (API → Settings)

- **CORS**: restrict to your production domain and local dev, e.g.
  - `https://www.zenaex.com`
  - `http://localhost:5173`

## 3. Test the API

```bash
curl -X POST "https://sheetdb.io/api/v1/YOUR_API_ID" \
  -H "Content-Type: application/json" \
  -d '{"data":[{"firstName":"Test","lastName":"User","email":"test@example.com","phone":"+1234567890","referrer":"","userAgent":"curl","timestamp":"DATETIME"}]}'
```

Expect `{"created":1}` and a new row in the sheet. SheetDB's `DATETIME` value fills the timestamp column automatically.

## 4. Environment variables

**Local** — create `.env` in the project root (gitignored):

```
VITE_WAITLIST_ENDPOINT=https://sheetdb.io/api/v1/YOUR_API_ID
```

**Vercel** — Project → Settings → Environment Variables:

| Name | Value |
|------|-------|
| `VITE_WAITLIST_ENDPOINT` | `https://sheetdb.io/api/v1/YOUR_API_ID` |

Set for Production (and Preview if you want waitlist on preview deploys). Redeploy after adding the variable.

## Payload

The site sends `POST` with `Content-Type: application/json`:

```json
{
  "data": [{
    "firstName": "...",
    "lastName": "...",
    "email": "...",
    "phone": "...",
    "referrer": "...",
    "userAgent": "...",
    "timestamp": "DATETIME"
  }]
}
```

## Security note

The SheetDB API URL is visible in the built JS bundle. For a public marketing waitlist this is normal. Use CORS restrictions in SheetDB to limit which domains can submit from the browser.
