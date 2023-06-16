document.addEventListener("DOMContentLoaded", startFn);

function startFn()
{
    console.log("loaded");

    let menu = document.querySelectorAll(".categorybnt div div");
    let contents = document.querySelectorAll("#hafbtnBox > div");
    
    let scrollPos = 0;
    let targetScrollPos;
    let nowScrollPos = pageYOffset;

    let scrollAni;

    window.addEventListener('scroll', scrollFn);

    function scrollFn()
    {
        nowScrollPos = pageYOffset;
        scrollPos = nowScrollPos;
        //console.log(nowScrollPos);
    }

    for(let i =0; i < menu.length; i++)
    {
        menu[i].addEventListener('click',

        function()
        {
            let index = this.getAttribute('clickNum');
            //console.log(index);

            targetScrollPos = contents[index].offsetTop;
            //console.log(targetScrollPos);

            scrollAni = requestAnimationFrame(moveTo);
        }

        );
    }

    function moveTo()
    {
        scrollPos += (targetScrollPos - nowScrollPos)*0.2;
        window.scroll(0, scrollPos);

        if(Math.abs(targetScrollPos - scrollPos) <= 1)
        {
            window.scroll(0,targetScrollPos);
            cancelAnimationFrame(scrollAni);
        }
        else{
            scrollAni = requestAnimationFrame(moveTo);
        }
    }
}

function scrollToCategory() {
    var categoryDiv = document.getElementById('cat');
    categoryDiv.scrollIntoView({ behavior: 'smooth' });
}

function scrollToCategory2() {
    var categoryDiv = document.getElementById('hafbt2Box');
    categoryDiv.scrollIntoView({ behavior: 'smooth' });
}

function scrollToCategory3() {
    var categoryDiv = document.getElementById('mainContainer');
    categoryDiv.scrollIntoView({ behavior: 'smooth' });
}