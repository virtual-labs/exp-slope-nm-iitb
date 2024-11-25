// function activity4() {
//     maindiv.innerHTML += `
//         <br>
//         <div class='divide'>
//         <div class="fs-16px">
//         <p>Consider the linear models</p>
//         <ul>
//             <li>y = &alpha; + &beta; + &epsilon;</li>
//             <li>y<sub>1</sub> = &alpha;<sub>1</sub> + &beta;<sub>1</sub> + &epsilon;<sub>1</sub></li>
//             <li>y<sub>2</sub> = &alpha;<sub>2</sub> + &beta;<sub>2</sub> + &epsilon;<sub>2</sub></li>
//         </ul>
//     </div>
//     <div>
//         <p>From the available n data points for each model, we found a+bX, a<sub>1</sub>+b<sub>1</sub>X, a<sub>2</sub>+b<sub>2</sub>X,  R, R<sub>1</sub>, R<sub>2</sub> (Estimated coefficients of correlation from sample data) with use of samples from every model separately with their respective dataset. </p>
//         <p>
//             Now, we will determine whether &rho;, &rho;<sub>1</sub>, &rho;<sub>2</sub> (coefficients of correlation for dataset X vs Y, X vs Y<sub>1</sub> and X vs Y<sub>2</sub> respectively.) with hypothesis testing
//         </p>
//         <p>
//             Note: (&rho;, &alpha;, &beta;, &epsilon;), (&rho;1, &alpha;1, &beta;1, &epsilon;1) and (&rho;2, &alpha;2, &beta;2, &epsilon;2) are population parameters. and (R, a, b), (R<sub>1</sub>, a<sub>1</sub>, b<sub>1</sub>) and (R<sub>2</sub>, a<sub>2</sub>, b<sub>2</sub>) are random variables, computed from the sampled data of linear models y=&alpha;+&beta;x+&epsilon; (Activity 1) , y<sub>1</sub>==&alpha;<sub>1</sub>+&beta;<sub>1</sub>x+&epsilon;<sub>1</sub> (Activity 2) and y<sub>2</sub>==&alpha;<sub>2</sub>+&beta;<sub>2</sub>x+&epsilon;<sub>2</sub> (Activity 3)
//         </p>
//     </div>
//     <div><button class='btn btn-info std-btn' id='act4-first-btn' onclick='load_act2_sl2();' >Next</button></div>
//         </div>
//     `;
// }
// function load_act2_sl2() {
//     let prev_btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById('act4-first-btn');
//     prev_btn.remove();
//     let next_btn = get_collapse_btn_element(`Calculate <span style='display: inline-block;' class='fs-16px'>$$t0_0, t0_1 and t0_2$$</span>`, 'act4-part-1');
//     let div_ele: HTMLDivElement = <HTMLDivElement> document.createElement('div');
//     let line_break: HTMLBRElement = <HTMLBRElement> document.createElement('br');
//     div_ele.setAttribute('class', 'divide fs-16px');
//     div_ele.id='act4-part-1';
//     div_ele.innerHTML = `
// <div class="row">
// <div class="row">
//     <div class="col-4">R = </div>
//     <div class="col-8"><input type="text" disabled class="form-control" id="act4-R-inp" value='${Math.sqrt(r2).toFixed(3)}'></div>
// </div>
// <div class="row">
//     <div class="col-4">R<sub>1</sub> = </div>
//     <div class="col-8"><input type="text" disabled class="form-control" id="act4-R1-inp" value='${Math.sqrt(act2_r2).toFixed(3)}' ></div>
// </div>
// <div class="row">
//     <div class="col-4">R<sub>2</sub> = </div>
//     <div class="col-8"><input type="text" disabled class="form-control" id="act4-R2-inp" value='${Math.sqrt(act3_r2).toFixed(3)}'></div>
// </div>
// </div>
// <br>
// <div class="col">
// <div class="row">
//     <div class="col-4"><span>$$ t0(Y) = R \\times \\sqrt{\\frac{(n-2)}{(1 - R^2)}} = $$ </span></div>
//     <div class="col-8"><input type="text" class="form-control" id="act4-t0-inp"></div>
// </div>
// <div class="row">
//     <div class="col-4"><span>$$ t0(Y_1) = R_1 \\times \\sqrt{\\frac{(n-2)}{(1 - R_1^2)}} =  $$ </span></div>
//     <div class="col-8"><input type="text" class="form-control" id="act4-t1-inp"></div>
// </div>
// <div class="row">
//     <div class="col-4"><span>$$ t0(Y_2) = R_2 \\times \\sqrt{\\frac{(n-2)}{(1 - R_2^2)}} = $$ </span></div>
//     <div class="col-8"><input type="text" class="form-control" id="act4-t2-inp"></div>
// </div>
// </div>
// <div><button class='btn btn-info std-btn' id='act4-second-btn' onclick='verify_act4_t();' >Next</button></div>
//     `;
//     maindiv.appendChild(line_break);
//     maindiv.appendChild(next_btn);
//     maindiv.appendChild(div_ele);
//     hide_all_steps();
//     show_step('act4-part-1');
//     setTimeout(() => {MathJax.typeset()}, 100);
// }
// function verify_act4_t() {
//     let val1: HTMLInputElement = <HTMLInputElement> document.getElementById('act4-t0-inp');
//     let val2: HTMLInputElement = <HTMLInputElement> document.getElementById('act4-t1-inp');
//     let val3: HTMLInputElement = <HTMLInputElement> document.getElementById('act4-t2-inp');
//     act4_t01 = Math.sqrt(r2)*Math.sqrt((N-2) / (1-r2));
//     act4_t02 = Math.sqrt(act2_r2)*Math.sqrt((N-2) / (1-act2_r2));
//     act4_t03 = Math.sqrt(act3_r2)*Math.sqrt((N-2) / (1-act3_r2));
//     console.log( act4_t01,  act4_t02,  act4_t03);
//     if(!verify_values(parseFloat(val1.value), act4_t01)) {
//         alert('t_0(Y) values is incorrect');
//         return;
//     }
//     if(!verify_values(parseFloat(val2.value), act4_t02)) {
//         alert('t_0(Y1) values is incorrect');
//         return;
//     }
//     if(!verify_values(parseFloat(val3.value), act4_t03)) {
//         alert('t_0(Y2) values is incorrect');
//         return;
//     }
//     alert('Your Calculations are correct!!');
//     load_act4_theory();
// }
// function load_act4_theory() {
//     let next_btn = get_collapse_btn_element(`Selected <span style='display: inline-block;' class='fs-16px'>$$ \\alpha$$</span>`, 'act3-part-2');
//     let div_ele: HTMLDivElement = <HTMLDivElement> document.createElement('div');
//     let line_break: HTMLBRElement = <HTMLBRElement> document.createElement('br');
//     div_ele.setAttribute('class', 'divide fs-16px');
//     div_ele.id='act4-part-2';
//     div_ele.innerHTML = `
//     <h4>Selecting &alpha;<sub>h</sub> value</h4>
//     <div>
//         <ul>
//             <li class="fs-16px">A critical value is a cutoff value that defines the boundaries beyond which less than 5% of sample means can be obtained if the null hypothesis is true. Sample means obtained beyond a critical value will result in a decision to reject the null hypothesis.
//             </li>
//             <li class="fs-16px">In a non-directional two-tailed test, we divide the alpha value in half so that an equal proportion of area is placed in the upper and lower tail. Table given below gives the critical values for one and two-tailed tests at a .05, .01, and .001 level of significance. Figure given below displays a graph with the critical values for given Example shown. In this example &alpha;<sub>h</sub> = .05, so we split this probability in half: 
//                 <div style="text-align: center; font-size: 16px;">
//                     Splitting  &alpha;<sub>h</sub> in half: <span class="fs-16px" style="display: inline-block">$$ \\frac{\\alpha_{h}}{2} = \\frac{0.05}{2} = 0.025$$</span> n each tail
//                 </div>
//                 <div class='row'>
//                     <div class="col-lg-6">
//                         <table class='table table-warning table-bordered'>
//                                 <tr>
//                                     <th rowspan="2">Level of Significance (&alpha;<sub>h</sub>)</th>
//                                     <th colspan="2">Type of test</th>
//                                 </tr>
//                                 <tr>
//                                     <th>One-tailed</th>
//                                     <th>Two-tailed</th>
//                                 </tr>
//                                 <tr>
//                                     <td>0.05</td>
//                                     <td>+1.645 or -1.645</td>
//                                     <td>&plusmn;1.96</td>
//                                 </tr>
//                                 <tr>
//                                     <td>0.01</td>
//                                     <td>+2.33 or -2.33</td>
//                                     <td>&plusmn;2.58</td>
//                                 </tr>
//                                 <tr>
//                                     <td>0.001</td>
//                                     <td>+3.09 or -3.09</td>
//                                     <td>&plusmn;3.30</td>
//                                 </tr>
//                         </table>
//                     </div>
//                     <div  class="col-lg-6">
//                         <img src="./images/distribution.png" style="width: 100%;" alt="">
//                     </div>
//                 </div>
//             </li>
//         </ul>
//         <div class='row' id='act4-s2'>
//         <div class='col-6'>Enter &alpha;2 Value</div>
//         <div class='col-6'>
//             <select class='form-select fs-16px'  id='act4-alpha-inp'>
//             </select>
//         </div>
//         <br>
//         <div>
//             <button class='btn btn-info std-btn' onclick='act4_set_alpha();' id='act4-act65-btn-1' >Next</button>
//         </div>
//     </div>
//     `;
//     maindiv.appendChild(line_break);
//     maindiv.appendChild(next_btn);
//     maindiv.appendChild(div_ele);
//     setTimeout(() => {
//         MathJax.typeset(); 
//         let inp: HTMLSelectElement = <HTMLSelectElement> document.getElementById('act4-alpha-inp');
//         inp.innerHTML = ``;
//         let default_op = new Option('--Select--', '0');
//         inp.add(default_op);
//         for(let i=0; i<alpha_dd_options.length; i++) {
//             let op = new Option(alpha_dd_options[i].toString(), alpha_dd_options[i].toString());
//             inp.add(op);
//         }}, 100);
//     hide_all_steps();
//     show_step('act4-part-2');
//     setTimeout(() => {
//         MathJax.typeset();
//     }, 100);
// }
// function act4_set_alpha() {
//     let inp: HTMLSelectElement = <HTMLSelectElement> document.getElementById('act4-alpha-inp');
//     let btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById('act4-act65-btn-1');
//     if(inp.value != '0') {
//         btn.style.display = 'block';
//         alpha3 = parseFloat(inp.value);
//         let s_2: HTMLDivElement = <HTMLDivElement> document.getElementById('act4-s2');
//         console.log(inp.value);
//         s_2.innerHTML = `<h5>Selected &alpha; = ${alpha1.toFixed(2)}</h5>`;
//         activity4_p3();
//     } else {
//         btn.style.display = 'none';
//         alpha3 = 0;
//     }
// }
// // ==================================
// function activity4_p3() {
//     let next_btn = get_collapse_btn_element(`Select <span style='display: inline-block;' class='fs-16px'>$$ t3_{n-2}$$</span>`, 'act4-part-3');
//     let div_ele: HTMLDivElement = <HTMLDivElement> document.createElement('div');
//     let line_break: HTMLBRElement = <HTMLBRElement> document.createElement('br');
//     div_ele.setAttribute('class', 'divide fs-16px');
//     div_ele.id='act4-part-3';
//     div_ele.innerHTML = `
//     <h5 class="fs-16px">Step 8: Refer the following table to do null hypothesis: </h5>
//     <div class="table-responsive">
//         <table class="table">
//             <thead>
//                 <tr class='table-dark'>
//                     <th>n-2</th>
//                     <th> for &alpha; = ${alpha3}</th>
//                 </tr>
//             </thead>
//             <tbody id="act4-hp-tab-body">
//             </tbody>
//         </table>
//     </div>
//     <div class='fs-16px'></div>
//     <div class="fs-16px">
//     t_(&alpha;<sub>h</sub>/2, n-2) which critical value of t at level of significance &alpha;<sub>h</sub> and degree of freedom n - 2. For given  &alpha;<sub>h</sub>,  t_(&alpha;<sub>h</sub>/2, n-2) is t - value with degree of freedom n-2 is : 
//         <input type="text" class="form-control fs-16px" id="act4-t-n-2" style='width: 50%;'><span class='fs-16px' id='act4-dsp-tn2'></span>
//         <br>
//         <button class="btn btn-info btn-std" style="margin: auto;" id='act4-vf-tn2' onclick='act4_vf_tn2();' >Verify</button>
//     </div>
//     `;
//     maindiv.appendChild(line_break);
//     maindiv.appendChild(next_btn);
//     maindiv.appendChild(div_ele);
//     act4_load_hp_values();
//     hide_all_steps();
//     show_step('act4-part-3');
//     setTimeout(() => {
//         MathJax.typeset();
//     }, 100);
// }
// function act4_load_hp_values() {
//     let tab_body: HTMLTableElement = <HTMLTableElement> document.getElementById('act4-hp-tab-body');
//     let ind = 0;
//     if(alpha3 == 0.1) {
//         ind = 1;
//     } else if(alpha3 == 0.05) {
//         ind = 2;
//     } else if(alpha3 == 0.01) {
//         ind = 3;
//     }
//     for(let i=0; i<hypothesis_table.length; i++) {
//         let row = tab_body.insertRow(i);
//         let cell1: HTMLTableCellElement = <HTMLTableCellElement> row.insertCell(0);
//         let cell2: HTMLTableCellElement = <HTMLTableCellElement> row.insertCell(1);
//         cell1.innerText = hypothesis_table[i][0].toString();
//         cell2.innerText = hypothesis_table[i][ind].toFixed(3);
//     }
// }
// function act4_vf_tn2() {
//     let val: HTMLInputElement = <HTMLInputElement> document.getElementById('act4-t-n-2');
//     let btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById('act4-vf-tn2');
//     let dsp: HTMLSpanElement = <HTMLSpanElement> document.getElementById('act4-dsp-tn2');
//     let ind = 0;
//     if(alpha3 == 0.1) {
//         ind = 1;
//     } else if(alpha3 == 0.05) {
//         ind = 2;
//     } else if(alpha3 == 0.01) {
//         ind = 3;
//     }
//     let n = X.length;
//     let arr = hypothesis_table;
//     console.log(arr);
//     for(let i=0; i<arr.length; i++) {
//         console.log(arr[i][0], (n-2));
//         if(arr[i][0] == (n-2)) {
//             act4_tn2 = arr[i][ind];
//             console.log(act4_tn2);
//         }
//     }
//     if(parseFloat(val.value) != act4_tn2) {
//         alert('Incorrect Value!! Check the table again');
//         return;
//     }
//     alert('Correct Value');
//     val.remove();
//     dsp.innerText = act4_tn2.toString();
//     btn.remove();
//     activity4_p4();
// }
// function activity4_p4() {
//     let next_btn = get_collapse_btn_element(`Calculate <span style='display: inline-block;' class='fs-16px'>$$ X^2 \\ and \\ XY $$</span>  and their summation`, 'act2-part-10');
//     let div_ele: HTMLDivElement = <HTMLDivElement> document.createElement('div');
//     let line_break: HTMLBRElement = <HTMLBRElement> document.createElement('br');
//     div_ele.setAttribute('class', 'divide fs-16px');
//     div_ele.id='act2-part-10';
//     div_ele.innerHTML = `
//     <h5 style='text-align: left;'  class='fb-800 fs-16px'>Testing the null hypothesis</h5>
//     <div class="fs-16px">
//         We have t0(Y) = ${act4_t01.toFixed(5)},   t0(Y1)  = ${act4_t02.toFixed(5)},   t0(Y2) = ${act4_t03.toFixed(5)},  t3<sub>n-2</sub> = ${act4_tn2.toFixed(5)};
//     </div>
//     <p>If |t0(Y)|< t3<sub>n-2</sub>  then we can say that correlation between population of X and Y is non-zero. Else We conclude that there may not be correlation.</p>
//     <p>
//     If |t0(Y1)|< t3<sub>n-2</sub> then we can say that correlation between population of X and Y1 is non-zero. Else We conclude that there may not be correlation.
//     </p>
//     <p>If |t0(Y2)|< t3<sub>n-2</sub> then we can say that correlation between population of X and Y2 is non-zero. Else We conclude that there may not be correlation. 
//     </p>
//     <div id='act4-ques'>
//     <p>On the basis of calculation you made, which of the following is/are true? (Multiple Selective Question)</p>
//     <p id='act4-op1' onclick='tog_op1();' style='background-color: white; width: 70%; padding: 5px; border-radius: 7px;' >A. Y=a+bX may have zero correlation</p>
//     <p id='act4-op2' onclick='tog_op2();' style='background-color: white; width: 70%; padding: 5px; border-radius: 7px;'  >B. Y1 = a1 + b1X has zero correlation</p>
//     <p id='act4-op3' onclick='tog_op3();' style='background-color: white; width: 70%; padding: 5px; border-radius: 7px;' >C. Y2 = a2 + b2X has zero correlation</p>
//     <p id='act4-op4' onclick='tog_op4();' style='background-color: white; width: 70%; padding: 5px; border-radius: 7px;' >D. No line has zero correlation</p>
//     </div>
//     <br>
//     <div><button class='btn btn-info std-btn' id='last-act4-btn' onclick='verify_act4_options();'>Submit</button></div>
//     `;
//     maindiv.appendChild(line_break);
//     maindiv.appendChild(next_btn);
//     maindiv.appendChild(div_ele);
//     hide_all_steps();
//     show_step('act2-part-10');
//     load_act4_question();
//     setTimeout(() => {
//         MathJax.typeset();
//     }, 100);
// }
// function load_act4_question() {
// }
// function tog_op1() {
//     let op: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById('act4-op1');
//     if(op.style.backgroundColor != 'yellow') {
//         op.style.backgroundColor = 'yellow';
//         chose_op1 = true;
//     } else {
//         op.style.backgroundColor = 'white';
//         chose_op1 = false;
//     }
// }
// function tog_op2() {
//     let op: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById('act4-op2');
//     if(op.style.backgroundColor != 'yellow') {
//         op.style.backgroundColor = 'yellow';
//         chose_op2 = true;
//     } else {
//         op.style.backgroundColor = 'white';
//         chose_op2 = false;
//     }
// }
// function tog_op3() {
//     let op: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById('act4-op3');
//     if(op.style.backgroundColor != 'yellow') {
//         op.style.backgroundColor = 'yellow';
//         chose_op3 = true;
//     } else {
//         op.style.backgroundColor = 'white';
//         chose_op3 = false;
//     }
// }
// function tog_op4() {
//     let op: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById('act4-op4');
//     if(op.style.backgroundColor != 'yellow') {
//         op.style.backgroundColor = 'yellow';
//         chose_op4 = true;
//     } else {
//         op.style.backgroundColor = 'white';
//         chose_op4 = false;
//     }
// }
// function verify_act4_options() {
//     let btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById('last-act4-btn');
//     if((!(Math.abs(act4_t01) >= Math.abs(act4_tn2)) == chose_op1))  {
//         alert('You have selected wrong options 1');
//         return;
//     }
//     if(!((Math.abs(act4_t02) >= Math.abs(act4_tn2)) == chose_op2))  {
//         alert('You have selected wrong options 2');
//         return;   
//     }
//     if(!((Math.abs(act4_t03) >= Math.abs(act4_tn2)) == chose_op3))  {
//         alert('You have selected wrong options 3');
//         return;
//     }
//     if(!(chose_op1 || chose_op2 || chose_op3)) {
//         alert('You have selected wrong options 4');
//         return;
//     }
//     alert('You finding are correct!!');
//     btn.remove();
// }
// activity4();
//# sourceMappingURL=activity_4_old.js.map