var Form = document.getElementById('resume-form');
var Resumedisplayelement = document.getElementById('resume-display');
Form.addEventListener('sumbit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var objective = document.getElementById('objective').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <label><b>Name:</b><span contendeditable=\"true\">".concat(name, "</span></lable>\n    <label><b>Email Address:</b><span contendeditable=\"true\">").concat(email, "<?span></label>\n    <label><b>Phone no:</b><span contendeditable=\"true\">").concat(phone, "</span></label>\n    \n     <h2>Objective</h2>\n     <p contendeditable=\"true\">").concat(objective, "</p>\n     \n      <h2>Education</h2>\n     <p contendeditable=\"true\">").concat(education, "</p>\n     \n      <h2>Experience</h2>\n     <p contendeditable=\"true\">").concat(experience, "</p>\n     \n      <h2>Skills</h2>\n     <p contendeditable=\"true\">").concat(skills, "</p>\n     ");
    if (Resumedisplayelement) {
        Resumedisplayelement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
