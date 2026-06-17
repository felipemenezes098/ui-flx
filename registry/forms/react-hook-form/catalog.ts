import { rhfAdvancedCategory } from 'registry/forms/react-hook-form/advanced/catalog'
import { rhfFieldsCategory } from 'registry/forms/react-hook-form/fields/catalog'
import { rhfRecipesCategory } from 'registry/forms/react-hook-form/recipes/catalog'
import { rhfRulesCategory } from 'registry/forms/react-hook-form/rules/catalog'

import type { FormLibrary } from '@/lib/patterns/pattern-types'

export const reactHookFormLibrary: FormLibrary = {
  slug: 'react-hook-form',
  name: 'React Hook Form',
  description: 'Typed, validated forms with React Hook Form and Zod.',
  categories: [
    rhfFieldsCategory,
    rhfRulesCategory,
    rhfRecipesCategory,
    rhfAdvancedCategory,
  ],
}
