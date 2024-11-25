function activity2_p8() {
    let next_btn = get_collapse_btn_element(`Calculate <span style='display: inline-block;' class='fs-16px'>$$ X^2 \\ and \\ XY and their summation$$</span>`, 'act2-part-9');
    let div_ele = document.createElement('div');
    let line_break = document.createElement('br');
    div_ele.setAttribute('class', 'divide fs-16px');
    div_ele.id = 'act2-part-9';
    div_ele.innerHTML = `
    <h5 class="fs-16px">Step 8: Refer the following table to do null hypothesis: </h5>

    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr class='table-dark'>
                    <th>n-2</th>
                    <th> for &alpha;<sub>1</sub> = ${alpha1}</th>
                </tr>
            </thead>

            <tbody id="act2-hp-tab-body">
            </tbody>
        </table>
    </div>

    <div class='fs-16px'></div>

    <div class="fs-16px">
    t_(&alpha;<sub>h</sub>/2, n-2) which critical value of t at level of significance &alpha;<sub>h</sub> and degree of freedom n - 2. For given  &alpha;<sub>h</sub>,  t_(&alpha;<sub>h</sub>/2, n-2) is t - value with degree of freedom n-2 is : 
        <input type="text" class="form-control fs-16px" id="act2-t-n-2" style='width: 50%;'><span class='fs-16px' id='act2-dsp-tn2'></span>
        <br>
        <button class="btn btn-info btn-std" style="margin: auto;" id='act2-vf-tn2' onclick='act2_vf_tn2();' >Verify</button>
    </div>



    `;
    maindiv.appendChild(line_break);
    maindiv.appendChild(next_btn);
    maindiv.appendChild(div_ele);
    act2_load_hp_values();
    hide_all_steps();
    show_step('act2-part-9');
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function act2_load_hp_values() {
    let tab_body = document.getElementById('act2-hp-tab-body');
    let ind = 0;
    if (alpha1 == 0.1) {
        ind = 1;
    }
    else if (alpha1 == 0.05) {
        ind = 2;
    }
    else if (alpha1 == 0.01) {
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
function act2_vf_tn2() {
    let val = document.getElementById('act2-t-n-2');
    let btn = document.getElementById('act2-vf-tn2');
    let dsp = document.getElementById('act2-dsp-tn2');
    let ind = 0;
    if (alpha1 == 0.1) {
        ind = 1;
    }
    else if (alpha1 == 0.05) {
        ind = 2;
    }
    else if (alpha1 == 0.01) {
        ind = 3;
    }
    let n = act2_X.length;
    let arr = hypothesis_table;
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i][0], (n - 2));
        if (arr[i][0] == (n - 2)) {
            t1_n_2 = arr[i][ind];
            console.log(t1_n_2);
        }
    }
    if (parseFloat(val.value) != t1_n_2) {
        alert('Incorrect Value!! Check the table again');
        return;
    }
    alert('Correct Value');
    val.remove();
    dsp.innerText = t1_n_2.toString();
    btn.remove();
    activity2_p9();
}
function activity2_p9() {
    let next_btn = get_collapse_btn_element(`Calculate <span style='display: inline-block;' class='fs-16px'>$$ X^2 \\ and \\ XY $$</span>  and their summation`, 'act2-part-10');
    let div_ele = document.createElement('div');
    let line_break = document.createElement('br');
    div_ele.setAttribute('class', 'divide fs-16px');
    div_ele.id = 'act2-part-10';
    div_ele.innerHTML = `
    <h5 style='text-align: left;'  class='fb-800 fs-16px'>Step 9: Testing the null hypothesis</h5>
    <div class="fs-16px">
        We have t1<sub>o</sub> = ${t1_0.toFixed(5)} and t1<sub>n-2</sub> = ${t1_n_2.toFixed(5)};
    </div>
    <div class="fs-16px">
        if |t1<sub>o</sub>| &GreaterEqual; t1<sub>n-2</sub> then we will reject the null hypothesis. Else We fail to reject the null hypothesis.
    </div>
    <br>
    <div class="fs-16px">
        Here we have the data which has equation y = &alpha;1 + &beta;1x + &epsilon;1. (The Equation of the population X)
    </div>
    <div class="fs-16px">
        Now Providing &beta;1 &ne; 0 is equivalent to reject the null hypothesis. Else we fail to reject null hypothesis.
    </div>

    <br> 

    <div class="fs-16px">
        What can you conclude after the hypothesis test?
    </div>
    <br>
    <div style='margin-bottom: 10px;'><button onclick="act2_vf_null_hypo('1')" style='border: 1px solid gray; width: 60%; text-align: left;'>A. &nbsp; &beta;1 &asymp; 0</button></div>
    <div><button onclick="act2_vf_null_hypo('2')" style='border: 1px solid gray; width: 60%; text-align: left;'>B. &nbsp; &beta;1 &ne; 0</button></div>
 
    `;
    maindiv.appendChild(line_break);
    maindiv.appendChild(next_btn);
    maindiv.appendChild(div_ele);
    act2_find_null_hypo();
    hide_all_steps();
    show_step('act2-part-10');
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function act2_find_null_hypo() {
    if (Math.abs(t1_0) >= t1_n_2) {
        act2_hypo_test_reject_op = 2;
    }
    else {
        act2_hypo_test_reject_op = 1;
    }
}
function act2_vf_null_hypo(id) {
    let msg = '';
    if (act2_hypo_test_reject_op == 1) {
        msg = 'Null Hypothesis Rejected';
    }
    else if (act2_hypo_test_reject_op == 2) {
        msg = 'We failed to reject null hypothesis';
    }
    if (parseInt(id) == act2_hypo_test_reject_op) {
        alert(`You are correct!! ${msg}`);
        activity3();
        return;
    }
    alert(`You have chosen incorrect option, observe the results again.`);
}
//# sourceMappingURL=activity2_p7.js.map