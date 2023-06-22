// Date setup
const date = document.getElementById('date') as HTMLSpanElement
date.innerHTML = new Date().getFullYear().toString() 


// nav bar setup
const navToggle = document.querySelector('.nav-toggle') as HTMLButtonElement
const linksContainer = document.querySelector('.links-container') as HTMLDivElement
const links = document.querySelector('.links') as HTMLUListElement

// nav bar toogle
navToggle.addEventListener('click',(e)=>{
  e.preventDefault()
  // linksContainer.classList.toggle("show-links") 
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if(containerHeight === 0){
    linksContainer.style.height = `${linksHeight}px`
  }else{
    linksContainer.style.height = `0`
  }
})

const navbar = document.getElementById('nav') as HTMLElement
const topLink = document.querySelector('.top-link') as HTMLAnchorElement

//fixed navbar
window.addEventListener('scroll',()=>{
  const scrollHeight = window.scrollY
  const navHeight = navbar.getBoundingClientRect().height
  if(scrollHeight>=navHeight){
    navbar.classList.add('fixed-nav')
  }else{
    navbar.classList.remove('fixed-nav')
  }
  
  if(scrollHeight>=300){
    topLink.classList.add('show-link')
  }else{
    topLink.classList.remove('show-link')
  }
})

//select links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link)=>{
  link.addEventListener('click',(e)=>{
    e.preventDefault()
    //nav to specific spot
    const containerHeight:number = linksContainer.getBoundingClientRect().height;
    const navHeight:number = navbar.getBoundingClientRect().height;
    const fixedNav:boolean = navbar.classList.contains('fixed-nav')
    const id:string = ((e.currentTarget as HTMLAnchorElement).getAttribute('href') as string).slice(1);
    const element = document.getElementById(id) as HTMLElement
    console.log(navHeight)
    let position = element.offsetTop - navHeight;

    if(!fixedNav){
      position = position - navHeight;
    }

    if(navHeight>82){
      position = position + containerHeight
    }

    window.scrollTo({
      left:0,
      top: position 
    })
    linksContainer.style.height = `0`
  })
})