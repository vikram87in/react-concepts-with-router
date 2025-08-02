# React Concepts Learning Workspace

This project is designed for learning and practicing React concepts in isolation. Each concept or mini-project lives in its own folder under `src/concepts/` and is accessible via a unique route using React Router.

## Structure
- `src/concepts/`: Each concept (e.g., useState, context, custom hooks) gets its own folder with a component and README.
- `src/shared/`: Shared utilities or components.
- `src/App.tsx`: Main app with navigation to each concept.

## Getting Started
1. Install dependencies: `npm install`
2. Start the dev server: `npm run dev`
3. Visit `http://localhost:5173` and use the navigation to explore concepts.

## Adding a New Concept
1. Create a new folder in `src/concepts/` (e.g., `useReducerDemo`).
2. Add your component and a `README.md` explaining the concept.
3. Register the route in `src/App.tsx`.

## Best Practices
- Keep each concept self-contained.
- Document your learnings in each concept's README.
- Use TypeScript for type safety.
- Use ESLint and Prettier for code quality and consistency.

---

Happy learning!
