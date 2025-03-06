function activity3() {
    maindiv.innerHTML += `
        <br>
        <div class='divide'>
            <div style='margin-top: 2vw;'>
                <h5 class="center-text fs-16px">Determine the slope of regression line contructed by the given dataset using hypothesis testing: (Multiplying the slope with 0.001)</h5>

                <div class='fs-16px'>
                    <p>Consider the linear model</p>
                    <p>y2 = &alpha;2 + &beta;2x + &epsilon;2</p>
                    <p>From the available n data points, we find the model a + bx, by requiring that the sum of squares of the residuals be minimized.</p>
                    <p class='fs-16px'>&alpha; and &beta; are population parameters, and a and b are random variables, computed from the sampled data.
                    </p>
                </div>
                <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act3();' id='temp-btn-4' >Step 1</button>
            </div>
        </div>
    `;
}
function start_act3() {
    let btn = document.getElementById('temp-btn-4');
    btn.remove();
    let next_btn = get_collapse_btn_element('Generated Data', 'act3-part-1');
    let div_ele = document.createElement('div');
    let line_break = document.createElement('br');
    div_ele.setAttribute('class', 'divide fs-16px');
    div_ele.id = 'act3-part-1';
    div_ele.innerHTML = `

    <div class="col-6">
        Number of Observations: <span class='fs-16px' id='act3-dsp-X'></span>
     </div>
       
        <div><button onclick='act3_internal_calculation();' class='btn btn-info std-btn' id='act3_gen_btn'  >Generate X Y</button></div>
    `;
    maindiv.appendChild(line_break);
    maindiv.appendChild(next_btn);
    maindiv.appendChild(div_ele);
    hide_all_steps();
    //load_act3_N_dd_values();
}
function load_act3_N_dd_values() {
    let dd = document.getElementById('dd-N3');
    dd.innerHTML = ``;
    let default_op = new Option('--Select n value--', '0', true);
    dd.add(default_op);
    for (let i = 20; i < 31; i++) {
        let op = new Option(`${i}`, `${i}`);
        dd.add(op);
    }
}
function set_N_act3() {
    let dd = document.getElementById('dd-N3');
    //let inp: HTMLSelectElement = <HTMLSelectElement> document.getElementById('act1-alpha-inp');
    let btn = document.getElementById('act3_gen_btn');
    if (dd.value != '0') {
        act3_N = parseInt(dd.value);
        btn.style.display = 'block';
        //inp.disabled = false;
    }
    else {
        act3_N = 0;
        //inp.value = '';
        //inp.disabled = true;
        btn.style.display = 'none';
    }
}
//for generating random activity 2 X vector values
function generate_random_act3_X() {
    let arr = [];
    act3_X = [];
    while (arr.length < act3_N) {
        let rv = 20 + Math.floor(Math.random() * 60);
        if (arr.indexOf(rv) == -1) {
            arr.push(rv);
        }
    }
    arr = arr.sort(function (a, b) { return a - b; });
    //console.log(arr);
    act3_X = arr;
    console.log(act3_X);
}
//for setting random X values
function act3_internal_calculation() {
    //let dd: HTMLSelectElement = <HTMLSelectElement> document.getElementById('dd-N3');
    let dsp = document.getElementById('act3-dsp-X');
    //generate X
    //generate_random_act3_X();
    act3_X = X;
    act3_N = N;
    dsp.innerText = `n = ${act3_N}`;
    //dd.remove();
    //generate random beta0 and beta1 values
    act3_beta0 = beta0;
    act3_beta1 = beta1 * 0.001;
    console.log('beta0 = ' + act3_beta0, "beta1 = " + act3_beta1);
    act3_Y2 = [];
    //generate Y2 = beta0 + (beta1*X)
    for (let i = 0; i < act3_X.length; i++) {
        act3_Y2.push(act3_beta0 + (act3_beta1 * act3_X[i]));
    }
    console.log(act3_Y2);
    //generate epsilon values
    generate_epsilon_values_act3();
    //calculate Y values
    let last_index = act3_Y2.length - 1;
    act3_Y = [];
    for (let i = 0; i < act3_Y2.length; i++) {
        act3_Y.push(act3_Y2[i] + (act3_Y2[last_index] * act3_epsilon[i]));
    }
    console.log(act3_Y);
    console.log(act3_X);
    console.log(act3_Y2);
    //show X Y table
    show_x_y_act3();
}
function generate_epsilon_values_act3() {
    let arr = [];
    act3_epsilon = [];
    while (arr.length < act3_N) {
        let rv = (Math.random() * 1.6) - 0.8;
        arr.push(rv);
    }
    //console.log(arr);
    act3_epsilon = arr;
}
//to display X and Y vectors
function show_x_y_act3() {
    let btn = document.getElementById('act3_gen_btn');
    btn.remove();
    let d = document.getElementById('act3-part-1');
    let text = `
            <br>
            <div class='table-responsive' style='margin: auto;'>
                <table class='table table-bordered ' style='background-color: white;' >
                    <tr id='act3-x-values'>
                    <th class='table-dark'>X</th>
                    </tr>
    
                    <tr id='act3-y-values'>
                    <th class='table-dark'>Y<sub>2</sub></th>
                    </tr>
                </table>
    
            </div>
            <button class='btn btn-info std-btn' onclick='go_to_activity3_p1();' style='position: relative; left: 25vw;' id='temp-btn-3'>Next</button>
    
            `;
    d.innerHTML += text;
    load_xy_values_act3();
}
function load_xy_values_act3() {
    let x_val = document.getElementById('act3-x-values');
    let y_val = document.getElementById('act3-y-values');
    console.log('here');
    for (let i = 0; i < act3_Y.length; i++) {
        x_val.innerHTML += `<td>${act3_X[i]}</td>`;
        y_val.innerHTML += `<td>${act3_Y[i].toFixed(3)}</td>`;
    }
}
function go_to_activity3_p1() {
    let btn = document.getElementById('temp-btn-3');
    btn.remove();
    activity3_p1();
}
//activity3();
//# sourceMappingURL=activity3.js.map