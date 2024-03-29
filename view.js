// view
//  show(); //Byttet ut show med å legge onload i index.html//<body onload="show()">

 function show() {       

     let svgInnerHtml = '';
     for (let i = 0; i < numbers.length; i++) {
         svgInnerHtml += createBar(numbers[i], i + 1);
     }
     contentDiv.innerHTML = `
         <svg id="chart" width="500" viewBox="0 0 80 60">
             ${svgInnerHtml}
         </svg><br/>
         Valgt stolpe: <i>${valgtStolpe()}</i> 
         <br />
         Verdi:
         <input type="number" min="1" max="10" oninput="inputValue = this.value" />

         <button onclick="addPillar()">Legg til stolpe</button>

         <button onclick ="changePillar()" ${status}>Endre valgt stolpe</button><br />

         <button onclick="deletePillar()" ${status}>Fjerne valgt stolpe</button>
         `;
 }


 function createBar(number, barNo) {

      let swidth;
      barNo == selectedPillar ? swidth = "1px" : swidth = "0px";

      const width = 8;
      const spacing = 2;
      let x = (barNo - 1) * (width + spacing);
      let height = number * 10;
      let y = 60 - height;
      let color = calcColor(1, 10, barNo);
      return `<rect id=${barNo} onclick="choosePillar(this.id)" width="${width}" height="${height}"
                          x="${x}" y="${y}" fill="${color}" stroke="black" stroke-width=${swidth}></rect>`;
  }

 function calcColor(min, max, val) {
     var minHue = 240, maxHue = 0;
     var curPercent = (val - min) / (max - min);
     var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
     return colString;
 }
