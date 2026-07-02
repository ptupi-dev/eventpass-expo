# Eventpass Expo

A production-inspired mobile ticketing application built with React Native and Expo, showcasing modern architecture, testing, CI/CD, and engineering best practices.

[![LICENSE](https://img.shields.io/badge/license-MIT-green)]

# Overview

EventPass is a portfolio application designed to demonstrate my approach on a production-ready mobile application using the Expo managed workflow.

The application simulates an event ticket platform where users authenticate, browse their upcoming events, and access digital tickets through QR Codes.

# Features

- Secure authentication
- Session persistence
- Event listing
- QR Code tickets
- Pull-to-refresh
- Loading & error states
- Form validation
- Dark theme
- Offline-friendly API cache
- Localization

# Tech Stack

1. Mobile

- React Native
- Expo
- TypeScript
- Expo Router

2. State Management

- TanStack Query

3. Networking

- Axios

4. Forms

- React Hook Form
- Zod

5. Storage

- Expo SecureStore (or MMKV if you decide to use it)

6. Testing

- Jest
- React Native Testing Library

7. Quality

- ESLint
- Prettier

8. CI/CD

- GitHub Actions
- Expo EAS Build
- Expo EAS Submit

# Architecture

src  
├── \_\_tests\_\_  
├── api  
├── app # Expo Router routes  
├── components  
├── hooks  
├── features  
│ ├── auth  
│ ├── events  
│ └── tickets  
├── services  
├── theme  
├── types  
└── utils

# Project Structure

Each feature contains its own:

- Tests
- Components
- Hooks
- API layer
- Types

# Engineering Principles

Focus on:

- Clean Architecture
- SOLID Principles
- Feature-based organization
- Separation of concerns
- Reusable components
- Type safety
- Error boundaries
- Dependency inversion where appropriate

# Testing

Focus on application behavior.

Examples:

- Authentication flow
- Form validation
- Custom hooks
- API services
- Utility functions
- Component interactions

# CI/CD

Every pull request runs automated checks including:

- ESLint
- TypeScript
- Unit Tests
- Coverage
- Expo Doctor

# Backend

A lightweight REST API provides authentication and event data.

Endpoints include:

- POST /login
- GET /events
- GET /tickets/:id

# Runnning the project

```bash
git clone https://github.com/ptupi-dev/eventpass-expo.git

cd eventpass-expo

npm install

npx expo start
```
