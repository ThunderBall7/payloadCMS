import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const HeroBanner1: Block = {
  slug: 'heroBanner1',
  interfaceName: 'HeroBanner1Block',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Section Title',
    },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures]
        },
      }),
      label: 'Section Description',
    },
    {
      name: 'media',
      type: 'group',
      fields: [
        {
          name: 'type',
          type: 'select',
          defaultValue: 'image',
          options: [
            {
              label: 'Image',
              value: 'image',
            },
            {
              label: 'Video',
              value: 'video',
            },
          ],
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (_, siblingData) => siblingData.type === 'image',
          },
        },
        {
          name: 'video',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (_, siblingData) => siblingData.type === 'video',
          },
        },
      ],
    },
    {
      name: 'theme',
      type: 'select',
      defaultValue: 'light',
      options: [
        {
          label: 'Light',
          value: 'light',
        },
        {
          label: 'Dark',
          value: 'dark',
        },
        {
          label: 'Gradient',
          value: 'gradient',
        },
      ],
    },
    {
      name: 'enableAnimation',
      type: 'checkbox',
      defaultValue: true,
      label: 'Enable Animations',
    },
  ],
  labels: {
    singular: 'Hero Banner 1',
    plural: 'Hero Banners 1',
  },
} 