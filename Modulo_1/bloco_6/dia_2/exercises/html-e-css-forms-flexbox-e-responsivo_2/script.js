  // script.js

  function createStateOptions() {
    const states = document.getElementById('country');
    const stateOptions = ['Selecione seu estado', 'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espirito Santo', 'Goiás', 'Maranhão', 'Mato Grosso do Sul', 'Mato Grosso', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
    for (let index = 0; index < stateOptions.length; index += 1) {
      const createOptions = document.createElement('option');
      states.appendChild(createOptions).innerText = stateOptions[index];
      states.appendChild(createOptions).value = stateOptions[index];
    }
  }
  createStateOptions();
  // Adicionando biblioteca para data, somente datas validas
  document.getElementById('myInputId').DatePickerX.init();

  // Validando todos os campos dos formulários
  validation.init("#myForm");

  validation.init("#myForm", {
    events: ["change", "paste", "keyup"]
  });

  const Rules = validation.getRules();
  Rules["custom"] = {
    message: "Error Message here",
    method: el => {
      // ... rule here ...
    }    
  }

  // Show errors
validation.highlight();

// Hide all errors
validation.hideAll();

// Check if all the input fields inside of a container are valid (body by default)
validation.isValid(); // returns true or false

// isValid() + highlight()
validation.validate(); // returns true or false

// Show a custom popup message on any DOM element
validation.show(el, message);

// Hide the popup message from the DOM element
validation.hide(el);