export const load = ({fetch}) => {
  const fetchCatalog = async () => {
    const response = await fetch('https://api.github.com/repos/cataclysmbnteam/Cataclysm-BN/contents/data/json/items')
    const data = await response.json()
    return data
  }
  return {
    list : fetchCatalog()
  }
}