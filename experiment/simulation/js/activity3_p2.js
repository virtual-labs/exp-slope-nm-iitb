function activity3_p2() {
    let next_btn = get_collapse_btn_element(`Calculate <span style='display: inline-block;' class='fs-16px'>$$ a_2 \\ and \\ b_2 $$</span>`, 'act3-part-3');
    let div_ele = document.createElement('div');
    let line_break = document.createElement('br');
    div_ele.setAttribute('class', 'divide fs-16px');
    div_ele.id = 'act3-part-3';
    div_ele.innerHTML = `
   
    <h4 style='text-align: left;'  class='fb-800 fs-16px'>Summation</h4>
    <p class='fs-16px'><span> $$ Required \\ Equations => b_2 \\Sigma {X^2} + a_2 \\Sigma {X} =  \\ \\Sigma {XY_2} \\ \\  and \\ \\ b_2 \\Sigma {X} + a_2n = \\Sigma {Y_2} $$</span></p>
    <p class='fs-16px'><span>$$ \\Sigma {X} = ${act3_sum_X}, \\ \\ \\Sigma {Y_1} = ${act3_sum_Y.toFixed(3)}, \\ \\ \\Sigma {X^2} = ${act3_sum_X2}, \\ \\ \\Sigma {XY_1} = ${act3_sum_XY.toFixed(3)} $$</span></p>

    <hr>
    <div>
    <h5 class='fs-16px'>Above Equations can be written as <span style='font-weight: 800;'>$$x = \\ \\frac{B}{A}$$</span></h5>



    <div class='row' style='width: 80vw; margin: auto;'>
        <div class='col-4'>
            A = 
            <span>
                <table class='table table-bordered' style='border-color: black; width: 50%;'>
                    <tr >
                        <td> <span style='font-size: 16px !important;'>$$ \\Sigma {X^2}$$ </span></td>
                        <td><span style='font-size: 16px !important;'>$$ \\Sigma {X}$$ </span></td>
                    </tr>

                    <tr >
                        <td><span style='font-size: 16px !important;'>$$ \\Sigma {X}$$ </span></td>
                        <td class='center-text'><span style='font-size: 16px !important;'>n </span></td>
                    </tr>
                </table>
            </span>
        </div>

        <div class='col-4'>
        x = 
        <span>
            <table class='table table-bordered'  style='border-color: black; width: 20%;'>
                <tr >
                    <td> <span style='font-size: 16px !important;'> b<sub>2</sub> </span></td>
                </tr>

                <tr >
                    <td><span style='font-size: 16px !important;'> a<sub>2</sub> </span></td>
                </tr>
            </table>
        </span>
        </div>

        <div class='col-4'>
        B = 
        <span>
            <table class='table table-bordered'  style='border-color: black; width: 20%;'>
                <tr >
                    <td> <span style='font-size: 16px !important;'>$$ \\Sigma {XY_2}$$ </span></td>
                </tr>

                <tr >
                    <td><span style='font-size: 16px !important;'>$$ \\Sigma {Y_2}$$ </span></td>
                </tr>
            </table>
        </span>
        </div>
    </div>

    <div>
        <h5 class='fs-16px'>Calculate the values:</h5>
        <div class='row'>
            <div class='col-4'>
                <div class='row'>
                    <div class='col-3' style='text-align: center;'>a<sub>2</sub> = </div>
                    <div class='col-9'><input class='form-control' id='a2_inp' / ><span class='fs-16px' id='dsp-a2'></span></div>
                </div>
            </div>
             <div class='col-4'>
                <div class='row'>
                    <div class='col-3'  style='text-align: center;'>b<sub>2</sub> = </div>
                    <div class='col-9'><input class='form-control' id='b2_inp' / ><span class='fs-16px' id='dsp-b2'></span></div>
                </div>
            </div>
            <div class='col-4'>
                <button class='btn btn-info std-btn' style='margin-left: 5vw;' id='vf-a2-b2' onclick='verify_a2_b2();' >Verify</button>
            </div>
        </div>
    
    </div>

    </div>
    
    `;
    maindiv.appendChild(line_break);
    maindiv.appendChild(next_btn);
    maindiv.appendChild(div_ele);
    hide_all_steps();
    show_step('act3-part-3');
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_a2_b2() {
    let a1_val = document.getElementById('a2_inp');
    let b1_val = document.getElementById('b2_inp');
    let btn = document.getElementById('vf-a2-b2');
    //display values
    let dsp_a1 = document.getElementById('dsp-a2');
    let dsp_b1 = document.getElementById('dsp-b2');
    act3_mat_A = [[act3_sum_X2, act3_sum_X], [act3_sum_X, act3_N]];
    act3_mat_x = [0, 0];
    act3_mat_B = [act3_sum_XY, act3_sum_Y];
    let A = [[act3_mat_A[0][0], act3_mat_A[0][1]], [act3_mat_A[1][0], act3_mat_A[1][1]]];
    let B = [act3_mat_B[0], act3_mat_B[1]];
    act3_mat_x = gauss(A, B);
    console.log(`a2 = ${act3_mat_x[1]}, b2 = ${act3_mat_x[0]}`);
    if (!verify_values(parseFloat(a1_val.value), act3_mat_x[1])) {
        alert('a2 values is incorrect!!');
        return;
    }
    if (!verify_values(parseFloat(b1_val.value), act3_mat_x[0])) {
        alert('b2 values is incorrect!!');
        return;
    }
    alert('You have entered correct values for a2 and b2');
    btn.remove();
    dsp_a1.innerHTML = act3_mat_x[1].toFixed(3);
    dsp_b1.innerHTML = act3_mat_x[0].toFixed(3);
    a1_val.remove();
    b1_val.remove();
    activity3_p3();
}
//activity2_p2();
//# sourceMappingURL=activity3_p2.js.map