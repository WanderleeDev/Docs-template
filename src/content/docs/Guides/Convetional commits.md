---
title: Conventional Commits
description: How to use the conventional commit messages
---

## Getting Started

Before you start, make sure you have:

- A good understanding of the conventional commit messages
- A Git repository where you can commit changes

## Usage

### Commit Message Structure

A commit message follows the structure `<type>(<scope>): <description>`.

- `<type>`: describes the type of change made. Examples include: `feat`, `fix`, `refactor`, `style`, `test`, `docs`, `chore`, `build`, `ci`, `perf`.
- `<scope>`: (optional) describes the affected area. For example, `users`, `auth`, `api`, `db`, `main`, etc.
- `<description>`: a brief description of the changes made.

### Example Commit Message

```bash
feat(users): add login functionality
```

### Example Commit Message with Scope

```bash
feat(users): add login functionality
```

### Example Commit Message with Scope and Description

```bash
feat(users): add login functionality

This commit adds the login functionality to the users module.
```

### Example Commit Message with Scope and Description

```bash
feat(users): add login functionality

This commit adds the login functionality to the users module.
```

### Example Commit Message with Scope and Description and Body

```bash
feat(users): add login functionality

This commit adds the login functionality to the users module.

This commit adds the login functionality to the users module.
```

### Example Commit Message with Scope and Description and Body and Footer

```bash
feat(users): add login functionality

This commit adds the login functionality to the users module.

This commit adds the login functionality to the users module.

This commit adds the login functionality to the users module.
```
