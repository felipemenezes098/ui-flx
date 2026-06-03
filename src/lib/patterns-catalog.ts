import type { ComponentType } from 'react'

import {
  AccordionConcept,
  AvatarConcept,
  BadgeConcept,
  BannerConcept,
  BreadcrumbConcept,
  ButtonConcept,
  CheckboxConcept,
  CollapsibleConcept,
  CommandConcept,
  DialogConcept,
  DropdownConcept,
  EmptyConcept,
  InputConcept,
  ItemConcept,
  PaginationConcept,
  PopoverConcept,
  SelectConcept,
  SkeletonConcept,
  SwitchConcept,
  TableConcept,
  TabsConcept,
  TooltipConcept,
} from './pattern-concepts'

export type PatternGridColumns = 1 | 2 | 3

export interface PatternItem {
  slug: string
  name: string
  description?: string
  prompt?: string
  span?: 'full'
  isNew?: boolean
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
    slug: 'badge',
    name: 'Badge',
    description: 'Compact labels for status, counts, and metadata.',
    preview: BadgeConcept,
    items: [
      {
        slug: 'badge-01',
        name: 'Basic',
        description: 'A single default badge.',
      },
      {
        slug: 'badge-02',
        name: 'Variants',
        description:
          'All six variants side-by-side: default, secondary, destructive, outline, ghost, link.',
      },
      {
        slug: 'badge-03',
        name: 'With icon',
        description: 'Leading verified icon before the label.',
      },
      {
        slug: 'badge-04',
        name: 'With status dot',
        description: 'A colored presence dot beside an outline label.',
      },
      {
        slug: 'badge-05',
        name: 'Status colors',
        description: 'Tinted success, warning, error, and info states.',
      },
      {
        slug: 'badge-06',
        name: 'Count',
        description: 'Pill-shaped numeric counts with tabular figures.',
      },
      {
        slug: 'badge-07',
        name: 'As link',
        description:
          'asChild renders the badge as an anchor with a trailing icon.',
      },
      {
        slug: 'badge-08',
        name: 'Removable',
        description: 'Dismissible tag chips with a trailing remove button.',
      },
      {
        slug: 'badge-09',
        name: 'With avatar',
        description: 'Assignee chip with a leading avatar inside the badge.',
      },
      {
        slug: 'badge-10',
        name: 'Sizes',
        description: 'Small, default, and large sizes via className.',
      },
      {
        slug: 'badge-11',
        name: 'Trend delta',
        description: 'Up and down arrows with tinted gain / loss percentages.',
      },
      {
        slug: 'badge-12',
        name: 'Icon only',
        description: 'Square icon-only badges across variants.',
      },
      {
        slug: 'badge-13',
        name: 'Tag list',
        description: 'A wrapping group of outline badges as tags.',
      },
    ],
  },
  {
    slug: 'banner',
    name: 'Banner',
    description:
      'Page-level announcements, alerts, and promos that span the full width.',
    preview: BannerConcept,
    grid: { columns: 1 },
    items: [
      {
        slug: 'banner-01',
        name: 'Basic',
        description: 'Icon, message, and a subtle bordered surface.',
      },
      {
        slug: 'banner-02',
        name: 'Variants',
        description: 'Info, success, warning, and error tones stacked.',
      },
      {
        slug: 'banner-03',
        name: 'Dismissible',
        description: 'A close button hides the banner with a restore link.',
      },
      {
        slug: 'banner-04',
        name: 'With actions',
        description: 'Message paired with Later and Update now buttons.',
      },
      {
        slug: 'banner-06',
        name: 'Announcement bar',
        description: 'Full-width gradient promo with a New tag and arrow.',
      },
      {
        slug: 'banner-07',
        name: 'Expandable',
        description: 'Collapsible release notes that reveal highlights.',
      },
      {
        slug: 'banner-09',
        name: 'Maintenance',
        description: 'Amber system notice with a pulsing status dot.',
      },
      {
        slug: 'banner-11',
        name: 'Email verification',
        description: 'Blue prompt with a Resend email action that confirms.',
      },
      {
        slug: 'banner-12',
        name: 'Stacked',
        description: 'A list of dismissible notices, each removed on its own.',
      },
      {
        slug: 'banner-14',
        name: 'With progress',
        description: 'Live import banner with a spinner and a progress bar.',
      },
    ],
  },
  {
    slug: 'accordion',
    name: 'Accordion',
    description: 'Stacked sections that expand and collapse one at a time.',
    preview: AccordionConcept,
    items: [
      {
        slug: 'accordion-01',
        name: 'Basic',
        description: 'Single collapsible item open at a time — the default.',
      },
      {
        slug: 'accordion-02',
        name: 'Multiple',
        description: 'type="multiple" keeps several sections open at once.',
      },
      {
        slug: 'accordion-03',
        name: 'With icons',
        description: 'Leading icon beside each trigger label.',
      },
      {
        slug: 'accordion-04',
        name: 'FAQ',
        description: 'A titled question-and-answer list.',
      },
      {
        slug: 'accordion-05',
        name: 'Separated cards',
        description: 'Each item is a bordered card with spacing between them.',
      },
      {
        slug: 'accordion-06',
        name: 'Plus / minus icon',
        description:
          'Radix primitive swaps a plus for a minus instead of a chevron.',
      },
      {
        slug: 'accordion-07',
        name: 'Left chevron',
        description:
          'Radix primitive places a rotating chevron before the label.',
      },
      {
        slug: 'accordion-09',
        name: 'Rich content',
        description: 'Lists, links, and a button inside the panel body.',
      },
      {
        slug: 'accordion-10',
        name: 'Disabled item',
        description: 'One trigger disabled while the others stay interactive.',
      },
      {
        slug: 'accordion-11',
        name: 'Nested',
        description: 'An accordion rendered inside another panel body.',
      },
      {
        slug: 'accordion-12',
        name: 'Ghost',
        description: 'Borderless minimal rows with an active color on open.',
      },
      {
        slug: 'accordion-13',
        name: 'Filled trigger',
        description: 'Each trigger sits on a muted, rounded background.',
      },
      {
        slug: 'accordion-14',
        name: 'Expand all',
        description: 'Controlled value with expand-all / collapse-all buttons.',
      },
      {
        slug: 'accordion-15',
        name: 'Settings sections',
        description: 'Grouped switch rows revealed inside each panel.',
      },
      {
        slug: 'accordion-16',
        name: 'With subtitle',
        description: 'Two-line trigger pairing a title with helper text.',
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
    slug: 'checkbox',
    name: 'Checkbox',
    description: 'Toggle one or many options on and off.',
    preview: CheckboxConcept,
    items: [
      {
        slug: 'checkbox-01',
        name: 'Basic',
        description: 'Single checkbox with a label.',
      },
      {
        slug: 'checkbox-02',
        name: 'With description',
        description: 'Checkbox with a label and helper description.',
      },
      {
        slug: 'checkbox-03',
        name: 'Disabled',
        description: 'Disabled unchecked and disabled checked states.',
      },
      {
        slug: 'checkbox-04',
        name: 'Group',
        description: 'FieldSet of notification options with descriptions.',
      },
      {
        slug: 'checkbox-06',
        name: 'Select all',
        description: 'Parent checkbox with an indeterminate mixed state.',
      },
      {
        slug: 'checkbox-07',
        name: 'Nested tree',
        description:
          'Multi-level file tree; parents derive checked / indeterminate from children.',
      },
      {
        slug: 'checkbox-08',
        name: 'Choice cards',
        description: 'Bordered add-on cards that highlight when checked.',
      },
      {
        slug: 'checkbox-09',
        name: 'Payment methods',
        description: 'Selectable saved credit cards with brand and last four.',
      },
      {
        slug: 'checkbox-10',
        name: 'Table row selection',
        description:
          'Data table with a select-all header, per-row checkboxes, and a count.',
      },
      {
        slug: 'checkbox-11',
        name: 'Invalid / required',
        description:
          'aria-invalid on the checkbox and data-invalid on the field show error styles.',
      },
      {
        slug: 'checkbox-12',
        name: 'React Hook Form + Zod',
        description:
          'Controller binds a checkbox group to RHF; Zod requires at least one.',
      },
      {
        slug: 'checkbox-13',
        name: 'TanStack Form + Zod',
        description:
          'form.Field wires a checkbox group; Zod onSubmit validator surfaces FieldError.',
      },
    ],
  },
  {
    slug: 'switch',
    name: 'Switch',
    description: 'Toggle a single setting on or off.',
    preview: SwitchConcept,
    items: [
      {
        slug: 'switch-01',
        name: 'Basic',
        description: 'A single standalone switch.',
      },
      {
        slug: 'switch-02',
        name: 'With label',
        description: 'Switch paired with an accessible field label.',
      },
      {
        slug: 'switch-03',
        name: 'With description',
        description: 'Label and helper description beside the switch.',
      },
      {
        slug: 'switch-04',
        name: 'Sizes',
        description: 'The sm and default sizes side-by-side.',
      },
      {
        slug: 'switch-05',
        name: 'Disabled',
        description: 'Disabled off and disabled on states.',
      },
      {
        slug: 'switch-06',
        name: 'Theme toggle',
        description: 'Sun and moon icons flank a light / dark toggle.',
      },
      {
        slug: 'switch-07',
        name: 'Icon in thumb',
        description:
          'Custom larger toggle with sun / moon icons that swap inside the thumb.',
      },
      {
        slug: 'switch-08',
        name: 'Settings group',
        description: 'FieldSet of notification rows, each with a switch.',
      },
      {
        slug: 'switch-09',
        name: 'Credit card auto-pay',
        description: 'A styled card with an automatic payments toggle.',
      },
      {
        slug: 'switch-10',
        name: 'Choice cards',
        description: 'Bordered add-on cards that highlight when toggled on.',
      },
      {
        slug: 'switch-11',
        name: 'Invalid / required',
        description:
          'aria-invalid and data-invalid show error styles until enabled.',
      },
      {
        slug: 'switch-12',
        name: 'React Hook Form + Zod',
        description:
          'Controller binds the switch to RHF; Zod requires opt-in on submit.',
      },
      {
        slug: 'switch-13',
        name: 'TanStack Form + Zod',
        description:
          'form.Field wires the switch; Zod onSubmit validator surfaces FieldError.',
      },
    ],
  },
  {
    slug: 'table',
    name: 'Table',
    description: 'Display rows and columns of structured data.',
    preview: TableConcept,
    grid: { columns: 1 },
    items: [
      {
        slug: 'table-01',
        name: 'Basic',
        description: 'Caption, header, and a footer total row.',
      },
      {
        slug: 'table-02',
        name: 'With images',
        description: 'Avatar thumbnails beside name and email in each row.',
      },
      {
        slug: 'table-03',
        name: 'Without dividers',
        description: 'Borderless rows for a clean, list-like layout.',
      },
      {
        slug: 'table-04',
        name: 'Striped rows',
        description: 'Zebra striping tints every other row.',
      },
      {
        slug: 'table-05',
        name: 'With vertical lines',
        description: 'Column grid lines via per-cell right borders.',
      },
      {
        slug: 'table-06',
        name: 'Dense',
        description: 'Compact padding and type for high-density data.',
      },
      {
        slug: 'table-07',
        name: 'With checkbox',
        description:
          'Select-all header, per-row checkboxes, and a selection count.',
      },
      {
        slug: 'table-08',
        name: 'Card table',
        description: 'Table inside a Card with title and status badges.',
      },
      {
        slug: 'table-09',
        name: 'Vertical',
        description: 'Key-value details with row headers down the left.',
      },
      {
        slug: 'table-10',
        name: 'Sticky header',
        description: 'Header pinned while the capped body scrolls.',
      },
      {
        slug: 'table-11',
        name: 'Sortable',
        description: 'TanStack Table — click a header to sort the column.',
      },
      {
        slug: 'table-12',
        name: 'With filters',
        description:
          'TanStack Table — global search plus a status column filter.',
      },
      {
        slug: 'table-13',
        name: 'Pagination',
        description:
          'TanStack Table — prev / next controls with a rows-per-page select.',
      },
      {
        slug: 'table-14',
        name: 'Numeric pagination',
        description: 'TanStack Table — numbered page buttons with prev / next.',
      },
      {
        slug: 'table-15',
        name: 'Column visibility',
        description: 'TanStack Table — toggle columns from a dropdown menu.',
      },
      {
        slug: 'table-16',
        name: 'Resizable columns',
        description: 'TanStack Table — drag the header edge to resize columns.',
      },
      {
        slug: 'table-17',
        name: 'Pinnable columns',
        description:
          'TanStack Table — pin columns left or right; they stay while scrolling.',
      },
      {
        slug: 'table-18',
        name: 'Row selection',
        description:
          'TanStack Table — row checkboxes with a bulk actions toolbar.',
      },
      {
        slug: 'table-19',
        name: 'Expanding sub-rows',
        description: 'TanStack Table — expandable parent rows for tree data.',
      },
      {
        slug: 'table-20',
        name: 'Complex data table',
        description:
          'TanStack Table — sort, filter, paginate, select, hide columns, and row actions.',
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
    slug: 'dropdown',
    name: 'Dropdown',
    description: 'Menu of actions and choices triggered by a button.',
    preview: DropdownConcept,
    items: [
      {
        slug: 'dropdown-01',
        name: 'Basic',
        description: 'Label, separator, and a list of action items.',
      },
      {
        slug: 'dropdown-02',
        name: 'With icons and shortcuts',
        description: 'Leading icons paired with trailing keyboard shortcuts.',
      },
      {
        slug: 'dropdown-03',
        name: 'Grouped',
        description: 'Multiple labeled groups divided by separators.',
      },
      {
        slug: 'dropdown-04',
        name: 'Destructive item',
        description: 'A red Delete action via variant="destructive".',
      },
      {
        slug: 'dropdown-05',
        name: 'Disabled items',
        description: 'Non-interactive items dimmed with the disabled prop.',
      },
      {
        slug: 'dropdown-06',
        name: 'Checkbox items',
        description: 'Toggle multiple view options with checkbox items.',
      },
      {
        slug: 'dropdown-07',
        name: 'Radio group',
        description: 'Pick a single value from a DropdownMenuRadioGroup.',
      },
      {
        slug: 'dropdown-08',
        name: 'Submenu',
        description: 'Nested DropdownMenuSub reveals a flyout of options.',
      },
      {
        slug: 'dropdown-09',
        name: 'Account menu',
        description: 'Avatar trigger with a name and email header block.',
      },
      {
        slug: 'dropdown-10',
        name: 'Icon button actions',
        description: 'Ghost ellipsis trigger opens a compact actions menu.',
      },
      {
        slug: 'dropdown-11',
        name: 'Table row actions',
        description: 'Per-row ellipsis menu with edit, copy, and remove.',
      },
      {
        slug: 'dropdown-12',
        name: 'Sides and alignment',
        description: 'Align start or end and open the menu to the side.',
      },
      {
        slug: 'dropdown-13',
        name: 'Controlled open',
        description: 'Drive the open state with useState and onOpenChange.',
      },
      {
        slug: 'dropdown-14',
        name: 'Theme switcher',
        description: 'Radio group toggling light, dark, and system themes.',
      },
      {
        slug: 'dropdown-15',
        name: 'Multi-select filter',
        description: 'Checkbox items with a count badge and a clear action.',
      },
      {
        slug: 'dropdown-16',
        name: 'Notifications',
        description: 'Bell trigger with an unread badge and an activity list.',
      },
      {
        slug: 'dropdown-17',
        name: 'With dialog',
        description: 'A menu item opens a controlled confirmation dialog.',
      },
      {
        slug: 'dropdown-18',
        name: 'React Hook Form + Zod',
        description:
          'Controller binds a radio group to RHF; Zod requires a selection.',
      },
      {
        slug: 'dropdown-19',
        name: 'TanStack Form + Zod',
        description:
          'form.Field wires the radio group; Zod onSubmit surfaces FieldError.',
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
    slug: 'pagination',
    name: 'Pagination',
    description: 'Split content across pages and navigate between them.',
    preview: PaginationConcept,
    grid: { columns: 2 },
    items: [
      {
        slug: 'pagination-01',
        name: 'Basic',
        description: 'Numbers with ellipsis, previous, and next links.',
      },
      {
        slug: 'pagination-02',
        name: 'Compact',
        description: 'Inline numbers from sm up, “Page X of Y” on mobile.',
      },
      {
        slug: 'pagination-03',
        name: 'Interactive window',
        description: 'Stateful current page with a sliding ellipsis range.',
      },
      {
        slug: 'pagination-04',
        name: 'Rows per page',
        description: 'Page-size select with first, prev, next, and last.',
      },
      {
        slug: 'pagination-05',
        name: 'Results summary',
        description: 'Showing 1–10 of 97 alongside the page controls.',
      },
      {
        slug: 'pagination-06',
        name: 'Article prev / next',
        description: 'Two linked cards with titles for adjacent articles.',
      },
      {
        slug: 'pagination-07',
        name: 'Dots',
        description: 'Carousel-style dots; the active page expands to a pill.',
      },
      {
        slug: 'pagination-08',
        name: 'Jump to page',
        description: 'Numeric input to jump directly to any page.',
      },
    ],
  },
  {
    slug: 'collapsible',
    name: 'Collapsible',
    description: 'Show and hide a section of content with a trigger.',
    preview: CollapsibleConcept,
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
    slug: 'skeleton',
    name: 'Skeleton',
    description: 'Placeholder shapes that mimic content while it loads.',
    preview: SkeletonConcept,
    items: [
      {
        slug: 'skeleton-01',
        name: 'Basic',
        description: 'A stack of placeholder lines for a text block.',
      },
      {
        slug: 'skeleton-02',
        name: 'Avatar with text',
        description: 'A circle beside two lines — a loading user row.',
      },
      {
        slug: 'skeleton-03',
        name: 'Card',
        description: 'Media banner above a title, body lines, and a footer.',
      },
      {
        slug: 'skeleton-04',
        name: 'Paragraph',
        description: 'A heading followed by full-width body lines.',
      },
      {
        slug: 'skeleton-05',
        name: 'List',
        description: 'Repeated avatar-and-text rows with trailing meta.',
      },
      {
        slug: 'skeleton-06',
        name: 'Table',
        description: 'A header row above several placeholder data rows.',
      },
      {
        slug: 'skeleton-07',
        name: 'Form',
        description: 'Labelled fields above a submit button placeholder.',
      },
      {
        slug: 'skeleton-08',
        name: 'Select',
        description: 'A field label above a trigger with a chevron block.',
      },
      {
        slug: 'skeleton-10',
        name: 'Stat cards',
        description: 'A grid of KPI cards with label, value, and trend lines.',
      },
      {
        slug: 'skeleton-12',
        name: 'Chat thread',
        description: 'Alternating inbound and outbound message bubbles.',
      },
      {
        slug: 'skeleton-13',
        name: 'Gallery grid',
        description: 'A grid of square image tiles for a loading gallery.',
      },
      {
        slug: 'skeleton-14',
        name: 'Article',
        description: 'A hero image, title, byline, and stacked body lines.',
      },
      {
        slug: 'skeleton-15',
        name: 'Pricing card',
        description: 'A plan name, price, feature rows, and a CTA button.',
      },
      {
        slug: 'skeleton-16',
        name: 'Sidebar nav',
        description: 'A logo header above grouped icon-and-label nav rows.',
      },
    ],
  },
  {
    slug: 'empty',
    name: 'Empty',
    description: 'Placeholder states when there is nothing to show.',
    preview: EmptyConcept,
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
