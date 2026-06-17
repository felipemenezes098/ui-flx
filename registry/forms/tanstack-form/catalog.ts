import { tsfAdvancedCategory } from 'registry/forms/tanstack-form/advanced/catalog'
import { tsfFieldsCategory } from 'registry/forms/tanstack-form/fields/catalog'
import { tsfRecipesCategory } from 'registry/forms/tanstack-form/recipes/catalog'
import { tsfRulesCategory } from 'registry/forms/tanstack-form/rules/catalog'

import type { FormLibrary } from '@/lib/patterns/pattern-types'

export const tanstackFormLibrary: FormLibrary = {
  slug: 'tanstack-form',
  name: 'TanStack Form',
  description: 'Typed, validated forms with TanStack Form and Zod.',
  categories: [
    tsfFieldsCategory,
    tsfRulesCategory,
    tsfRecipesCategory,
    tsfAdvancedCategory,
  ],
}
