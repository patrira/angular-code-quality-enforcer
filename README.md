# Angular Code Quality Enforcer Lab
## Project Description
This project is focused on enforcing code quality and consistency using ESLint, Prettier, and Husky in an Angular application. The project implements a car rental system with components and services that adhere to strict linting, formatting, and testing practices.

# Setup Instructions
## 1. Install Dependencies
Ensure you have Node.js and npm installed. Use npm install to install all project dependencies.

## 2. Configure ESLint
To enforce code quality, ESLint has been integrated into the project.

ESLint Setup includes installing the necessary packages and creating a configuration file (.eslintrc.json) to extend the recommended Angular ESLint rules.
Custom rules were added to enforce semicolons and warn against the use of console.log.
## 3. Fixing Linting Errors
After configuring ESLint, linting errors were detected and fixed, including:

Implementing the OnInit lifecycle interface in components that use lifecycle methods.
Replacing let with const where variables are not reassigned.
Avoiding the use of any[] and replacing it with a properly defined interface for type safety.
## 4. Integrate Prettier
Prettier was configured to ensure consistent formatting across the codebase.

A .prettierrc file was added to define Prettier's rules.
Prettier was integrated with ESLint to avoid conflicts between formatting and linting.
## 5. Setting Up Husky for Pre-Commit Hooks
Husky was added to automatically run linting and formatting checks before every commit.

The prepare script was added to initialize Husky.

Here also is the link to the deployed site: https://angular-code-quality-enforcer.vercel.app/
A pre-commit hook was created to run linting and formatting before each commit, ensuring no bad code is committed.
NPM Scripts
The following npm scripts were added for easy linting, formatting, and testing:

Lint: Runs ESLint across the project to detect and fix linting errors.
Format: Uses Prettier to automatically format the code.
Lint-Fix: Combines both linting and formatting in one command to ensure code adheres to all rules.
