function activity3_p1() {
    let next_btn = get_collapse_btn_element(`Calculate <span style='display: inline-block;' class='fs-16px'>$$ X^2 \\ and \\ XY_2 and their summation$$</span>`, 'act3-part-2');
    let div_ele = document.createElement('div');
    let line_break = document.createElement('br');
    div_ele.setAttribute('class', 'divide fs-16px');
    div_ele.id = 'act3-part-2';
    //table inputs
    let header = ['X', '<span>$$ Y_2 $$</span>', '<span>$$X^2$$</span>', '<span>$$ XY_2 $$</span>'];
    act3_all_data = [];
    for (let i = 0; i < act3_X.length; i++) {
        let arr = [act3_X[i], parseFloat(act3_Y[i].toFixed(3)), parseFloat((Math.pow(act3_X[i], 2)).toFixed(3)), parseFloat((act3_X[i] * act3_Y[i]).toFixed(3))];
        act3_all_data.push(arr);
    }
    let vr_ind = 0;
    let vr_col = [2, 3];
    let or_val = [act3_all_data[0][2], act3_all_data[0][3]];
    let new_tab = new Verify_Table(header, act3_all_data, vr_ind, vr_col, or_val, '', div_ele, true, after_verify_act3);
    new_tab.load_table();
    maindiv.appendChild(line_break);
    maindiv.appendChild(next_btn);
    maindiv.appendChild(div_ele);
    hide_all_steps();
    show_step('act3-part-2');
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function after_verify_act3() {
    console.log('table-varified');
    let div_ele = document.getElementById('act3-part-2');
    div_ele.innerHTML += `
   <br>
   <div class="row" class="fs-16px">
   so, the correct pair of equation is:
   <span class="fs-16px">$$ b_2 \\Sigma X^2 + a_2 \\Sigma X = \\Sigma XY_2 \\ and \\ b_2 \\Sigma X + a_2n = \\Sigma Y_2 $$</span>
</div>

<p class="fs-16px">Calculate the following values</p>

<div class="col">
   <div class="row">

       <div class="col-6">
           <div class="row">
               <div class="col-6"><span class="fs-16px">$$ \\Sigma X = $$</span></div>
               <div class="col-6"><input class="form-control fs-16px" type="text" id="act3-sum-x-inp"><span style="display: inline-block" id="dsp3-sumx"></span></div>
           </div>
       </div>

       <div class="col-6">
           <div class="row">
               <div class="col-6"><span class="fs-16px">$$ \\Sigma Y_2 = $$</span></div>
               <div class="col-6"><input class="form-control fs-16px" type="text" id="act3-sum-y-inp"><span style="display: inline-block" id="dsp3-sumy"></span></div>
           </div>
       </div>

   </div>

   <div class="row">

       <div class="col-6">
           <div class="row">
               <div class="col-6"><span class="fs-16px">$$ \\Sigma X^2 = $$</span></div>
               <div class="col-6"><input class="form-control fs-16px" type="text" id="act3-sum-x2-inp"><span style="display: inline-block" id="dsp3-sumx2"></span></div>
           </div>
       </div>


       <div class="col-6">
           <div class="row">
               <div class="col-6"><span class="fs-16px">$$ \\Sigma XY_2 = $$</span></div>
               <div class="col-6"><input class="form-control fs-16px" type="text" id="act3-sum-xy-inp"><span style="display: inline-block" id="dsp3-sumxy"></span></div>
           </div>
       </div>

   </div>
</div>

<div><button class="btn btn-info std-btn" id="act3-tab1-sum" onclick="act3_verify_sum1();">Next</button></div>


   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function act3_verify_sum1() {
    let val1 = document.getElementById('act3-sum-x-inp');
    let val2 = document.getElementById('act3-sum-y-inp');
    let val3 = document.getElementById('act3-sum-x2-inp');
    let val4 = document.getElementById('act3-sum-xy-inp');
    let btn = document.getElementById('act3-tab1-sum');
    //to display after successful verification
    let dspsumx = document.getElementById('dsp3-sumx');
    let dspsumy = document.getElementById('dsp3-sumy');
    let dspsumx2 = document.getElementById('dsp3-sumx2');
    let dspsumxy = document.getElementById('dsp3-sumxy');
    //start from zero
    act3_sum_X = 0;
    act3_sum_Y = 0;
    act3_sum_X2 = 0;
    act3_sum_XY = 0;
    //calculate sum of x, y, x2 and xy
    for (let i = 0; i < act3_all_data.length; i++) {
        act3_sum_X += act3_all_data[i][0];
        act3_sum_Y += act3_all_data[i][1];
        act3_sum_X2 += act3_all_data[i][2];
        act3_sum_XY += act3_all_data[i][3];
    }
    console.log(act3_sum_X, act3_sum_Y, act3_sum_X2, act3_sum_XY);
    if (!verify_values(parseFloat(val1.value), act3_sum_X)) {
        alert('Incorrect sum of X values, calculate again!!');
        return;
    }
    if (!verify_values(parseFloat(val2.value), act3_sum_Y)) {
        alert('Incorrect sum of Y values, calculate again!!');
        return;
    }
    if (!verify_values(parseFloat(val3.value), act3_sum_X2)) {
        alert('Incorrect sum of X^2 values, calculate again!!');
        return;
    }
    if (!verify_values(parseFloat(val4.value), act3_sum_XY)) {
        alert('Incorrect sum of XY values, calculate again!!');
        return;
    }
    alert('You have entered the correct values');
    btn.remove();
    dspsumx.innerText = act3_sum_X.toString();
    dspsumy.innerText = act3_sum_Y.toString();
    dspsumx2.innerText = act3_sum_X2.toString();
    dspsumxy.innerText = act3_sum_XY.toString();
    val1.remove();
    val2.remove();
    val3.remove();
    val4.remove();
    activity3_p2();
}
//activity2_p1();
//# sourceMappingURL=activity3_p1.js.map