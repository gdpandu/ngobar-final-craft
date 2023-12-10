const sidebar = document.querySelector("#sidebar");
const buttonToggler = document.querySelector(".navigation__toggler");
const buttonCloser = document.querySelector(".navigation__closer");


const elementProjectComplete = document.querySelector("#value-project-complete")
const elementYearExperience = document.querySelector("#value-experience")

/**
 * Untuk menampilkan sidebar ketika diklik
 * 
 * Cara baca: 
 * Button toggler ku berikan event ketika di klik, maka di element dengan id sidebar (Tag Aside nya)
 * tambahkan class tambahan yaitu "show" dan buang class "hide"
 *  */
buttonToggler.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  sidebar.classList.remove("hide");
});

/**
 * Untuk menutup sidebar ketika diklik
 * 
 * Cara baca: 
 * Button closer ku berikan event ketika di klik, maka di element dengan id sidebar (Tag Aside nya)
 * hapus class tambahan yaitu "hide" dan tambah class "show"
 *  */
buttonCloser.addEventListener("click", () => {
  sidebar.classList.remove("show");
  sidebar.classList.toggle("hide");
});


/**
 * VALUE ONLY
*/

const containerValue = {
  projectComplete: 430,
  yearExperience: "30+"
};

console.log(containerValue)

elementProjectComplete.append(containerValue.projectComplete)
elementYearExperience.append(containerValue.yearExperience)

/**
 * value-project-complete
 */


const navigationMenus = [{
  projectComplete: 430,
  yearExperience: "30+",
},{
  projectComplete: 450,
  yearExperience: "50+"
},
];

containerValue.projectComplete;
navigationMenus[1].projectComplete;

console.log  /* belum selesai */