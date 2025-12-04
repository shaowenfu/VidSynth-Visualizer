# Codebase Structure

The project follows a standard React application structure, organized primarily by feature or concern rather than type.

*   **`/` (Root Directory):**
    *   `App.tsx`: The main application component, orchestrating the overall layout and navigation.
    *   `index.html`: The entry point for the web application, including script imports and CDN links.
    *   `index.tsx`: React's entry point for rendering the `App` component.
    *   `package.json`: Defines project metadata, scripts, and dependencies.
    *   `tsconfig.json`: TypeScript compiler configuration.
    *   `vite.config.ts`: Vite build tool configuration.
    *   `constants.ts`: Stores global constants and mock data.
    *   `types.ts`: Centralized TypeScript interface definitions.
    *   `README.md`: Project description and basic setup instructions.
    *   `GEMINI.md`: This context file.

*   **`/components`:**
    *   Houses individual React components, often corresponding to specific UI sections or logical units of the application.
    *   Examples: `Step1Segmentation.tsx`, `Step2Semantic.tsx`, `ClusterSandbox.tsx`, `ProjectConfigModal.tsx`, `TopBar.tsx`. Each `StepX` component likely represents a distinct stage in the video processing pipeline visualization.

*   **`/NiceGUI`:**
    *   This directory is present but its contents and purpose within this React project are currently unclear without further investigation. It might be related to a separate Python-based GUI framework or some integration layer.

*   **`/node_modules`:**
    *   Standard directory for installed npm packages.

The application is a single-page application (SPA) with routing handled internally (e.g., via state management like `currentView` in `App.tsx`) rather than a dedicated routing library like React Router.