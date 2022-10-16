// Write your classes here
class Tree{
    constructor(species){
        this.species=species;

    }
    static definition(){
        return ' A tree is a perennial plant whit an elongated stem , or trunk , supporting branches and leaves.';
    }
    }
    class deciduous extends Tree{
        constructor(species,name){
            super(species);
            this.name=name;
        }
        static definition(){
            return '${super.definition()}Decifuous trees shed their leaves annually.';

        }
    }
    class Evergreen extends Tree{
        constructor(species,name){
            super(species);
            this.name;
        }
        static definition(){
            return '${super.definition()} Everygreens keep their leaves all year round.';

        }
    }
