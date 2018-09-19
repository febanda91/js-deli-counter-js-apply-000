var katzDeliLine = []
let i = 0
function takeANumber(katzDeliLine){
  i++
  katzDeliLine.push(i)
  return `You are number ${i}`
}

function nowServing(x) {
  if (x.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = x[0];
    x.splice(0,1);
    return "Currently serving " + name + ".";
  }
}

function currentLine(katzDeli) {
  var line = []
  let i = 0;
  while (i < katzDeli.length) {
    line.push(` `+[i+1]+`. `  + katzDeli[i])
    i++;
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}