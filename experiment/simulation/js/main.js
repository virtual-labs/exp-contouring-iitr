
function Reset() 
{

window.location.reload();
}

function show_hide1()
{
    if (document.getElementById("field-div1").src = "images/arrow1.png") 
    {
        document.getElementById("field-div1").style.display="none";
        document.getElementById("image1").style.display="inline";
    }
    else
    {
        document.getElementById("field-div1").src = "images/arrow1.jpg";
        document.getElementById("image1").style.display="inline";
           
    }
        
    
}
function show_hide2()
{
    if (document.getElementById("field-div2").src = "images/arrow2.png") 
    {
        
        document.getElementById("image1").style.display="none";
        document.getElementById("field-div2").style.display="none";
        document.getElementById("image2").style.display="inline";
    }
    else
    {
            document.getElementById("field-div2").src = "images/arrow2.png";
    }
        
    
}
function show_hide3()
{
    if (document.getElementById("field-div3").src = "images/arrow3.png") 
    {
        
        document.getElementById("image2").style.display="none";
        document.getElementById("field-div3").style.display="none";
        document.getElementById("image3").style.display="inline";
    }
       
        else
        {
            document.getElementById("field-div3").src = "images/arrow3.png";
        }

}
function show_hide4()
{
    if (document.getElementById("field-div4").src = "images/arrow4.png") 
    {
        
        document.getElementById("image3").style.display="none";
        document.getElementById("field-div4").style.display="none";
        document.getElementById("image4").style.display="inline";
            
    }
    else
    {
            document.getElementById("field-div4").src = "images/arrow4.png";
           
    }
           
}
function show_hide5()
{
    if (document.getElementById("field-div5").src = "images/arrow5.png") 
    {
        
        document.getElementById("image4").style.display="none";
        document.getElementById("field-div5").style.display="none";
        document.getElementById("image5").style.display="inline";
            
    }
       
    else
    {
        document.getElementById("field-div5").src = "images/arrow5.png";
    }
        
}
function show_hide6()
{
    if (document.getElementById("field-div6").src = "images/arrow6.png") 
    {
        
        document.getElementById("image5").style.display="none";
        document.getElementById("field-div6").style.display="none";
        document.getElementById("image6").style.display="inline";
            
    }
       
    else
    {
        document.getElementById("field-div6").src = "images/arrow6.png";
    }
        
    
}
function draw1()
{
    
    setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-65px,-50px)scale(1)rotateY(150deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobj1img").style.display="inline"}, 400);
}

function draw2()
{
    
    setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-55px,-95px)scale(3)rotateY(100deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobj2img").style.display="inline"}, 400);
}

function draw3()
{
    
    setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-40px,-90px)scale(3)rotateY(88deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobj3img").style.display="inline"}, 400);
}

function draw4()
{
    
    setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-35px,-65px)scale(2)rotateY(80deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobj4img").style.display="inline"}, 400);
}

function draw5()
{
    
    setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-30px,-60px)scale(2)rotateY(70deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobj5img").style.display="inline"}, 400);
}
function draw6()
{
    
    setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-20px,-55px)scale(1)rotateY(390deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobj6img").style.display="inline"}, 400);
}

const imgs = Array.from(document.querySelectorAll('.scale'));
        // Add event listener for document:
        document.addEventListener('click', event => {
            // Has one of the images been clicked?
            if (event.target.classList.contains('scale')) {
                // Add class indicating that is has been clicked:
                event.target.classList.add('is-clicked');
                // Check if all images have been clicked:
                if (!imgs.find(item => !item.classList.contains('is-clicked'))) {
                    // Make button visible:
                   
                    setInterval(() => { document.querySelector('#result').style.display = 'inline'}, 500);
                  
                    setTimeout(() => {  swal('Good job!','Please click on the RESULT button to proceed further','success') }, 1000);

                   
                }
                
            }
        });
