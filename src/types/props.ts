export interface HeroCardProps {
  title?: string
  description?: string
  icon?: string
}

export interface ComponentCardProps {
  title: string
  componentCount: string
  to: string
  image?: string
}

export interface ShowcaseCardProps {
  title: string
  description: string
  image?: string
  toShow: string
  toTemplate: string
  categories: {
    name: string
    color: string
  }[]
}


