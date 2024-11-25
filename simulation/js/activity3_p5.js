function activity3_p6() {
    let next_btn = get_collapse_btn_element(`Calculate <span style='display: inline-block;' class='fs-16px'>$$ t2_{0}$$</span>`, 'act3-part-7');
    let div_ele = document.createElement('div');
    let line_break = document.createElement('br');
    div_ele.setAttribute('class', 'divide fs-16px');
    div_ele.id = 'act3-part-7';
    div_ele.innerHTML = `
    

    <h5 class='fs-16px'>Step 7: Calculate t2<sub>o</sub></h5>

    <div class="row">
        <div class="col-6 fs-16px">
            b1 = ${act3_mat_x[1].toFixed(3)}
        </div>
        <div class="col-6 fs-16px">
            S1<sub>XX</sub> = ${act3_sxx.toFixed(3)}
        </div>
    </div>


    <div class="row">
        <div class="col-6 fs-16px">
            SS1<sub>r</sub> = ${act3_ssr.toFixed(3)}
        </div>
        <div class="col-6 fs-16px">
            M1<sub>Res</sub> = ${act3_smres.toFixed(3)}
        </div>
    </div>

    <div class="fs-16px">

    <br>
    <div class='fs-16px'>t<sub>o</sub> is the test static which is calculated to decide wether null hypothesis is rejected or failed to rejected.</div>
    <br>
    <div>t2<sub>o</sub> can be calculated by given formula</div>
    <ul>
        <li>$$ t2_o = b_2 \\times \\sqrt {(n-2) \\times \\frac{S2_{XX}}{SS2_r}} $$</li>
        <li>$$ t2_o = \\frac {b_2}  {\\sqrt { \\frac{M2_{Res}}{S2_{XX}}}} $$</li>
    </ul>
    </div>

    <div class="row" >
    <div class="col-2 fs-16px" style="text-align: right;">t2<sub>o</sub> =</div>
    <div class="col-7"><input type="text" class="form-control fs-16px" id='act3-vf-to'><span class='fs-16px' id='act3-dsp-to'></span></div>
    <div class="col-3"><button class='btn btn-info' onclick='act3_vf_to();' id='act3-btn-to'>Verify</button></div>
</div>
    
    `;
    maindiv.appendChild(line_break);
    maindiv.appendChild(next_btn);
    maindiv.appendChild(div_ele);
    hide_all_steps();
    show_step('act3-part-7');
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function act3_vf_to() {
    let val = document.getElementById('act3-vf-to');
    let btn = document.getElementById('act3-btn-to');
    let dsp_to = document.getElementById('act3-dsp-to');
    t2_0 = act3_mat_x[0] / Math.sqrt(act3_smres / act3_sxx);
    let t2_1 = act3_mat_x[0] * Math.sqrt((act3_N - 2) * (act3_sxx / act3_ssr));
    console.log(t2_1);
    console.log(t2_0);
    if (!verify_values(parseFloat(val.value), t2_0)) {
        alert("Entered to value is incorrect!! try again");
        return;
    }
    alert('You have entered correct value');
    dsp_to.innerText = val.value;
    val.remove();
    btn.remove();
    activity3_p7();
}
//activity2_p6();
//# sourceMappingURL=activity3_p5.js.map