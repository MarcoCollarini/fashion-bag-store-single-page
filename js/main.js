
'use strict';
document.body.classList.add('loading');
const loader=document.getElementById('loader');
window.addEventListener('load',()=>{setTimeout(()=>{loader.classList.add('hidden');document.body.classList.remove('loading')},350)});
const header=document.getElementById('header');
const toggle=document.querySelector('.menu-toggle');
const nav=document.getElementById('nav');
const onScroll=()=>{header.classList.toggle('scrolled',scrollY>30);const y=scrollY+180;document.querySelectorAll('main section[id]').forEach(s=>{const a=document.querySelector(`nav a[href="#${s.id}"]`);if(a)a.classList.toggle('active',y>=s.offsetTop&&y<s.offsetTop+s.offsetHeight)})};
addEventListener('scroll',onScroll,{passive:true});onScroll();
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));
const observer=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const counters=document.querySelectorAll('[data-count]');const cObs=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,target=+el.dataset.count;let n=0;const t=setInterval(()=>{n++;el.textContent=n;if(n>=target)clearInterval(t)},260);cObs.unobserve(el)}));counters.forEach(c=>cObs.observe(c));
const hero=document.querySelector('.hero-content');addEventListener('scroll',()=>{if(scrollY<innerHeight&&!matchMedia('(prefers-reduced-motion: reduce)').matches)hero.style.transform=`translateY(${scrollY*.12}px)`},{passive:true});
const lb=document.querySelector('.lightbox'),lbImg=lb.querySelector('img'),closeLb=()=>{lb.classList.remove('open');lb.setAttribute('aria-hidden','true')};document.querySelectorAll('.gallery-item').forEach(b=>b.addEventListener('click',()=>{lbImg.src=b.dataset.full;lbImg.alt=b.querySelector('img').alt;lb.classList.add('open');lb.setAttribute('aria-hidden','false');lb.querySelector('button').focus()}));lb.querySelector('button').addEventListener('click',closeLb);lb.addEventListener('click',e=>{if(e.target===lb)closeLb()});addEventListener('keydown',e=>{if(e.key==='Escape')closeLb()});
const quotes=[...document.querySelectorAll('.slides blockquote')],dots=document.querySelector('.dots');let q=0,timer;quotes.forEach((_,i)=>{const b=document.createElement('button');b.setAttribute('aria-label',`Vai alla recensione ${i+1}`);b.addEventListener('click',()=>show(i));dots.appendChild(b)});const dotButtons=[...dots.children];function show(i){quotes[q].classList.remove('active');dotButtons[q].classList.remove('active');q=(i+quotes.length)%quotes.length;quotes[q].classList.add('active');dotButtons[q].classList.add('active');clearInterval(timer);timer=setInterval(()=>show(q+1),6500)}document.querySelector('.prev').addEventListener('click',()=>show(q-1));document.querySelector('.next').addEventListener('click',()=>show(q+1));show(0);
document.getElementById('year').textContent=new Date().getFullYear();
