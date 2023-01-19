const form = document.getElementById('form-habits');

const nlwSetup = new NLWSetup(form);

const button = document.querySelector('header button');

button.addEventListener('click', add);
form.addEventListener('change', save)

function add() {
    const today = new Date().toLocaleDateString('pt-BR').slice(0, 5)
    console.log(today)
    const dayExists = nlwSetup.dayExists(today)

    if (dayExists) {
        alert('Esse dia já foi registrado. Siga com o preenchimento das atividades.');
        return
    }

    nlwSetup.addDay(today)
}

function save() {
    localStorage.setItem('NLWSetup@Habits', JSON.stringify(nlwSetup.data));
}


let data = JSON.parse(localStorage.getItem('NLWSetup@Habits')) || {};

nlwSetup.setData(data)
nlwSetup.load();