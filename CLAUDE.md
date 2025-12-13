# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development server (hot-reload)
npm run serve

# Production build
npm run build

# Lint and fix files
npm run lint
```

## Architecture

This is a Vue 2.7 study project using Vue CLI 5.

### Project Structure

- **src/main.js** - Application entry point, configures Vue with router
- **src/App.vue** - Root component with navigation (Home, Curriculum, About)
- **src/router/index.js** - Vue Router configuration with history mode
- **src/views/** - Page components (HomePage, AboutPage, curriculum/)
- **src/views/curriculum/** - 7-day curriculum pages (Day1.vue through Day7.vue, CurriculumIndex.vue)
- **src/components/** - Reusable components

### Key Technologies

- Vue 2.7 with Options API
- Vue Router 3 (history mode)
- Babel for transpilation
- ESLint with vue/essential rules

### Path Alias

`@` resolves to `src/` directory (configured via Vue CLI).
