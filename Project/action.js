$(() => {

    let input = document.getElementsByClassName('int')[0]
    let output = document.getElementsByClassName('otpt')[0]

    for (let i = 0; i < 3; i++) {
        let number = document.getElementsByClassName('rounded btn btn-light n1')[i];
        let number2 = document.getElementsByClassName('rounded btn btn-light n2')[i];
        let number3 = document.getElementsByClassName('rounded btn btn-light n3')[i];
        
        number.onclick = function () {
            input.value += (i + 7);
        }

        number2.onclick = function () {
            input.value += (i + 4);
        }

        number3.onclick = function () {
            input.value += (i + 1);
        }
    }

    for (let i = 0; i < 24; i++) {
        let second = document.getElementsByClassName('rounded btn btn-secondary')[i]

        second.onclick = function () {
            input.value += second.innerText;
        }
    }

    let fact = document.getElementsByClassName('rounded btn btn-secondary')[1]
    fact.onclick = function(){
        input.value += '!'
    }

    let exp = document.getElementsByClassName('rounded btn btn-secondary exp')[0]
    exp.onclick = function(){
        input.value += 'E'
    }

    let raise = document.getElementsByClassName('rounded btn btn-secondary raise')[0]
    raise.onclick = function(){
        input.value += '^'
    }

    let radeg = document.getElementsByClassName('rounded btn btn-secondary radeg')[0]
    radeg.onclick = function(){
        input.value +=""
    }

    let inv = document.getElementsByClassName('rounded btn btn-secondary inv')[0]
    inv.onclick= function(){
        input.value +=""
    }

    let ans_element = document.getElementsByClassName('rounded btn btn-secondary ans')[0]

    let equal = document.getElementsByClassName('rounded btn btn-primary equal')[0];
    equal.onclick = function () {

        let ans = 0;
        let val = document.getElementsByClassName('int')[0].value;
            for (let i = 0; i < val.length; i++) {
            if (val[i] == '+') {
                ans = parseFloat(val);
                let ans2 = parseFloat(val.substring(i + 1));
                ans = ans + ans2
            }
            if (val[i] == '-') {
                ans = parseFloat(val);
                let ans2 = parseFloat(val.substring(i + 1));
                ans = ans - ans2
            }
            if (val[i] == '*') {
                ans = parseFloat(val);
                let ans2 = parseFloat(val.substring(i + 1));
                ans = ans * ans2
            }
            if (val[i] == '/') {
                ans = parseFloat(val);
                let ans2 = parseFloat(val.substring(i + 1));
                ans = ans / ans2
            }
            if (val[i] == '%') {
                ans = parseFloat(val);
                let ans2 = parseFloat(val.substring(i + 1));
                ans = (ans * ans2)/100
            }
            if (val[i] == '!') {
                ans = parseFloat(val);
                let ans2 =1;
                while(ans!=1){
                    ans2 = ans2* ans;                    
                    ans--;
                }
                
                ans= ans2;
            }
            if(val[i] == 'l' && val[i+1]== 'o' &&val[i+2]== 'g'){
                let string = val.substring(i+3)
                ans = Math.log10(parseInt(string))
            }
            if(val[i] == 'S' && val[i+1] == 'i' && val[i+2] == 'n'){
                let string = val.substring(i+3)
                ans = Math.sin(parseInt(string))
             }
             if(val[i] == 't' && val[i+1] == 'a' && val[i+2] == 'n'){
                let string = val.substring(i+3)
                ans = Math.tan(parseInt(string))
             }
             if(val[i] == 'C' && val[i+1] == 'o' && val[i+2] == 's'){
                let string = val.substring(i+3)
                ans = Math.cos(parseInt(string))
             }
             if(val[i] == 'l' && val[i+1] == 'n'){
                let string = val.substring(i+2)
                ans = Math.LN10(parseInt(string))
             }
             if(val[i] == '√'){
                 let string = val.substring(i+1)
                ans = Math.sqrt(parseInt(string))
            }
            if(val[i] == 'e'){
                let string = val.substring(i+1)
                ans = parseInt(string) * 2.71828
            }
            if(val[i] == 'E'){
                ans = parseFloat(val)
            }
            if(val[i] == '^'){
                ans = parseFloat(val)
                let ans2 = val.substring(i+1)
                ans = Math.pow(ans, ans2)
            }
            if(val[i] == '('){
                val = val.substring(i+1)
            }
            
        }
        output.value = ans;
        ans_element = output.value;
        ans=0;
    }

    ans_element.onclick = function(){
        ans_element.value = output.value
    }

    let AC = document.getElementsByClassName('rounded btn btn-secondary AC')[0];

    AC.onclick = function () {
        input.value = null;
    }

})
