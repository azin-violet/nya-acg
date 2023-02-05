interface AcgItem {
  imageUrl: string
  title: string
  description: string
  exteralUrl: string
}

interface AcgSection {
  categeryName: string,
  items: AcgItem[],
}