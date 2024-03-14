const category = document.getElementById('quote-categories');
const quote = document.getElementById('quote');
const author = document.getElementById('author');

// https://api-ninjas.com/examples/basic-web-app#makingapicall
// let demo= [{"quote": "I'd always thought the Rats were good fun, but one of the very nice things about being of Saga age is that I can actually look back and think, When I was younger I was in a great band. It was always a collective thing.", "author": "Bob Geldof", "category": "age"}]

const generateQuote = async ()=>{
    if (category.value==='') {
        alert('Please choose a category to generate quote from.')
    }
    else{
        try {
            let url = `https://api.api-ninjas.com/v1/quotes?&X-Api-Key=UO7mjMWsNZjLoXDAkoYdBw==OpvoU6T5jNSzNjkl&category=${category.value}`;

            let call = await fetch(url);
            let response = await call.json();
    
            quote.innerHTML= "'" + response[0].quote +"'";
            author.innerHTML= "~" + response[0].author;
        } catch (error) {
            alert('Invalid Category, Please select category from the list only.');
            category.value='';
        }
       
    }
}
function tweetQuote() {
    window.open(`https://twitter.com/intent/tweet?text=${quote.innerHTML+' '+author.innerHTML}`,'_blank');
}
function copyQuote() {
    navigator.clipboard.writeText(quote.innerHTML+' '+author.innerHTML);
}
function clearInput() {
    category.value = '';
}
generateQuote();

document.addEventListener('keydown',(e)=>{
    if (e.key===' ' || e.key==='Spacebar') {
        generateQuote();
    }
})