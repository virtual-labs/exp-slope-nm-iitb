function activity2_p4() {
    let next_btn = get_collapse_btn_element(`Calculate <span style='display: inline-block;' class='fs-16px'>$$ R_1^2 $$</span>`, 'act2-part-5');
    let div_ele = document.createElement('div');
    let line_break = document.createElement('br');
    div_ele.setAttribute('class', 'divide fs-16px');
    div_ele.id = 'act2-part-5';
    div_ele.innerHTML = `
    <h5 class="fs-16px">Step 6: Calcualate R<sup>1</sup> and Plot</h5>

    <div class='row fs-16px'>Now R is the coefficient of correlation which are computed on the basis of sample data chosen from the population of X - Y<sub>1</sub></div>

    <p class="display: inline-block;" class="fs-16px">$$ R_1^2 = 1 - \\frac{SS1_r}{S1_{YY}} $$</p>

    <div class='row'>

        <div class="col-6" style='text-align: right;'>$$ SS1_r = ${act2_ssr.toFixed(3)}$$</div>

        <div class="col-6" style='text-align: right;'>$$ S1_{YY} = ${act2_syy.toFixed(3)}$$</div>

    </div>


    <div class="row fs-16px">
        <div class="col-3" style='text-align: right;'>R<sub>1</sub><sup>2</sup> = </div>
        <div class="col-6"><input type="text" class="form-control" id="act2-r2-inp"><span class='fs-16px' id='act2-dsp-r2'></span></div>
    </div>

   

    <br>

    <div class="row fs-16px">
        <div class="col-12" style='text-align: center;'><button class="btn btn-info std-btn" onclick="act2_vf_r2();" id='act2-vf-r2' >Verify</button></div>
    </div>

    <br>

    <div id='act2-plot-container'></div>

    `;
    maindiv.appendChild(line_break);
    maindiv.appendChild(next_btn);
    maindiv.appendChild(div_ele);
    hide_all_steps();
    show_step('act2-part-5');
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function act2_vf_r2() {
    let inp = document.getElementById('act2-r2-inp');
    let btn = document.getElementById('act2-vf-r2');
    let dsp_r2 = document.getElementById('act2-dsp-r2');
    act2_r2 = 0;
    act2_r2 = 1 - (act2_ssr / act2_syy);
    console.log(act2_r2);
    if (!verify_values(parseFloat(inp.value), act2_r2)) {
        alert('Entered value of R^2 is incorrect!! try again');
        return;
    }
    alert('Entered value is correct!!');
    dsp_r2.innerText = inp.value;
    inp.remove();
    inp.disabled = true;
    btn.remove();
    act2_show_plot1_info();
}
function act2_show_plot1_info() {
    let div_ele = document.getElementById('act2-plot-container');
    div_ele.innerHTML = `
    
        <h5 class="fs-16px">Plotting the regression</h5>

        <div class="row">
            <div class="col-6">X: x-axis</div>
            <div class="col-6">Y<sub>1</sub>: y-axis</div>
        </div>

        <br>

        <div>
            <button class="btn btn-info std-btn" onclick="act2_plot1_x_y();">Plot</button>
        </div>
        <br>

        <div style='height: 1000px; width: 500px;'>
            <canvas id='act2-myChart'></canvas>
        </div>

        <div><button class='btn btn-info std-btn' style='display: none;' onclick='act2_start_next_act1();' id='act2-next1-btn'>Next</button>
        </div>
   
    `;
}
function act2_plot1_x_y() {
    var ctx = document.getElementById('act2-myChart');
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
            labels: act2_X,
            datasets: [
                {
                    label: 'Y',
                    data: act2_Y,
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
                    data: act2_Y2,
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
    let btn = document.getElementById('act2-next1-btn');
    btn.style.display = 'block';
}
function act2_start_next_act1() {
    let btn = document.getElementById('act2-next1-btn');
    btn.remove();
    hide_all_steps();
    activity2_p6();
    //console.log('plot act completed');
}
//activity2_p4();
//# sourceMappingURL=activity2_p4.js.map