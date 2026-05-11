# Deployment & Sync

## GitHub Pages

The app is hosted on GitHub Pages from the user's `MRCP-tracker-` repo.

- **Repo**: `https://github.com/lukennyft/MRCP-tracker-`
- **Live URL**: `https://lukennyft.github.io/MRCP-tracker-/mrcp-app/`
- The app files live inside a `mrcp-app/` folder at the repo root, which is why the URL has that path segment.

### Deploying an update

1. On the user's Mac, the edited files are in `/Users/lukennytinta/Documents/Studying for MRCP Part 1/mrcp-app/`.
2. Open the GitHub repo in a browser → navigate into the `mrcp-app/` folder.
3. **Add file → Upload files** → drag the changed file(s) onto the upload area.
4. Scroll down → Commit changes.
5. Wait ~1 minute for the GitHub Pages build to publish (status visible under the repo's **Actions** tab).
6. Force-refresh the live site on every device that has it installed (see iOS trick below).

For larger structural changes (new files), drag the whole changed folder rather than file-by-file.

### iOS / iPadOS force-refresh trick

Add-to-Home-Screen apps cache aggressively. To pick up an update:

1. Long-press the home-screen icon → **Delete Bookmark** (this only removes the icon; localStorage and synced data are tied to the URL/domain and survive).
2. Open the URL in Safari.
3. Tap **Share → Add to Home Screen** again.

Pure Safari can also be forced to reload by visiting `Settings → Safari → Advanced → Website Data` and clearing data for the site, but the icon-delete approach is faster.

## Firebase Firestore sync

### Project details

- **Firebase project**: `mrcp-revision-app`
- The config object lives in `firebase-config.js` at the repo root. It is safe to commit publicly because security is enforced by Firestore rules, not by hiding the keys.

### Document structure

All sync state lives under a single Firestore document path:

```
/sync/{syncCode}
```

where `syncCode` is a 12-character code the user generates on their first device and types into subsequent devices. The document contains:

```js
{
  hoursPerWeek: 14,
  statuses: { "af": "green", "stemi": "yellow", ... },
  statusChangedAt: { "af": 1715200000000, ... },
  notebookBookmarks: { "lipids": true, ... },
  updatedAt: <Firestore server timestamp>
}
```

Not synced (per-device only):

- View tab, active specialty, active notebook section
- `mrcp_notes` (Pencil PNGs — too large for a single Firestore document; could be split into a subcollection in the future).

### Security rules (Firestore console → Rules tab)

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /sync/{syncCode} {
      allow read, write: if syncCode.size() >= 12;
    }
    match /sync/{syncCode}/notes/{noteId} {
      allow read, write: if syncCode.size() >= 12;
    }
  }
}
```

The 12-character minimum is the only auth — there is no Firebase Auth. Security relies on the sync code being unguessable. This is acceptable for personal medical study data; not appropriate for anything more sensitive.

### Sync code lifecycle

1. On first open, the app generates a random 12-char code and stores it as `mrcp_sync_code`.
2. The Settings panel inside the app shows the code so the user can copy it.
3. On the second device, the user opens Settings and pastes the same code. All local state is then replaced by the remote document's contents on the next snapshot.
4. Writes are debounced to 700 ms. Snapshots use an `applyingRemote` ref to prevent echo-back.

### What happens offline

- App functions fully — vendor scripts are bundled locally.
- Firestore has client-side persistence enabled, so reads return the last known state.
- Writes queue locally and flush on reconnect.

## Adding more synced fields

If a new piece of state should sync:

1. Add to the **reader** in `App` (`onSnapshot` callback) — check the field exists on the snapshot and merge into local state.
2. Add to the **debounced writer** — include the new field in the `set({...}, {merge: true})` payload.
3. Add to the **seed write** — the first-time upload when no remote doc exists.
4. Update the corresponding row in `architecture.md`'s localStorage table.

## Common issues

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Site shows the old version after upload | Cache | Force-refresh per the iOS trick above |
| 404 on the live URL | Wrong path | Confirm files are under `mrcp-app/` in the repo; the URL must include that segment |
| Stuck on "Loading…" forever | Vendor script failed | Check the browser console; usually means `vendor/babel.min.js` is missing from the upload |
| Sync not happening | Sync code mismatch or rules block | Confirm both devices show the same code; check Firestore rules in the console |
| Data appears wiped on one device | The other device wrote first with empty state | Restore the syncCode from a backup; consider exporting state to a JSON file periodically |
