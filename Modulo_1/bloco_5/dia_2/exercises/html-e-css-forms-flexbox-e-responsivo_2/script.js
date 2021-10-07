function createStateOptions() {
  const states = document.getElementById("country");
  const stateOptions = [
    "Selecione seu estado",
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Distrito Federal",
    "Espirito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso do Sul",
    "Mato Grosso",
    "Minas Gerais",
    "Pará",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondônia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins",
  ];
  for (let index = 0; index < stateOptions.length; index += 1) {
    const createOptions = document.createElement("option");
    states.appendChild(createOptions).innerText = stateOptions[index];
    states.appendChild(createOptions).value = stateOptions[index];
  }
}

createStateOptions();
// Adicionando biblioteca para data, somente datas validas

var picker = new Pikaday({ field: document.getElementById("datepicker") });

// Validando todos os campos dos formulários

new JustValidate(".js-form", {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 40,
    },
    email: {
      required: true,
      email: true,
      maxLength: 50,
    },
    cpf: {
      required: true,
      maxLength: 11,
    },
    address: {
      required: true,
      maxLength: 200,
    },
    city: {
      required: true,
      maxLength: 28,
    },
    state: {
      required: true,
    },
    radio: {
      required: true,
    },
    text: {
      required: true,
      maxLength: 1000,
    },
    position: {
      required: true,
      maxLength: 40,
    },
    description: {
      required: true,
      maxLength: 500,
    },
    date: {
      required: true,
    },
  },
  messages: {
    name: {
      required: "O campo de nome é obrigatório.",
      maxLength: "O limite é de 40 caracteres.",
    },
    email: {
      required: "O campo de email é obrigatório.",
      email: "O email digitado não é válido.",
      maxLength: "O limite é de 50 caracteres.",
    },
    cpf: {
      required: "O campo de cpf é obrigatório.",
      maxLength: "O limite é de 11 números",
    },
    address: {
      required: "O campo do endereço é obrigatório.",
      maxLength: "O limite é de 200 caracteres",
    },
    city: {
      required: "O campo da cidade é obrigatório.",
      maxLength: "O limite é de 28 caracteres",
    },
    state: {
      required: "O campo do estado é obrigatório.",
    },
  },
  focusWrongField: true,

  submitHandler: function (form, values, ajax) {
    ajax({
      url: "https://just-validate-api.herokuapp.com/submit",
      method: "POST",
      data: values,
      async: true,
      callback: function (response) {
        alert("AJAX submit successful! \nResponse from server:" + response);
      },
      error: function (response) {
        alert("AJAX submit error! \nResponse from server:" + response);
      },
    });
  },

  invalidFormCallback: function (errors) {
    console.log(errors);
  },
});
