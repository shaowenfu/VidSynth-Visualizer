# Project Context: VidSynth Visualizer

## Overview
**VidSynth Visualizer** is a React-based frontend application designed to visualize an intelligent video processing pipeline ("VideoAlchemy"). It provides a dashboard for inspecting various stages of video analysis, including temporal segmentation, semantic grounding, logging, and cluster visualization.

Currently, the application operates primarily as a **mock/prototype**, utilizing static data to demonstrate the UI and user experience of the intended pipeline.

## Technology Stack
*   **Framework:** React (via Vite)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS (loaded via CDN in `index.html`)
*   **Icons:** Lucide React
*   **Visualization:** Recharts (installed dependency), Custom SVG/Canvas implementations
*   **Build Tool:** Vite

## Project Structure
```text
/
├── components/          # React UI components for different pipeline steps
│   ├── Step1Segmentation.tsx  # Video player & timeline visualization
│   ├── Step2Semantic.tsx      # (Inferred) Semantic search/tagging view
│   ├── Step3Log.tsx           # (Inferred) System logs view
│   ├── Step4FinalCut.tsx      # (Inferred) Final video assembly view
│   ├── ClusterSandbox.tsx     # 2D visualization of video segment clusters
│   └── ProjectConfigModal.tsx # Settings modal
├── constants.ts         # MOCK data generation and static configuration
├── types.ts             # TypeScript interfaces for data models (Video, Segment, Logs)
├── App.tsx              # Main application layout and state orchestration
├── index.html           # Entry HTML (contains Tailwind CDN link)
└── vite.config.ts       # Vite configuration
```

## Key Features
1.  **Pipeline Visualization:** A linear view of the video processing steps:
    *   **Segmentation:** Visualizes Ground Truth (GT) vs. Predicted segments on a timeline.
    *   **Semantic:** (Planned) analysis of video content.
    *   **Final Cut:** Assembly of processed clips.
2.  **Cluster Sandbox:** An interactive view (likely 2D scatter plot) for exploring relationships between video segments.
3.  **Project Configuration:** Modal for managing project-level settings.

## Getting Started

### Prerequisites
*   Node.js

### Installation & Running
1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Environment Setup:**
    *   Create a `.env.local` file in the root directory.
    *   Add your Gemini API key (required for potential future API integration, currently implied by README):
        ```env
        GEMINI_API_KEY=your_api_key_here
        ```
3.  **Start Development Server:**
    ```bash
    npm run dev
    ```
4.  **Build for Production:**
    ```bash
    npm run build
    ```

## Development Conventions

*   **Data Source:** The app currently relies heavily on `constants.ts` for data. When developing, check `MOCK_VIDEOS`, `MOCK_LOGS`, and `generateSegments` in that file.
*   **Styling:**
    *   **Important:** Tailwind CSS is loaded via **CDN** in `index.html`. It is *not* part of the build pipeline.
    *   Use utility classes directly in JSX (e.g., `className="bg-slate-950 text-slate-200"`).
    *   Custom styles (like scrollbars) are defined in the `<style>` block of `index.html`.
*   **State Management:** `App.tsx` holds the central state (active video, current view) and passes it down via props.
*   **Type Safety:** All data interfaces are strictly defined in `types.ts`. Ensure new components adhere to these types.

## Future integration
The `vite.config.ts` is configured to expose `GEMINI_API_KEY` to the client, suggesting a planned direct integration with Google's Gemini API for video analysis or metadata generation.
