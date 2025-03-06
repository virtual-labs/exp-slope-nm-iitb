function activity1_p7() {
    let div_ele = document.createElement('div');
    let line_break = document.createElement('br');
    div_ele.setAttribute('class', 'collapse divide');
    div_ele.id = 'div-step-8';
    let btn_text = get_collapse_btn_element('Refer table for null hypothesis testing', 'div-step-8');
    div_ele.innerHTML = `
   
   
    <h5 class="fs-16px">Step 8: Refer the following table to do null hypothesis: </h5>

    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr class='table-dark'>
                    <th>n-2</th>
                    <th> for &alpha; = ${alpha}</th>
                </tr>
            </thead>

            <tbody id="hp-tab-body">
            </tbody>
        </table>
    </div>

    <div class='fs-16px'></div>

    <div class="fs-16px">
    t_(&alpha;<sub>h</sub>/2, n-2) which critical value of t at level of significance 𝜶h and degree of freedom n - 2. For given  &alpha;<sub>h</sub>,  t_(&alpha;<sub>h</sub>/2, n-2) is t - value with degree of freedom n-2 is : 
        <input type="text" class="form-control fs-16px" id="t-n-2" style='width: 50%;'><span class='fs-16px' id='dsp-tn2'></span>
        <br>
        <button class="btn btn-info btn-std" style="margin: auto;" id='vf-tn2' onclick='vf_tn2();' >Verify</button>
    </div>


    `;
    maindiv.appendChild(line_break);
    maindiv.appendChild(btn_text);
    maindiv.appendChild(div_ele);
    load_hp_values();
    hide_all_steps();
    show_step('div-step-8');
}
function load_hp_values() {
    let tab_body = document.getElementById('hp-tab-body');
    let ind = 0;
    if (alpha == 0.1) {
        ind = 1;
    }
    else if (alpha == 0.05) {
        ind = 2;
    }
    else if (alpha == 0.01) {
        ind = 3;
    }
    for (let i = 0; i < hypothesis_table.length; i++) {
        let row = tab_body.insertRow(i);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerText = hypothesis_table[i][0].toString();
        cell2.innerText = hypothesis_table[i][ind].toFixed(3);
    }
}
function vf_tn2() {
    let val = document.getElementById('t-n-2');
    let btn = document.getElementById('vf-tn2');
    let dsp = document.getElementById('dsp-tn2');
    let ind = 0;
    if (alpha == 0.1) {
        ind = 1;
    }
    else if (alpha == 0.05) {
        ind = 2;
    }
    else if (alpha == 0.01) {
        ind = 3;
    }
    let n = X.length;
    let arr = hypothesis_table;
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i][0], (n - 2));
        if (arr[i][0] == (n - 2)) {
            t_n_2 = arr[i][ind];
            console.log(t_n_2);
        }
    }
    if (parseFloat(val.value) != t_n_2) {
        alert('Incorrect Value!! Check the table again');
        return;
    }
    alert('Correct Value');
    val.remove();
    dsp.innerText = t_n_2.toString();
    btn.remove();
    activity1_p8();
}
function activity1_p8() {
    let div_ele = document.createElement('div');
    let line_break = document.createElement('br');
    div_ele.setAttribute('class', 'collapse divide');
    div_ele.id = 'div-step-9';
    let btn_text = get_collapse_btn_element('Testing the null hypothesis', 'div-step-9');
    div_ele.innerHTML = `
    <h5 style='text-align: left;'  class='fb-800 fs-16px'>Step 9: Testing the null hypothesis</h5>
    <div class="fs-16px">
        We have t<sub>o</sub> = ${to.toFixed(5)} and t<sub>n-2</sub> = ${t_n_2.toFixed(5)};
    </div>
    <div class="fs-16px">
        if |t<sub>o</sub>| &GreaterEqual; t<sub>n-2</sub> then we will reject the null hypothesis. Else We fail to reject the null hypothesis.
    </div>
    <br>
    <div class="fs-16px">
        Here we have the data which has equation y = &alpha; + &beta;x + &epsilon;. (The Equation of the population X)
    </div>
    <div class="fs-16px">
        Now Providing &beta; &ne; 0 is equivalent to reject the null hypothesis. Else we fail to reject null hypothesis.
    </div>

    <br>

    <div class="fs-16px">
        What can you conclude after the hypothesis test?
    </div>
    <br>
    <div style='margin-bottom: 10px;'><button onclick="vf_null_hypo('1')" style='border: 1px solid gray; width: 60%; text-align: left;'>A. &nbsp; &beta; &asymp; 0</button></div>
    <div><button onclick="vf_null_hypo('2')" style='border: 1px solid gray; width: 60%; text-align: left;'>B. &nbsp; &beta; &ne; 0</button></div>
 
    `;
    maindiv.appendChild(line_break);
    maindiv.appendChild(btn_text);
    maindiv.appendChild(div_ele);
    find_null_hypo();
    hide_all_steps();
    show_step('div-step-9');
}
function find_null_hypo() {
    if (Math.abs(to) >= t_n_2) {
        hypo_test_reject_op = 2;
    }
    else {
        hypo_test_reject_op = 1;
    }
}
function vf_null_hypo(id) {
    let msg = '';
    if (hypo_test_reject_op == 1) {
        msg = 'Null Hypothesis Rejected';
    }
    else if (hypo_test_reject_op == 2) {
        msg = 'We failed to reject null hypothesis';
    }
    if (parseInt(id) == hypo_test_reject_op) {
        alert(`You are correct!! ${msg}`);
        activity2();
        return;
    }
    alert(`You have chosen incorrect option, observe the results again.`);
}
//activity1_p8();
//# sourceMappingURL=activity1_p7.js.map