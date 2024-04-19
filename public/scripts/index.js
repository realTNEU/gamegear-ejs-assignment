import mysql from '../node_modules/mysql2';
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const pool = require('./db');
function contactSubmit() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  console.log(name)
  console.log(email)
  console.log(message)
  if(name=''){
      alert("Please enter your details")
  }
  else if(email==''){
          alert("Please enter your details")
      }
  else if(message==''){
              alert("Please enter your message")
          }
  else{
      alert("Your message has been sent")
  }
  try {
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to MySQL database:', err);
            throw err; // Re-throw to indicate connection failure
        }

        console.log('Connected to MySQL database!');

        connection.query(`INSERT INTO contact(name,email,message) values('${name}','${email}','${message}');`, (error, results, fields) => {
          if (error) {
              console.error('Error executing query:', error);
          } else {
              console.log('Query results:', results); // Array of rows
              console.log('Query fields:', fields); // Array of field metadata
          }
      });
      
        connection.release(); 
    });
} catch (error) {
    console.error('Error:', error);
}
  pool.getConnection((err, connection) => {
   console.log(err)
  });
}

async function fetchUsers() {
    try {
      const response = await fetch(`accounts.json`);
      if (!response.ok) {
        throw new Error(`Failed to fetch user data: ${response.status}`);
      }
      const users = await response.json();
      return users;
    } catch (error) {
      console.error('Error fetching user data:', error);
          return []; 
    }
  }
async function loginSubmit() {
    const enteredemail = document.getElementById('lemail').value;
    const enteredPassword = document.getElementById('lpassword').value;
    try {
      const users = await fetchUsers();
        for (const user of users) {
        if (user.email === enteredemail && user.password === enteredPassword) {
          alert('Login Success')
          console.log('Login successful');
          window.location.href = "index.html";
         let button= document.querySelector('.loginbuttonnav')
         if(button){
            button.computedStyleMap.display='none';
         }
         else{
            console.log('Button not found');
            
         }
          break; 
        }
        else if(user.email !== enteredemail ||  user.password!== enteredPassword){
            alert('Invalid credentials')
                        console.log('Login failed');
                        break;
        }
      }
    } catch (error) {
      console.error('Error:', error);
     }}
     function signUPSubmit(){
      const signUpForm = document.querySelector('.signup-form');
      let formData;
      signUpForm.addEventListener('submit', event => {
          event.preventDefault();
          formData = new FormData(signUpForm); 
          const data = Object.fromEntries(formData);
          console.log(data);
      });
        var name = document.getElementById("sname").value;
        var email = document.getElementById("semail").value;
        var password = document.getElementById("spassword").value;
        console.log(name)
        console.log(email)
        console.log(password)
        if(name.length <= 3){
          alert("Please enter a valid name")
        }
        if(email.length <= 9){
          alert("Please enter a valid email \n A Valid Email Must Contain atleast 9 alphanumeric values along with a symbol @ and .")
        }
        if(password.length <= 7){
          alert("Please enter a valid password \n A Valid Password Must Contain atleast 8 alphanumeric values along with a special symbols")
                  }
        else{
          alert("Signed Up Successfully")
}}
function updateBudget() {
const budget = Number(document.getElementById("budgetSlider").value);
document.getElementById("budgetDisplay").innerHTML = budget;
const specDisplay = document.getElementById("specDisplay");
const budgetName = document.getElementById("budgetName");
const cpu= document.getElementById("cpu");
const gpu= document.getElementById("gpu");
const ram= document.getElementById("ram");
const cpulink= document.getElementById("cpulink");
const gpulink= document.getElementById("gpulink");
const ramlink= document.getElementById("ramlink");
const caselink= document.getElementById("caselink");
const aiolink= document.getElementById("aiolink");
const motherboardlink= document.getElementById("motherboardlink");
    if (budget <= 45000) {
      budgetName.innerHTML='Budget Build';
      cpu.innerHTML = 'Processor: Ryzen 5 5600x';
      gpu.innerHTML = 'Graphics Card: GTX 1660ti';
      ram.innerHTML = 'RAM: 16GB DDR4';
      caselink.innerHTML = "Case: <a href=''>Cooler Master MasterBox Q30L</a>";
      aiolink.innerHTML = "AIO/Cooling: <a href=''>Corsair Hydro H60 </a>";
      motherboardlink.innerHTML = "Motherboard: <a href=''>ASUS B550M Mortar Wifi </a> ";
      cpulink.innerHTML = "Processor: <a href=''>Ryzen 5 5600x</a>";
      gpulink.innerHTML = "Graphics Card: <a href=''>GigaByte Geforce GTX 1660ti</a>";
      ramlink.innerHTML = "RAM: <a href=''>G.Skill Ripjaws V 16GB (2x8GB) 3600MHz CL1</a>";
  } else if (budget <= 60000) {
      budgetName.innerHTML='Balanced Build'
      cpu.innerHTML = 'Processor: Rayzen 5 7600x'
      gpu.innerHTML = 'Graphics Card: RTX 2060 Super'
      ram.innerHTML = 'RAM: 16GB DDR4'
      caselink.innerHTML = "Case: <a href=''>NZXT H510</a>";
      aiolink.innerHTML = "AIO/Cooling: <a href=''>NZXT Kraken x53</a>";
      motherboardlink.innerHTML = "Motherboard: <a href=''>MSI B550M Mortar Wifi + Bluetooth</a> ";
      cpulink.innerHTML = "Processor: <a href=''>AMD RAyzen 5 7600x</a>";
      

      gpulink.innerHTML = "Graphics Card: <a href''>GigaByte Rtx 2060 Super</a>";
      ramlink.innerHTML = "RAM: <a href=''>Corsair Vengence 8x2 16Gb</a>";
  } else if (budget <= 80000) {
      budgetName.innerHTML='Mid-Ranged Build'
      cpu.innerHTML = 'Processor: Rayzen 7'
      gpu.innerHTML = 'Graphics Card: RTX 3060 Ti'
      ram.innerHTML = 'RAM: 16GB DDR5'
      caselink.innerHTML = "Case: <a href=''>Ant Esports ICE- 112 Mid- Tower Computer Case</a>";
      aiolink.innerHTML = "AIO/Cooling: <a href=''>NZXT Kraken x63</a>";
      motherboardlink.innerHTML = "Motherboard: <a href=''>ASUS Strix B750M Mortar Wifi</a> ";
      cpulink.innerHTML = "Processor: <a href=''>AMD Rayzen 7 5700x</a>";
      gpulink.innerHTML = "Graphics Card: <a href''>GigaByte Nvidia RTX 3060 Ti</a>";
      ramlink.innerHTML = "RAM: <a href=''>Corsair Vengence 8x2 16gb DDR5 4200Mhz</a>";
  } else if (budget <= 120000) {
      budgetName.innerHTML='Enthusiast Setup'
      cpu.innerHTML = 'Processor: Rayzen 9'
      gpu.innerHTML = 'Graphics Card: RTX 4060 Ti'
      ram.innerHTML = 'RAM: 32GB DDR4'
      caselink.innerHTML = "Case: <a href=' '>Lian Li Lancool IIx Mid-Tower Case</a>";
      motherboardlink.innerHTML = "Motherboard: <a href=''>Asus Strix B850M Mortar Wifi</a> ";
      aiolink.innerHTML = "AIO/Cooling: <a href=''>NZXT Kraken X63 Custom Tubing AIO</a>";
      cpulink.innerHTML = "Processor: <a href=''>Amd Rayzen 7 6800XU</a>";
      gpulink.innerHTML = "Graphics Card: <a href''>GigaByte NVIDIA RTX 4060 TI</a>";
      ramlink.innerHTML = "RAM: <a href=''>Corsair Vengence 8x4 32gb DDR5 4800Mhz</a>";
  } else if (budget <= 200000) {
      budgetName.innerHTML='High-End Setup:'
      cpu.innerHTML = 'Processor: intel i9 11TH Gen'
      gpu.innerHTML = 'Graphics Card: RTX 4080'
      ram.innerHTML = 'RAM: 32GB DDR5'
      caselink.innerHTML = "Case: <a href=' '>Corsair 4000D Airflow ATX Mid Tower Case</a>";
      aiolink.innerHTML = "AIO/Cooling: <a href=''>Nzxt Kraken Elite 360 RGB 360mm AIO Cooler</a>";
      motherboardlink.innerHTML = "Motherboard: <a href=''>Asus Strix B850M Mortar Wifi</a> ";
      cpulink.innerHTML = "Processor: <a href=''>intel i9 11700k</a>";
      gpulink.innerHTML = "Graphics Card: <a href''>GigaByte Nvidia RTX 4080</a>";
      ramlink.innerHTML = "RAM: <a href=''>Corsair Vengence 8x4 32gb DDR5 4800Mhz</a>";
  } else {
      budgetName.innerHTML='Ultra High-End Setup:'
      cpu.innerHTML = 'Processor: intel i9 13TH Gen'
      gpu.innerHTML = 'Graphics Card: RTX 4090 Ti'
      ram.innerHTML = 'RAM: 64GB DDR5'
      caselink.innerHTML = "Case: <a href=' '>Phanteks Enthoo Pro Full ATX Tower Case</a>";
      motherboardlink.innerHTML = "Motherboard: <a href=''>GIGABYTE Z790 AORUS MASTER X</a> ";
      cpulink.innerHTML = "Processor: <a href=''>Intel i9-13900K</a>";
      aiolink.innerHTML = "AIO/Cooling: <a href=''>Nzxt Kraken Elite 360 RGB 360mm</a>";
      gpulink.innerHTML = "Graphics Card: <a href''>ASUS ROG Strix GeForce RTX® 4090 OC Edition</a>";
      ramlink.innerHTML = "RAM: <a href=''>>Corsair Vengence 16x4 64GB DDR5 4800Mhz</a>";
  }
}


