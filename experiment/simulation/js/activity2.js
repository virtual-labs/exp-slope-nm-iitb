function activity2() {
    maindiv.innerHTML += `
        <br>
        <div class='divide'>
            <div style='margin-top: 2vw;'>
                <h5 class="center-text fs-16px">Determine the slope of regression line contructed by the given dataset using hypothesis testing :(Multiplying the values of X with 1000)</h5>

                <div class='fs-16px'>
                    <p>Consider the linear model</p>
                    <p>y1 = &alpha;1 + &beta;1x + &epsilon;1</p>
                    <p>From the available n data points, we find the model a1 + b1x, by requiring that the sum of squares of the residuals be minimized.</p>
                    <p class='fs-16px'>&alpha; and &beta; are population parameters, and a and b are random variables, computed from the sampled data.
                    </p>
                </div>
                <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-2' >Step 1</button>
            </div>
        </div>
    `;
}
function start_act2() {
    let btn = document.getElementById('temp-btn-2');
    btn.remove();
    let next_btn = get_collapse_btn_element('Generated Data', 'act2-part-1');
    let div_ele = document.createElement('div');
    let line_break = document.createElement('br');
    div_ele.setAttribute('class', 'divide fs-16px');
    div_ele.id = 'act2-part-1';
    div_ele.innerHTML = `
        <div class="col-6">
           Number of Observations: <span class='fs-16px' id='act2-dsp-X'></span>
        </div>
        <div><button onclick='act2_internal_calculation();' class='btn btn-info std-btn' id='act2_gen_btn'  >Generate X Y</button></div>
    `;
    maindiv.appendChild(line_break);
    maindiv.appendChild(next_btn);
    maindiv.appendChild(div_ele);
    hide_all_steps();
    //load_act2_N_dd_values();
}
function set_N_act2() {
    let dd = document.getElementById('dd-N2');
    //let inp: HTMLSelectElement = <HTMLSelectElement> document.getElementById('act1-alpha-inp');
    let btn = document.getElementById('act2_gen_btn');
    if (dd.value != '0') {
        act2_N = parseInt(dd.value);
        btn.style.display = 'block';
        //inp.disabled = false;
    }
    else {
        act2_N = 0;
        //inp.value = '';
        //inp.disabled = true;
        btn.style.display = 'none';
    }
}
function load_act2_N_dd_values() {
    let dd = document.getElementById('dd-N2');
    dd.innerHTML = ``;
    let default_op = new Option('--Select n value--', '0', true);
    dd.add(default_op);
    for (let i = 20; i < 31; i++) {
        let op = new Option(`${i}`, `${i}`);
        dd.add(op);
    }
}
//for generating random activity 2 X vector values
function generate_random_act_X() {
    // let arr = [];
    // act2_X = [];
    // while(arr.length < act2_N) {
    //     let rv = 20 + Math.floor(Math.random()*60);
    //     if(arr.indexOf(rv) == -1) {
    //         arr.push(rv);
    //     }
    // }
    // arr = arr.sort(function(a, b) {return a-b;});
    // //console.log(arr);
    act2_X = X;
    console.log(act2_X);
}
//for setting random X values
function act2_internal_calculation() {
    // let dd: HTMLSelectElement = <HTMLSelectElement> document.getElementById('dd-N2');
    let dsp = document.getElementById('act2-dsp-X');
    act2_N = N;
    //generate X
    //generate_random_act_X();
    act2_X = X;
    dsp.innerText = `n = ${act2_N}`;
    //dd.remove();
    //generate random beta0 and beta1 values
    act2_beta0 = beta0;
    act2_beta1 = beta1 * 1000;
    console.log('beta0 = ' + act2_beta0, "beta1 = " + act2_beta1);
    act2_Y2 = [];
    //generate Y2 = beta0 + (beta1*X)
    for (let i = 0; i < act2_X.length; i++) {
        act2_Y2.push(act2_beta0 + (act2_beta1 * act2_X[i]));
    }
    console.log(act2_Y2);
    //generate epsilon values
    generate_epsilon_values_act2();
    //calculate Y values
    let last_index = act2_Y2.length - 1;
    act2_Y = [];
    for (let i = 0; i < act2_Y2.length; i++) {
        // act2_Y.push(act2_Y2[i] + (act2_Y2[last_index]*act2_epsilon[i]));
        act2_Y.push(act2_Y2[i] + (20000 * act2_epsilon[i]));
        // console.log(act2_Y2[i] + (act2_Y2[last_index]*act2_epsilon[i]));
    }
    console.log(act2_Y);
    console.log(act2_X);
    console.log(act2_Y2);
    //show X Y table
    show_x_y_act2();
}
function generate_epsilon_values_act2() {
    let arr = [];
    act2_epsilon = [];
    while (arr.length < act2_N) {
        let rv = (Math.random() * 1.6) - 0.8;
        arr.push(rv);
    }
    //console.log(arr);
    act2_epsilon = arr;
}
//to display X and Y vectors
function show_x_y_act2() {
    let btn = document.getElementById('act2_gen_btn');
    btn.remove();
    let d = document.getElementById('act2-part-1');
    let text = `
        <br>
        <div class='table-responsive' style='margin: auto;'>
            <table class='table table-bordered ' style='background-color: white;' >
                <tr id='act2-x-values'>
                <th class='table-dark'>X</th>
                </tr>

                <tr id='act2-y-values'>
                <th class='table-dark'>Y<sub>1</sub></th>
                </tr>
            </table>

        </div>
        <button class='btn btn-info std-btn' onclick='go_to_activity2_p1();' style='position: relative; left: 25vw;' id='temp-btn-2'>Next</button>

        `;
    d.innerHTML += text;
    load_xy_values_act2();
}
function load_xy_values_act2() {
    let x_val = document.getElementById('act2-x-values');
    let y_val = document.getElementById('act2-y-values');
    console.log('here');
    for (let i = 0; i < act2_Y.length; i++) {
        x_val.innerHTML += `<td>${act2_X[i]}</td>`;
        y_val.innerHTML += `<td>${act2_Y[i].toFixed(3)}</td>`;
    }
}
function go_to_activity2_p1() {
    let btn = document.getElementById('temp-btn-2');
    btn.remove();
    activity2_p1();
}
//activity2();
//# sourceMappingURL=activity2.js.map