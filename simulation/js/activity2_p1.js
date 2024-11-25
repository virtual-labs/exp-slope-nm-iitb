function activity2_p1() {
    let next_btn = get_collapse_btn_element(`Calculate <span style='display: inline-block;' class='fs-16px'>$$ X^2 \\ and \\ XY_1 and their summation$$</span>`, 'act2-part-2');
    let div_ele = document.createElement('div');
    let line_break = document.createElement('br');
    div_ele.setAttribute('class', 'divide fs-16px');
    div_ele.id = 'act2-part-2';
    //table inputs
    let header = ['X', '<span>$$ Y_1 $$</span>', '<span>$$X^2$$</span>', '<span>$$ XY_1 $$</span>'];
    act2_all_data = [];
    for (let i = 0; i < act2_X.length; i++) {
        let arr = [act2_X[i], parseFloat(act2_Y[i].toFixed(3)), parseFloat((Math.pow(act2_X[i], 2)).toFixed(3)), parseFloat((act2_X[i] * act2_Y[i]).toFixed(3))];
        act2_all_data.push(arr);
    }
    let vr_ind = 0;
    let vr_col = [2, 3];
    let or_val = [act2_all_data[0][2], act2_all_data[0][3]];
    let new_tab = new Verify_Table(header, act2_all_data, vr_ind, vr_col, or_val, '', div_ele, true, after_verify_act2);
    new_tab.load_table();
    maindiv.appendChild(line_break);
    maindiv.appendChild(next_btn);
    maindiv.appendChild(div_ele);
    hide_all_steps();
    show_step('act2-part-2');
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function after_verify_act2() {
    console.log('table-varified');
    let div_ele = document.getElementById('act2-part-2');
    div_ele.innerHTML += `
   <br>
   <div class="row" class="fs-16px">
   so, the correct pair of equation is:
   <span class="fs-16px">$$ b_1 \\Sigma X^2 + a1 \\Sigma X = \\Sigma XY_1 \\ and \\ b_1 \\Sigma X + a_1n = \\Sigma Y_1 $$</span>
</div>

<p class="fs-16px">Calculate the following values</p>

<div class="col">
   <div class="row">

       <div class="col-6">
           <div class="row">
               <div class="col-6"><span class="fs-16px">$$ \\Sigma X = $$</span></div>
               <div class="col-6"><input class="form-control fs-16px" type="text" id="act2-sum-x-inp"><span style="display: inline-block" id="dsp-sumx"></span></div>
           </div>
       </div>

       <div class="col-6">
           <div class="row">
               <div class="col-6"><span class="fs-16px">$$ \\Sigma Y_1 = $$</span></div>
               <div class="col-6"><input class="form-control fs-16px" type="text" id="act2-sum-y-inp"><span style="display: inline-block" id="dsp-sumy"></span></div>
           </div>
       </div>

   </div>

   <div class="row">

       <div class="col-6">
           <div class="row">
               <div class="col-6"><span class="fs-16px">$$ \\Sigma X^2 = $$</span></div>
               <div class="col-6"><input class="form-control fs-16px" type="text" id="act2-sum-x2-inp"><span style="display: inline-block" id="dsp-sumx2"></span></div>
           </div>
       </div>


       <div class="col-6">
           <div class="row">
               <div class="col-6"><span class="fs-16px">$$ \\Sigma XY_1 = $$</span></div>
               <div class="col-6"><input class="form-control fs-16px" type="text" id="act2-sum-xy-inp"><span style="display: inline-block" id="dsp-sumxy"></span></div>
           </div>
       </div>

   </div>
</div>

<div><button class="btn btn-info std-btn" id="act2-tab1-sum" onclick="act2_verify_sum1();">Next</button></div>


   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function act2_verify_sum1() {
    let val1 = document.getElementById('act2-sum-x-inp');
    let val2 = document.getElementById('act2-sum-y-inp');
    let val3 = document.getElementById('act2-sum-x2-inp');
    let val4 = document.getElementById('act2-sum-xy-inp');
    let btn = document.getElementById('act2-tab1-sum');
    //to display after successful verification
    let dspsumx = document.getElementById('dsp-sumx');
    let dspsumy = document.getElementById('dsp-sumy');
    let dspsumx2 = document.getElementById('dsp-sumx2');
    let dspsumxy = document.getElementById('dsp-sumxy');
    //start from zero
    act2_sum_X = 0;
    act2_sum_Y = 0;
    act2_sum_X2 = 0;
    act2_sum_XY = 0;
    //calculate sum of x, y, x2 and xy
    for (let i = 0; i < act2_all_data.length; i++) {
        act2_sum_X += act2_all_data[i][0];
        act2_sum_Y += act2_all_data[i][1];
        act2_sum_X2 += act2_all_data[i][2];
        act2_sum_XY += act2_all_data[i][3];
    }
    console.log(act2_sum_X, act2_sum_Y, act2_sum_X2, act2_sum_XY);
    if (!verify_values(parseFloat(val1.value), act2_sum_X)) {
        alert('Incorrect sum of X values, calculate again!!');
        return;
    }
    if (!verify_values(parseFloat(val2.value), act2_sum_Y)) {
        alert('Incorrect sum of Y values, calculate again!!');
        return;
    }
    if (!verify_values(parseFloat(val3.value), act2_sum_X2)) {
        alert('Incorrect sum of X^2 values, calculate again!!');
        return;
    }
    if (!verify_values(parseFloat(val4.value), act2_sum_XY)) {
        alert('Incorrect sum of XY values, calculate again!!');
        return;
    }
    alert('You have entered the correct values');
    btn.remove();
    dspsumx.innerText = act2_sum_X.toString();
    dspsumy.innerText = act2_sum_Y.toString();
    dspsumx2.innerText = act2_sum_X2.toString();
    dspsumxy.innerText = act2_sum_XY.toString();
    val1.remove();
    val2.remove();
    val3.remove();
    val4.remove();
    activity2_p2();
}
//activity2_p1();
//# sourceMappingURL=activity2_p1.js.map