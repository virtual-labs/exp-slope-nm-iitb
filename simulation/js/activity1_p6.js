function activity1_p6() {
    let div_ele = document.createElement('div');
    let line_break = document.createElement('br');
    let btn = get_collapse_btn_element('Calculation of t<sub>o</sub>', 'div-step-7');
    div_ele.setAttribute('class', 'collapse divide');
    div_ele.id = 'div-step-7';
    div_ele.innerHTML = `
   
    <h5 class='fs-16px'>Step 7: Calculate t<sub>o</sub></h5>

    <div class="row">
        <div class="col-6 fs-16px">
            b = ${mat_x[1].toFixed(3)}
        </div>
        <div class="col-6 fs-16px">
            S<sub>XX</sub> = ${sxx.toFixed(3)}
        </div>
    </div>


    <div class="row">
        <div class="col-6 fs-16px">
            SS<sub>r</sub> = ${ssr.toFixed(3)}
        </div>
        <div class="col-6 fs-16px">
            M<sub>Res</sub> = ${smres.toFixed(3)}
        </div>
    </div>

    <div class="fs-16px">

    <br>
    <div class='fs-16px'>t<sub>o</sub> is the test static which is calculated to decide wether null hypothesis is rejected or failed to rejected.</div>
    <br>
    <div>t<sub>o</sub> can be calculated by given formula</div>
    <ul>
        <li>$$ t_o = b \\times \\sqrt {(n-2) \\times \\frac{S_{XX}}{SS_r}} $$</li>
        <li>$$ t_o = \\frac {b}  {\\sqrt { \\frac{M_{Res}}{S_{XX}}} }$$</li>
    </ul>
    </div>

    <div class="row" >
    <div class="col-2 fs-16px" style="text-align: right;">t<sub>o</sub> =</div>
    <div class="col-7"><input type="text" class="form-control fs-16px" id='vf-to'><span class='fs-16px' id='dsp-to'></span></div>
    <div class="col-3"><button class='btn btn-info' onclick='vf_to();' id='btn-to'>Verify</button></div>
</div>

    `;
    maindiv.appendChild(line_break);
    maindiv.appendChild(btn);
    maindiv.appendChild(div_ele);
    setTimeout(() => { MathJax.typeset(); }, 100);
    hide_all_steps();
    show_step('div-step-7');
}
function vf_to() {
    let val = document.getElementById('vf-to');
    let btn = document.getElementById('btn-to');
    let dsp_to = document.getElementById('dsp-to');
    to = mat_x[0] / Math.sqrt(smres / sxx);
    console.log(to);
    if (!verify_values(parseFloat(val.value), to)) {
        alert("Entered to value is incorrect!! try again");
        return;
    }
    alert('You have entered correct value');
    dsp_to.innerText = val.value;
    val.remove();
    btn.remove();
    activity1_p6_5();
}
//activity1_p6();
//# sourceMappingURL=activity1_p6.js.map