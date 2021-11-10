class Super {
    constructor() {
    this.name = 'Super';
    this.isSuper = true;
    }
    }
    // this is valid, but not a good idea...
    Super.prototype.sneaky = 'not recommended!';
    class Sub extends Super {
    constructor() {
    super();
    this.name = 'Sub';
    this.isSub = true;
    }
    }
    const obj = new Sub();
    for(let p in obj) {
    console.log(`${p}: ${obj[p]}` +
    (obj.hasOwnProperty(p) ? '' : ' (inherited)'));
    }