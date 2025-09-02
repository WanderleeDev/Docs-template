---
title: Guidelines
description: Guidelines for writing guides.
---

Convention for naming and code formatting.

## Java

### Naming

- Use camelCase for classes, methods, and variables.
- Use UpperCamelCase for classes, enums, and annotations.
- Use lowercase with underscores for constants.

### Formatting

- Use 4 spaces for indentation.
- Use curly braces for all control structures.
- Use `{}` for single-statement blocks.
- Use `;` at the end of a statement.
- Use whitespace to improve readability.

### Comments

- Use Javadoc comments for classes, methods, and fields.
- Use block comments for complex sections of code.
- Use inline comments for complex expressions.

## Spring Boot

### Naming

- Use `{}` for placeholders in logs.
- Use `{}` for placeholders in exceptions.
- Use `@Value` for constants.

### Logging

- Use `log.debug()`, `log.info()`, `log.warn()`, `log.error()`, and `log.trace()` for logging.
- Use `log.isDebugEnabled()` before logging debug messages.

### Exceptions

- Use `IllegalArgumentException` for invalid arguments.
- Use `IllegalStateException` for invalid state.
- Use `RuntimeException` for unexpected errors.
- Use `ResponseStatusException` for HTTP errors.
- Use `NestedRuntimeException` for wrapping exceptions.

### Configuration

- Use `@ConfigurationProperties` for configuration beans.
- Use `@Value` for configuration values.
- Use `application.yml` for configuration files.

### Testing

- Use JUnit for writing tests.
- Use `@Test` for test methods.
- Use `@BeforeEach` for setup.
- Use `@AfterEach` for teardown.
- Use `@BeforeAll` for static setup.
- Use `@AfterAll` for static teardown.
- Use assertions from `Assertions` for testing.

### Dependency Injection

- Use `@Autowired` for dependency injection.
- Use constructor injection for required dependencies.
- Use field injection for optional dependencies.
- Use `@Component` for beans.
- Use `@Service` for service beans.
- Use `@Controller` for controller beans.
- Use `@Repository` for repository beans.
- Use `@Configuration` for configuration beans.

### Security

- Use `@Secured` for securing methods.
- Use `@PreAuthorize` for authorizing methods.
- Use `@PostAuthorize` for post-authorization checks.
- Use `@PreFilter` for pre-filtering collections.
- Use `@PostFilter` for post-filtering collections.
