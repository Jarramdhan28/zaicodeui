export interface ComponentFileMeta {
  file: string
  category: string
  title: string
}

export const componentFiles: ComponentFileMeta[] = [
  // Alerts Components
  {
    file: 'components/html/alert/alert.html',
    category: 'Alerts',
    title: 'Base Alert'
  },
  {
    file: 'components/html/alert/alert-with-message.html',
    category: 'Alerts',
    title: 'Base Alert With Messages'
  },
  {
    file: 'components/html/alert/alert-with-action.html',
    category: 'Alerts',
    title: 'Base Alert With Action'
  },
  // Button Components
  {
    file: 'components/html/button/button.html',
    category: 'Buttons',
    title: 'Button Primary'
  },
  {
    file: 'components/html/button/button-outline.html',
    category: 'Buttons',
    title: 'Button Outline'
  },
  // Card Components
  {
    file: 'components/html/card/card.html',
    category: 'Cards',
    title: 'Base Card'
  },
  {
    file: 'components/html/card/card-product.html',
    category: 'Cards',
    title: 'Product Card',
  },
]
