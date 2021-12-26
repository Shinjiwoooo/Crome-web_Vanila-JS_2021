const quotes = [
    {
        quote : "꿈을 이루고자 하는 용기만 있다면 모든 꿈을 이룰 수 있다.",
        author: "명언"
    },
    {
        quote : "비록 해가 진다고 해도, 나에게는 전기불이 있다.",
        author: "명언"
    },
    {
        quote : "웃음이 없는 하루는 버린 하루다.",
        author: "명언"
    },
    {
        quote : "우리는 한 번도 존재하지 않았던 것을 꿈꿀 수 있는 사람들이 필요하다.",
        author: "명언"
    },
    {
        quote : "변화는 우리가 누군가나 무엇, 혹은 후일을 기다린다고 찾아오지 않는다. 우리 자신이 우리가 기다리던 사람이고 우리가 바로 우리가 추구하는 변화이다.",
        author: "명언"
    },
    {
        quote : "무슨 일을 하기 전에는 그 일에 대해 기대를 가져야 한다.",
        author: "명언"
    },
    {
        quote : "남들이 할 수 있거나 하려는 일을 하지 말고 남들이 할 수 없거나 하지 않으려는 일을 하라.",
        author: "명언"
    }
]

const quote = document.querySelector('#quote span:first-child')
const author = document.querySelector('#quote span:last-child')

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)])

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author