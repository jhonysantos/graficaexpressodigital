// ---------modal login ------------
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.main-modal-register.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.main-modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.main-modal')
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.main-modal-register')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


// ---------modal Register ------------
var currentTab = 0;
showTab(currentTab);

function showTab(n) {
  
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Salvar";
  } else {
    document.getElementById("nextBtn").innerHTML = "Avançar";
  }
 
  fixStepIndicator(n)
}

function nextPrev(n) {
  
  var x = document.getElementsByClassName("tab");
  
  if (n == 1 && !validateForm()) return false;
  
  x[currentTab].style.display = "none";
 
  currentTab = currentTab + n;
  
  if (currentTab >= x.length) {
    
    document.getElementById("regForm").submit();
    return false;
  }
  
  showTab(currentTab);
}

function validateForm() {
  
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
 
  for (i = 0; i < y.length; i++) {
    
    if (y[i].value == "") {
     
      y[i].className += " invalid";
     
      valid = false;
    }
  }
  
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; 
}

function fixStepIndicator(n) {
  
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  
  x[n].className += " active";
}