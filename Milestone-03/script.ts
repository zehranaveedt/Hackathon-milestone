const form = document.getElementById('resume-form') as HTMLFormElement;
const resumedisplayelement = document.getElementById('resume-display') as HTMLDivElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const objective = (document.getElementById('objective') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    const resumeHTML = `
        <h2><b>Resume</b></h2>
        <label><b>Name:</b> ${name}</label>
        <label><b>Email Address:</b> ${email}</label>
        <label><b>Phone no:</b> ${phone}</label>

        <h2>Objective</h2>
        <p>${objective}</p>

        <h2>Education</h2>
        <p>${education}</p>

        <h2>Experience</h2>
        <p>${experience}</p>

        <h2>Skills</h2>
        <p>${skills}</p>
    `;

    if (resumedisplayelement) {
        resumedisplayelement.innerHTML = resumeHTML;
    } else {
        console.error('The resume display element is missing.');
    }
});