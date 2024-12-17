# Next.js 15 Strict Mode and Environment Variables

This repository demonstrates a common error encountered when accessing environment variables in Next.js 15's strict mode.  The issue arises when attempting to directly access environment variables within a component that is rendered client-side and does not have access to the server-side environment variables.

## Bug Description

The bug occurs in `pages/about.js` where `process.env.MY_ENV_VARIABLE` is directly accessed. In strict mode, this will result in a runtime error or undefined behavior.  

## Solution

The solution is to handle environment variables differently; avoid direct access within components and fetch values using methods more suitable for client-side access.  A robust approach is to make the environment variables available in the client-side environment or fetch them from an API endpoint after component mounting.