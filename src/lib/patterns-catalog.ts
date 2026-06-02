import type { ComponentType } from 'react'

import {
  AvatarConcept,
  BreadcrumbConcept,
  ButtonConcept,
  CollapsibleConcept,
  CommandConcept,
  DialogConcept,
  EmptyConcept,
  InputConcept,
  ItemConcept,
  PopoverConcept,
  SelectConcept,
  TabsConcept,
  TooltipConcept,
} from './pattern-concepts'

export type PatternGridColumns = 2 | 3

export interface PatternItem {
  slug: string
  name: string
  description?: string
  prompt?: string
  span?: 'full'
}

export interface PatternCategory {
  slug: string
  name: string
  description: string
  preview: ComponentType
  items: PatternItem[]
  hasNew?: boolean
  grid?: {
    columns?: PatternGridColumns
  }
}

export const patternCategories: PatternCategory[] = [
  {
    slug: 'avatar',
    name: 'Avatar',
    description: 'Represent a user or entity with an image or initials.',
    preview: AvatarConcept,
    hasNew: true,
    items: [
      {
        slug: 'avatar-01',
        name: 'Basic',
        description: 'Image avatar with an initials fallback.',
      },
      {
        slug: 'avatar-02',
        name: 'Fallback initials',
        description: 'Missing image falls back to initials.',
      },
      {
        slug: 'avatar-03',
        name: 'Icon fallback',
        description: 'Generic user icon when there is no image or name.',
      },
      {
        slug: 'avatar-04',
        name: 'Sizes',
        description: 'Small, default, and large sizes side-by-side.',
      },
      {
        slug: 'avatar-05',
        name: 'Colored fallback',
        description: 'Tinted initials fallbacks using semantic tokens.',
      },
      {
        slug: 'avatar-06',
        name: 'Status badge',
        description: 'Presence dot via AvatarBadge — online, away, offline.',
      },
      {
        slug: 'avatar-07',
        name: 'Badge with icon',
        description: 'Verified check icon inside the AvatarBadge.',
      },
      {
        slug: 'avatar-08',
        name: 'With name',
        description: 'Avatar beside a name and email — a user row.',
      },
      {
        slug: 'avatar-09',
        name: 'Group',
        description: 'Overlapping AvatarGroup stack of members.',
      },
      {
        slug: 'avatar-10',
        name: 'Group with count',
        description: 'AvatarGroupCount shows the overflow tally.',
      },
      {
        slug: 'avatar-11',
        name: 'Group with tooltip',
        description: 'Hover each avatar in the group to reveal its name.',
      },
      {
        slug: 'avatar-12',
        name: 'Loading skeleton',
        description: 'Skeleton placeholder while the avatar loads.',
      },
      {
        slug: 'avatar-13',
        name: 'Icon on top',
        description: 'Icon badge pinned to the top-right corner.',
      },
    ],
  },
  {
    slug: 'select',
    name: 'Select',
    description: 'Pick one option from a list.',
    preview: SelectConcept,
    items: [
      {
        slug: 'select-01',
        name: 'Basic',
        description: 'Single-value dropdown.',
      },
      {
        slug: 'select-02',
        name: 'Grouped',
        description: 'Options organized into labeled groups.',
      },
      {
        slug: 'select-03',
        name: 'Disabled',
        description: 'Non-interactive select state.',
      },
      {
        slug: 'select-04',
        name: 'With Icons',
        description: 'Options with leading icons.',
      },
      {
        slug: 'select-16',
        name: 'Icon in the trigger',
        description:
          'Leading icon in the trigger updates with the selection; dropdown options are text only.',
      },
      {
        slug: 'select-05',
        name: 'With Object',
        description: 'with object values.',
      },
      {
        slug: 'select-06',
        name: 'With description only items',
        description: 'Select with description only items.',
      },
      {
        slug: 'select-07',
        name: 'Disabled Items',
        description: 'Select with individual disabled options.',
      },
      {
        slug: 'select-08',
        name: 'With Avatar',
        description: 'User picker with avatars in trigger and options.',
      },
      {
        slug: 'select-09',
        name: 'Custom Border & Background',
        description: 'Muted background and custom border on the trigger.',
      },
      {
        slug: 'select-10',
        name: 'With Label',
        description: 'Accessible field label linked to the select trigger.',
      },
      {
        slug: 'select-14',
        name: 'With inline label',
        description:
          'Muted prefix label inside the trigger, left of the selected value.',
      },
      {
        slug: 'select-15',
        name: 'Animated content',
        description:
          'Popper position plus Popover-style origin-aware fade, zoom, and slide (duration-200).',
      },
      {
        slug: 'select-11',
        name: 'In Form',
        description: 'Select composed with Field, FieldLabel, and description.',
      },
      {
        slug: 'select-12',
        name: 'React Hook Form + Zod',
        description:
          'Controller binds Select to RHF; Zod resolver drives FieldError on submit.',
      },
      {
        slug: 'select-13',
        name: 'TanStack Form + Zod',
        description:
          'form.Field wires Select; Zod onSubmit validator surfaces FieldError when touched.',
      },
    ],
  },
  {
    slug: 'dialog',
    name: 'Dialog',
    description: 'Focused panel that opens above the page.',
    preview: DialogConcept,
    items: [
      {
        slug: 'dialog-01',
        name: 'Confirm action',
        description: 'Polished yes/no with icon and clear hierarchy.',
      },
      {
        slug: 'dialog-02',
        name: 'Edit profile',
        description: 'FieldGroup form with Save and Cancel footer.',
      },
      {
        slug: 'dialog-03',
        name: 'Delete account',
        description: 'Destructive warning with icon and emphasized copy.',
      },
      {
        slug: 'dialog-04',
        name: 'Terms, sticky footer',
        description: 'Long scroll body; Accept and Decline pinned footer.',
      },
      {
        slug: 'dialog-05',
        name: 'Share link',
        description: 'Readonly URL with copy control; minimal footer.',
      },
      {
        slug: 'dialog-06',
        name: 'Sticky header',
        description: 'Header fixed; scrollable changelog-style body.',
      },
      {
        slug: 'dialog-08',
        name: 'Verify code (OTP)',
        description: '6-digit InputOTP with separator; Verify footer.',
      },
      {
        slug: 'dialog-09',
        name: 'Onboarding welcome',
        description: 'Compact hero image, title, and description; dual CTAs.',
      },
      {
        slug: 'dialog-10',
        name: 'Footer-only dismiss',
        description: 'showCloseButton false; dismiss via footer only.',
      },
      {
        slug: 'dialog-11',
        name: 'Pick teammates',
        description: 'Scrollable avatar rows with selection; Invite footer.',
      },
      {
        slug: 'dialog-12',
        name: 'Success',
        description: 'Completion check icon and Continue action.',
      },
      {
        slug: 'dialog-13',
        name: 'Type to confirm',
        description: 'Type delete to enable destructive button.',
      },
      {
        slug: 'dialog-14',
        name: 'Settings sections',
        description: 'Notifications and Security blocks via Separator.',
      },
      {
        slug: 'dialog-15',
        name: 'Choose image',
        description: 'Thumbnail grid with selection ring.',
      },
      {
        slug: 'dialog-16',
        name: 'Invite team',
        description: 'Icon header plus email field.',
      },
      {
        slug: 'dialog-17',
        name: 'Long form, sticky footer',
        description: 'Many fields in scroll; footer-only sticky.',
      },
      {
        slug: 'dialog-18',
        name: 'Stacked actions',
        description: 'Full-width footer buttons for mobile-friendly CTAs.',
      },
      {
        slug: 'dialog-19',
        name: 'React Hook Form',
        description:
          'Dialog form with RHF, Zod resolver, and FieldError on invalid fields.',
      },
      {
        slug: 'dialog-20',
        name: 'TanStack Form',
        description:
          'Dialog form with TanStack Form and Zod onSubmit validation.',
      },
      {
        slug: 'dialog-21',
        name: 'Nested dialog',
        description:
          'Dialog inside a dialog — e.g. avatar picker from profile.',
      },
      {
        slug: 'dialog-22',
        name: 'From dropdown',
        description:
          'Dialog triggered by a DropdownMenuItem with onSelect preventDefault.',
      },
    ],
  },
  {
    slug: 'input',
    name: 'Input',
    description: 'Fields for typing and entering values.',
    preview: InputConcept,
    items: [
      {
        slug: 'input-01',
        name: 'Basic',
        description: 'Basic input with placeholder.',
      },
      {
        slug: 'input-03',
        name: 'Disabled',
        description: 'Disabled input.',
      },
      {
        slug: 'input-02',
        name: 'With Addon',
        description: 'Input with trailing search icon addon.',
      },
      {
        slug: 'input-04',
        name: 'With Addon in the end',
        description: 'Input with trailing icon addon.',
      },
      {
        slug: 'input-16',
        name: 'With email domain',
        description:
          'InputGroup suffix addon locks the @company.com domain beside the username field.',
      },
      {
        slug: 'input-05',
        name: 'With prefix and suffix',
        description: 'Fixed text addons at the start and end of the field.',
      },
      {
        slug: 'input-06',
        name: 'With loading spinner',
        description: 'Spinning loader in the trailing addon while searching.',
      },
      {
        slug: 'input-07',
        name: 'With clear button',
        description:
          'Clear button appears in the trailing addon when the field has text.',
      },
      {
        slug: 'input-08',
        name: 'With tooltip',
        description:
          'Help icon in the trailing addon opens a tooltip on hover.',
      },
      {
        slug: 'input-09',
        name: 'With popover',
        description:
          'Info button in the trailing addon opens a popover with helper content.',
      },
      {
        slug: 'input-10',
        name: 'With dropdown menu',
        description:
          'Trailing addon button opens a menu to choose search scope.',
      },
      {
        slug: 'input-11',
        name: 'In Form',
        description: 'Input composed with Field, FieldLabel, and description.',
      },
      {
        slug: 'input-12',
        name: 'React Hook Form + Zod',
        description:
          'Controller binds Input to RHF; Zod resolver drives FieldError on submit.',
      },
      {
        slug: 'input-13',
        name: 'TanStack Form + Zod',
        description:
          'form.Field wires Input; Zod onSubmit validator surfaces FieldError when touched.',
      },
      {
        slug: 'input-14',
        name: 'With search button',
        description:
          'ButtonGroup pairs a text input with a trailing search action button.',
      },

      {
        slug: 'input-15',
        name: 'With currency select',
        description:
          'Nested ButtonGroup: currency Select, amount input, and submit icon button.',
      },
      {
        slug: 'input-17',
        name: 'With nested input group',
        description:
          'Attach button plus InputGroup message field and send action in a ButtonGroup.',
      },
    ],
  },
  {
    slug: 'button',
    name: 'Button',
    description: 'Triggers for clicks and actions.',
    preview: ButtonConcept,
    items: [
      {
        slug: 'button-01',
        name: 'Basic',
        description: 'Default button with text label.',
      },
      {
        slug: 'button-02',
        name: 'Variants',
        description:
          'All six variants side-by-side: default, secondary, outline, ghost, destructive, link.',
      },
      {
        slug: 'button-03',
        name: 'Sizes',
        description: 'Extra small, small, default, and large sizes.',
      },
      {
        slug: 'button-04',
        name: 'With leading icon',
        description: 'Icon before the label via data-icon="inline-start".',
      },
      {
        slug: 'button-05',
        name: 'With trailing icon',
        description: 'Icon after the label via data-icon="inline-end".',
      },
      {
        slug: 'button-06',
        name: 'Icon only',
        description: 'Square icon-only buttons in every icon size.',
      },
      {
        slug: 'button-07',
        name: 'Disabled',
        description: 'Disabled state across variants.',
      },
      {
        slug: 'button-08',
        name: 'Loading',
        description: 'Spinner icon + disabled while async work runs.',
      },
      {
        slug: 'button-09',
        name: 'As link',
        description: 'asChild renders the button as an anchor tag.',
      },
      {
        slug: 'button-10',
        name: 'With avatar',
        description: 'User picker style — avatar leading the label.',
      },
      {
        slug: 'button-11',
        name: 'Hover slide arrow',
        description: 'CTA arrow nudges right on hover.',
      },
      {
        slug: 'button-12',
        name: 'With badge',
        description: 'Notification count badge overlapping an icon button.',
      },
      {
        slug: 'button-13',
        name: 'Copy to clipboard',
        description: 'Icon and label swap to a check on copy.',
      },
      {
        slug: 'button-14',
        name: 'Hover rotate refresh',
        description: 'Refresh icon rotates 180° on hover.',
      },
      {
        slug: 'button-15',
        name: 'Hamburger toggle',
        description: 'Three bars morph into an X on press.',
      },
      {
        slug: 'button-16',
        name: 'Basic group',
        description: 'Horizontal ButtonGroup with merged borders.',
      },
      {
        slug: 'button-17',
        name: 'Vertical group',
        description: 'Stacked ButtonGroup via orientation="vertical".',
      },
      {
        slug: 'button-18',
        name: 'Icon toolbar',
        description: 'Icon-only formatting toolbar in a ButtonGroup.',
      },
      {
        slug: 'button-20',
        name: 'With label prefix',
        description: 'ButtonGroupText leads an action cluster.',
      },
      {
        slug: 'button-21',
        name: 'Split button',
        description: 'Primary action + chevron DropdownMenu trigger.',
      },
      {
        slug: 'button-22',
        name: 'Pagination',
        description: 'Prev / page numbers / Next inside a ButtonGroup.',
      },
      {
        slug: 'button-23',
        name: 'Copy field',
        description: 'ButtonGroupText value with a trailing copy button.',
      },
      {
        slug: 'button-24',
        name: 'Group with disabled',
        description: 'ButtonGroup with one disabled step.',
      },
      {
        slug: 'button-25',
        name: 'Destructive pair',
        description: 'Cancel + Delete spaced action pair.',
      },
      {
        slug: 'button-26',
        name: 'With select',
        description:
          'ButtonGroup pairs a sort Select with a direction toggle button.',
      },
      {
        slug: 'button-27',
        name: 'With popover swatch',
        description:
          'Color swatch Popover trigger inside a ButtonGroup with hex label.',
      },
    ],
  },
  {
    slug: 'item',
    name: 'Item',
    description: 'Show entries in lists, feeds, and settings rows.',
    preview: ItemConcept,
    items: [
      {
        slug: 'item-02',
        name: 'Basic',
        description: 'Title plus supporting description.',
      },
      {
        slug: 'item-03',
        name: 'Variants',
        description: 'Default, outline, and muted variants side-by-side.',
      },
      {
        slug: 'item-04',
        name: 'Sizes',
        description: 'Default, sm, and xs sizes side-by-side.',
      },
      {
        slug: 'item-05',
        name: 'With icon',
        description: 'Leading icon via ItemMedia variant="icon".',
      },
      {
        slug: 'item-06',
        name: 'With avatar',
        description: 'User avatar in ItemMedia variant="image".',
      },
      {
        slug: 'item-07',
        name: 'With thumbnail',
        description: 'Image thumbnail in ItemMedia variant="image".',
      },
      {
        slug: 'item-08',
        name: 'With actions',
        description: 'Avatar, name, role, and a trailing action button.',
      },
      {
        slug: 'item-09',
        name: 'Header and footer',
        description: 'ItemHeader badge plus ItemFooter metadata row.',
      },
      {
        slug: 'item-10',
        name: 'As link',
        description: 'asChild anchor turns the whole row into a link.',
      },
      {
        slug: 'item-11',
        name: 'Group',
        description: 'ItemGroup with ItemSeparator dividers between rows.',
      },
      {
        slug: 'item-12',
        name: 'User list',
        description: 'Avatars with name, role, and Follow action per row.',
      },
      {
        slug: 'item-13',
        name: 'Notifications',
        description: 'Icon media, unread dot in the title, time footer.',
      },
      {
        slug: 'item-14',
        name: 'File list',
        description:
          'File icon, name, size meta, and DropdownMenu actions per row.',
      },
      {
        slug: 'item-15',
        name: 'Settings row',
        description: 'Title and description with a trailing Switch.',
      },
      {
        slug: 'item-16',
        name: 'Integrations',
        description: 'Brand icon, status badge in title, connect Switch.',
      },
      {
        slug: 'item-17',
        name: 'Stat rows',
        description: 'Stacked KPI rows with label, value, and trend delta.',
      },
      {
        slug: 'item-18',
        name: 'Pricing tiers',
        description:
          'Stacked tier rows with Popular badge, price, and CTA button.',
      },
      {
        slug: 'item-19',
        name: 'Activity feed',
        description: 'Icon timeline rows with relative time footer.',
      },
      {
        slug: 'item-20',
        name: 'In dropdown menu',
        description: 'size="xs" user header inside DropdownMenuContent.',
      },
      {
        slug: 'item-21',
        name: 'In popover',
        description: 'File group with thumbnails inside a Popover.',
      },
      {
        slug: 'item-24',
        name: 'Empty team',
        description:
          'Avatar stack as media for an empty state with invite action.',
      },
    ],
  },
  {
    slug: 'tabs',
    name: 'Tabs',
    description: 'Switch between views on the same page.',
    preview: TabsConcept,
    items: [
      {
        slug: 'tabs-01',
        name: 'Basic',
        description: 'Three tabs with the default filled variant.',
      },
      {
        slug: 'tabs-02',
        name: 'Line variant',
        description: 'Underline indicator instead of filled background.',
      },
      {
        slug: 'tabs-04',
        name: 'Vertical line',
        description: 'Vertical orientation with line variant — sidebar nav.',
      },
      {
        slug: 'tabs-05',
        name: 'Disabled tab',
        description: 'One trigger disabled while others stay interactive.',
      },
      {
        slug: 'tabs-06',
        name: 'With icons',
        description: 'Leading icons in each trigger via data-icon.',
      },
      {
        slug: 'tabs-07',
        name: 'With count badges',
        description: 'Trigger labels paired with secondary count badges.',
      },
      {
        slug: 'tabs-08',
        name: 'Icon only',
        description: 'Compact icon-only triggers for view switching.',
      },
      {
        slug: 'tabs-10',
        name: 'Icon with title',
        description:
          'Icon stacked above the title in each trigger, with a visual panel below.',
      },
      {
        slug: 'tabs-11',
        name: 'Account and password',
        description:
          'Forms in each TabsContent inside a Card — canonical shadcn example.',
      },
      {
        slug: 'tabs-12',
        name: 'In card',
        description:
          'Tabs inside a card with stats, member list, and billing summary panels.',
      },
      {
        slug: 'tabs-13',
        name: 'Preview and code',
        description: 'Docs-style switch between live preview and code snippet.',
      },
      {
        slug: 'tabs-14',
        name: 'Pricing toggle',
        description: 'Monthly versus yearly billing toggle swaps the price.',
      },
      {
        slug: 'tabs-15',
        name: 'Custom trigger',
        description:
          'Pill triggers with muted active state and cross-fading image panels.',
      },
    ],
  },
  {
    slug: 'popover',
    name: 'Popover',
    description: 'Floating panels triggered by a click.',
    preview: PopoverConcept,
    hasNew: true,
    items: [
      {
        slug: 'popover-01',
        name: 'Basic',
        description: 'Default popover with a button trigger and simple text.',
      },
      {
        slug: 'popover-02',
        name: 'With header',
        description:
          'PopoverHeader, PopoverTitle, and PopoverDescription composition.',
      },
      {
        slug: 'popover-03',
        name: 'Sides',
        description:
          'Place the popover on top, right, bottom, or left of the trigger.',
      },
      {
        slug: 'popover-04',
        name: 'Alignment',
        description:
          'Align the content to the start, center, or end of the trigger.',
      },
      {
        slug: 'popover-05',
        name: 'Custom width',
        description:
          'Override the default width via className on PopoverContent.',
      },
      {
        slug: 'popover-06',
        name: 'Dimensions form',
        description:
          'Inline labeled inputs — canonical shadcn dimensions example.',
      },
      {
        slug: 'popover-07',
        name: 'Notification settings',
        description:
          'Switches with labels and descriptions inside the popover.',
      },
      {
        slug: 'popover-08',
        name: 'Color picker',
        description: 'Swatch grid with a check icon on the active color.',
      },
      {
        slug: 'popover-09',
        name: 'Share link',
        description: 'Readonly URL input with a trailing copy button.',
      },
      {
        slug: 'popover-10',
        name: 'Notifications list',
        description: 'Item rows with icon media, unread dot, and meta footer.',
      },
      {
        slug: 'popover-11',
        name: 'Profile card',
        description: 'Banner image, avatar, bio, and follow / message actions.',
      },
      {
        slug: 'popover-12',
        name: 'Cover picker',
        description:
          'Thumbnail grid with a selection ring for choosing a cover image.',
      },
      {
        slug: 'popover-13',
        name: 'Filters',
        description:
          'Grouped ToggleGroup filters with reset and apply actions.',
      },
      {
        slug: 'popover-14',
        name: 'Scrollable list',
        description:
          'Member list inside a ScrollArea for long content within a fixed-height popover.',
      },
    ],
  },
  {
    slug: 'tooltip',
    name: 'Tooltip',
    description: 'Quick hints that appear on hover or focus.',
    preview: TooltipConcept,
    hasNew: true,
    items: [
      {
        slug: 'tooltip-01',
        name: 'Basic',
        description: 'Default dark tooltip on a button.',
      },
      {
        slug: 'tooltip-02',
        name: 'Sides',
        description: 'Place the tooltip on top, right, bottom, or left.',
      },
      {
        slug: 'tooltip-03',
        name: 'With shortcut',
        description: 'Label paired with a keyboard shortcut kbd.',
      },
      {
        slug: 'tooltip-04',
        name: 'On icon button',
        description: 'Labels icon-only buttons in a toolbar.',
      },
      {
        slug: 'tooltip-05',
        name: 'Custom delay',
        description: 'Per-tooltip delayDuration overrides the provider.',
      },
      {
        slug: 'tooltip-06',
        name: 'Rich content',
        description: 'Title plus supporting description in the content.',
      },
      {
        slug: 'tooltip-07',
        name: 'Light via dark class',
        description:
          'Apply the `dark` class to TooltipContent to flip local CSS variables and render a light tooltip in light mode.',
      },
      {
        slug: 'tooltip-08',
        name: 'Colored',
        description:
          'Primary, secondary, and destructive tooltips with arrow color matching the content.',
      },
      {
        slug: 'tooltip-09',
        name: 'No arrow',
        description: 'Hide the pointer arrow for a flatter look.',
      },
      {
        slug: 'tooltip-10',
        name: 'Side offset',
        description: 'Adjust the gap between trigger and content.',
      },
    ],
  },
  {
    slug: 'breadcrumb',
    name: 'Breadcrumb',
    description: 'Show the path to the current page.',
    preview: BreadcrumbConcept,
    hasNew: true,
    grid: { columns: 2 },
    items: [
      {
        slug: 'breadcrumb-01',
        name: 'Basic',
        description: 'Links with a current page and chevron separators.',
      },
      {
        slug: 'breadcrumb-02',
        name: 'With icons',
        description: 'Leading icon per crumb — file-path style.',
      },
      {
        slug: 'breadcrumb-03',
        name: 'Custom separator',
        description: 'Swap the chevron for a slash via separator children.',
      },
      {
        slug: 'breadcrumb-04',
        name: 'Dot separator',
        description: 'Lighter middle dot divider between crumbs.',
      },
      {
        slug: 'breadcrumb-05',
        name: 'With ellipsis',
        description: 'BreadcrumbEllipsis collapses the middle levels.',
      },
      {
        slug: 'breadcrumb-06',
        name: 'With dropdown',
        description: 'Ghost icon Button opens a menu of the hidden levels.',
      },
      {
        slug: 'breadcrumb-07',
        name: 'Responsive collapse',
        description: 'Dropdown on small screens, full inline path from sm up.',
      },
      {
        slug: 'breadcrumb-08',
        name: 'As link',
        description:
          'asChild renders a custom external <a> with target and rel.',
      },
      {
        slug: 'breadcrumb-09',
        name: 'Dropdown at end',
        description: 'Last crumb is a Button switcher for sibling pages.',
      },
    ],
  },
  {
    slug: 'collapsible',
    name: 'Collapsible',
    description: 'Show and hide a section of content with a trigger.',
    preview: CollapsibleConcept,
    hasNew: true,
    items: [
      {
        slug: 'collapsible-01',
        name: 'Basic',
        description: 'Canonical starred-repos toggle with a chevron trigger.',
      },
      {
        slug: 'collapsible-02',
        name: 'FAQ list',
        description:
          'Stacked question rows; each answer expands with an animated chevron.',
      },
      {
        slug: 'collapsible-03',
        name: 'File tree',
        description:
          'Nested folders built purely from Collapsible — folder icons swap on open.',
      },
      {
        slug: 'collapsible-04',
        name: 'Read more',
        description:
          'Truncated paragraph reveals the rest; trigger label swaps to Show less.',
      },
      {
        slug: 'collapsible-05',
        name: 'Sidebar nav group',
        description:
          'Collapsible navigation sections with sub-items and a rotating chevron.',
      },
      {
        slug: 'collapsible-06',
        name: 'Advanced options',
        description:
          'Form reveals extra fields behind an Advanced options toggle.',
      },
    ],
  },
  {
    slug: 'command',
    name: 'Command',
    description: 'Fast, composable command menu and searchable pickers.',
    preview: CommandConcept,
    hasNew: true,
    items: [
      {
        slug: 'command-01',
        name: 'Basic',
        description:
          'Canonical command menu with grouped items, icons, and shortcuts.',
      },
      {
        slug: 'command-02',
        name: 'Command dialog',
        description:
          'Spotlight-style ⌘K palette toggled by a button or keyboard shortcut.',
      },
      {
        slug: 'command-03',
        name: 'Global search',
        description:
          'Rich search dialog with recent, pages, and people plus a hint footer.',
      },
      {
        slug: 'command-04',
        name: 'Async loading',
        description:
          'Debounced search with a spinner and empty state — shouldFilter off.',
      },
      {
        slug: 'command-05',
        name: 'Combobox',
        description: 'Popover + Command framework picker with a check mark.',
      },
      {
        slug: 'command-06',
        name: 'Combobox with clear',
        description:
          'Selected value shows an inline X that clears without reopening.',
      },
      {
        slug: 'command-07',
        name: 'Multiple — chips',
        description:
          'Multi-select showing every choice as a removable badge chip in the trigger.',
      },
      {
        slug: 'command-14',
        name: 'Multiple — count summary',
        description:
          'Trigger shows “first, +N” with a separate button to clear all.',
      },
      {
        slug: 'command-15',
        name: 'Multiple — faceted filter',
        description:
          'Dashed trigger with count badges, checkbox rows, facet counts, and a clear footer.',
      },
      {
        slug: 'command-08',
        name: 'Grouped picker',
        description:
          'Options split into labeled groups with separators — timezones by region.',
      },
      {
        slug: 'command-09',
        name: 'Assignee picker',
        description:
          'Avatars with name and email subtext in the trigger and options.',
      },
      {
        slug: 'command-10',
        name: 'Status picker',
        description:
          'Ghost trigger with a colored status dot — issue-tracker style.',
      },
      {
        slug: 'command-11',
        name: 'With label',
        description: 'Combobox composed with an accessible field Label.',
      },
      {
        slug: 'command-12',
        name: 'React Hook Form + Zod',
        description:
          'Controller binds the combobox to RHF; Zod resolver drives FieldError on submit.',
      },
      {
        slug: 'command-13',
        name: 'TanStack Form + Zod',
        description:
          'form.Field wires the combobox; Zod onSubmit validator surfaces FieldError when touched.',
      },
    ],
  },
  {
    slug: 'empty',
    name: 'Empty',
    description: 'Placeholder states when there is nothing to show.',
    preview: EmptyConcept,
    hasNew: true,
    grid: { columns: 2 },
    items: [
      {
        slug: 'empty-01',
        name: 'Basic',
        description: 'Icon, title, and description for an empty list.',
      },
      {
        slug: 'empty-02',
        name: 'With actions',
        description: 'First-run state with primary and secondary CTAs.',
      },
      {
        slug: 'empty-03',
        name: 'No results',
        description: 'Search empty state with a clear-filters action.',
      },
      {
        slug: 'empty-04',
        name: 'Avatar group',
        description:
          'Bordered empty team card with an avatar stack and invite.',
      },
      {
        slug: 'empty-05',
        name: 'In dialog',
        description: 'Empty inbox state composed inside a Dialog.',
      },
    ],
  },
]

export const allPatterns = patternCategories.flatMap((category) =>
  category.items.map((item) => ({
    ...item,
    categorySlug: category.slug,
  })),
)

export type PatternCatalogEntry = (typeof allPatterns)[number]

export function getCategoryBySlug(slug: string): PatternCategory | undefined {
  return patternCategories.find((c) => c.slug === slug)
}

export function getPatternBySlug(
  categorySlug: string,
  patternSlug: string,
): PatternItem | undefined {
  return getCategoryBySlug(categorySlug)?.items.find(
    (p) => p.slug === patternSlug,
  )
}
