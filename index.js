import{a as m,S as d,i as n}from"./assets/vendor-C1DvvBV_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function f(o){return m.get("https://pixabay.com/api/",{params:{key:"57660460-9b7a4de67f1bc51791b48e4e6",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const c=document.querySelector(".gallery"),p=new d(".gallery a",{captionsData:"alt",captionDelay:250});function g(o){const{webformatURL:r,largeImageURL:s,tags:i,likes:e,views:t,comments:a,downloads:u}=o;return`
      <li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img class="gallery-image" src="${r}" alt="${i}" />
        </a>
        <div class="info">
          <p class="info-item">
            <b>Likes</b>
            ${e}
          </p>
          <p class="info-item">
            <b>Views</b>
            ${t}
          </p>
          <p class="info-item">
            <b>Comments</b>
            ${a}
          </p>
          <p class="info-item">
            <b>Downloads</b>
            ${u}
          </p>
        </div>
      </li>
    `}function y(o){const r=o.map(g).join("");c.insertAdjacentHTML("beforeend",r),p.refresh()}function h(){c.innerHTML=""}const b=document.querySelector(".form"),L=document.querySelector('input[name="search-text"]'),l=document.querySelector(".loader");b.addEventListener("submit",o=>{o.preventDefault();const r=L.value.trim();if(r===""){n.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",messageColor:"white"});return}l.classList.remove("is-hidden"),f(r).then(s=>{h(),s.data.hits.length===0&&n.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",messageColor:"white"}),y(s.data.hits)}).catch(s=>{console.log(s)}).finally(()=>{l.classList.add("is-hidden")})});
//# sourceMappingURL=index.js.map
