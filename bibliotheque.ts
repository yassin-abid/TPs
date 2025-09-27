interface livre {
    id: number ;
    titre: string ;
    auteur: string ;
    year: number ;
    available: boolean ;
}

interface utilisateur {
    id: number ;
    name: string ;
    role: "admin" | "user"  ;
}

class Library {
    private books: livre[] ;
    constructor() {
        this.books = [] ;
    }
    ajouterLivre(livre: livre) : void {
        this.books.push(livre) ;
    }
    rechercherLivre(titre: string) : livre[] {
        return this.books.filter(book => book.titre.includes(titre)) ;
    }
    emprunterLivre(id: number) : boolean {
        const book = this.books.find(book => book.id === id && book.available) ;
        if (book) {
            book.available = false ;
            return true ;
        }   
        return false ;
    }
    retournerLivre(id: number) : boolean {
        const book = this.books.find(book => book.id === id && !book.available) ;
        if (book) {
            book.available = true ;
            return true ;
        }   
        return false ;
    }

}

abstract class Person {
    constructor(public name: string) {
    }
    abstract getRole(): string;
}
class Admin extends Person {
    getRole(): string {
        return "admin";
    }
}
class User extends Person {
    getRole(): string {
        return "user";
    }
}

class Repository<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return [...this.items];
    }

    findById(id: number): T | undefined {
     
        return this.items.find(item => (item as livre | utilisateur).id === id);
    }

    removeById(id: number): boolean {
        const index = this.items.findIndex(
            
            item => (item as livre | utilisateur ).id === id
        );
        if (index !== -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }
}

export type { livre, utilisateur };
export { Library };
export { Person, Admin, User };
export { Repository };