const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = array => {
  let win = array.find(array => array.result === "W")
  return win ? win.year : undefined;
};

