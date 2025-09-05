---
title: Conventional Commits
description: Cómo usar los mensajes de commit convencionales
---

## Comenzando

Antes de empezar, asegúrate de tener:

- Un buen entendimiento de [commit convencionales](https://www.conventionalcommits.org/en/v1.0.0/)
- Un repositorio Git donde puedas hacer commits de cambios

## Uso

### Estructura del Mensaje de Commit

Un mensaje de commit sigue la estructura `<type>(<scope>): <description>`.

- `<type>`: describe el tipo de cambio realizado. Los ejemplos incluyen: `feat`, `fix`, `refactor`, `style`, `test`, `docs`, `chore`, `build`, `ci`, `perf`.
- `<scope>`: (opcional) describe el área afectada. Por ejemplo, `users`, `auth`, `api`, `db`, `main`, etc.
- `<description>`: una breve descripción de los cambios realizados.

### Ejemplo de Mensaje de Commit

```bash
feat(users): agregar funcionalidad de login
```

### Ejemplo de Mensaje de Commit con Scope

```bash
feat(users): agregar funcionalidad de login
```

### Ejemplo de Mensaje de Commit con Scope y Descripción

```bash
feat(users): agregar funcionalidad de login

Este commit agrega la funcionalidad de login al módulo de usuarios.
```

### Ejemplo de Mensaje de Commit con Scope y Descripción

```bash
feat(users): agregar funcionalidad de login

Este commit agrega la funcionalidad de login al módulo de usuarios.
```

### Ejemplo de Mensaje de Commit con Scope, Descripción y Cuerpo

```bash
feat(users): agregar funcionalidad de login

Este commit agrega la funcionalidad de login al módulo de usuarios.

Este commit agrega la funcionalidad de login al módulo de usuarios.
```

### Ejemplo de Mensaje de Commit con Scope, Descripción, Cuerpo y Footer

```bash
feat(users): agregar funcionalidad de login

Este commit agrega la funcionalidad de login al módulo de usuarios.

Este commit agrega la funcionalidad de login al módulo de usuarios.

Este commit agrega la funcionalidad de login al módulo de usuarios.
```
