# Code Style and Conventions

## General
*   **Language:** TypeScript
*   **Component-based:** Uses React components, likely following a functional component style with hooks.
*   **Strong Typing:** All data interfaces are strictly defined in `types.ts`. New components and data structures should adhere to these types.

## Styling
*   **Utility-first CSS:** Tailwind CSS is used for styling.
*   **CDN-based:** Tailwind is loaded via CDN in `index.html`, meaning utility classes are applied directly in JSX (`className="..."`). There is no dedicated Tailwind configuration file in the project.
*   **Custom Styles:** Minor custom CSS for scrollbars is embedded in a `<style>` block within `index.html`.

## Naming Conventions
*   **Components:** PascalCase (e.g., `Step1Segmentation.tsx`, `ProjectConfigModal.tsx`).
*   **Variables/Functions:** camelCase.
*   **Constants:** SCREAMING_SNAKE_CASE (e.g., `MOCK_VIDEOS`).
*   **Types/Interfaces:** PascalCase (e.g., `VideoResource`, `Segment`).

## Data Handling
*   **Mock Data:** Extensive use of mock data defined in `constants.ts` (e.g., `MOCK_VIDEOS`, `MOCK_LOGS`). This is crucial for understanding the current operational state of the UI.
*   **API Keys:** `GEMINI_API_KEY` is expected to be loaded from `.env.local` and made available via `process.env`. This suggests a future or planned integration with an external API.

## Project Structure
*   `components/`: Contains all React UI components.
*   `constants.ts`: Houses mock data and static configuration values.
*   `types.ts`: Defines all TypeScript interfaces and types used across the application.
*   `App.tsx`: The main entry point for the React application, managing global state and routing between main views (pipeline, sandbox).
*   `index.html`: The root HTML file, responsible for loading the React app and configuring CDN-based Tailwind CSS.
*   `vite.config.ts`: Vite build tool configuration.
*   `tsconfig.json`: TypeScript compiler configuration.