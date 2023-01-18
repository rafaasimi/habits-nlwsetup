const form = document.getElementById('form-habits');

const nlwSetup = new NLWSetup(form)

const data = {
    run: ['01-18','01-15'],
    water: ['01-20'],
    exercise: ['01-20', '01-15', '01-06', '01-18', '01-23', '01-24', '01-25', '01-28'],
    sleep: ['01-20'],
    pet: ['01-18','01-15'],
    food: ['01-18','01-15'],
}

nlwSetup.setData(data)

nlwSetup.load();