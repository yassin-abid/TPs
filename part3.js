//ex8
const wait = ms => new Promise(res => setTimeout(res, ms));

async function ex8() {
  console.log(" Début");
  await wait(2000);
  console.log(" Fin (après 2s)");
}
ex8()
//ex9
async function ex9() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    console.log("les 5 premiers titres :");
    posts.slice(0,5).forEach((p,i) => console.log(`${i+1}. ${p.title}`));
  } catch (err) {
    console.error("Erreur fetch:", err.message);
  }
}
ex9();