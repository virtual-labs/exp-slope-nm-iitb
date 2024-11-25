function activity4() {
    let text = document.createElement('div');
    text.innerHTML += `
         <br>
         <div class='divide'>
         <div class="fs-16px">
         <h5 style='font-weight: 600;'>See the relation between the slope of regression line derived by dataset X and Y and association between the X and Y</h5>
         
     </div>

     <div><button class='btn btn-info std-btn' id='act4-first-btn' onclick='give_choice();' >Next</button></div>
    
    
         </div>
     `;
    maindiv.appendChild(text);
}
function give_choice() {
    let text = document.createElement('div');
    text.innerHTML = `
    <div class="divide">
    <div class="fs-16px">
        <p>Does slope of regression line determine the association between X and Y?</p>

        <div class="row">
            <button class="col-5 btn btn-info" style='margin-right: 4%;' onclick='pop_alert();' >Yes, It does.</button>
            <button class="col-5 btn btn-info" style='margin-left: 4%;' onclick='show_conclusion();'  >No, it doesn't</button>
        </div>
    </div>
</div>
    `;
    maindiv.appendChild(text);
}
function pop_alert() {
    alert('Wrong answer!! Slop of the regression line does not determine the association between X and Y.');
}
function show_conclusion() {
    let container = document.createElement('div');
    container.innerHTML = `
    
    <div class='divide fs-16px'>
    
    <p>While the slope of a regression line provides information about the direction and magnitude of the relationship between two variables, it is not a reliable measure of the overall strength of the association. This is because the slope can be influenced by the scale of the variables, making it difficult to compare relationships across different datasets. Though all activities gave us different hypothesis results does not implies strong or weak association between X and Y as t0 values are different for each activities as slope varies activity to activity
    </p>

    <p>To illustrate this point, consider the following example:</p>

    <p> Suppose we are investigating the relationship between the height of individuals and their weight. We collect data on a sample of individuals and plot it on a scatter-plot. We then fit a regression line to the data and calculate the slope of the line. The slope tells us that for every one-inch increase in height, we expect an average increase of two pounds in weight.</p>


    <p>Now, suppose we measure the height of the individuals in centimeters instead of inches. The slope of the regression line will now be much steeper, even though the underlying relationship between height and weight remains the same. This is because the slope is sensitive to the scale of the independent variable (height).
    </p>

    <p>This example highlights the limitations of using the slope as a measure of association. The slope is not a scale-invariant measure, meaning that it can be affected by changes in the scale of the variables. This makes it difficult to compare relationships across different datasets, as the slope values may not reflect the true strength of the associations.</p>

    </div>
    `;
    maindiv.appendChild(container);
}
//# sourceMappingURL=activity4.js.map