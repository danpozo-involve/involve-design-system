import * as RAvatar from '@radix-ui/react-avatar';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { Slot } from '@radix-ui/react-slot';
import { forwardRef, useId, useState, useRef, useEffect } from 'react';
import * as RCheckbox from '@radix-ui/react-checkbox';
import { MinusIcon, CheckIcon, CaretUpDownIcon, XIcon, CaretLeftIcon, CaretRightIcon, ArrowLeftIcon } from '@phosphor-icons/react';
import * as RDialog from '@radix-ui/react-dialog';
import * as RProgress from '@radix-ui/react-progress';
import * as RSwitch from '@radix-ui/react-switch';
import * as RTabs from '@radix-ui/react-tabs';
import * as RTooltip from '@radix-ui/react-tooltip';
import { NavLink, useNavigate } from 'react-router-dom';

// src/components/ui/Avatar.tsx
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var avatarVariants = cva(
  "relative inline-flex shrink-0 select-none items-center justify-center overflow-hidden rounded-full bg-primary-subtle",
  {
    variants: {
      size: {
        xs: "size-6 text-[0.625rem]",
        sm: "size-8 text-xs",
        md: "size-10 text-sm",
        lg: "size-12 text-base",
        xl: "size-16 text-lg"
      }
    },
    defaultVariants: { size: "md" }
  }
);
function initials(name) {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase();
}
function Avatar({ src, name, size, className }) {
  return /* @__PURE__ */ jsxs(RAvatar.Root, { className: cn(avatarVariants({ size }), className), children: [
    src && /* @__PURE__ */ jsx(RAvatar.Image, { src, alt: name, className: "size-full object-cover" }),
    /* @__PURE__ */ jsx(
      RAvatar.Fallback,
      {
        delayMs: src ? 300 : 0,
        className: "text-on-primary-subtle font-medium",
        children: initials(name)
      }
    )
  ] });
}
function AvatarGroup({ children, overflow, className }) {
  return /* @__PURE__ */ jsxs("div", { className: cn("flex items-center -space-x-2", className), children: [
    /* @__PURE__ */ jsx("div", { className: "[&_.rounded-full]:ring-surface flex items-center -space-x-2 [&_.rounded-full]:ring-2", children }),
    overflow && overflow > 0 && /* @__PURE__ */ jsxs("span", { className: "bg-surface-sunken text-ink-muted ring-surface flex size-10 items-center justify-center rounded-full text-xs font-medium ring-2", children: [
      "+",
      overflow
    ] })
  ] });
}
var badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full font-medium whitespace-nowrap",
  {
    variants: {
      tone: {
        neutral: "bg-surface-sunken text-ink-muted",
        brand: "bg-primary-subtle text-on-primary-subtle",
        success: "bg-success-subtle text-success-text",
        warning: "bg-warning-subtle text-warning-text",
        danger: "bg-danger-subtle text-danger-text",
        info: "bg-info-subtle text-info-text"
      },
      size: {
        sm: "px-2 py-0.5 text-[0.6875rem] leading-4",
        md: "px-2.5 py-1 text-xs leading-4"
      },
      outline: {
        true: "bg-transparent ring-1 ring-inset ring-current/30",
        false: ""
      }
    },
    defaultVariants: { tone: "neutral", size: "md", outline: false }
  }
);
function Badge({
  className,
  tone,
  size,
  outline,
  dot,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs("span", { className: cn(badgeVariants({ tone, size, outline }), className), ...props, children: [
    dot && /* @__PURE__ */ jsx("span", { className: "size-1.5 rounded-full bg-current", "aria-hidden": true }),
    children
  ] });
}
function Spinner({ size = 20, className, label = "Loading" }) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      role: "status",
      "aria-label": label,
      className: cn("inline-block animate-spin", className),
      style: { width: size, height: size },
      children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", fill: "none", width: size, height: size, "aria-hidden": true, children: [
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "12",
            cy: "12",
            r: "9",
            stroke: "currentColor",
            strokeOpacity: "0.2",
            strokeWidth: "3"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M21 12a9 9 0 0 0-9-9",
            stroke: "currentColor",
            strokeWidth: "3",
            strokeLinecap: "round"
          }
        )
      ] })
    }
  );
}
var buttonVariants = cva(
  // "Playful/Tactile" direction (2026-09-16): full pill shape, bold weight, and a
  // real press -- scales down on :active, up slightly on :hover. See
  // https://claude.ai/artifact/BPqveLj1wimShiND372ikj for the side-by-side this
  // was picked from. pointer-events-none on disabled already suppresses
  // hover/active, so no separate disabled override is needed for the scale.
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-bold select-none transition-[background-color,border-color,color,box-shadow,transform,filter] duration-150 hover:scale-[1.03] active:scale-[0.95] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-on-primary shadow-md hover:bg-primary-hover hover:shadow-lg active:bg-primary-active",
        secondary: "border border-border bg-surface text-ink shadow-md hover:bg-surface-hover hover:shadow-lg active:bg-surface-sunken",
        subtle: "bg-primary-subtle text-on-primary-subtle hover:bg-primary-subtle-hover active:bg-primary-subtle-hover",
        ghost: "bg-transparent text-ink-muted hover:bg-surface-hover hover:text-ink",
        danger: "bg-danger text-on-danger shadow-md hover:brightness-95 hover:shadow-lg active:brightness-90"
      },
      size: {
        xs: "h-7 px-3 text-xs",
        sm: "h-9 px-4 text-sm",
        md: "h-10 px-5 text-sm",
        lg: "h-12 px-6 text-base"
      },
      block: { true: "w-full", false: "" }
    },
    defaultVariants: { variant: "primary", size: "md", block: false }
  }
);
var Button = forwardRef(function Button2({ className, variant, size, block, asChild, loading, disabled, children, ...props }, ref) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      className: cn(buttonVariants({ variant, size, block }), className),
      disabled: Comp === "button" ? disabled || loading : void 0,
      "aria-disabled": loading || disabled || void 0,
      "aria-busy": loading || void 0,
      ...props,
      children: loading ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Spinner, { size: size === "lg" ? 18 : 16 }),
        /* @__PURE__ */ jsx("span", { children })
      ] }) : children
    }
  );
});
var cardVariants = cva("rounded-xl bg-surface", {
  variants: {
    elevation: {
      flat: "border border-border-subtle",
      raised: "border border-border-subtle shadow-sm",
      floating: "shadow-lg"
    },
    padding: {
      none: "p-0",
      sm: "p-3",
      md: "p-4",
      lg: "p-6"
    },
    interactive: {
      true: "transition-[box-shadow,border-color,transform] duration-150 hover:border-border hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
      false: ""
    }
  },
  defaultVariants: { elevation: "raised", padding: "md", interactive: false }
});
var Card = forwardRef(function Card2({ className, elevation, padding, interactive, ...props }, ref) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(cardVariants({ elevation, padding, interactive }), className),
      ...props
    }
  );
});
function CardHeader({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx("div", { className: cn("mb-3 flex flex-col gap-1", className), ...props });
}
function CardTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "h3",
    {
      className: cn("t-paragraph-lg text-ink-strong font-semibold", className),
      ...props
    }
  );
}
function CardDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx("p", { className: cn("t-paragraph-sm text-ink-muted", className), ...props });
}
function CardFooter({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx("div", { className: cn("mt-4 flex items-center gap-2", className), ...props });
}
var Checkbox = forwardRef(function Checkbox2({ className, label, description, id, ...props }, ref) {
  const autoId = useId();
  const boxId = id ?? autoId;
  const control = /* @__PURE__ */ jsx(
    RCheckbox.Root,
    {
      ref,
      id: boxId,
      className: cn(
        "border-border-strong bg-surface flex size-5 shrink-0 items-center justify-center rounded-sm border transition-colors",
        "focus-visible:outline-primary focus-visible:outline-2 focus-visible:outline-offset-2",
        "data-[state=checked]:border-primary data-[state=checked]:bg-primary",
        "data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(RCheckbox.Indicator, { className: "text-on-primary", children: props.checked === "indeterminate" ? /* @__PURE__ */ jsx(MinusIcon, { size: 14, weight: "bold" }) : /* @__PURE__ */ jsx(CheckIcon, { size: 14, weight: "bold" }) })
    }
  );
  if (!label && !description) return control;
  return /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2.5", children: [
    control,
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-0.5", children: [
      label && /* @__PURE__ */ jsx("label", { htmlFor: boxId, className: "t-label text-ink cursor-pointer", children: label }),
      description && /* @__PURE__ */ jsx("p", { className: "t-caption text-ink-subtle", children: description })
    ] })
  ] });
});
function Divider({
  orientation = "horizontal",
  label,
  className
}) {
  if (orientation === "vertical") {
    return /* @__PURE__ */ jsx(
      "span",
      {
        role: "separator",
        "aria-orientation": "vertical",
        className: cn("bg-border-subtle inline-block w-px self-stretch", className)
      }
    );
  }
  if (label) {
    return /* @__PURE__ */ jsxs("div", { className: cn("flex items-center gap-3", className), role: "separator", children: [
      /* @__PURE__ */ jsx("span", { className: "bg-border-subtle h-px flex-1" }),
      /* @__PURE__ */ jsx("span", { className: "t-caption text-ink-subtle", children: label }),
      /* @__PURE__ */ jsx("span", { className: "bg-border-subtle h-px flex-1" })
    ] });
  }
  return /* @__PURE__ */ jsx("hr", { className: cn("bg-border-subtle h-px border-0", className), role: "separator" });
}
function EmptyState({
  icon: IconCmp,
  title,
  description,
  action,
  size = "md",
  className
}) {
  const sm = size === "sm";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "border-border flex flex-col items-center justify-center rounded-lg border border-dashed text-center",
        sm ? "gap-2 px-4 py-8" : "gap-3 px-6 py-12",
        className
      ),
      children: [
        IconCmp && /* @__PURE__ */ jsx(
          "span",
          {
            className: cn(
              "bg-surface-sunken text-ink-subtle flex items-center justify-center rounded-full",
              sm ? "size-10" : "size-12"
            ),
            children: /* @__PURE__ */ jsx(IconCmp, { size: sm ? 20 : 24 })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsx("p", { className: cn("text-ink", sm ? "t-label" : "t-h6"), children: title }),
          description && /* @__PURE__ */ jsx(
            "p",
            {
              className: cn(
                "text-ink-muted mx-auto max-w-xs",
                sm ? "t-caption" : "t-paragraph-sm"
              ),
              children: description
            }
          )
        ] }),
        action && /* @__PURE__ */ jsx("div", { className: "mt-1", children: action })
      ]
    }
  );
}
var iconButtonVariants = cva(
  // Matches Button's "Playful/Tactile" direction (2026-09-16) -- full radius
  // (a circle, since this is always square) and the same press/hover scale,
  // for one consistent tactile feel across the whole button family.
  "inline-flex items-center justify-center rounded-full transition-[background-color,color,box-shadow,transform] duration-150 hover:scale-[1.05] active:scale-[0.92] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-on-primary shadow-md hover:bg-primary-hover hover:shadow-lg",
        secondary: "border border-border bg-surface text-ink shadow-md hover:bg-surface-hover hover:shadow-lg",
        ghost: "bg-transparent text-ink-muted hover:bg-surface-hover hover:text-ink",
        danger: "bg-transparent text-ink-muted hover:bg-danger-subtle hover:text-danger-text"
      },
      size: {
        sm: "size-8",
        md: "size-10",
        lg: "size-12"
      }
    },
    defaultVariants: { variant: "ghost", size: "md" }
  }
);
var IconButton = forwardRef(
  function IconButton2({ className, variant, size, label, children, ...props }, ref) {
    return /* @__PURE__ */ jsx(
      "button",
      {
        ref,
        type: "button",
        "aria-label": label,
        title: label,
        className: cn(iconButtonVariants({ variant, size }), className),
        ...props,
        children
      }
    );
  }
);
var Input = forwardRef(function Input2({ className, label, hint, error, leading, trailing, id, disabled, ...props }, ref) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const describedBy = error ? `${inputId}-error` : hint ? `${inputId}-hint` : void 0;
  return /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col gap-1.5", children: [
    label && /* @__PURE__ */ jsx("label", { htmlFor: inputId, className: "t-label text-ink", children: label }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(
          "bg-surface flex items-center gap-2 rounded-md border px-3 shadow-xs transition-colors",
          "border-border focus-within:border-primary focus-within:ring-ring focus-within:ring-4",
          error && "border-danger focus-within:border-danger focus-within:ring-danger/20",
          disabled && "bg-surface-sunken cursor-not-allowed opacity-60"
        ),
        children: [
          leading && /* @__PURE__ */ jsx("span", { className: "text-ink-subtle shrink-0", children: leading }),
          /* @__PURE__ */ jsx(
            "input",
            {
              ref,
              id: inputId,
              disabled,
              "aria-invalid": error ? true : void 0,
              "aria-describedby": describedBy,
              className: cn(
                "text-ink placeholder:text-ink-disabled h-10 w-full bg-transparent text-sm outline-none",
                className
              ),
              ...props
            }
          ),
          trailing && /* @__PURE__ */ jsx("span", { className: "text-ink-subtle shrink-0", children: trailing })
        ]
      }
    ),
    error ? /* @__PURE__ */ jsx("p", { id: `${inputId}-error`, className: "t-caption text-danger-text", children: error }) : hint ? /* @__PURE__ */ jsx("p", { id: `${inputId}-hint`, className: "t-caption text-ink-subtle", children: hint }) : null
  ] });
});
var Modal = RDialog.Root;
var ModalTrigger = RDialog.Trigger;
var ModalClose = RDialog.Close;
function ModalContent({
  className,
  title,
  description,
  sheetOnMobile = true,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(RDialog.Portal, { children: [
    /* @__PURE__ */ jsx(RDialog.Overlay, { className: "bg-slate-1100/40 fixed inset-0 z-40 backdrop-blur-[2px]" }),
    /* @__PURE__ */ jsxs(
      RDialog.Content,
      {
        className: cn(
          "bg-surface fixed z-50 flex flex-col gap-4 shadow-xl focus:outline-none",
          sheetOnMobile ? "inset-x-0 bottom-0 rounded-t-xl p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]" : "top-1/2 left-1/2 w-[min(28rem,calc(100vw-2rem))] -translate-x-1/2 -translate-y-1/2 rounded-xl p-5",
          "sm:inset-x-auto sm:top-1/2 sm:bottom-auto sm:left-1/2 sm:w-[min(32rem,calc(100vw-2rem))] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-xl",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
              /* @__PURE__ */ jsx(RDialog.Title, { className: "t-h6 text-ink", children: title }),
              description && /* @__PURE__ */ jsx(RDialog.Description, { className: "t-paragraph-sm text-ink-muted", children: description })
            ] }),
            /* @__PURE__ */ jsx(RDialog.Close, { asChild: true, children: /* @__PURE__ */ jsx(IconButton, { label: "Close", size: "sm", children: /* @__PURE__ */ jsx(XIcon, { size: 18 }) }) })
          ] }),
          children
        ]
      }
    )
  ] });
}
var toneClass = {
  brand: "bg-primary",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger"
};
function ProgressBar({
  value,
  tone = "brand",
  size = "md",
  className,
  label
}) {
  const clamped = value === void 0 ? void 0 : Math.max(0, Math.min(100, value));
  return /* @__PURE__ */ jsx(
    RProgress.Root,
    {
      value: clamped,
      "aria-label": label,
      className: cn(
        "bg-surface-sunken relative w-full overflow-hidden rounded-full",
        size === "sm" ? "h-1.5" : "h-2.5",
        className
      ),
      children: /* @__PURE__ */ jsx(
        RProgress.Indicator,
        {
          className: cn(
            "h-full rounded-full transition-[width] duration-500",
            toneClass[tone]
          ),
          style: { width: clamped === void 0 ? "40%" : `${clamped}%` }
        }
      )
    }
  );
}
var Select = forwardRef(function Select2({ className, label, hint, error, id, children, ...props }, ref) {
  const autoId = useId();
  const selectId = id ?? autoId;
  return /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col gap-1.5", children: [
    label && /* @__PURE__ */ jsx("label", { htmlFor: selectId, className: "t-label text-ink", children: label }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(
          "border-border bg-surface relative flex items-center rounded-md border shadow-xs transition-colors",
          "focus-within:border-primary focus-within:ring-ring focus-within:ring-4",
          error && "border-danger"
        ),
        children: [
          /* @__PURE__ */ jsx(
            "select",
            {
              ref,
              id: selectId,
              "aria-invalid": error ? true : void 0,
              className: cn(
                "text-ink h-10 w-full appearance-none bg-transparent pr-9 pl-3 text-sm outline-none",
                className
              ),
              ...props,
              children
            }
          ),
          /* @__PURE__ */ jsx(
            CaretUpDownIcon,
            {
              size: 16,
              className: "text-ink-subtle pointer-events-none absolute right-3"
            }
          )
        ]
      }
    ),
    error ? /* @__PURE__ */ jsx("p", { className: "t-caption text-danger-text", children: error }) : hint ? /* @__PURE__ */ jsx("p", { className: "t-caption text-ink-subtle", children: hint }) : null
  ] });
});
function Skeleton({ className, shape = "line", ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "aria-hidden": true,
      className: cn(
        "bg-surface-sunken animate-pulse",
        shape === "line" && "h-4 w-full rounded-sm",
        shape === "block" && "h-24 w-full rounded-md",
        shape === "circle" && "size-10 rounded-full",
        className
      ),
      ...props
    }
  );
}
var Switch = forwardRef(
  function Switch2({ className, label, description, id, ...props }, ref) {
    const autoId = useId();
    const switchId = id ?? autoId;
    const control = /* @__PURE__ */ jsx(
      RSwitch.Root,
      {
        ref,
        id: switchId,
        className: cn(
          "peer bg-border-strong inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors",
          "focus-visible:outline-primary focus-visible:outline-2 focus-visible:outline-offset-2",
          "data-[state=checked]:bg-primary disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ...props,
        children: /* @__PURE__ */ jsx(RSwitch.Thumb, { className: "pointer-events-none block size-5 rounded-full bg-white shadow-sm transition-transform data-[state=checked]:translate-x-4" })
      }
    );
    if (!label && !description) return control;
    return /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
      control,
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-0.5", children: [
        label && /* @__PURE__ */ jsx("label", { htmlFor: switchId, className: "t-label text-ink cursor-pointer", children: label }),
        description && /* @__PURE__ */ jsx("p", { className: "t-caption text-ink-subtle", children: description })
      ] })
    ] });
  }
);
var Tabs = RTabs.Root;
function TabsList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    RTabs.List,
    {
      className: cn(
        "bg-surface-sunken inline-flex items-center gap-1 rounded-lg p-1",
        className
      ),
      ...props
    }
  );
}
function TabsTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    RTabs.Trigger,
    {
      className: cn(
        "t-label text-ink-muted rounded-md px-3 py-1.5 transition-colors",
        "hover:text-ink focus-visible:outline-primary focus-visible:outline-2 focus-visible:outline-offset-2",
        "data-[state=active]:bg-surface data-[state=active]:text-ink data-[state=active]:shadow-xs",
        className
      ),
      ...props
    }
  );
}
function TabsContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    RTabs.Content,
    {
      className: cn(
        "focus-visible:outline-primary mt-4 focus-visible:outline-2 focus-visible:outline-offset-2",
        className
      ),
      ...props
    }
  );
}
var Textarea = forwardRef(
  function Textarea2({ className, label, hint, error, id, ...props }, ref) {
    const autoId = useId();
    const fieldId = id ?? autoId;
    return /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col gap-1.5", children: [
      label && /* @__PURE__ */ jsx("label", { htmlFor: fieldId, className: "t-label text-ink", children: label }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          ref,
          id: fieldId,
          "aria-invalid": error ? true : void 0,
          className: cn(
            "bg-surface text-ink min-h-24 w-full rounded-md border px-3 py-2 text-sm shadow-xs transition-colors outline-none",
            "border-border placeholder:text-ink-disabled focus:border-primary focus:ring-ring focus:ring-4",
            error && "border-danger focus:border-danger focus:ring-danger/20",
            className
          ),
          ...props
        }
      ),
      error ? /* @__PURE__ */ jsx("p", { className: "t-caption text-danger-text", children: error }) : hint ? /* @__PURE__ */ jsx("p", { className: "t-caption text-ink-subtle", children: hint }) : null
    ] });
  }
);
var TooltipProvider = RTooltip.Provider;
function Tooltip({ content, children, side = "top", className }) {
  return /* @__PURE__ */ jsxs(RTooltip.Root, { children: [
    /* @__PURE__ */ jsx(RTooltip.Trigger, { asChild: true, children }),
    /* @__PURE__ */ jsx(RTooltip.Portal, { children: /* @__PURE__ */ jsxs(
      RTooltip.Content,
      {
        side,
        sideOffset: 6,
        className: cn(
          "t-caption bg-surface-inverse text-ink-inverse z-50 max-w-56 rounded-md px-2.5 py-1.5 shadow-lg",
          className
        ),
        children: [
          content,
          /* @__PURE__ */ jsx(RTooltip.Arrow, { className: "fill-surface-inverse" })
        ]
      }
    ) })
  ] });
}
function UnderlineTabs({
  tabs,
  value,
  onValueChange,
  size = "md",
  className
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "tablist",
      className: cn(
        "border-border-subtle flex items-stretch gap-3 border-b px-5",
        className
      ),
      children: tabs.map((tab) => {
        const active = tab.value === value;
        return /* @__PURE__ */ jsxs(
          "button",
          {
            role: "tab",
            "aria-selected": active,
            onClick: () => onValueChange(tab.value),
            className: cn(
              "relative flex flex-col items-center px-2 pt-3 pb-0 font-semibold transition-colors",
              size === "sm" ? "text-sm" : "text-base",
              "focus-visible:outline-primary focus-visible:outline-2 focus-visible:outline-offset-2",
              active ? "text-ink-strong" : "text-ink-subtle hover:text-ink"
            ),
            children: [
              /* @__PURE__ */ jsx("span", { className: "pb-2.5", children: tab.label }),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: cn(
                    "h-[3px] w-full rounded-t-[2px]",
                    active ? "bg-primary" : "bg-transparent"
                  )
                }
              )
            ]
          },
          tab.value
        );
      })
    }
  );
}
function BottomNav({ groups, className }) {
  const items = groups.flat().slice(0, 5);
  return /* @__PURE__ */ jsx(
    "nav",
    {
      className: cn(
        "border-border-subtle bg-surface/90 fixed inset-x-0 bottom-0 z-30 flex border-t backdrop-blur-md lg:hidden",
        "pb-[env(safe-area-inset-bottom)]",
        className
      ),
      children: items.map(({ to, label, icon: IconCmp, badge, end }) => /* @__PURE__ */ jsx(
        NavLink,
        {
          to,
          end,
          className: "group text-ink-subtle aria-[current=page]:text-primary relative flex flex-1 flex-col items-center justify-center gap-1 py-2",
          children: ({ isActive }) => /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("span", { className: "relative", children: [
              /* @__PURE__ */ jsx(IconCmp, { size: 24, weight: isActive ? "fill" : "regular" }),
              badge ? /* @__PURE__ */ jsx("span", { className: "bg-danger text-on-danger absolute -top-1 -right-2 flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[0.625rem] font-semibold", children: badge > 99 ? "99+" : badge }) : null
            ] }),
            /* @__PURE__ */ jsx("span", { className: "t-caption font-medium", children: label })
          ] })
        },
        to
      ))
    }
  );
}
function Logo({ variant = "lockup", size = 28, className }) {
  const mark = /* @__PURE__ */ jsx(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 28 28",
      fill: "none",
      role: "img",
      "aria-label": "Involve",
      className: "text-primary",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M21.8372 8.51072C20.3765 7.84258 18.7348 7.46626 16.9997 7.46626C10.9247 7.46713 6.0004 12.064 6.0004 17.7331C6.0004 18.3325 6.0592 18.9178 6.16373 19.4884C2.51347 17.8176 0 14.3166 0 10.266C0 4.59596 4.9252 0 11.0003 0C16.4341 0 20.944 3.67694 21.8372 8.51072ZM28 17.7331C28 23.4032 23.0748 28 16.9997 28C11.5659 27.9991 7.05693 24.3222 6.16373 19.4884C7.62347 20.1565 9.2652 20.5329 11.0003 20.5329C17.0753 20.5329 21.9996 15.936 21.9996 10.266C21.9996 9.66755 21.9417 9.08129 21.8372 8.51072C25.4865 10.1806 28 13.6834 28 17.7331Z",
          fill: "currentColor"
        }
      )
    }
  );
  if (variant === "mark") return /* @__PURE__ */ jsx("span", { className, children: mark });
  return /* @__PURE__ */ jsxs("span", { className: cn("inline-flex items-center gap-2", className), children: [
    mark,
    /* @__PURE__ */ jsx(
      "span",
      {
        className: "text-ink-strong font-semibold tracking-[-0.01em]",
        style: { fontSize: size * 0.85, lineHeight: 1 },
        children: "Involve"
      }
    )
  ] });
}
var rowBase = "flex h-10 w-full items-center gap-2 rounded-lg px-3 text-left transition-colors";
function RowInner({
  icon: IconCmp,
  label,
  badge,
  active
}) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(IconCmp, { size: 24, weight: active ? "fill" : "regular" }),
    /* @__PURE__ */ jsx("span", { className: "t-paragraph-md flex-1 font-semibold", children: label }),
    badge ? /* @__PURE__ */ jsx("span", { className: "bg-primary text-on-primary rounded-full px-1.5 text-xs font-semibold", children: badge > 99 ? "99+" : badge }) : null
  ] });
}
function SideNav({ groups, onOpenPanel, className }) {
  return /* @__PURE__ */ jsxs(
    "aside",
    {
      className: cn(
        "bg-page hidden w-[248px] shrink-0 flex-col px-3 py-6 lg:flex",
        "lg:sticky lg:top-0 lg:h-dvh lg:self-start lg:overflow-y-auto",
        className
      ),
      children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center pt-2 pb-6 pl-3", children: /* @__PURE__ */ jsx(Logo, { size: 28 }) }),
        groups.map((items, groupIndex) => /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "flex flex-col py-3",
              groupIndex === 0 ? "border-border-subtle gap-4 border-b" : "gap-3 pt-6"
            ),
            children: items.map(
              (item) => item.panel ? /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: () => onOpenPanel?.(item.panel),
                  className: cn(
                    rowBase,
                    "text-ink-subtle hover:bg-surface-hover hover:text-ink"
                  ),
                  children: /* @__PURE__ */ jsx(
                    RowInner,
                    {
                      icon: item.icon,
                      label: item.label,
                      badge: item.badge,
                      active: false
                    }
                  )
                },
                item.to
              ) : /* @__PURE__ */ jsx(
                NavLink,
                {
                  to: item.to,
                  end: item.end,
                  className: ({ isActive }) => cn(
                    rowBase,
                    isActive ? "bg-surface-sunken text-primary" : "text-ink-subtle hover:bg-surface-hover hover:text-ink"
                  ),
                  children: ({ isActive }) => /* @__PURE__ */ jsx(
                    RowInner,
                    {
                      icon: item.icon,
                      label: item.label,
                      badge: item.badge,
                      active: isActive
                    }
                  )
                },
                item.to
              )
            )
          },
          groupIndex
        ))
      ]
    }
  );
}
function AppLayout({ nav, children, className, renderPanel }) {
  const [openPanel, setOpenPanel] = useState(null);
  return /* @__PURE__ */ jsxs("div", { className: cn("bg-page flex min-h-dvh", className), children: [
    /* @__PURE__ */ jsx(SideNav, { groups: nav, onOpenPanel: (panel) => setOpenPanel(panel) }),
    /* @__PURE__ */ jsx("main", { className: "relative flex min-w-0 flex-1 flex-col", children }),
    /* @__PURE__ */ jsx(BottomNav, { groups: nav }),
    openPanel && renderPanel?.(openPanel, () => setOpenPanel(null))
  ] });
}
var sizeClass = {
  sm: "max-w-lg",
  md: "max-w-2xl",
  lg: "max-w-5xl",
  full: "max-w-none"
};
function Container({ className, size = "md", ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn("mx-auto w-full px-4 sm:px-6", sizeClass[size], className),
      ...props
    }
  );
}
function Page({
  header,
  children,
  width = "md",
  padded = true,
  className,
  contentClassName
}) {
  return /* @__PURE__ */ jsxs("div", { className: cn("flex min-h-full flex-col", className), children: [
    header,
    /* @__PURE__ */ jsx(
      Container,
      {
        size: width,
        className: cn(
          "flex-1",
          padded && "py-5 sm:py-6",
          "pb-[calc(4rem_+_env(safe-area-inset-bottom))] lg:pb-8",
          contentClassName
        ),
        children
      }
    )
  ] });
}
function ScrollSection({ title, children, className }) {
  const ref = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const sync = () => {
    const el = ref.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 8);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 8);
  };
  useEffect(() => {
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);
  const nudge = (dir) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxs("section", { className, children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-ink-strong text-xl font-semibold", children: title }),
      /* @__PURE__ */ jsxs("div", { className: "hidden shrink-0 items-center gap-1 sm:flex", children: [
        /* @__PURE__ */ jsx(
          IconButton,
          {
            label: "Scroll left",
            size: "sm",
            onClick: () => nudge(-1),
            disabled: atStart,
            children: /* @__PURE__ */ jsx(CaretLeftIcon, { size: 16, weight: "bold" })
          }
        ),
        /* @__PURE__ */ jsx(
          IconButton,
          {
            label: "Scroll right",
            size: "sm",
            onClick: () => nudge(1),
            disabled: atEnd,
            children: /* @__PURE__ */ jsx(CaretRightIcon, { size: 16, weight: "bold" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        onScroll: sync,
        className: cn(
          "-mx-4 flex [scrollbar-width:none] gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
        ),
        children
      }
    )
  ] });
}
function SectionHeader({
  title,
  description,
  action,
  size = "sm",
  className
}) {
  return /* @__PURE__ */ jsxs("div", { className: cn("flex items-start justify-between gap-4", className), children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ jsx("h2", { className: cn(size === "md" ? "t-h5" : "t-h6", "text-ink-strong"), children: title }),
      description && /* @__PURE__ */ jsx("p", { className: "t-paragraph-sm text-ink-muted", children: description })
    ] }),
    action && /* @__PURE__ */ jsx("div", { className: "flex shrink-0 items-center gap-2", children: action })
  ] });
}
function TopBar({
  title,
  back,
  onBack,
  leading,
  trailing,
  bare,
  className
}) {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: cn(
        "bg-page/85 sticky top-0 z-20 flex h-14 items-center gap-2 px-3 backdrop-blur-md",
        !bare && "border-border-subtle border-b",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 flex-1 items-center gap-2", children: [
          leading ?? (back && /* @__PURE__ */ jsx(
            IconButton,
            {
              label: "Back",
              size: "sm",
              onClick: () => onBack ? onBack() : navigate(-1),
              children: /* @__PURE__ */ jsx(ArrowLeftIcon, { size: 18 })
            }
          )),
          title && /* @__PURE__ */ jsx("h1", { className: "t-paragraph-lg text-ink truncate font-semibold", children: title })
        ] }),
        trailing && /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1", children: trailing })
      ]
    }
  );
}

export { AppLayout, Avatar, AvatarGroup, Badge, BottomNav, Button, Card, CardDescription, CardFooter, CardHeader, CardTitle, Checkbox, Container, Divider, EmptyState, IconButton, Input, Logo, Modal, ModalClose, ModalContent, ModalTrigger, Page, ProgressBar, ScrollSection, SectionHeader, Select, SideNav, Skeleton, Spinner, Switch, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, Tooltip, TooltipProvider, TopBar, UnderlineTabs, buttonVariants, cn };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map