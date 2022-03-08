const selectElement = document.getElementById('formSelect');
const checkValue = selectElement.options[selectElement.selectedIndex].value;
const checkInner = selectElement.options[selectElement.selectedIndex].text;
selectElement.onchange= function () {
  location.href = '#showProducts'
}
document.getElementById('formSelect').onselect = function () {
  location.href  = '#showProducts'
}


selectElement.addEventListener('change', (event)  => {
    
const value = event.target.value;
const innerHTML = selectElement.options[selectElement.selectedIndex].innerHTML;

if (value == 1) {
  document.getElementById('showProducts').innerHTML = ` 
 
  <div style="background-color: rgb(255, 255, 255) ;  " class="col  container-fluid h-50 m-2 "> 

                <div  class="row align-items-center  ">
                  <div class="col m-3 d-flex justify-content-center"><img id="servers" src="./assets/img/2u-web-server-1243690.jpg" alt="server"></div>
                  <div class="col m-1">
                   <p>DELL 3010SFF (UC TOUR)</p>
                   <p style="text-align: left; color: rgb(255, 174, 0);">DELL</p>
                   <p style="text-align: left;"><i class="fa-solid fa-circle-check"></i> Refubrished - <i class="fa-solid fa-shield"></i> Under Warranty </p>
                   <p  style="text-align: left;">The Dell 3010 SFF CPU offers you basic productivity, simple IT control and stable lifecycles.</p>
                   <hr> <br>
                   <div class="col d-flex justify-content-center ">
                     <a  class="button-quote  " target="blank" href="./contact.html">ASK FOR QUOTE</a>
                   </div>
                  
                  </div>
                  
                  
                </div>
 
               </div>
 
               <div style="background-color: white;" class="container-fluid  col h-50 m-2 "> 
                 
                 <div   class="row align-items-center  ">
 
                   <div  class="col m-3 d-flex justify-content-center"><img id="servers" src="./assets/img/professional-server-rack-1547533.jpg" alt="server"></div>
                     <div class="col m-1">
                      <p>HP PROLIANT DL360 (BLADE)</p>
                      <p style="text-align: left; color: rgb(255, 174, 0);">DELL</p>
                      <p style="text-align: left;"><i class="fa-solid fa-circle-check"></i> Refubrished - <i class="fa-solid fa-shield"></i> Under Warranty </p>
                      <p  style="text-align: left;">The HP PROLIAN BLADE offers you basic productivity, simple IT control and stable lifecycles.</p>
                      <hr> <br>
                      <div class="col d-flex justify-content-center ">
                       <a  class="button-quote " target="blank"  href="./contact.html">ASK FOR QUOTE</a>
                      </div>
                     
                     </div>
    
                    </div>
               
               </div>
               
 
  
  `;
} else  {
  document.getElementById('showProducts').innerHTML = `
  
  <div style="background-color: rgb(255, 255, 255) ;  " class="col  container-fluid h-50 m-2 "> 

                <div  class="row align-items-center  ">
                  <div class="col m-3 d-flex justify-content-center"><img id="laptops" src="./assets/img/laptop2.jpg" alt="laptop"></div>
                  <div class="col m-1">
                   <p>Mac Book Air  (Os Capitan)</p>
                   <p style="text-align: left; color: rgb(255, 174, 0);">APPLE</p>
                   <p style="text-align: left;"><i class="fa-solid fa-circle-check"></i> Refubrished - <i class="fa-solid fa-shield"></i> Under Warranty </p>
                   <p  style="text-align: left;">The Mac Book Air  offers you basic productivity, simple IT control and stable lifecycles.</p>
                   <hr> <br>
                   <div class="col d-flex justify-content-center ">
                     <a  class="button-quote  "  target="blank" href="./contact.html">ASK FOR QUOTE</a>
                   </div>
                  
                  </div>
                  
                  
                </div>
 
               </div>
 
               <div style="background-color: white;" class="container-fluid  col h-50 m-2 "> 
                 
                 <div   class="row align-items-center  ">
 
                   <div  class="col m-3 d-flex justify-content-center"><img id="laptops" src="./assets/img/laptop1.jpg" alt="laptop"></div>
                     <div class="col m-1">
                      <p>Asus GL552 (Winsows 11)</p>
                      <p style="text-align: left; color: rgb(255, 174, 0);">ASUS</p>
                      <p style="text-align: left;"><i class="fa-solid fa-circle-check"></i> Refubrished - <i class="fa-solid fa-shield"></i> Under Warranty </p>
                      <p  style="text-align: left;">The Asus Gamer Gl552 offers you basic productivity, simple IT control and stable lifecycles.</p>
                      <hr> <br>
                      <div class="col d-flex justify-content-center ">
                       <a  class="button-quote " target="blank"  href="./contact.html">ASK FOR QUOTE</a>
                      </div>
                     
                     </div>
    
                    </div>
               
               </div>
  
  `
} 


   
    
})



function reloadForm () {
    if (confirm('Do you want to reload this Landing Page?'))
    location.reload()
}