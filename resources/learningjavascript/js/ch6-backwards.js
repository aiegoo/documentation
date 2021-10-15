if (process.argv.length < 3) {
  console.log("please include your name when entering command. goodbye.")
  process.exit(0);
}

const o = {
  name: process.argv[2],
  greetBackwards: function() {
    const getReverseName = () => {
      let nameBackwards = '';
      for(let i=this.name.length-1; i>=0; i--) {
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    }
    return `${getReverseName()} si eman ym ,olleH`;
  },
};
