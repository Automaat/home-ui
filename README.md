# @mskalski/home-ui

Shared UI components for home ecosystem apps.

## Features

- Svelte 5 components
- Nord theme + Open Props
- TypeScript support

## Installation

```bash
npm install @mskalski/home-ui
```

## Usage

```typescript
import { Card, CardHeader, CardTitle, CardContent, Modal } from '@mskalski/home-ui';
```

Import styles:

```css
@import '@mskalski/home-ui/styles';
```

## Release Process

### Creating a Release

Release PRs are created via [GitHub Actions workflow dispatch](../../actions/workflows/create-release-pr.yml):

1. Go to Actions → "Create Release PR"
2. Click "Run workflow"
3. Choose version bump type:
   - **patch**: Bug fixes (0.0.x)
   - **minor**: New features (0.x.0)
   - **major**: Breaking changes (x.0.0)
4. Or specify manual version (e.g., `1.2.3`)

This creates a release branch and PR with version bump.

### Publishing

When release PR is merged to `main`:

1. Version change detected automatically
2. Quality gates run (format, lint, type check, security audit, build)
3. Git tag created (`v{version}`)
4. Package published to npm
5. GitHub release summary posted

### Troubleshooting

**Tag already exists**: Delete tag locally and remotely, then retry

```bash
git tag -d v1.2.3
git push origin :refs/tags/v1.2.3
```

**npm publish fails**: Check npm token validity, verify version isn't already published

**Quality gates fail**: Fix issues in release branch, push updates to PR
