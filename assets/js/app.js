
    let number = +prompt(`Впишите число для проверки.`);
    console.log(`Ваше число ${number}`);
    let variant = true;
    

    for (let i = 2; i < number; i++){

        if(number % i == 0){
            console.log(`Ваше число ${number} не является простым.`);
            variant = false;
            break;
        }else {
            console.log(`Ваше число ${number} является простым.`);
        }

        let result = number / i;
        console.log (result);

    }

    if(variant){
        alert(`Ваше число ${number} является простым.`);
    } else{
        alert(`Ваше число ${number} не является простым.`);
    }

    
    
    