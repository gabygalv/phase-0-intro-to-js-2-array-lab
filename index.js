// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name)
{
    cats.push(name);
}
;
function destructivelyPrependCat(name)
{
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name)
{
    cats.pop();
}
function destructivelyRemoveFirstCat(name)
{
    cats.shift();
}
function appendCat(name)
{
    return appendCat = [...cats,name];
}
function prependCat(name)
{
    return prependCat = [name,...cats];
}
function removeFirstCat()
{
    return cats.slice(1);
}
function removeLastCat()
{
    return cats.slice(0,cats.length-1);
}