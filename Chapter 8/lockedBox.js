const box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked(body) {
  // Your code here.
  orig_locked = false;
  if(box.locked) {
      box.unlock()
      orig_locked = true;
  }
  try {
      body()
  }
  finally {
      if(orig_locked) {
          box.lock()
      }
  }

}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}
console.log(box.locked);
// → true

box.unlock()
withBoxUnlocked(function() {
  box.content.push("jewels");
});
console.log(box.content)
console.log(box.locked);
//should be false!
