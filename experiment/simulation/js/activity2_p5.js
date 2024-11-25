function activity2_p6() {
    let next_btn = get_collapse_btn_element(`Calculate <span style='display: inline-block;' class='fs-16px'>$$ t1_{0}$$</span>`, 'act2-part-7');
    let div_ele = document.createElement('div');
    let line_break = document.createElement('br');
    div_ele.setAttribute('class', 'divide fs-16px');
    div_ele.id = 'act2-part-7';
    div_ele.innerHTML = `
    

    <h5 class='fs-16px'>Step 7: Calculate t1<sub>o</sub></h5>

    <div class="row">
        <div class="col-6 fs-16px">
            b1 = ${act2_mat_x[1].toFixed(3)}
        </div>
        <div class="col-6 fs-16px">
            S1<sub>XX</sub> = ${act2_sxx.toFixed(3)}
        </div>
    </div>


    <div class="row">
        <div class="col-6 fs-16px">
            SS1<sub>r</sub> = ${act2_ssr.toFixed(3)}
        </div>
        <div class="col-6 fs-16px">
            M1<sub>Res</sub> = ${act2_smres.toFixed(3)}
        </div>
    </div>

    <div class="fs-16px">

    <br>
    <div class='fs-16px'>t<sub>o</sub> is the test static which is calculated to decide wether null hypothesis is rejected or failed to rejected.</div>
    <br>
    <div>t2<sub>o</sub> can be calculated by given formula</div>
    <ul>
        <li>$$ t1_o = b_1 \\times \\sqrt {(n-2) \\times \\frac{S1_{XX}}{SS1_r}} $$</li>
        <li>$$ t1_o = \\frac {b_1}  {\\sqrt { \\frac{M1_{Res}}{S1_{XX}}}} $$</li>
    </ul>
    </div>

    <div class="row" >
    <div class="col-2 fs-16px" style="text-align: right;">t1<sub>o</sub> =</div>
    <div class="col-7"><input type="text" class="form-control fs-16px" id='act2-vf-to'><span class='fs-16px' id='act2-dsp-to'></span></div>
    <div class="col-3"><button class='btn btn-info' onclick='act2_vf_to();' id='act2-btn-to'>Verify</button></div>
</div>
    
    `;
    maindiv.appendChild(line_break);
    maindiv.appendChild(next_btn);
    maindiv.appendChild(div_ele);
    hide_all_steps();
    show_step('act2-part-7');
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function act2_vf_to() {
    let val = document.getElementById('act2-vf-to');
    let btn = document.getElementById('act2-btn-to');
    let dsp_to = document.getElementById('act2-dsp-to');
    t1_0 = act2_mat_x[0] / Math.sqrt(act2_smres / act2_sxx);
    let t1_1 = act2_mat_x[0] * Math.sqrt((act2_N - 2) * (act2_sxx / act2_ssr));
    console.log(t1_1);
    console.log(t1_0);
    if (!verify_values(parseFloat(val.value), t1_0)) {
        alert("Entered to value is incorrect!! try again");
        return;
    }
    alert('You have entered correct value');
    dsp_to.innerText = val.value;
    val.remove();
    btn.remove();
    activity2_p7();
}
//activity2_p6();
//# sourceMappingURL=activity2_p5.js.map