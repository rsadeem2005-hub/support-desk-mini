# Support Desk Mini
A small IT support desk: log tickets, set priority, watch live SLA timers, follow guided troubleshooting steps, keep notes and record the resolution.

All data stays in your browser (localStorage). The starter tickets are **sample data** and can be reset from the footer.

## Run
`npm install` then `npm run dev`. Build with `npm run build`.

## Deploy
Vercel: import the repo, no settings needed. GitHub Pages: `npm run deploy`.

## SLA targets (editable in `src/App.jsx`)
Critical 1h, High 4h, Medium 8h, Low 24h.
