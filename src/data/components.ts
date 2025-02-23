import { ComponentData } from '../types/component'

export const componentsData: ComponentData[] = [
  {
    id: 'card',
    name: 'Card',
    description: 'Card Style Banyak',
    preview: 'image.png',
    components: [
      {
        id: 'card-1',
        name: 'Card Rumahan Yellow',
        description: 'adalah',
        code: `
          <div class="border p-4 rounded-lg shadow-md">
            <h2 class="text-lg font-bold">Card Title</h2>
            <p class="text-gray-600">This is a simple card description.</p>
          </div>
        `
          .trim()
          .replace(/^\s+/gm, ''),
      },
      {
        id: 'card-2',
        name: 'Card Rumahan red',
        description: 'adalah',
        code: `<div class='border p-4 rounded-lg shadow-md bg-red-300'>Card Content</div>`,
      },
    ],
  },
  {
    id: 'button',
    name: 'Button',
    description: 'Button Style Banyak',
    preview: 'images/preview/button.png',
    components: [
      {
        id: 'btn-1',
        name: 'Button Rumahan Yellow',
        description: 'adalah',
        code: `<button class='border px-4 py-2 rounded-lg shadow-md bg-blue-700 text-white'>Submit</button>`,
      },
      {
        id: 'btn-2',
        name: 'Button Rumahan red',
        description: 'adalah',
        code: `<button class='border p-4 rounded-lg shadow-md bg-red-300'>Card Content</button>`,
      },
    ],
  },
]
