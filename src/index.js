import { Octokit, App } from "octokit";

const octokit = new Octokit({
  auth:'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',
});

async function getData() {
  try {
  let response = await octokit.request("GET /repos/{owner}/{repo}/contents/{path}",{
    owner: "cataclysmbnteam",
    repo: "Cataclysm-BN",
    path: "data/json",
    headers: {
      accept:"application/vnd.github.raw",
    }
  })

  let dataLoca = await response;
  console.log(dataLoca.data);
  let bionic = await fetch(dataLoca.data[7].download_url)
  let bionicJson = await bionic.json()
  console.log(bionicJson);
  let data =  await fetch("https://raw.githubusercontent.com/cataclysmbnteam/Cataclysm-BN/upload/data/json/bionics.json");
  let newData = await data.json()
  console.log(newData);
  }
  catch (error){
    console.log(error);
  }
}

getData()