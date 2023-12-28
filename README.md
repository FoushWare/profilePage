# ProfilePage

## Table of contents

1. [Prerequisites](#prerequisites)
2. [Install and Use](#install-and-use)
3. [Dependencies](#dependencies)
4. [Folder Structure](#folder-structure)
5. [parts fof the project](#parts-of-the-project)

## Prerequisites

To use this project you should have the following on your machine:

1. `Node.js`
2. `yarn`

## Install and Use

To install the project you have to:

1. Clone the repository:
   `git clone git@github.com:FoushWare/profilePage.git` or the `ssh url`.

2. Install packages:
   `yarn`

3. Run the project:
   `yarn dev`

4. Open storybook:
   `yarn storybook`
5. Run test runner tests for the storybook components to run the integration tests for the:
   `yarn test-storybook`

## Dependencies

The project is built `next.js` mainly, `Tailwind` for styling and `Storybook` for component development and testing and documentation.

## Folder Structure

The main folder structure of the code is structured like the following:

```ts
├── modules
│   └── shared
│       ├── api
│       │   └── example1.api.ts
│       ├── components
│       │   └── atoms
│       │   |  └── NotificationMenu
|       |   |      ├── NotificationMenu.tsx
|       |   |      └── types
|       |   ├── molecules
|       |   ├── organisms
|       |   └── icons
│       ├── logic
│       └── configuration
|           └── axiosConfig.ts
│       └── hooks
|           └── useDropdown.ts
|           └── useCategories.ts
│       └── types
├── pages
│   ├── api
│   ├── _app.js
│   ├── _document.js
│   └── index.js
├── public
│   └── favicon.ico
├── README.md
├── styles
│   └── globals.css
├── next.config.js
├── tailwind.config.js
```

- The structure is modular, this means that the project is encapsulated into modules, each of them will be handling a single page.

- Every module will have a separated folder that contains its own `components`, `api` for api calls, `logic` for business logic of the module, `tests`, `pages` which contains the pages that belongs to the module and `index.js` file which is the entry point of the module.

- Also there's the `shared` module which contains the components, api calls and logic that's shared across all the modules e.g: `Layout` component.

# parts of the project

## 1. form: contain two searchable dropdown menu

you can access this part locally by going to the following path: `http://localhost:3000/categorysubcat`

and you can access it on the deployed version by going to the following path: `https://profile-page-woad-pi.vercel.app/categorysubcat`

[CategorySubCategory form Task](https://profile-page-woad-pi.vercel.app/categorysubcat)

## 2. profile page: contain the profile page

you can access this part locally by going to the following path: `http://localhost:3000/`

and you can access it on the deployed version by going to the following path: `https://profile-page-woad-pi.vercel.app/`

[Profile Page Task](https://profile-page-woad-pi.vercel.app/)
