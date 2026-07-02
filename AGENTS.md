# Repository Instructions

## Expo SDK 57

- Read the exact versioned docs at https://docs.expo.dev/versions/v57.0.0/ before making Expo-related code or configuration changes.
- Keep this project compatible with Expo SDK 57, React Native 0.86, and React 19.2.
- Use Node.js 22.13.x or newer for local commands.

## Package Workflow

- Use npm and keep `package-lock.json` in sync with `package.json`.
- Prefer `npx expo install <package>` for Expo SDK, React Native, and native-module dependencies so versions stay aligned with SDK 57.
- Ask before adding new production dependencies unless the user explicitly requested the package.

## Verification

- Run `npm run typecheck` after TypeScript changes.
- Run `npm run check` before handoff when feasible.
- If `expo-doctor` or other checks require network access, request approval instead of bypassing the check.

## Editing Guidelines

- Keep changes focused on the user request and preserve unrelated user edits.
- Do not edit generated native `ios/` or `android/` folders unless the user explicitly asks for native project changes.
- Do not commit secrets. Use local env files for machine-specific values and keep `.env.example` trackable for documented placeholders.
