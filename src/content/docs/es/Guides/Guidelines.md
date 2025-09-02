---
title: Directrices
description: Directrices para escribir guías.
---

Convención de nomenclatura y formato para el código.

## Java

### Nomenclatura

- Usar camelCase para clases, métodos y variables.
- Usar UpperCamelCase para clases, enums y anotaciones.
- Usar minúsculas con guiones bajos para constantes.

### Formato

- Usar 4 espacios para indentación.
- Usar llaves para todas las estructuras de control.
- Usar `{}` para bloques de una sola declaración.
- Usar `;` al final de una declaración.
- Usar espacios en blanco para mejorar la legibilidad.

### Comentarios

- Usar comentarios Javadoc para clases, métodos y campos.
- Usar comentarios de bloque para secciones complejas de código.
- Usar comentarios en línea para expresiones complejas.

## Spring Boot

### Nomenclatura

- Usar `{}` para marcadores de posición en logs.
- Usar `{}` para marcadores de posición en excepciones.
- Usar `@Value` para constantes.

### Logging

- Usar `log.debug()`, `log.info()`, `log.warn()`, `log.error()`, y `log.trace()` para logging.
- Usar `log.isDebugEnabled()` antes de registrar mensajes de debug.

### Excepciones

- Usar `IllegalArgumentException` para argumentos inválidos.
- Usar `IllegalStateException` para estado inválido.
- Usar `RuntimeException` para errores inesperados.
- Usar `ResponseStatusException` para errores HTTP.
- Usar `NestedRuntimeException` para envolver excepciones.

### Configuración

- Usar `@ConfigurationProperties` para beans de configuración.
- Usar `@Value` para valores de configuración.
- Usar `application.yml` para archivos de configuración.

### Pruebas

- Usar JUnit para escribir pruebas.
- Usar `@Test` para métodos de prueba.
- Usar `@BeforeEach` para configuración.
- Usar `@AfterEach` para limpieza.
- Usar `@BeforeAll` para configuración estática.
- Usar `@AfterAll` para limpieza estática.
- Usar aserciones de `Assertions` para pruebas.

### Inyección de Dependencias

- Usar `@Autowired` para inyección de dependencias.
- Usar inyección por constructor para dependencias requeridas.
- Usar inyección por campo para dependencias opcionales.
- Usar `@Component` para beans.
- Usar `@Service` para beans de servicio.
- Usar `@Controller` para beans de controlador.
- Usar `@Repository` para beans de repositorio.
- Usar `@Configuration` para beans de configuración.

### Seguridad

- Usar `@Secured` para asegurar métodos.
- Usar `@PreAuthorize` para autorizar métodos.
- Usar `@PostAuthorize` para verificaciones post-autorización.
- Usar `@PreFilter` para pre-filtrar colecciones.
- Usar `@PostFilter` para post-filtrar colecciones.
