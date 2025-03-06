let chart;
function activity1_p5() {
    let btn_text = get_collapse_btn_element('Calculation of R<sup>2</sup> and Plot', 'div-step-6');
    let div_ele = document.createElement('div');
    div_ele.setAttribute('class', 'divide collapse');
    div_ele.id = 'div-step-6';
    let next_line = document.createElement('br');
    div_ele.innerHTML += `
   
    <h5 class="fs-16px">Step 6: Calcualate R<sup>2</sup> and Plot</h5>

    <div class='row fs-16px'>Now R is the coefficient of correlation which are computed on the basis of sample data chosen from the population of X - Y.</div>

    <p class="display: inline-block;" class="fs-16px">$$ R^2 = 1 - \\frac{SS_r}{S_{YY}} $$</p>

    <div class='row'>

        <div class="col-6" style='text-align: right;'>$$ SS_r = ${ssr.toFixed(3)}$$</div>

        <div class="col-6" style='text-align: right;'>$$ S_{YY} = ${syy.toFixed(3)}$$</div>

    </div>


    <div class="row fs-16px">
        <div class="col-3" style='text-align: right;'>R<sup>2</sup> = </div>
        <div class="col-6"><input type="text" class="form-control" id="r2-inp"><span class='fs-16px' id='dsp-r2'></span></div>
    </div>

   

    <br>

    <div class="row fs-16px">
        <div class="col-12" style='text-align: center;'><button class="btn btn-info std-btn" onclick="vf_r2();" id='vf-r2' >Verify</button></div>
    </div>

    <br>

    <div id='plot-container'></div>

    `;
    setTimeout(() => { MathJax.typeset(); }, 100);
    maindiv.appendChild(next_line);
    maindiv.appendChild(btn_text);
    maindiv.appendChild(div_ele);
    hide_all_steps();
    show_step('div-step-6');
}
function vf_r2() {
    let inp = document.getElementById('r2-inp');
    let btn = document.getElementById('vf-r2');
    let dsp_r2 = document.getElementById('dsp-r2');
    r2 = 0;
    r2 = 1 - (ssr / syy);
    console.log(r2);
    if (!verify_values(parseFloat(inp.value), r2)) {
        alert('Entered value of R^2 is incorrect!! try again');
        return;
    }
    alert('Entered value is correct!!');
    dsp_r2.innerText = inp.value;
    inp.remove();
    inp.disabled = true;
    btn.remove();
    show_plot1_info();
}
function show_plot1_info() {
    let div_ele = document.getElementById('plot-container');
    div_ele.innerHTML = `
    
        <h5 class="fs-16px">Plotting the regression</h5>

        <div class="row">
            <div class="col-6">X: x-axis</div>
            <div class="col-6">Y: y-axis</div>
        </div>

        <br>

        <div>
            <button class="btn btn-info std-btn" onclick="plot1_x_y();">Plot</button>
        </div>
        <br>

        <div>
            <canvas id='myChart'></canvas>
        </div>

        <div><button class='btn btn-info std-btn' style='display: none;' onclick='start_next_act1();' id='next1-btn'>Next</button>
        </div>
   
    `;
}
function plot1_x_y() {
    var ctx = document.getElementById('myChart');
    ctx.style.backgroundColor = "white";
    ctx.style.marginTop = "5px";
    ctx.style.marginLeft = "10%";
    ctx.style.padding = "10px";
    ctx.style.borderRadius = "8px";
    if (typeof chart != 'undefined') {
        chart.destroy();
    }
    // let labels = [0.004, 0.007, 0.010, 0.014, 0.020, 0.029, 0.039];
    // let data1=[82.28,96.86,104.07,108.28,112.48,117.68,125.35];//hi_expt
    // let data2=[146.90,183.50,204.11,230.09,256.89,290.83,323.49];//hi_st
    chart = new Chart(ctx, {
        type: 'scatter',
        data: {
            labels: X,
            datasets: [
                {
                    label: 'Y',
                    data: Y,
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
                    data: Y2,
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
            maintainAspectRatio: true,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'Y and Y2',
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
    let btn = document.getElementById('next1-btn');
    btn.style.display = 'block';
}
function start_next_act1() {
    let btn = document.getElementById('next1-btn');
    btn.remove();
    hide_all_steps();
    activity1_p6();
}
//activity1_p5();
//# sourceMappingURL=activity1_p5.js.map