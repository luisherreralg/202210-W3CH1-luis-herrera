export class Character {
    //   ally: King | null;
    //   advised: King | Fighter | null;
    constructor(name, family, age) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.lifeStatus = true;
        this.message = '';
    }
    comunique() {
        return this.message;
    }
    death() {
        this.lifeStatus = false;
    }
}
Character.serie = 'Game of Thrones';
