import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e={email:"",message:""},o="feedback-form-state",a=document.querySelector(".feedback-form"),l=JSON.parse(localStorage.getItem(o));l&&r();i();a.addEventListener("input",m);a.addEventListener("submit",s);function m(t){e[t.target.name]=t.target.value.trim(),localStorage.setItem(o,JSON.stringify(e))}function s(t){t.preventDefault(),e.email&&e.message?(console.log(e),a.reset(),n(),localStorage.removeItem(o)):alert("Fill please all fields")}function r(){e.email=l.email,e.message=l.message}function n(){e.email="",e.message=""}function i(){a.elements.email.value=e.email,a.elements.message.value=e.message}
//# sourceMappingURL=commonHelpers2.js.map