// const  btnTwo = document.querySelector('.btn');

// function alert_()
// {
//     alert("I love js")
// }

// btnTwo.addEventListener("click",alert_)

// const grabContainer = document.querySelector(".container")

// function getcontainer()
// {
//     grabContainer.style.backgroundColor = "coral";
// }

// grabContainer.addEventListener("mouseover",getcontainer);

const revealBtn = document.querySelector('.reveal-btn');

const hiddenContent = document.querySelector('.hidden');

function revealContent()
{
    if(hiddenContent.classList.contains('.reveal-btn'))
    {
        hiddenContent.classList.remove('.reveal-btn')
    }
    else
    {
        hiddenContent.classList.add('.reveal-btn')
    }
}

revealBtn.addEventListener('click',revealContent);
