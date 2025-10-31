document.getElementById('year').textContent = new Date().getFullYear();

const mobileBtn = document.getElementById('mobileBtn');
const mobileMenu = document.getElementById('mobileMenu');
mobileBtn.addEventListener('click', () => mobileMenu.classList.toggle('show'));
localStorage.setItem('theme','dark');

function submitForm(e){
e.preventDefault();
const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const message = document.getElementById('message').value.trim();
const status = document.getElementById('formStatus');
if(!name || !email || !message){ status.textContent = 'Please fill out all fields.'; return }
}

const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
function openProject(title, body){
modalTitle.textContent = title;
modalBody.textContent = body;
if(typeof modal.showModal === 'function') modal.showModal(); else alert(title + '\n\n' + body);
}
closeModal.addEventListener('click', ()=> modal.close());

function downloadResume(e){
e.preventDefault();
const resumeText = `Your Name\nFrontend Developer\nEmail: you@example.com\nWebsite: https://yourwebsite.com`;
const blob = new Blob([resumeText], {type:'text/plain'});
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url; a.download = 'YourName-resume.txt';
document.body.appendChild(a); a.click(); a.remove();
URL.revokeObjectURL(url);
}

document.querySelectorAll('.project').forEach(p=>{
p.addEventListener('keydown', (e)=>{
if(e.key === 'Enter'){
const title = p.querySelector('h4').textContent;
const desc = p.querySelector('p').textContent;
openProject(title, desc);
}
})
});

document.querySelectorAll('a[href^="#"]').forEach(a=>{
a.addEventListener('click', (e)=>{
const target = a.getAttribute('href');
if(target.length > 1){ e.preventDefault(); document.querySelector(target).scrollIntoView({behavior:'smooth',block:'start'}) }
})
});