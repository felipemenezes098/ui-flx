import type { BlockTheme } from '@/lib/blocks/block-manifest-types'

import { manifest as bentoGrids01 } from '../../bento-grids/bento-grids-01/manifest'
import { manifest as content01 } from '../../content/content-01/manifest'
import { manifest as content02 } from '../../content/content-02/manifest'
import { manifest as content04 } from '../../content/content-04/manifest'
import { manifest as content06 } from '../../content/content-06/manifest'
import { manifest as content07 } from '../../content/content-07/manifest'
import { manifest as content09 } from '../../content/content-09/manifest'
import { manifest as cta01 } from '../../cta/cta-01/manifest'
import { manifest as hero01 } from '../../hero/hero-01/manifest'
import { manifest as hero02 } from '../../hero/hero-02/manifest'
import { manifest as hero03 } from '../../hero/hero-03/manifest'
import { manifest as hero04 } from '../../hero/hero-04/manifest'
import { manifest as hero05 } from '../../hero/hero-05/manifest'
import { manifest as hero06 } from '../../hero/hero-06/manifest'
import { manifest as hero07 } from '../../hero/hero-07/manifest'
import { manifest as hero08 } from '../../hero/hero-08/manifest'
import { manifest as hero09 } from '../../hero/hero-09/manifest'
import { manifest as hero10 } from '../../hero/hero-10/manifest'
import { manifest as hero11 } from '../../hero/hero-11/manifest'
import { manifest as testimonials01 } from '../../testimonials/testimonials-01/manifest'

export const siennaTheme: BlockTheme = {
  slug: 'sienna',
  name: 'Sienna',
  description:
    'Editorial serif headlines, watercolor art, and a warm earthy palette.',
  blocks: [
    hero01,
    hero02,
    hero03,
    hero04,
    hero05,
    hero06,
    hero07,
    hero08,
    hero09,
    hero10,
    hero11,
    content01,
    content02,
    content04,
    content06,
    content07,
    content09,
  ],
}
