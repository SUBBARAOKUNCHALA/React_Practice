# React Practice Playground

This repository contains my **React fundamentals practice project**, where I implemented and organized core React concepts using a clean, scalable folder structure.

The goal of this project is to strengthen my understanding of React by building small, focused components for each concept.

## Project Structure
src/
│
├── components/
│   ├── props/
│   │   ├── Props.jsx
│   │   ├── EmpDetails.jsx
│   │   ├── PropsDestructuring.jsx
│   │   └── ChildProps.jsx
│   │
│   ├── hooks/
│   │   └── useState/
│   │       ├── Counter.jsx
│   │       ├── Mobile.jsx
│   │       ├── EcommercePriceUpdater.jsx
│   │       ├── BankBalanceManager.jsx
│   │       └── UseStateHookExplain.jsx
│   │
│   ├── data-binding/
│   │   ├── OneWayDataBinding.jsx
│   │   └── TwoWayDataBinding.jsx
│   │
│   ├── conditional-rendering/
│   │   └── MyWebPage.jsx
│   │
│   └── ui/
│       └── BackgroundChanger.jsx
│
├── pages/
│   └── PracticeDashboard.jsx
│
├── App.jsx
├── main.jsx
└── index.css

Concepts Covered:--
-------------------
 Props:-
 ------

Passing data to components
Props destructuring
Children props
Rendering lists with props

 useState Hook:-
----------------

Counter examples (functional & class components)

Controlled inputs
Updating primitive and object state
Simple business logic examples:
E-commerce price updater
Bank balance manager

 Data Binding:-
---------------

One-way data binding
Two-way data binding using controlled inputs
 Conditional Rendering
Rendering UI based on conditions

 useEffect Hook:-
----------------

Background color changer
Basic interactive UI components

Pages:-
--------

PracticeDashboard

Acts as a central place to render and test all practice components
Keeps App.jsx clean and readable


Tech Stack:-
---------

React (Functional & Class Components)
JavaScript (ES6+)
Vite
HTML & CSS

Purpose of This Project:-
------------------------
Practice React fundamentals with hands-on examples
Maintain clean and scalable project structure
Prepare for React interviews
Build a strong GitHub portfolio

How to Run the Project:-
-----------------------
npm install
* add component in index.js by its concept and import and add that in app.jsx 
npm run dev


Notes:-
---------

Each folder is organized by concept, not by feature
Components are kept small and focused
Best practices like controlled components and state immutability are followed



