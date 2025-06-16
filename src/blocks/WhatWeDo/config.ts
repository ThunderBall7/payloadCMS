import type { Block } from 'payload/types'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { BoldFeature } from '@payloadcms/richtext-lexical'
import { ItalicFeature } from '@payloadcms/richtext-lexical'
import { LinkFeature } from '@payloadcms/richtext-lexical'

export const WhatWeDo: Block = {
  slug: 'whatWeDo',
  interfaceName: 'WhatWeDoBlock',
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
      label: 'Section Description',
      editor: lexicalEditor({
        features: [
          BoldFeature(),
          ItalicFeature(),
          LinkFeature(),
        ],
      }),
    },
    {
      name: 'services',
      type: 'array',
      label: 'Services',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'icon',
          type: 'select',
          required: true,
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
          name: 'title',
          type: 'text',
          required: true,
          label: 'Service Title',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Service Description',
        },
      ],
    },
    {
      name: 'theme',
      type: 'select',
      defaultValue: 'light',
      options: [
        { label: 'Light', value: 'light' },
        { label: 'Dark', value: 'dark' },
        { label: 'Gradient', value: 'gradient' },
      ],
    },
    {
      name: 'enableAnimation',
      type: 'checkbox',
      label: 'Enable Animation',
      defaultValue: true,
    },
  ],
  labels: {
    singular: 'What We Do',
    plural: 'What We Do',
  },
} 