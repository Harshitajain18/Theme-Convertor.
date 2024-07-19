let allBtn = document.querySelectorAll(".btn");
let clearBtn = document.querySelector(".clear");
// const getThemeValue = () => {
// }
const storedThemeValue = localStorage.getItem('theme');
document.querySelector("body").style.backgroundColor = storedThemeValue;

allBtn.forEach((button)=>{
    button.addEventListener("click", (event) =>{
        
        if(event.target.id=='red'){
            document.querySelector('body').style.backgroundColor = 'red'
        } 
        else if(event.target.id=='black'){
            document.querySelector('body').style.backgroundColor = 'black'
        }
        else if(event.target.id=="yellow"){
            document.querySelector("body").style.backgroundColor="yellow"
        }
        else if(event.target.id=="green"){
            document.querySelector("body").style.backgroundColor="green"
        }
        else if(event.target.id=="purple"){
            document.querySelector("body").style.backgroundColor="purple"
        }

        localStorage.setItem('theme', event.target.id);
        document.location.reload();
    });
});
clearBtn.addEventListener("click",()=>{
    localStorage.removeItem('theme');
    document.location.reload();
    // document.querySelector("body").style.backgroundColor="white";
})
