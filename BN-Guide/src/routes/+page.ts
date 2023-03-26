/** @type {import('./$types').PageLoad} */
export const load: import('./$types').PageLoad = async ({fetch}) => {
  async function FetchApi() {
    try {
      const response = await fetch('https://api.github.com/repos/cataclysmbnteam/Cataclysm-BN/contents/data/json/items/ammo?ref=upload')
      const data = await response.json()
      return data
    } catch(err) {
      console.log(err);
    }
  }

  async function ListApi() {
    try {
      const response = await FetchApi()
      const data: unknown = await Promise.all(response.map(async (item: { download_url: RequestInfo | URL; }) => {
        const response = await fetch(item.download_url);
        const data = await response.json();
        return data;
      }))
      return data
    } catch (err) {
      console.log(err)
    }
  }

  return {data: ListApi()}
}