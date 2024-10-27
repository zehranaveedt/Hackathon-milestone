const Form =document.getElementById('resume-form') as HTMLFormElement
const Resumedisplayelement =document.getElementById('resume-display')as HTMLDivElement

Form.addEventListener('sumbit', (event: Event)=> {
    event.preventDefault();

    const name= (document.getElementById('name') as HTMLInputElement).value
    const email= (document.getElementById('email') as HTMLInputElement).value
    const phone= (document.getElementById('phone') as HTMLInputElement).value
    const objective= (document.getElementById('objective') as HTMLInputElement).value
    const education= (document.getElementById('education') as HTMLInputElement).value
    const experience= (document.getElementById('experience') as HTMLInputElement).value
    const skills= (document.getElementById('skills') as HTMLInputElement).value

    const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
    <label><b>Name:</b><span contendeditable="true">${name}</span></lable>
    <label><b>Email Address:</b><span contendeditable="true">${email}<?span></label>
    <label><b>Phone no:</b><span contendeditable="true">${phone}</span></label>
    
     <h2>Objective</h2>
     <p contendeditable="true">${objective}</p>
     
      <h2>Education</h2>
     <p contendeditable="true">${education}</p>
     
      <h2>Experience</h2>
     <p contendeditable="true">${experience}</p>
     
      <h2>Skills</h2>
     <p contendeditable="true">${skills}</p>
     `;

     if(Resumedisplayelement){
        Resumedisplayelement.innerHTML = resumeHTML;
     }else{
        console.error('The resume display element is missing.');

     }

    
});