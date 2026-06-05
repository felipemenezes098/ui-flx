import { DialogConcept } from '@/lib/patterns/pattern-concepts'
import type { PatternCategory } from '@/lib/patterns/pattern-types'

export const dialogCategory: PatternCategory = {
  slug: 'dialog',
  name: 'Dialog',
  description: 'Focused panel that opens above the page.',
  preview: DialogConcept,
  items: [
    { slug: 'dialog-01', name: 'Confirm action', description: 'Polished yes/no with icon and clear hierarchy.' },
    { slug: 'dialog-02', name: 'Edit profile', description: 'FieldGroup form with Save and Cancel footer.' },
    { slug: 'dialog-03', name: 'Delete account', description: 'Destructive warning with icon and emphasized copy.' },
    { slug: 'dialog-04', name: 'Terms, sticky footer', description: 'Long scroll body; Accept and Decline pinned footer.' },
    { slug: 'dialog-05', name: 'Share link', description: 'Readonly URL with copy control; minimal footer.' },
    { slug: 'dialog-06', name: 'Sticky header', description: 'Header fixed; scrollable changelog-style body.' },
    { slug: 'dialog-08', name: 'Verify code (OTP)', description: '6-digit InputOTP with separator; Verify footer.' },
    { slug: 'dialog-09', name: 'Onboarding welcome', description: 'Compact hero image, title, and description; dual CTAs.' },
    { slug: 'dialog-10', name: 'Footer-only dismiss', description: 'No corner close button; dismiss only through the footer.' },
    { slug: 'dialog-11', name: 'Pick teammates', description: 'Scrollable avatar rows with selection; Invite footer.' },
    { slug: 'dialog-12', name: 'Success', description: 'Completion check icon and Continue action.' },
    { slug: 'dialog-13', name: 'Type to confirm', description: 'Type delete to enable destructive button.' },
    { slug: 'dialog-14', name: 'Settings sections', description: 'Notifications and Security blocks via Separator.' },
    { slug: 'dialog-15', name: 'Choose image', description: 'Thumbnail grid with selection ring.' },
    { slug: 'dialog-16', name: 'Invite team', description: 'Icon header plus email field.' },
    { slug: 'dialog-17', name: 'Long form, sticky footer', description: 'Many fields in scroll; footer-only sticky.' },
    { slug: 'dialog-18', name: 'Stacked actions', description: 'Full-width footer buttons for mobile-friendly CTAs.' },
    { slug: 'dialog-19', name: 'React Hook Form', description: 'Dialog form with RHF, Zod resolver, and FieldError on invalid fields.' },
    { slug: 'dialog-20', name: 'TanStack Form', description: 'Dialog form with TanStack Form and Zod onSubmit validation.' },
    { slug: 'dialog-21', name: 'Nested dialog', description: 'Dialog stacked inside another dialog, e.g. avatar picker from profile.' },
    { slug: 'dialog-22', name: 'From dropdown', description: 'Dialog triggered by a DropdownMenuItem with onSelect preventDefault.' },
  ],
}
