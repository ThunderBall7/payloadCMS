import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Stats: Block = {
  slug: 'stats',
  interfaceName: 'StatsBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures]
        },
      }),
    },
    {
      name: 'stats',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
          label: 'Stat Value',
        },
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Stat Label',
        },
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          options: [
            { label: 'Users', value: 'users' },
            { label: 'Chart', value: 'chart' },
            { label: 'Star', value: 'star' },
            { label: 'Check', value: 'check' },
            { label: 'Shield', value: 'shield' },
            { label: 'Trophy', value: 'trophy' },
            { label: 'Heart', value: 'heart' },
            { label: 'Lightning', value: 'lightning' },
            { label: 'Globe', value: 'globe' },
            { label: 'Clock', value: 'clock' },
          ],
        },
        {
          name: 'prefix',
          type: 'text',
          label: 'Prefix (optional)',
          admin: {
            description: 'Add a prefix to the value (e.g., "$", "+")',
          },
        },
        {
          name: 'suffix',
          type: 'text',
          label: 'Suffix (optional)',
          admin: {
            description: 'Add a suffix to the value (e.g., "%", "k", "M")',
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
    singular: 'Stats',
    plural: 'Stats',
  },
} 