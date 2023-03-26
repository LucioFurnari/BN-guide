export const load = ({fetch, params}) => {
  console.log(params)
  const fetchItems = async (id:string) => {
    const response = await fetch(`https://api.github.com/repos/cataclysmbnteam/Cataclysm-BN/contents/data/json/items/${id}`)
    const data = await response.json()
    return data
  }
  async function itemList(id:string) {
    try {
      const response = await fetchItems(id)
      if (Array.isArray(response)) {
        const data: unknown = await Promise.all(response.map(async (item: { download_url: RequestInfo | URL; }) => {
          const response = await fetch(item.download_url);
          const data = await response.json();
          return data;
        }))
        return data
      } else {
        const list = await fetch(response.download_url)
        const data = await list.json()
        return data
      }
    } catch (err) {
      console.log(err)
    }
  }

  return {
    items: itemList(params.item)
  }
}