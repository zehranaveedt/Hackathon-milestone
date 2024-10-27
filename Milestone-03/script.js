var form = document.getElementById('resume-form');
var resumedisplayelement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var objective = document.getElementById('objective').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n        <h2><b>Resume</b></h2>\n        <label><b>Name:</b> ".concat(name, "</label>\n        <label><b>Email Address:</b> ").concat(email, "</label>\n        <label><b>Phone no:</b> ").concat(phone, "</label>\n\n        <h2>Objective</h2>\n        <p>").concat(objective, "</p>\n\n        <h2>Education</h2>\n        <p>").concat(education, "</p>\n\n        <h2>Experience</h2>\n        <p>").concat(experience, "</p>\n\n        <h2>Skills</h2>\n        <p>").concat(skills, "</p>\n    ");
    if (resumedisplayelement) {
        resumedisplayelement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
