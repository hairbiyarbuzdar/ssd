# Memory - S.S.D branding

Last updated: 2026-10-05

## Completed
- Added missing vector logos, glass-window mark, print and thermal PNG assets in public/brand, with repeatable generator scripts/generate-brand-assets.cjs.
- Replaced favicon and added app/icon.svg. Removed unused Star Sign logo, header, footer and thermal images.
- Removed printing/advertising tagline from labor printouts and updated expense example wording.
- New invoice and quotation prefixes are SSD and Q-SSD. Existing records were not modified; historical quotation prefixes are still recognized.
- Fixed legacy PDF asset constants and renamed/rebranded the standalone HTML prototype.
- Login remember-me storage keys now use ssd; previously saved login fields will not auto-fill under the new keys.

## Verification
- npm run build passed; npx tsc --noEmit passed.
- Inspected rendered letterhead and thermal assets.
- Browser UI check unavailable: no browsers connected.

## Decisions and limits
- Kept existing maroon interface and created a matching window-frame mark.
- Historical migrations and authentication fallback remain untouched for compatibility.
- No deployment or database migration performed.

## Next session
- Preview login, navigation and printouts in a connected browser.

## Project rename
- Business branding is S.S.D; package and login storage identifiers use ssd.
- Standalone prototype is SSD-Design.html. New invoices use SSD and quotations use Q-SSD; historical records remain supported.
