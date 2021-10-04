
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
    if (document.getElementById("field-div5").src = "images/arrow4.png") 
    {
        
        document.getElementById("field-div5").style.display="none";
        document.getElementById("image5").style.display="inline";
            
    }
       
    else
    {
            document.getElementById("field-div5").src = "images/arrow4.png";
    }
        
    
}
function draw1()
{
    document.getElementById("image1").style.display="none";
    setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-95px,-55px)scale(1)rotateY(150deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobj1img").style.display="inline"}, 400);
   
    /*document.getElementById("drawobjimg").animate([
        // keyframes
        { transform: 'translate(0px,0px)' },
        { transform: 'translate(-95px,-55px)scale(1)rotateY(150deg)' },
        { transform: 'translate(0px,0px)' }
      ], {
        // timing options
        duration: 1000
        
      });
    setInterval(() => {document.getElementById("lineobj1img").style.display="inline"
        
    }, 700);*/
    

        

}

function draw2()
{
    document.getElementById("image2").style.display="none";
    setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-80px,-50px)scale(1.5)rotateY(120deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobj2img").style.display="inline"}, 400);
   /* document.getElementById("drawobjimg").animate([
        // keyframes
        { transform: 'translate(0px,0px)' },
        { transform: 'translate(-80px,-50px)scale(1.5)rotateY(120deg)' },
        { transform: 'translate(0px,0px)' }
      ], {
        // timing options
        duration: 1000
       
      });
    setInterval(() => {document.getElementById("lineobj2img").style.display="inline"
        
    }, 500);*/
}

function draw3()
{
    document.getElementById("image3").style.display="none";
    setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-65px,-55px)scale(2)rotateY(85deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobj3img").style.display="inline"}, 400);
   /* document.getElementById("drawobjimg").animate([
        // keyframes
        { transform: 'translate(0px,0px)' },
        { transform: 'translate(-55px,-50px)scale(1.5)rotateY(85deg)' },
        { transform: 'translate(0px,0px)' }
      ], {
        // timing options
        duration: 1000
     
      });
    setInterval(() => {document.getElementById("lineobj3img").style.display="inline"
        
    }, 500);*/
    
    
}

function draw4()
{
    document.getElementById("image4").style.display="none";
    setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-55px,-50px)scale(1)rotateY(30deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobj4img").style.display="inline"}, 400);
    /*document.getElementById("drawobjimg").animate([
        // keyframes
      
        { transform: 'translate(0px,0px)' },
        { transform: 'translate(-55px,-50px)'},
        {transform:'rotateY(30deg)' },
        { transform: 'translate(0px,0px)' }
      ], {
        // timing options
        duration: 1000
        
      });
    setInterval(() => {document.getElementById("lineobj4img").style.display="inline"
        
    }, 300);*/
   
 
    
}

function draw5()
{
    document.getElementById("image5").style.display="none";
    setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-40px,-55px)scale(1)rotateY(390deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobj5img").style.display="inline"}, 400);
    /*document.getElementById("drawobjimg").animate([
        // keyframes
      
        { transform: 'translate(0px,0px)' },
        { transform: 'translate(-40px,-55px)'},
        {transform:'rotateY(390deg)' },
        { transform: 'translate(0px,0px)' }
      ], {
        // timing options
        duration: 1000
     
      });
    setInterval(() => {document.getElementById("lineobj5img").style.display="inline"}, 300);*/
 
  
    
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
