# Bolttedex (Pokemon Explorer)

A modern, responsive web application built with Angular 19 for exploring Pokémon. This project demonstrates infinite scrolling, dynamic styling, and efficient data handling while interacting with PokéAPI data.

---

## Table of Contents
- Features
- Architecture & Design
- Getting Started
- Testing
- Future Improvements

---

## Features

### Core Features
- **Infinite Scrolling:** Seamlessly browse through an endless list of Pokémon.
- **Dynamic UI:** Pokémon cards and detail modals dynamically adapt their background colors based on the Pokémon's primary type.
- **Detailed Views:** View base stats (with visual progress bars), physical attributes (height/weight/base experience), abilities, and types.
- **Interactive Audio:** Play both legacy and the latest Pokémon cries directly from the detail view.

### Tech Stack
- **Framework:** Built utilizing Angular 19's latest control flow syntax (`@for`, `@if`) and standalone components.
- **Styling:** Tailwind CSS for rapid, responsive UI development.

---

## Architecture & Design

The application is designed with modern Angular practices, emphasizing performance and separation of concerns:

- **Component Design:** Utilizes a smart/dumb component architecture. The `PokemonListComponent` manages state and data fetching, while the `PokemonCardComponent` and `PokemonDetailComponent` focus solely on presentation and emitting events.
- **Caching Strategy:** Implements a custom `PokemonService` to cache API responses. This minimizes redundant network requests when scrolling back up or reopening details.
- **Modal Architecture:** Displays detailed Pokémon information via an overlay modal rather than routing to a new page, keeping the user's scroll context intact.

---

## Getting Started

### Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm** (v9 or higher)
- **Angular CLI** (v19.2.15)

### Installation

1. **Clone the repository:**
   ```bash
   git clone git@github.com:tai-nguyen-work/pokemon-caching-frontend.git
   cd pokemon-caching-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   ng serve
   ```

4. **Access the App:**
   Open your browser and navigate to `http://localhost:4200/`.

---

## Testing

The project uses Karma as the primary test runner.

To run unit tests:
```bash
ng test
```

To run end-to-end (e2e) tests:
```bash
ng e2e
```
*(Note: Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs, such as Cypress or Playwright.)*

---

## Future Improvements

- **Search & Filtering:** Allow users to filter the list by Pokemon type, ability, or search by name.
- **Persistent Caching:** Extend the `PokemonService` to use `localStorage` or IndexedDB, ensuring cached data survives page reloads.
- **Test Coverage:** Expand unit testing to cover edge cases, especially within the infinite scrolling and caching logic.
