# AI Rules & Technical Stack

## Tech Stack
- **React 19**: Modern functional components with hooks for state management.
- **TypeScript**: Strict typing for all components, utilities, and state objects.
- **Vite**: Ultra-fast build tool and development server.
- **Tailwind CSS**: Utility-first CSS framework for all styling needs.
- **Component-Driven Architecture**: Modular UI components stored in `src/components/`.
- **A4 Print Layout**: Specialized CSS and DOM structure for high-fidelity physical printing.
- **Lucide React**: Preferred library for consistent, accessible iconography.

## Rules & Guidelines

### Styling
- **Tailwind Only**: Do not write custom CSS in `.css` files unless absolutely necessary for print media queries.
- **Theme Consistency**: Always use the `COLORS` object from `src/constants.ts` for primary, detail, and dark accents to maintain brand identity.
- **Responsiveness**: Use `no-print` classes for UI elements that shouldn't appear on the physical document.

### Architecture
- **State Management**: Keep shared state in `App.tsx` or use Context if complexity grows. 
- **Types**: Always define interfaces in `src/types.ts` for any new data structures.
- **Components**: Create small, focused components (under 100 lines). New components must reside in `src/components/`.

### Libraries & Tools
- **Icons**: Use `lucide-react`.
- **UI Components**: Prioritize `shadcn/ui` components for form elements and overlays.
- **Date Handling**: Use native `Date` objects for simple operations; avoid heavy libraries like Moment.js unless complex timezone handling is required.

### Print Specifics
- **A4 Constraints**: The `PrintableArea` must strictly respect `210mm` x `297mm` dimensions.
- **Color Adjustment**: Ensure `-webkit-print-color-adjust: exact` is maintained for background colors to show up in prints.