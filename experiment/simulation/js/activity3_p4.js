function activity3_p4() {
    let next_btn = get_collapse_btn_element(`Calculate <span style='display: inline-block;' class='fs-16px'>$$ R2^2 $$</span>`, 'act3-part-5');
    let div_ele = document.createElement('div');
    let line_break = document.createElement('br');
    div_ele.setAttribute('class', 'divide fs-16px');
    div_ele.id = 'act3-part-5';
    div_ele.innerHTML = `
    <h5 class="fs-16px">Step 6: Calcualate R<sup>2</sup> and Plot</h5>

    <div class='row fs-16px'>Now R is the coefficient of correlation which are computed on the basis of sample data chosen from the population of X - Y<sub>2</sub></div>

    <p class="display: inline-block;" class="fs-16px">$$ R_2^2 = 1 - \\frac{SS2_r}{S2_{YY}} $$</p>

    <div class='row'>

        <div class="col-6" style='text-align: right;'>$$ SS2_r = ${act3_ssr.toFixed(3)}$$</div>

        <div class="col-6" style='text-align: right;'>$$ S2_{YY} = ${act3_syy.toFixed(3)}$$</div>

    </div>


    <div class="row fs-16px">
        <div class="col-3" style='text-align: right;'>R<sub>2</sub><sup>2</sup> = </div>
        <div class="col-6"><input type="text" class="form-control" id="act3-r2-inp"><span class='fs-16px' id='act3-dsp-r2'></span></div>
    </div>

   

    <br>

    <div class="row fs-16px">
        <div class="col-12" style='text-align: center;'><button class="btn btn-info std-btn" onclick="act3_vf_r2();" id='act3-vf-r2' >Verify</button></div>
    </div>

    <br>

    <div id='act3-plot-container'></div>

    `;
    maindiv.appendChild(line_break);
    maindiv.appendChild(next_btn);
    maindiv.appendChild(div_ele);
    hide_all_steps();
    show_step('act3-part-5');
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function act3_vf_r2() {
    let inp = document.getElementById('act3-r2-inp');
    let btn = document.getElementById('act3-vf-r2');
    let dsp_r2 = document.getElementById('act3-dsp-r2');
    act3_r2 = 0;
    act3_r2 = 1 - (act3_ssr / act3_syy);
    console.log(act3_r2);
    if (!verify_values(parseFloat(inp.value), act3_r2)) {
        alert('Entered value of R^2 is incorrect!! try again');
        return;
    }
    alert('Entered value is correct!!');
    dsp_r2.innerText = inp.value;
    inp.remove();
    inp.disabled = true;
    btn.remove();
    act3_show_plot1_info();
}
function act3_show_plot1_info() {
    let div_ele = document.getElementById('act3-plot-container');
    div_ele.innerHTML = `
    
        <h5 class="fs-16px">Plotting the regression</h5>

        <div class="row">
            <div class="col-6">X: x-axis</div>
            <div class="col-6">Y<sub>2</sub>: y-axis</div>
        </div>

        <br>

        <div>
            <button class="btn btn-info std-btn" onclick="act3_plot1_x_y();">Plot</button>
        </div>
        <br>

        <div style='height: 1000px; width: 500px;'>
            <canvas id='act3-myChart'></canvas>
        </div>

        <div><button class='btn btn-info std-btn' style='display: none;' onclick='act3_start_next_act1();' id='act3-next1-btn'>Next</button>
        </div>
   
    `;
}
function act3_plot1_x_y() {
    var ctx = document.getElementById('act3-myChart');
    ctx.style.backgroundColor = "white";
    ctx.style.marginTop = "5px";
    ctx.style.marginLeft = "10%";
    ctx.style.padding = "10px";
    ctx.style.borderRadius = "8px";
    // let labels = [0.004, 0.007, 0.010, 0.014, 0.020, 0.029, 0.039];
    // let data1=[82.28,96.86,104.07,108.28,112.48,117.68,125.35];//hi_expt
    // let data2=[146.90,183.50,204.11,230.09,256.89,290.83,323.49];//hi_st
    chart = new Chart(ctx, {
        type: 'scatter',
        data: {
            labels: act3_X,
            datasets: [
                {
                    label: 'Y',
                    data: act3_Y,
                    fill: false,
                    borderColor: 'blue',
                    tension: 0.5,
                    showLine: false
                    // yAxisID: 'A',
                    // borderWidth: 1,
                    // borderColor: "green",
                    // backgroundColor: "rgba(34, 139, 34, 0.5)",
                },
                {
                    label: 'Y2',
                    data: act3_Y2,
                    fill: false,
                    borderColor: 'red',
                    tension: 0.5,
                    showLine: true
                    // yAxisID: 'A',
                    // borderWidth: 1,
                    // borderColor: "red",
                    // backgroundColor: "rgba(255, 0, 0, 0.5)",
                },
            ]
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'Y1 and Y2',
                        font: { size: 14, weight: 'bold' }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'X',
                        font: { size: 14, weight: 'bold' }
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: `Regression Plot`,
                    font: { size: 18 },
                },
                legend: { labels: { font: { size: 14, weight: 'bold' } } }
            },
        }
    });
    let btn = document.getElementById('act3-next1-btn');
    btn.style.display = 'block';
}
function act3_start_next_act1() {
    let btn = document.getElementById('act3-next1-btn');
    btn.remove();
    hide_all_steps();
    activity3_p6();
    //console.log('plot act completed');
}
//activity2_p4();
//# sourceMappingURL=activity3_p4.js.map