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
    title: 'Basic Alert'
  },
  {
    file: 'components/html/alert/alert-with-message.html',
    category: 'Alerts',
    title: 'Basic Alert With Messages'
  },
  {
    file: 'components/html/alert/alert-with-action.html',
    category: 'Alerts',
    title: 'Basic Alert With Action'
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
    title: 'Basic Card'
  },
  {
    file: 'components/html/card/card-product.html',
    category: 'Cards',
    title: 'Product Card',
  },
  {
    file: 'components/html/card/card-profile.html',
    category: 'Cards',
    title: 'Profile Card',
  },
  {
    file: 'components/html/card/card-category.html',
    category: 'Cards',
    title: 'Category Product Card',
  },
  {
    file: 'components/html/card/card-pricing.html',
    category: 'Cards',
    title: 'Pricing Card',
  },
  {
    file: 'components/html/badge/badge.html',
    category: 'Badges',
    title: 'Basic Badge',
  },
  {
    file: 'components/html/badge/badge-outline.html',
    category: 'Badges',
    title: 'Badge Outline',
  },
  {
    file: 'components/html/badge/badge-icon.html',
    category: 'Badges',
    title: 'Badge With Icon',
  },
]
