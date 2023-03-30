export const load = ({fetch}) => {
  const fetchCatalog = async () => {
    const response = await fetch('https://api.github.com/repos/cataclysmbnteam/Cataclysm-BN/contents/data/json/items', {
    headers: new Headers({
      'Authorization': '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',
    })
    })
    
    console.log(response)
    const data = await response.json()
    return data
  }
  return {
    list : fetchCatalog()
  }
}