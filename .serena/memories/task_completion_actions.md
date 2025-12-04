# Task Completion Actions

When a task is completed, the following actions should be considered to ensure code quality and project standards:

1.  **Code Review:** Ensure the changes align with the established code style and conventions (see `code_style_conventions.md`).
2.  **Linting:** While an explicit linting command (`npm run lint`) is not defined in `package.json`, TypeScript provides type checking during development and build. Any new code should pass TypeScript compilation without errors.
3.  **Formatting:** No explicit formatting tool (like Prettier) is configured in `package.json`. Developers should manually ensure code is consistently formatted, or integrate a formatting tool if one is desired.
4.  **Testing:** No explicit testing framework commands (`npm run test`) are defined in `package.json`. If unit or integration tests are implemented, they should be run and pass. Currently, verification would involve visually inspecting the UI changes in the development server (`npm run dev`).
5.  **Build Verification:** Ensure the project can still be built successfully for production:
    ```bash
    npm run build
    ```
6.  **Functional Testing:** Manually verify the implemented feature or fix works as expected in the browser.
7.  **Git Commit:** Commit changes with a clear and concise message following established conventions.
    ```bash
    git add .
    git commit -m "feat: descriptive commit message"
    ```
8.  **Push Changes:** Push changes to the remote repository.
    ```bash
    git push
    ```