export interface Components {
  id: string
  name: string
  description: string
  code: string
}

export interface ComponentData {
  id: string
  name: string
  description: string
  preview: string
  components: Components[]
}
