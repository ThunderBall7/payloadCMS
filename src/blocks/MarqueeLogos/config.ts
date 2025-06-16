import type { Block } from 'payload'

export const MarqueeLogos: Block = {
  slug: 'marqueeLogos',
  interfaceName: 'MarqueeLogosBlock',
  fields: [
    {
      name: 'logos',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Logo Image',
        },
        {
          name: 'alt',
          type: 'text',
          label: 'Alt Text',
        },
        {
          name: 'link',
          type: 'text',
          label: 'Logo Link (optional)',
        },
      ],
    },
    {
      name: 'speed',
      type: 'select',
      defaultValue: 'medium',
      options: [
        {
          label: 'Slow',
          value: 'slow',
        },
        {
          label: 'Medium',
          value: 'medium',
        },
        {
          label: 'Fast',
          value: 'fast',
        },
      ],
    },
    {
      name: 'direction',
      type: 'select',
      defaultValue: 'left',
      options: [
        {
          label: 'Left to Right',
          value: 'left',
        },
        {
          label: 'Right to Left',
          value: 'right',
        },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'text',
      defaultValue: '#ffffff',
      admin: {
        description: 'Enter a hex color code (e.g., #ffffff)',
      },
    },
    {
      name: 'padding',
      type: 'select',
      defaultValue: 'medium',
      options: [
        {
          label: 'Small',
          value: 'small',
        },
        {
          label: 'Medium',
          value: 'medium',
        },
        {
          label: 'Large',
          value: 'large',
        },
      ],
    },
    {
      name: 'logoSize',
      type: 'select',
      defaultValue: 'medium',
      options: [
        {
          label: 'Small',
          value: 'small',
        },
        {
          label: 'Medium',
          value: 'medium',
        },
        {
          label: 'Large',
          value: 'large',
        },
      ],
    },
    {
      name: 'enableHover',
      type: 'checkbox',
      defaultValue: true,
      label: 'Enable Hover Effect',
    },
    {
      name: 'enableGrayscale',
      type: 'checkbox',
      defaultValue: true,
      label: 'Enable Grayscale Effect',
    },
  ],
  labels: {
    singular: 'Logo Marquee',
    plural: 'Logo Marquees',
  },
} 