(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        const emailInput = document.getElementById('emailInput');
        const regex = /[a-zA-Z0-9_-]{3,}@[a-zA-Z]{3,}.(com|ru)/gm;
        const passwordInput = document.getElementById('passwordInput');
        let matchResult = regex.test(emailInput.value);
        if (!matchResult | passwordInput.value.length < 5)
        {
            event.preventDefault();
            event.stopPropagation();
            
            if (!matchResult)
            {
              console.log('work');
              emailInput.classList.add('is-invalid');
              emailInput.classList.remove('is-valid');
            }
            else
            {
              emailInput.classList.remove('is-invalid');
              emailInput.classList.add('is-valid');
            }
            if(passwordInput.innerText.length < 5)
            {
                passwordInput.classList.add('is-invalid');
                passwordInput.classList.remove('is-valid');
            }
            else
            {
              passwordInput.classList.add('is-valid');
              passwordInput.classList.remove('is-invalid');
            }
        }
        else
            form.classList.add('was-validated');
      }, false)
    });
  })();


