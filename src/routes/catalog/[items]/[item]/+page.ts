export const load = ({fetch, params}) => {
  const {items, item} = params
  const fetchItem = async (items: string, item: string) => {
    const response = await fetch(`https://raw.githubusercontent.com/cataclysmbnteam/Cataclysm-BN/upload/data/json/items/${items}/${item}`)
    const data = await response.json()
    return data
  }

  return {
    item: fetchItem(items, item),
    slug: params.item
  }
}