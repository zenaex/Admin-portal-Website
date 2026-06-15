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
  -H "Content-Type: application/x-www-form-urlencoded" \
  --data-urlencode "data[firstName]=Test" \
  --data-urlencode "data[lastName]=User" \
  --data-urlencode "data[email]=test@example.com" \
  --data-urlencode "data[phone]=+1234567890" \
  --data-urlencode "data[referrer]=" \
  --data-urlencode "data[userAgent]=curl" \
  --data-urlencode "data[timestamp]=DATETIME"
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

The site sends `POST` with `Content-Type: application/x-www-form-urlencoded` and SheetDB field names:

```
data[firstName]=...&data[lastName]=...&data[email]=...&data[phone]=...
data[referrer]=...&data[userAgent]=...&data[timestamp]=DATETIME
```

## Troubleshooting: some columns stay empty

SheetDB matches JSON/form keys to **row 1 headers exactly** (case-sensitive, no extra spaces).

1. Open `https://sheetdb.io/api/v1/YOUR_API_ID/keys` in the browser — this lists the column names SheetDB sees. They must match: `firstName`, `lastName`, `email`, `phone`, `referrer`, `userAgent`, `timestamp`.
2. In Google Sheets, retype any header that looks wrong (select cell → delete → type again). Avoid `Email` vs `email` or trailing spaces.
3. In SheetDB → your API → **Cache** tab → click **Refresh cache**.
4. Select columns C–D in the sheet → **Format → Number → Plain text** (stops Sheets from reformatting phone/email).
5. Test with curl:

```bash
curl -X POST "https://sheetdb.io/api/v1/YOUR_API_ID" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  --data-urlencode "data[firstName]=Test" \
  --data-urlencode "data[lastName]=User" \
  --data-urlencode "data[email]=test@example.com" \
  --data-urlencode "data[phone]=+1234567890" \
  --data-urlencode "data[referrer]=" \
  --data-urlencode "data[userAgent]=curl" \
  --data-urlencode "data[timestamp]=DATETIME"
```

If curl fills all columns but the website does not, check the browser Network tab for the outgoing request body.

## Security note

The SheetDB API URL is visible in the built JS bundle. For a public marketing waitlist this is normal. Use CORS restrictions in SheetDB to limit which domains can submit from the browser.
