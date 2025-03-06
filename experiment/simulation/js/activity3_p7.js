function activity3_p8() {
    let next_btn = get_collapse_btn_element(`Calculate <span style='display: inline-block;' class='fs-16px'>$$ X^2 \\ and \\ XY_2 and their summation$$</span>`, 'act3-part-9');
    let div_ele = document.createElement('div');
    let line_break = document.createElement('br');
    div_ele.setAttribute('class', 'divide fs-16px');
    div_ele.id = 'act3-part-9';
    div_ele.innerHTML = `
    <h5 class="fs-16px">Step 8: Refer the following table to do null hypothesis: </h5>

    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr class='table-dark'>
                    <th>n-2</th>
                    <th> for &alpha;<sub>2</sub> = ${alpha2}</th>
                </tr>
            </thead>

            <tbody id="act3-hp-tab-body">
            </tbody>
        </table>
    </div>

    <div class='fs-16px'></div>

    <div class="fs-16px">
    t_(&alpha;<sub>h</sub>/2, n-2) which critical value of t at level of significance &alpha;<sub>h</sub> and degree of freedom n - 2. For given  &alpha;<sub>h</sub>,  t_(&alpha;<sub>h</sub>/2, n-2) is t - value with degree of freedom n-2 is : 
        <input type="text" class="form-control fs-16px" id="act3-t-n-2" style='width: 50%;'><span class='fs-16px' id='act3-dsp-tn2'></span>
        <br>
        <button class="btn btn-info btn-std" style="margin: auto;" id='act3-vf-tn2' onclick='act3_vf_tn2();' >Verify</button>
    </div>



    `;
    maindiv.appendChild(line_break);
    maindiv.appendChild(next_btn);
    maindiv.appendChild(div_ele);
    act3_load_hp_values();
    hide_all_steps();
    show_step('act3-part-9');
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function act3_load_hp_values() {
    let tab_body = document.getElementById('act3-hp-tab-body');
    let ind = 0;
    if (alpha2 == 0.1) {
        ind = 1;
    }
    else if (alpha2 == 0.05) {
        ind = 2;
    }
    else if (alpha2 == 0.01) {
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
function act3_vf_tn2() {
    let val = document.getElementById('act3-t-n-2');
    let btn = document.getElementById('act3-vf-tn2');
    let dsp = document.getElementById('act3-dsp-tn2');
    let ind = 0;
    if (alpha2 == 0.1) {
        ind = 1;
    }
    else if (alpha2 == 0.05) {
        ind = 2;
    }
    else if (alpha2 == 0.01) {
        ind = 3;
    }
    let n = act3_X.length;
    let arr = hypothesis_table;
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i][0], (n - 2));
        if (arr[i][0] == (n - 2)) {
            t2_n_2 = arr[i][ind];
            console.log(t2_n_2);
        }
    }
    if (parseFloat(val.value) != t2_n_2) {
        alert('Incorrect Value!! Check the table again');
        return;
    }
    alert('Correct Value');
    val.remove();
    dsp.innerText = t2_n_2.toString();
    btn.remove();
    activity3_p9();
}
function activity3_p9() {
    let next_btn = get_collapse_btn_element(`Calculate <span style='display: inline-block;' class='fs-16px'>$$ X^2 \\ and \\ XY_2 $$</span>  and their summation`, 'act3-part-10');
    let div_ele = document.createElement('div');
    let line_break = document.createElement('br');
    div_ele.setAttribute('class', 'divide fs-16px');
    div_ele.id = 'act3-part-10';
    div_ele.innerHTML = `
    <h5 style='text-align: left;'  class='fb-800 fs-16px'>Step 9: Testing the null hypothesis</h5>
    <div class="fs-16px">
        We have t2<sub>o</sub> = ${t2_0.toFixed(5)} and t2<sub>n-2</sub> = ${t2_n_2.toFixed(5)};
    </div>
    <div class="fs-16px">
        if |t2<sub>o</sub>| &GreaterEqual; t2<sub>n-2</sub> then we will reject the null hypothesis. Else We fail to reject the null hypothesis.
    </div>
    <br>
    <div class="fs-16px">
        Here we have the data which has equation y = &alpha;2 + &beta;2x + &epsilon;2. (The Equation of the population X)
    </div>
    <div class="fs-16px">
        Now Providing &beta;2 &ne; 0 is equivalent to reject the null hypothesis. Else we fail to reject null hypothesis.
    </div>

    <br> 

    <div class="fs-16px">
        What can you conclude after the hypothesis test?
    </div>
    <br>
    <div style='margin-bottom: 10px;'><button onclick="act3_vf_null_hypo('1')" style='border: 1px solid gray; width: 60%; text-align: left;'>A. &nbsp; &beta;2 &asymp; 0</button></div>
    <div><button onclick="act3_vf_null_hypo('2')" style='border: 1px solid gray; width: 60%; text-align: left;'>B. &nbsp; &beta;2 &ne; 0</button></div>
 
    `;
    maindiv.appendChild(line_break);
    maindiv.appendChild(next_btn);
    maindiv.appendChild(div_ele);
    act3_find_null_hypo();
    hide_all_steps();
    show_step('act3-part-10');
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function act3_find_null_hypo() {
    if (Math.abs(t2_0) >= t2_n_2) {
        act3_hypo_test_reject_op = 2;
    }
    else {
        act3_hypo_test_reject_op = 1;
    }
}
function act3_vf_null_hypo(id) {
    let msg = '';
    if (act3_hypo_test_reject_op == 1) {
        msg = 'Null Hypothesis Rejected';
    }
    else if (act3_hypo_test_reject_op == 2) {
        msg = 'We failed to reject null hypothesis';
    }
    if (parseInt(id) == act3_hypo_test_reject_op) {
        alert(`You are correct!! ${msg}`);
        activity4();
        return;
    }
    alert(`You have chosen incorrect option, observe the results again.`);
    //activity3();
}
//# sourceMappingURL=activity3_p7.js.map