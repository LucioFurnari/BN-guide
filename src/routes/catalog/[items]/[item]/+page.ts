export const load = ({fetch, params}) => {
  const fetchItem =async (params:string) => {
    const response = await fetch(`https://raw.githubusercontent.com/cataclysmbnteam/Cataclysm-BN/upload/data/json/items/ammo/${params}`)
    const data = await response.json()
    return data
  }

  return {
    item: fetchItem(params.item),
    slug: params.item
  }
}