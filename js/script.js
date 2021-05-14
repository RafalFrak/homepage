{
    const welcome = () => {
        console.log("Witam, witam i o zdrowie pytam!!");
    };

    const togglePopup = () => {

        const popup = document.querySelector(".pop-up");
        popup.classList.toggle("move-pop-up");

    }

    const changeTextButton = () => {

        const changeTextButton = document.querySelector(".js-changeTextButton");
        changeTextButton.innerText = changeTextButton.innerText === "Klik i nie ma" ? "Klik i jest" : "Klik i nie ma";

    }

    const toggleBackground = () => {
        
        const section = document.querySelector(".addSection");

        section.classList.toggle("addSection--dark");

        changeTextButton();
        togglePopup();

    }
    
    const init = () => {

        const changeBackgroundButton = document.querySelector(".section__button");
        changeBackgroundButton.addEventListener("click", toggleBackground);
        
        welcome();
    } 

    init();
}