import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Portfolio',

  projectId: 'mqnvg5ou',
  dataset: 'production',
  basePath: "/protfolio",
  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
