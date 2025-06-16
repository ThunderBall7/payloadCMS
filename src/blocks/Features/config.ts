import type { Block } from 'payload'

export const Features: Block = {
  slug: 'features',
  interfaceName: 'FeaturesBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Section Title',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Section Description',
    },
    {
      name: 'features',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Feature Title',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Feature Description',
        },
        {
          name: 'icon',
          type: 'text',
          label: 'Icon Name',
          admin: {
            description: 'Enter an icon name from the icon library (e.g., "star", "check", "shield")',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Feature Image',
        },
      ],
    },
    {
      name: 'layout',
      type: 'select',
      defaultValue: 'grid',
      options: [
        {
          label: 'Grid',
          value: 'grid',
        },
        {
          label: 'List',
          value: 'list',
        },
        {
          label: 'Cards',
          value: 'cards',
        },
      ],
    },
    {
      name: 'columns',
      type: 'select',
      defaultValue: '3',
      options: [
        {
          label: '2 Columns',
          value: '2',
        },
        {
          label: '3 Columns',
          value: '3',
        },
        {
          label: '4 Columns',
          value: '4',
        },
      ],
      admin: {
        condition: (_, siblingData) => siblingData.layout === 'grid',
      },
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
    singular: 'Features Section',
    plural: 'Features Sections',
  },
} 