# Whole Question — a working demonstration

A small interactive demonstration by Haley Bird, built with AI assistance. Three fictional cases show how a different piece of evidence can change an explanation and next action.

**This is hand-authored demonstration logic, not a live AI researcher or a psychological or scientific validation.** No private study, chat history, client data, or proprietary project code is included. Browser source is public by design.

Download `site/index.html` and open it locally, or use the deployed Pages URL if the workflow establishes one. Do not assume deployment from this README: inspect the Actions run.

## Reproduce
Python 3 and Node 20+: `python3 site/verify.py`

The verification checks release hashes and runs 41 authored decision-rule tests. `site/PROOF.json` records the separately executed local parser/release, browser, contrast, and synthetic OCR test scopes. Those additional private-builder tests are not present in this public repository. These are same-agent checks, not an independent audit.

## Privacy and hosting
The application implements no automatic network requests, analytics, cookie/storage writes, uploads, or personal data intake. Hosting providers may log requests. `_headers` and `vercel.json` are configuration for compatible hosts; GitHub Pages does not apply those files as custom HTTP headers. The standalone index has a restrictive meta CSP and no-referrer policy. Hosting is a public demonstration surface, not a secure private-data service.

## Status and claims
A successful workflow must be checked against its exact commit; a hosted URL must be checked separately. No novelty, inventorship, patent, clinical, commercial, or all-chat coverage claim is made. Hashes are integrity checks, not independent validation or legal receipts.

© Haley Bird. All rights reserved. Interface and demonstration code, AI-assisted.

## Verified publication and remaining hosting gate
The first hosted verification job passed the exact release hashes and all 41 decision-rule tests. The separate deployment attempt could not enable Pages: GitHub returned `Resource not accessible by integration` for site creation. That is a hosting-permission boundary, not a test failure.

Pushes now run verification only. Deployment is an explicit manual workflow input, so a verification success is not represented as a hosted release. To activate hosting, a repository admin must open Settings → Pages → Build and deployment → Source: GitHub Actions. Then run this workflow manually with `deploy` checked. Do not create a broader token or change private repository visibility. Live URL/byte/interaction verification is still required after deployment.
