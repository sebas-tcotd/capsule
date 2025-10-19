# Contributing to Capsule UI

Guidelines for developing components in the Capsule Design System.

## Component Structure

### File Organization

```
components/
├── atoms/
│   └── Button/
│       ├── Button.tsx           # Main component
│       ├── Button.stories.tsx   # Storybook stories
│       ├── Button.test.tsx      # Unit tests
│       ├── Button.types.ts      # Type definitions (if complex)
│       └── index.ts             # Barrel export
├── molecules/
│   └── FormField/
│       ├── FormField.tsx
│       ├── FormField.stories.tsx
│       ├── FormField.test.tsx
│       └── index.ts
└── organisms/
    └── DataTable/
        ├── DataTable.tsx
        ├── DataTable.stories.tsx
        ├── DataTable.test.tsx
        └── index.ts
```

### Naming Conventions

#### ✅ DO

```typescript
// Component names: PascalCase
export const Button = () => { ... };
export const FormField = () => { ... };

// Props interfaces: ComponentNameProps
export interface ButtonProps { ... }
export interface FormFieldProps { ... }

// Variants/types: lowercase with hyphens (for cn() utility)
variant: 'primary' | 'secondary' | 'ghost'
size: 'sm' | 'md' | 'lg'

// Compound components
export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Content: CardContent,
});
```

#### ❌ DON'T

```typescript
// No prefixes for atomic levels
export const AtButton = () => { ... };  ❌
export const MlFormField = () => { ... };  ❌

// No "I" prefix for interfaces
export interface IButtonProps { ... }  ❌

// No camelCase for variants
variant: 'primaryButton'  ❌
```

## Component Template

### Basic Component

```typescript
import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

// Define variants using CVA
const buttonVariants = cva(
  // Base styles
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary-500 text-white hover:bg-primary-600',
        secondary: 'bg-neutral-200 text-neutral-900 hover:bg-neutral-300',
        ghost: 'hover:bg-neutral-100',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-10 px-4',
        lg: 'h-11 px-6 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

// Props interface
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Button content
   */
  children: React.ReactNode;
  /**
   * Optional icon to display before text
   */
  leftIcon?: React.ReactNode;
}

// Component with forwardRef for ref passing
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, leftIcon, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
```

### Story Template

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Save',
    leftIcon: <span>💾</span>,
  },
};
```

### Test Template

```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('handles click events', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(<Button onClick={handleClick}>Click me</Button>);
    await user.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies variant styles correctly', () => {
    render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-primary-500');
  });
});
```

## Atomic Design Rules

### Atoms

- **Pure UI primitives** (Button, Input, Badge, Icon)
- **No business logic**
- **No imports from molecules/organisms**
- **Self-contained** (only import from utils/tokens)

### Molecules

- **Combination of 2+ atoms** (FormField = Label + Input + ErrorText)
- **Can import atoms**, not organisms
- **Single responsibility**
- **Reusable patterns**

### Organisms

- **Complex UI sections** (Header, DataTable, SearchFilter)
- **Can import atoms + molecules**
- **May have local state**
- **Feature-specific combinations**

## Props Guidelines

### ✅ DO

```typescript
interface ButtonProps {
  // Extend native HTML props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>

  // Clear, descriptive names
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';

  // JSDoc comments
  /**
   * Whether the button should take full width
   * @default false
   */
  fullWidth?: boolean;

  // Optional children
  children?: React.ReactNode;
}
```

### ❌ DON'T

```typescript
interface ButtonProps {
  // Don't reinvent HTML props
  onClick?: () => void;  ❌ Use native ones

  // Avoid ambiguous names
  type?: string;  ❌ Too generic

  // No boolean prefixes for non-booleans
  isVariant?: string;  ❌
}
```

## Accessibility

### Requirements

- ✅ All interactive elements must be keyboard accessible
- ✅ Provide proper ARIA labels
- ✅ Support focus management
- ✅ Respect prefers-reduced-motion
- ✅ Maintain color contrast ratios (WCAG AA minimum)

### Example

```typescript
<button
  aria-label="Close dialog"
  aria-pressed={isActive}
  disabled={isDisabled}
  tabIndex={0}
>
  Close
</button>
```

## Performance

- ✅ Use `React.memo()` for expensive components
- ✅ Avoid inline function definitions in render
- ✅ Use `useMemo()` and `useCallback()` when appropriate
- ✅ Lazy load heavy components

## Style Guidelines

### Using Tailwind + CVA

```typescript
// ✅ Good: Variants in CVA, utilities for layout
const cardVariants = cva('rounded-lg p-6', {
  variants: {
    variant: {
      default: 'bg-white border border-neutral-200',
      elevated: 'bg-white shadow-lg',
    },
  },
});

// ❌ Avoid: Everything in className
<div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-lg hover:shadow-xl" />
```

### Design Tokens

Always use design tokens from `@capsule/ui/tokens`:

```typescript
// ✅ DO
import { colors } from "@capsule/ui/tokens";
className = "bg-primary-500 text-accent-500";

// ❌ DON'T
className = "bg-[#2C2C2C]"; // Hard-coded colors
```

## Testing Requirements

- ✅ Every component must have tests
- ✅ Test user interactions (click, type, etc.)
- ✅ Test accessibility (roles, labels)
- ✅ Test all variants
- ✅ Aim for >80% coverage

## Documentation

### JSDoc Requirements

````typescript
/**
 * Primary button component for user actions
 *
 * @example
 * ```tsx
 * <Button variant="primary" onClick={handleClick}>
 *   Save
 * </Button>
 * ```
 */
export const Button = () => { ... };
````

### Storybook Requirements

- ✅ At least 3 stories: Default, All Variants, Interactive
- ✅ Use `autodocs` tag
- ✅ Provide controls for all props
- ✅ Include usage examples in docs

## Checklist for New Components

- [ ] Component follows file structure
- [ ] Props interface properly typed
- [ ] Component uses `forwardRef` (if needed)
- [ ] Variants defined with CVA
- [ ] Design tokens used (no hard-coded values)
- [ ] Storybook stories created
- [ ] Unit tests written (>80% coverage)
- [ ] Accessibility tested
- [ ] JSDoc comments added
- [ ] No linting errors
- [ ] Type checks pass

## Questions?

If unsure about any guideline, check existing components or ask in the team chat.
