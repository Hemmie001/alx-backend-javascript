export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true; // This is a different variable from the one outside the block
    let task2 = false; // This is a different variable from the one outside the block
  }

  return [task, task2];
}

