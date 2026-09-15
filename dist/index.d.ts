import * as react from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import * as RCheckbox from '@radix-ui/react-checkbox';
import { Icon } from '@phosphor-icons/react';
import * as RDialog from '@radix-ui/react-dialog';
import * as RSwitch from '@radix-ui/react-switch';
import * as RTabs from '@radix-ui/react-tabs';
import * as RTooltip from '@radix-ui/react-tooltip';
import { ClassValue } from 'clsx';

declare const avatarVariants: (props?: ({
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface AvatarProps extends VariantProps<typeof avatarVariants> {
    src?: string;
    /** Full name — used for the alt text and initials fallback. */
    name: string;
    className?: string;
}
declare function Avatar({ src, name, size, className }: AvatarProps): react.JSX.Element;
interface AvatarGroupProps {
    children: React.ReactNode;
    /** Count shown in the trailing "+N" chip. */
    overflow?: number;
    className?: string;
}
declare function AvatarGroup({ children, overflow, className }: AvatarGroupProps): react.JSX.Element;

declare const badgeVariants: (props?: ({
    tone?: "neutral" | "brand" | "success" | "warning" | "danger" | "info" | null | undefined;
    size?: "sm" | "md" | null | undefined;
    outline?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
    /** Small leading dot in the current text color. */
    dot?: boolean;
}
declare function Badge({ className, tone, size, outline, dot, children, ...props }: BadgeProps): react.JSX.Element;

declare const buttonVariants: (props?: ({
    variant?: "danger" | "primary" | "secondary" | "subtle" | "ghost" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    block?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    /** Render as the child element (e.g. an <a> or <Link>) instead of a <button>. */
    asChild?: boolean;
    /** Show a spinner and disable interaction. */
    loading?: boolean;
}
declare const Button: react.ForwardRefExoticComponent<ButtonProps & react.RefAttributes<HTMLButtonElement>>;

declare const cardVariants: (props?: ({
    elevation?: "flat" | "raised" | "floating" | null | undefined;
    padding?: "sm" | "md" | "lg" | "none" | null | undefined;
    interactive?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
}
declare const Card: react.ForwardRefExoticComponent<CardProps & react.RefAttributes<HTMLDivElement>>;
declare function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react.JSX.Element;
declare function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>): react.JSX.Element;
declare function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>): react.JSX.Element;
declare function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react.JSX.Element;

interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof RCheckbox.Root> {
    label?: string;
    description?: string;
}
declare const Checkbox: react.ForwardRefExoticComponent<CheckboxProps & react.RefAttributes<HTMLButtonElement>>;

interface DividerProps {
    orientation?: 'horizontal' | 'vertical';
    /** Optional centered label (horizontal only). */
    label?: string;
    className?: string;
}
declare function Divider({ orientation, label, className, }: DividerProps): react.JSX.Element;

interface EmptyStateProps {
    icon?: Icon;
    title: string;
    description?: string;
    action?: React.ReactNode;
    className?: string;
}
declare function EmptyState({ icon: IconCmp, title, description, action, className, }: EmptyStateProps): react.JSX.Element;

declare const iconButtonVariants: (props?: ({
    variant?: "danger" | "primary" | "secondary" | "ghost" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof iconButtonVariants> {
    /** Accessible name — required since the button has no text. */
    label: string;
}
declare const IconButton: react.ForwardRefExoticComponent<IconButtonProps & react.RefAttributes<HTMLButtonElement>>;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    hint?: string;
    error?: string;
    /** Leading adornment — typically a Phosphor icon. */
    leading?: React.ReactNode;
    /** Trailing adornment. */
    trailing?: React.ReactNode;
}
declare const Input: react.ForwardRefExoticComponent<InputProps & react.RefAttributes<HTMLInputElement>>;

declare const Modal: react.FC<RDialog.DialogProps>;
declare const ModalTrigger: react.ForwardRefExoticComponent<RDialog.DialogTriggerProps & react.RefAttributes<HTMLButtonElement>>;
declare const ModalClose: react.ForwardRefExoticComponent<RDialog.DialogCloseProps & react.RefAttributes<HTMLButtonElement>>;
interface ModalContentProps extends React.ComponentPropsWithoutRef<typeof RDialog.Content> {
    title: string;
    description?: string;
    /** On mobile, slide up from the bottom as a sheet. */
    sheetOnMobile?: boolean;
}
declare function ModalContent({ className, title, description, sheetOnMobile, children, ...props }: ModalContentProps): react.JSX.Element;

interface ProgressBarProps {
    /** 0–100. Omit for an indeterminate bar. */
    value?: number;
    tone?: 'brand' | 'success' | 'warning' | 'danger';
    size?: 'sm' | 'md';
    className?: string;
    label?: string;
}
declare function ProgressBar({ value, tone, size, className, label, }: ProgressBarProps): react.JSX.Element;

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    hint?: string;
    error?: string;
}
/** Native select, styled to match Input. Fine for prototype-scale forms. */
declare const Select: react.ForwardRefExoticComponent<SelectProps & react.RefAttributes<HTMLSelectElement>>;

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Shape preset. */
    shape?: 'line' | 'block' | 'circle';
}
/** Loading placeholder. Set width/height via className. */
declare function Skeleton({ className, shape, ...props }: SkeletonProps): react.JSX.Element;

interface SpinnerProps {
    size?: number;
    className?: string;
    label?: string;
}
/** Indeterminate loading indicator. */
declare function Spinner({ size, className, label }: SpinnerProps): react.JSX.Element;

interface SwitchProps extends React.ComponentPropsWithoutRef<typeof RSwitch.Root> {
    label?: string;
    description?: string;
}
declare const Switch: react.ForwardRefExoticComponent<SwitchProps & react.RefAttributes<HTMLButtonElement>>;

declare const Tabs: react.ForwardRefExoticComponent<RTabs.TabsProps & react.RefAttributes<HTMLDivElement>>;
declare function TabsList({ className, ...props }: React.ComponentPropsWithoutRef<typeof RTabs.List>): react.JSX.Element;
declare function TabsTrigger({ className, ...props }: React.ComponentPropsWithoutRef<typeof RTabs.Trigger>): react.JSX.Element;
declare function TabsContent({ className, ...props }: React.ComponentPropsWithoutRef<typeof RTabs.Content>): react.JSX.Element;

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    hint?: string;
    error?: string;
}
declare const Textarea: react.ForwardRefExoticComponent<TextareaProps & react.RefAttributes<HTMLTextAreaElement>>;

declare const TooltipProvider: react.FC<RTooltip.TooltipProviderProps>;
interface TooltipProps {
    content: React.ReactNode;
    children: React.ReactNode;
    side?: RTooltip.TooltipContentProps['side'];
    className?: string;
}
declare function Tooltip({ content, children, side, className }: TooltipProps): react.JSX.Element;

interface UnderlineTabsProps<T extends string> {
    tabs: {
        value: T;
        label: string;
    }[];
    value: T;
    onValueChange: (value: T) => void;
    /** `md` (16px) for content tabs, `sm` (14px) for toolbar tabs. */
    size?: 'sm' | 'md';
    className?: string;
}
/** Underline-style tab bar. Used by the feed and the profile toolbar. */
declare function UnderlineTabs<T extends string>({ tabs, value, onValueChange, size, className, }: UnderlineTabsProps<T>): react.JSX.Element;

interface NavItem {
    to: string;
    label: string;
    icon: Icon;
    /** Optional count shown as a pill. */
    badge?: number;
    /** Match the route exactly (default true for "/"). */
    end?: boolean;
    /** When set, the item opens an overlay panel instead of navigating. */
    panel?: string;
}
/** Nav items are supplied in groups; the sidebar draws a divider between them. */
type NavGroup = NavItem[];

interface AppLayoutProps {
    /** Nav items in groups (see SideNav). */
    nav: NavGroup[];
    children: React.ReactNode;
    className?: string;
    /**
     * Renders an overlay panel when a nav item with a `panel` id is clicked
     * (e.g. a notifications tray). Receives the panel id and a close handler.
     * Omit if this app doesn't use panel-style nav items — the prototype's own
     * NotificationsPanel (app-specific, not part of this package) is a
     * `renderPanel={(panel, close) => panel === 'notifications' && <NotificationsPanel open onClose={close} />}`
     * away from working exactly as it did before this package existed.
     */
    renderPanel?: (panel: string, close: () => void) => React.ReactNode;
}
/**
 * Responsive app frame:
 *  - mobile: full-width content + fixed BottomNav (first 5 items)
 *  - desktop (lg+): persistent SideNav + content
 * Screens render their own <Page>/<TopBar> inside.
 */
declare function AppLayout({ nav, children, className, renderPanel }: AppLayoutProps): react.JSX.Element;

interface BottomNavProps {
    /** Nav groups; the bar flattens them and shows the first 5 items. */
    groups: NavGroup[];
    className?: string;
}
/** Fixed bottom tab bar. Mobile only — hidden at `lg`. */
declare function BottomNav({ groups, className }: BottomNavProps): react.JSX.Element;

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: 'sm' | 'md' | 'lg' | 'full';
}
/** Horizontal max-width wrapper with responsive gutters. */
declare function Container({ className, size, ...props }: ContainerProps): react.JSX.Element;

interface PageProps {
    /** Typically a <TopBar>. Rendered outside the width container, sticky-friendly. */
    header?: React.ReactNode;
    children: React.ReactNode;
    /** Max content width. */
    width?: ContainerProps['size'];
    /** Vertical padding around the content. */
    padded?: boolean;
    className?: string;
    contentClassName?: string;
}
/**
 * Standard screen scaffold: optional sticky header + a width-constrained,
 * scrollable content column. Bottom padding clears the mobile tab bar.
 */
declare function Page({ header, children, width, padded, className, contentClassName, }: PageProps): react.JSX.Element;

interface ScrollSectionProps {
    title: string;
    /** Already-sized `shrink-0` items (cards). */
    children: React.ReactNode;
    className?: string;
}
/**
 * A titled section whose body is a horizontally-scrolling row, with
 * prev / next controls at the top right (desktop only — mobile swipes).
 */
declare function ScrollSection({ title, children, className }: ScrollSectionProps): react.JSX.Element;

interface SectionHeaderProps {
    title: string;
    description?: string;
    /** Right-aligned actions (buttons, links). */
    action?: React.ReactNode;
    /** `sm` for in-page sections, `md` for page-level headers. */
    size?: 'sm' | 'md';
    className?: string;
}
declare function SectionHeader({ title, description, action, size, className, }: SectionHeaderProps): react.JSX.Element;

interface SideNavProps {
    /** Nav items in groups; a divider is drawn between groups. */
    groups: NavGroup[];
    /** Called when a `panel` item is clicked. */
    onOpenPanel?: (panel: string) => void;
    className?: string;
}
/**
 * Desktop left rail (hidden below `lg`). 248px wide, brand lockup, grouped
 * nav with a hairline between groups, 40px rows.
 */
declare function SideNav({ groups, onOpenPanel, className }: SideNavProps): react.JSX.Element;

interface TopBarProps {
    title?: string;
    /** Show a back chevron that calls history.back (or `onBack`). */
    back?: boolean;
    onBack?: () => void;
    /** Left slot — overrides the back button when provided. */
    leading?: React.ReactNode;
    /** Right slot — actions. */
    trailing?: React.ReactNode;
    /** Removes the bottom hairline (e.g. when the page scrolls under it). */
    bare?: boolean;
    className?: string;
}
/** Sticky page header. Pair with <Page>. */
declare function TopBar({ title, back, onBack, leading, trailing, bare, className, }: TopBarProps): react.JSX.Element;

interface LogoProps {
    /** `lockup` = mark + wordmark, `mark` = glyph only. */
    variant?: 'lockup' | 'mark';
    /** Height in px of the mark. Wordmark scales with it. */
    size?: number;
    className?: string;
}
/**
 * Involve mark — two interlocking orbits. Source of truth is the Figma asset
 * (src/assets/involve-mark.svg); this is the same path inlined so it can pick
 * up `currentColor` (brand indigo via the wrapper's `text-primary`).
 */
declare function Logo({ variant, size, className }: LogoProps): react.JSX.Element;

/** Merge class lists with Tailwind-aware conflict resolution. */
declare function cn(...inputs: ClassValue[]): string;

export { AppLayout, type AppLayoutProps, Avatar, AvatarGroup, type AvatarGroupProps, type AvatarProps, Badge, type BadgeProps, BottomNav, type BottomNavProps, Button, type ButtonProps, Card, CardDescription, CardFooter, CardHeader, type CardProps, CardTitle, Checkbox, type CheckboxProps, Container, type ContainerProps, Divider, type DividerProps, EmptyState, type EmptyStateProps, IconButton, type IconButtonProps, Input, type InputProps, Logo, type LogoProps, Modal, ModalClose, ModalContent, type ModalContentProps, ModalTrigger, type NavGroup, type NavItem, Page, type PageProps, ProgressBar, type ProgressBarProps, ScrollSection, type ScrollSectionProps, SectionHeader, type SectionHeaderProps, Select, type SelectProps, SideNav, type SideNavProps, Skeleton, type SkeletonProps, Spinner, type SpinnerProps, Switch, type SwitchProps, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, type TextareaProps, Tooltip, type TooltipProps, TooltipProvider, TopBar, type TopBarProps, UnderlineTabs, type UnderlineTabsProps, buttonVariants, cn };
