interface Category {
  thumbnail: string
  description: string
}

export const categoriesAlpineComponents: Record<string, Category> = {
  Dropdown: {
    thumbnail: '/thumbnails/components/alpine/dropdown.png',
    description:
      'Dropdown created with alpine js and tailwind css styless with various variants',
  },
  Modal: {
    thumbnail: '/thumbnails/components/alpine/modal.jpg',
    description:
      'modal component created using alpine js and tailwind css styles, with transitions built right in from alpine js',
  },
}
