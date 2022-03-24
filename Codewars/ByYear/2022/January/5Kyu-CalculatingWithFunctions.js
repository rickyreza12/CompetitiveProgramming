function operator(number, operator = null)
{
  if(operator != null)
  {
    return operator(number);
  }
  
  return number;
}

function zero(methods) {
  return operator(0, methods)
}

function one(methods) {
  return operator(1, methods)
}
function two(methods) {
  return operator(2, methods)
}
function three(methods) {
  return operator(3, methods)
}
function four(methods) {
  return operator(4, methods)
}
function five(methods) {
  return operator(5, methods)
}
function six(methods) {
  return operator(6, methods)
}
function seven(methods) {
  return operator(7, methods)
}
function eight(methods) {
  return operator(8, methods)
}
function nine(methods) {
  return operator(9, methods)
}

function plus(x) {
  return function(y)
  {
    return parseInt(y + x);
  }
}
function minus(x) {
  return function(y)
  {
     return parseInt(y - x);
  }
}
function times(x) {
  return function(y)
  {
    return parseInt(y * x)
  }
}
function dividedBy(x) {
  return function(y)
  {
    return parseInt(y/x)
  }
}
