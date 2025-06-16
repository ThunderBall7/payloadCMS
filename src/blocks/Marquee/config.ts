import type { Block } from 'payload'

export const Marquee: Block = {
  slug: 'marquee',
  interfaceName: 'MarqueeBlock',
  labels: {
    singular: 'Marquee',
    plural: 'Marquees',
  },
  fields: [
    {
      name: 'text',
      type: 'text',
      required: true,
      label: 'Marquee Text',
    },
    {
      name: 'speed',
      type: 'select',
      label: 'Animation Speed',
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
      label: 'Direction',
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
      label: 'Background Color',
      defaultValue: '#ffffff',
      admin: {
        description: 'Enter a hex color code (e.g., #ffffff)',
      },
    },
    {
      name: 'textColor',
      type: 'text',
      label: 'Text Color',
      defaultValue: '#000000',
      admin: {
        description: 'Enter a hex color code (e.g., #000000)',
      },
    },
    {
      name: 'fontSize',
      type: 'select',
      label: 'Font Size',
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
        {
          label: 'Extra Large',
          value: 'xlarge',
        },
      ],
    },
    {
      name: 'padding',
      type: 'select',
      label: 'Padding',
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
      name: 'repeat',
      type: 'number',
      defaultValue: 3,
      min: 1,
      max: 10,
      label: 'Number of Repeats',
      admin: {
        description: 'How many times the text should repeat across the marquee',
      },
    },
  ],
}