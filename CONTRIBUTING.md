# Contributing to Device Control App

## Code Style

### React Native
- Use TypeScript for type safety
- Follow functional component patterns with hooks
- Use consistent naming (PascalCase for components, camelCase for functions)
- Keep components focused and reusable

### Flutter
- Use Dart conventions
- Follow Flutter style guide
- Use const constructors when possible
- Keep widget methods organized

## Component Guidelines

### Creating New Components

1. **Plan the design** - Sketch the component layout
2. **Use design tokens** - Reference colors, spacing from theme
3. **Implement accessibility** - Add semantic labels, proper contrast
4. **Add prop/parameter docs** - Document all props/parameters
5. **Test on devices** - Verify on actual devices

### Glassmorphism Best Practices

- Use appropriate blur intensity (15-30 for most cases)
- Ensure text contrast is sufficient (min AA standard)
- Test on various iOS versions (iOS 13+)
- Optimize blur performance on low-end devices

## Commit Messages

```
type(scope): subject

[optional body]

[optional footer]
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Examples:
```
feat(dashboard): add device grouping by room
fix(glass-card): improve blur effect performance
docs(theme): update color palette usage
```

## Pull Request Process

1. Create a feature branch (`feat/feature-name`)
2. Implement changes following code style
3. Test on both React Native and Flutter
4. Submit PR with clear description
5. Address review feedback

## Testing

- Write tests for new components
- Test on actual devices when possible
- Verify accessibility compliance
- Test with different screen sizes

## Documentation

- Update README for major features
- Add code comments for complex logic
- Keep ARCHITECTURE.md in sync
- Document breaking changes

## Issues

- Use clear, descriptive titles
- Provide reproduction steps if bug
- Include device/OS information
- Add screenshots/videos when helpful

## Questions?

Feel free to open an issue for discussions!
