//ex5
const livre = {
  titre: "1984",
  auteur: "George Orwell",
  annee: 1949,
  getInfo() {
    return `${this.titre} par ${this.auteur} (${this.annee})`;
  }
};
console.log( livre.getInfo());
//ex6
class Etudiant {
  constructor(nom, note) {
    this.nom = nom;
    this.note = note;
  }
  getMention() {
    if (this.note >= 16) return "Très bien";
    if (this.note >= 14) return "Bien";
    if (this.note >= 10) return "Passable";
    return "Échec";
  }
}
const e1 = new Etudiant("Alya", 17);
const e2 = new Etudiant("Bilel", 15);
const e3 = new Etudiant("Celia", 9);
console.log("Ex6:", e1.nom, "->", e1.getMention());
console.log("Ex6:", e2.nom, "->", e2.getMention());
console.log("Ex6:", e3.nom, "->", e3.getMention());
//ex7
const notes = [12, 5, 17, 9, 20];
const moyenne = notes.reduce((s, v) => s + v, 0) / notes.length;
const triDec = [...notes].sort((a,b) => b - a);
const notesOK = notes.filter(n => n >= 10);
console.log(" moyenne =", moyenne.toFixed(2));
console.log(" tri décroissant =", triDec);
console.log(" notes >= 10 =", notesOK);
