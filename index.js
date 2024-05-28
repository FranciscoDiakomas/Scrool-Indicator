window.addEventListener('scroll',()=>{
        let incator = document.getElementById("scroll-indicator")
        const alturaTela = document.body.scrollHeight - window.innerHeight 
        let alturaPerc = ( window.scrollY / alturaTela) * 100
        incator.style.width = `${alturaPerc}%`
    
})
