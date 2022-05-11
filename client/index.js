const button=document.getElementById('but');
const url=document.getElementById('url-field');
const link=document.querySelector('.col-lg-12');

button.addEventListener('click',async (event)=>{
    event.preventDefault();
    const longUrl=url.value;
    url.value="";
    const {data}=await axios.post('/api/url/shorten',{longUrl});
    let a=document.createElement('a');
    a.innerHTML=`<a class="result" href="${data.shortUrl}">${data.shortUrl}</a>`;
    a.style.backgroundColor='rgb(255,255,255)';
    a.style.padding='20px';
    link.innerHTML=``;
    link.append(a);
});