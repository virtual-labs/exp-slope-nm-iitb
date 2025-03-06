function activity3_p3() {
    let next_btn = get_collapse_btn_element(`Calculate <span style='display: inline-block;' class='fs-16px'>$$ \\overline {X} ,\\ \\overline {Y_2}, \\ X - \\overline{X},\\ (X - \\overline{X})^2,\\ Y_2 -  \\overline{Y_2},\\ (Y_2 -  \\overline{Y_2})^2 \\ and \\ (Y_2 -  \\overline{Y})(X - \\overline{X}) $$</span>`, 'act3-part-4');
    let div_ele = document.createElement('div');
    let line_break = document.createElement('br');
    div_ele.setAttribute('class', 'divide fs-16px');
    div_ele.id = 'act3-part-4';
    div_ele.innerHTML = `
    
    <h4 style='text-align: left;'  class='fb-800 fs-16px'>Step 4: </h4>
    <h4 class='fb-800 fs-16px'>Compute the value of <span style='display: inline-block; width: 20px;'>$$ \\overline{X} $$</span> and  <span style='display: inline-block; width: 20px;'>$$ \\overline{Y_2} $$</span>. where <span style='display: inline-block; width: 20px;'>$$ \\overline{X} $$</span> is mean value of X and  <span style='display: inline-block; width: 20px;'>$$ \\overline{Y_2} $$</span> is mean value of Y<sub>2</sub>  </h4>
    <p>a<sub>1</sub> = ${act3_mat_x[1].toFixed(3)} and b<sub>1</sub> = ${act3_mat_x[0].toFixed(3)}</p>

    <div class='row'>
        <div class='col-6'>
            <div class='row'>

                <div class='col-5' style='text-align: right;'> <span style='display: inline-block;'>$$ \\overline{X} = \\Sigma {\\frac{X}{n}} = $$</span> </div>

                <div class='col-7'><br><input class='form-control fs-16px' id='act3-inp-x-bar' /><span class='fs-16px' id='act3-dsp-xavg'></span></div>
            </div>
        </div>

        <div class='col-6'>
            <div class='row'>

                <div class='col-5' style='text-align: right;'> <span style='display: inline-block;''>$$ \\overline{Y_2} = \\Sigma {\\frac{Y_2}{n}} = $$</span> </div>

                <div class='col-7'><br><input class='form-control fs-16px' id='act3-inp-y-bar' /><span class='fs-16px' id='act3-dsp-yavg'></span></div>
            </div>
        </div>
    </div>

    <div class='row'><button class='btn btn-info std-btn' id='act3-avg-verify' style='margin: auto;' onclick='act3_verify_avg();' >Verify</button></div>

    <br>

    <div class='fs-16px'>The regression equation of given dataset is Y<sub>2</sub> = a<sub>2</sub> + b<sub>2</sub>X (The estimated value of a<sub>2</sub> and b<sub>2</sub> will be displayed in equation). calculate X - <span style='display: inline-block; width: 20px;'>$$ \\overline{X} $$</span>, Y<sub>2</sub> - <span style='display: inline-block; width: 20px;'>$$ \\overline{Y_2} $$</span>, Y' and Y<sub>2</sub> - Y'</div>

    <div id='act3-avg-diff-table'></div>

    <br>

    <div id='act3-summations-section'></div>


    `;
    maindiv.appendChild(line_break);
    maindiv.appendChild(next_btn);
    maindiv.appendChild(div_ele);
    hide_all_steps();
    show_step('act3-part-4');
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function act3_verify_avg() {
    let val1 = document.getElementById('act3-inp-x-bar');
    let val2 = document.getElementById('act3-inp-y-bar');
    let btn = document.getElementById('act3-avg-verify');
    let dsp_xavg = document.getElementById('act3-dsp-xavg');
    let dsp_yavg = document.getElementById('act3-dsp-yavg');
    act3_X_avg = 0;
    act3_Y_avg = 0;
    for (let i = 0; i < act3_X.length; i++) {
        act3_X_avg += act3_X[i];
        act3_Y_avg += act3_Y[i];
    }
    act3_X_avg = act3_X_avg / act3_X.length;
    act3_Y_avg = act3_Y_avg / act3_Y.length;
    console.log(`Xbar = ${act3_X_avg} and Ybar = ${act3_Y_avg}`);
    if (!verify_values(parseFloat(val1.value), act3_X_avg)) {
        alert('Value of X bar is incorrect');
        return;
    }
    if (!verify_values(parseFloat(val2.value), act3_Y_avg)) {
        alert('Value of Y bar is incorrect');
        return;
    }
    alert('Entered X bar and Y bar values are correct!!');
    dsp_xavg.innerText = val1.value;
    dsp_yavg.innerText = val2.value;
    val1.remove();
    val2.remove();
    btn.remove();
    act3_load_avg_table();
}
function act3_load_avg_table() {
    let d = document.getElementById('act3-avg-diff-table');
    let header = [
        'X',
        "Y<sub>2</sub>",
        "<span class='fs-16px'>$$ X - \\overline{X}$$</span>",
        "<span class='fs-16px'>$$ (X - \\overline{X})^2$$</span>",
        "<span class='fs-16px'>$$ Y_2 -  \\overline{Y_2} $$</span>",
        "<span class='fs-16px'>$$ (Y_2 -  \\overline{Y_2})^2 $$</span>",
        "<span class='fs-16px'>$$ (Y_2 -  \\overline{Y})(X - \\overline{X}) $$</span>",
        "Y' = a<sub>2</sub> + b<sub>2</sub>X",
        "(Y<sub>2</sub> - Y')<sup>2</sup>"
    ];
    act3_table_data_2 = [];
    for (let i = 0; i < act3_X.length; i++) {
        act3_table_data_2.push([
            act3_X[i],
            parseFloat(act3_Y[i].toFixed(3)),
            parseFloat((act3_X[i] - act3_X_avg).toFixed(3)),
            parseFloat((Math.pow((act3_X[i] - act3_X_avg), 2)).toFixed(3)),
            parseFloat((act3_Y[i] - act3_Y_avg).toFixed(3)),
            parseFloat((Math.pow((act3_Y[i] - act3_Y_avg), 2)).toFixed(3)),
            parseFloat(((act3_Y[i] - act3_Y_avg) * (act3_X[i] - act3_X_avg)).toFixed(3)),
            parseFloat((act3_mat_x[1] + (act3_mat_x[0] * act3_X[i])).toFixed(3)),
            parseFloat((Math.pow((act3_Y[i] - (act3_mat_x[1] + (act3_mat_x[0] * act3_X[i]))), 2)).toFixed(3))
        ]);
    }
    let vc = [2, 3, 4, 5, 6, 7, 8];
    let vv = [act3_table_data_2[0][2], act3_table_data_2[0][3], act3_table_data_2[0][4], act3_table_data_2[0][5], act3_table_data_2[0][6], act3_table_data_2[0][7], act3_table_data_2[0][8]];
    let new_table = new Verify_Table(header, act3_table_data_2, 0, vc, vv, '', d, true, act3_after_avg_verify);
    new_table.load_table();
    setTimeout(() => { MathJax.typeset(); }, 150);
}
function act3_after_avg_verify() {
    let ss = document.getElementById('act3-summations-section');
    let div_ele = document.createElement('div');
    div_ele.setAttribute('class', 'col');
    // let btn_text = get_collapse_btn_text(`<span class='fs-16px' >$$ S_{XX}, S_{YY}, S_{XY}, SS_r   and M_{res} $$</span>`, 'div-step-5');
    div_ele.innerHTML = `

      

            <h5 class="fs-20px">Calculate: </h5>

            <div class="col">
                <div class="col-sm-6">
                    S2<sub>XX</sub> (Sum of sqaured deviations of X from <span style='display: inline-block; width: 20px;'>$$ \\overline{X} $$</span>) = <span style='display: inline-block; text-align: left;'>$$ S2_{XX} = \\Sigma {(X - \\overline{X})^2} $$</span> = <input type="text" class="form-control fs-16px" id="act3-sm-xx"><span class='fs-16px' id='act3-dsp-sxx'></span>
                </div>

                <br>

                <div class="col-sm-6">S2<sub>YY</sub> (Sum of squared deviations of Y<sub>2</sub> from <span style='display: inline-block; width: 20px;'>$$ \\overline{Y_2} $$</span>) =  <span style='display: inline-block; text-align: left;'>$$ S2_{YY} = \\Sigma {(Y_2 - \\overline{Y})^2} $$</span> = <input type="text" class="form-control fs-16px" id="act3-sm-yy"><span class='fs-16px' id='act3-dsp-syy'></span></div>
                <br>
            </div>


            <div class="col">
                <div class="col-sm-6">S2<sub>XY</sub> (deviations of X form the <span style='display: inline-block; width: 20px;'>$$ \\overline{X} $$</span> and deviation of Y<sub>2</sub> from <span style='display: inline-block; width: 20px;'>$$ \\overline{Y_2} $$</span>) = <span style='display: inline-block; text-align: left;'>$$ S2_{XY} = \\Sigma {(X - \\overline{X})(Y_2 - \\overline{Y_2})} $$</span> = <input type="text" class="form-control fs-16px" id="act3-sm-xy"><span class='fs-16px' id='act3-dsp-sxy'></span></div>
                <br>

                <div class="col-sm-6">SS2<sub>r</sub> (Sum of squred residues) = <span style='display: inline-block; text-align: left;'>$$ SS2_r = \\Sigma {(Y<sub>2</sub> - Y')^2} $$</span> = <input type="text" class="form-control fs-16px" id="act3-sm-r"><span class='fs-16px' id='act3-dsp-ssr'></span></div>
                <br>
            </div>


            <div class="col">
                <div class="col-sm-6">S3<sub>XX</sub> (Mean square due to regression) = <span style='display: inline-block; text-align: left;'>$$ M2_{res} = \\Sigma { \\frac {(Y_2 - Y')^2}{(n-2)}} = \\frac {SS2_r}{(n-2)} $$</span> = <input type="text" class="form-control fs-16px" id="act3-sm-mres"><span class='fs-16px' id='act3-dsp-smres'></span></div>
            </div>

            <br>

           
            <div class="col-4"><button class='btn btn-info std-btn' onclick='act3_verify_sm();' id='act3-vf-sm' >Verify</buttton></div>

        

    `;
    ss.appendChild(div_ele);
    setTimeout(() => { MathJax.typeset(); }, 100);
}
function act3_verify_sm() {
    let inp1 = document.getElementById('act3-sm-xx');
    let inp2 = document.getElementById('act3-sm-yy');
    let inp3 = document.getElementById('act3-sm-xy');
    let inp4 = document.getElementById('act3-sm-r');
    let inp5 = document.getElementById('act3-sm-mres');
    let btn = document.getElementById('act3-vf-sm');
    //to display
    // let dsp_xx: HTMLSpanElement = <HTMLSpanElement> document.getElementById('act2-dsp-sxx');
    // let dsp_yy: HTMLSpanElement = <HTMLSpanElement> document.getElementById('act2-dsp-syy');
    // let dsp_xy: HTMLSpanElement = <HTMLSpanElement> document.getElementById('act2-dsp-sxy');
    // let dsp_ssr: HTMLSpanElement = <HTMLSpanElement> document.getElementById('act2-dsp-ssr');
    // let dsp_smres: HTMLSpanElement = <HTMLSpanElement> document.getElementById('act2-dsp-smres');
    act3_sxx = 0;
    act3_syy = 0;
    act3_sxy = 0;
    act3_ssr = 0;
    act3_smres = 0;
    for (let i = 0; i < act3_table_data_2.length; i++) {
        act3_sxx += act3_table_data_2[i][3];
        act3_syy += act3_table_data_2[i][5];
        act3_sxy += act3_table_data_2[i][2] * act3_table_data_2[i][4];
        act3_ssr += act3_table_data_2[i][8];
    }
    act3_smres = act3_ssr / (act3_table_data_2.length - 2);
    console.log(act3_sxx, act3_syy, act3_sxy, act3_ssr, act3_smres);
    if (!verify_values(parseFloat(inp1.value), act3_sxx)) {
        alert('calculated Sxx vlaues is incorrect');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), act3_syy)) {
        alert('calculated Syy vlaues is incorrect');
        return;
    }
    if (!verify_values(parseFloat(inp3.value), act3_sxy)) {
        alert('calculated Sxy vlaues is incorrect');
        return;
    }
    if (!verify_values(parseFloat(inp4.value), act3_ssr)) {
        alert('calculated SSr vlaues is incorrect');
        return;
    }
    if (!verify_values(parseFloat(inp5.value), act3_smres)) {
        alert('calculated M_res vlaues is incorrect');
        return;
    }
    alert('All Values are correct');
    // dsp_xx.innerText = inp1.value;
    // dsp_yy.innerText = inp2.value;
    // dsp_xy.innerText = inp3.value;
    // dsp_ssr.innerText = inp4.value;
    // dsp_smres.innerText = inp5.value;
    // inp1.style.display = 'none';
    // inp2.style.display = 'none';
    // inp3.style.display = 'none';
    // inp4.style.display = 'none';
    // inp5.style.display = 'none';
    // inp1.remove();
    // inp2.remove();
    // inp3.remove();
    // inp4.remove();
    // inp5.remove();
    btn.remove();
    inp1.disabled = true;
    inp2.disabled = true;
    inp3.disabled = true;
    inp4.disabled = true;
    inp5.disabled = true;
    //hide_all_steps();
    activity3_p4();
}
//# sourceMappingURL=activity3_p3.js.map