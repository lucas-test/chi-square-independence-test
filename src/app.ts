import cdf from "@stdlib/stats-base-dists-gamma-cdf";
import { Chart, registerables } from "chart.js";
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(...registerables);
Chart.register(annotationPlugin);

function createTable(data: Array<Array<number>>, lineNames: string[], columnNames: string[], integerValues: boolean): HTMLTableElement{
    // Define the table size
    const numRows = data.length;
    const numCols = data[0].length;


    const tableElement = document.createElement("table");
    

    // Create the header cells for the columns
    if (columnNames.length > 0){
        const headerRow = document.createElement("tr");

        // Create the empty cell in the top-left corner
        const emptyHeaderCell = document.createElement("th");
        headerRow.appendChild(emptyHeaderCell);

        for (let j = 0; j < numCols; j++) {
            const headerCell = document.createElement("th");
            headerCell.contentEditable = 'true';
            headerCell.oninput = () => {
                if (headerCell.textContent != null){
                    columnNames[j] = headerCell.textContent;
                    computeEveryTables(data, lineNames, columnNames);
                }
            }
            headerCell.textContent = columnNames[j];
            headerRow.appendChild(headerCell);
        }
        if (integerValues){
            const headerCell = document.createElement("th");
            headerCell.textContent = "+";
            headerCell.onclick = () => {
                addColumn(data, lineNames, columnNames);
            }
            headerRow.appendChild(headerCell);
        }

        tableElement.appendChild(headerRow);
    }
    

    

    // Create the table rows
    for (let i = 0; i < numRows; i++) {
        const row = document.createElement("tr");

        // Create the header cell for the line
        const lineHeaderCell = document.createElement("th");
        lineHeaderCell.textContent = lineNames[i];
        row.appendChild(lineHeaderCell);
        lineHeaderCell.contentEditable = 'true';
        lineHeaderCell.oninput = () => {
            if (lineHeaderCell.textContent != null){
                lineNames[i] = lineHeaderCell.textContent;
                computeEveryTables(data, lineNames, columnNames);
            }
        }

        // Create the data cells for the row
        for (let j = 0; j < numCols; j++) {
            const dataCell = document.createElement("td");
            if (integerValues){
                dataCell.textContent = data[i][j].toString();
            } else {
                dataCell.textContent = data[i][j].toFixed(2);
            }
            
            row.appendChild(dataCell);
        }

        tableElement.appendChild(row);
    }

    if (integerValues){
        const row = document.createElement("tr");
        const lineHeaderCell = document.createElement("th");
        lineHeaderCell.textContent = "+";
        row.appendChild(lineHeaderCell);
        lineHeaderCell.onclick = () => {
            addLine(data, lineNames, columnNames);
        }
        tableElement.appendChild(row);
    }

    return tableElement;
}


function generateRandomData(numRows: number, numCols: number): Array<Array<number>>{
    const table: number[][] = [];
    for (let i = 0; i < numRows; i++) {
    const row: number[] = [];
    for (let j = 0; j < numCols; j++) {
        // Generate a random integer between 1 and 10
        const randomValue = Math.floor(Math.random() * 10) + 1;
        row.push(randomValue);
    }
    table.push(row);
    }
    return table;
}

function copyData(data: number[][]){
    const newData: number[][] = [];
    for (let i = 0; i < data.length; i++) {
        const row: number[] = [];
        for (let j = 0; j < data[i].length; j++) {
            row.push(data[i][j])
        }
        newData.push(row);
    }
    return newData;

}

function computeIndepData(data: number[][]): number[][]{
    const indepData = copyData(data);

    const totalSum = computeTotalSum(data);

    for (let i = 0 ; i < data.length; i ++){
        let sl = 0;
        for (let j = 0 ; j < data[i].length; j ++){
            sl += data[i][j];
        }

        for (let j = 0 ; j < data[i].length; j ++){
            let sc = 0;
            for (let k = 0 ; k < data.length; k ++){
                sc += data[k][j];
            }

            indepData[i][j] = sl*sc/totalSum;
        }

    }
    return indepData;
}



function computeDiffData(data: number[][], indepData: number[][]): number[][]{
    const diffData = copyData(data);

    for (let i = 0 ; i < data.length; i ++){
        for (let j = 0 ; j < data[i].length; j ++){
            diffData[i][j] = Math.pow(data[i][j]-indepData[i][j], 2) /indepData[i][j];
        }
    }
    return diffData;
}

function computeTotalSum(data: number[][]): number{
    let totalSum = 0;
    for (const row of data){
        for (const value of row){
            totalSum += value;
        }
    }
    return totalSum;
}


function recomputeIndepTable(data: number[][]){
    const indepData2 = computeIndepData(data);
    const table = document.getElementById("indep");

}


function computeEveryTables(data: number[][], lineNames: string[], colNames: string[]){

    let divElement = document.getElementById('indep');
    if (divElement) {
        divElement.remove();
    }
    divElement = document.getElementById('diff');
    if (divElement) {
        divElement.remove();
    }
    divElement = document.getElementById('final');
    if (divElement) {
        divElement.remove();
    }
    divElement = document.getElementById('resultats');
    if (divElement) {
        divElement.remove();
    }
    divElement = document.getElementById('gammaChart');
    if (divElement) {
        divElement.remove();
    }

    const interDiv = document.getElementById("inter");
    const resultsDiv = document.getElementById("results");
    if (interDiv == null || resultsDiv == null){
        return;
    }

    const indepData = computeIndepData(data);
    const tableIndep = createTable(indepData, lineNames,  colNames, false);
    tableIndep.id = "indep";
    interDiv.appendChild(tableIndep);

    const diffData = computeDiffData(data, indepData);
    const tableDiff = createTable(diffData,lineNames,  colNames, false);
    tableDiff.id = "diff";
    interDiv.appendChild(tableDiff);

    const chi2 = computeTotalSum(diffData);
    const dof = (data.length-1)*(data[0].length-1);
    const cramer = Math.sqrt(chi2/(computeTotalSum(data)*dof));

    const pValue = 1-cdf(chi2, dof/2, 1/2);
    console.log(pValue);

    const alpha = 0.05;
    let kComp = 0;
    while (cdf(kComp, dof/2, 1/2) < 1-alpha){
        kComp += 0.01;
    }
    console.log("kcomp", kComp)



    const finalData = [[chi2],[pValue], [kComp], [cramer],  [dof] ];
    const tableFinal = createTable(finalData, ["χ² calculé",  "pValue", "χ² théorique 0.05", "Cramer", "degrés de libertés"],  [], false);
    tableFinal.id = "final";
    resultsDiv.appendChild(tableFinal);

    const para = document.createElement("p");
    para.id = "resultats";
    if (chi2 < kComp){
        para.innerHTML = `Comme <span class="compute-color"> ${chi2.toFixed(2)}</span> < <span class="theoric-color">${kComp.toFixed(2)}</span>, les variables sont <b>indépendantes</b>.`
    } else {
        para.innerHTML = `Comme <span class="theoric-color">${kComp.toFixed(2)}</span> < <span class="compute-color"> ${chi2.toFixed(2)}</span>, les variables sont <b>liées</b>.`
    }
    
    resultsDiv.appendChild(para);


    const cells = document.querySelectorAll('#final td');
    cells.forEach(cell => {
        const tcell = cell as HTMLTableCellElement;
        if (tcell.textContent === null){
            return;
        }
        const i = (tcell.parentNode as HTMLTableRowElement).rowIndex;
        if (i == 0 || i == 1){
            tcell.classList.add("compute-color");
        }
        if (i == 2 ){
            tcell.classList.add("theoric-color");
        }

        // Old
        /*
        const value = parseFloat(tcell.textContent);
        const redValue = Math.floor(value * 255);
        const greenValue = Math.floor((1-value) * 255);
        tcell.style.backgroundColor = `rgb(${redValue}, ${greenValue}, 0)`;
        */
    });

    const dataCells = document.querySelectorAll('#initial td');
    dataCells.forEach(cell => {
        const tcell = cell as HTMLTableCellElement;
        if (tcell.textContent === null){
            return;
        }
        let value = parseFloat(tcell.textContent);
        const i = (tcell.parentNode as HTMLTableRowElement).rowIndex-1;
        const j = tcell.cellIndex-1;
        value = 10*diffData[i][j]/computeTotalSum(data);

        const redValue = Math.floor(value * 255);

        tcell.style.backgroundColor = `rgb(${redValue}, 0, 0)`;
    });

    const gammaChart = document.createElement("canvas");
    gammaChart.width = 600;
    gammaChart.height = 300;
    resultsDiv.appendChild(gammaChart);
    gammaChart.id = "gammaChart";
    const gammaValues = computeGammaValues(dof, 2*kComp);

    const ctx = gammaChart.getContext('2d');
    if (ctx == null){
        return;
    }
    

    
    const colorFunction = "#009879";
    const colorTh = "#007BFF";
    const colorCompute = "#DC3545";
    const colorLabel = "white";

    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
            label: 'cos',
            data: gammaValues,
            borderColor: colorFunction,
            fill: false,
            pointRadius: 0,
            }],
        },
    options: {
        responsive: false,
        scales: {
        x: {
            type: 'linear',
            position: 'bottom',
            min: 0,
            max: 2*kComp,
        },
        y: {
            type: 'linear',
            position: 'left',
            min: 0,
            max: 1,
        },
        },
        plugins: {
            legend: {
                display: false,
            },
            annotation: {
                annotations: {
                    lineThreshold: {
                        type: 'line',
                        yMin: 1-0.05,
                        xMax: kComp,
                        yMax: 1-0.05,
                        borderColor: colorTh,
                        borderWidth: 4,
                      },
                    labelThreshold: {
                        type: 'label',
                        xValue: 0.3,
                        yValue: 1-0.05,
                        content: ['1 - 0.05'],
                        backgroundColor: colorTh,
                        color: colorLabel,
                        font: {
                            weight: "bold",
                            size: 12
                        }
                    },
                  line1: {
                    type: 'line',
                    xMin: kComp,
                    xMax: kComp,
                    yMax: 1-0.05,
                    borderColor: colorTh,
                    borderWidth: 4,
                  },
                  label1: {
                    type: 'label',
                    xValue: kComp,
                    yValue: 0.1,
                    content: ['Khi2 théorique', kComp.toFixed(2)],
                    backgroundColor: colorTh,
                    color: colorLabel,
                    font: {
                        weight: "bold",
                        size: 12
                    }
                  },
                lineChi2: {
                    type: 'line',
                    xMin: chi2,
                    xMax: chi2,
                    yMax: 1-pValue,
                    borderColor: colorCompute,
                    borderWidth: 4,
                  },
                  labelChi2: {
                    type: 'label',
                    xValue: chi2,
                    yValue: 0.1,
                    content: ['Khi2', chi2.toFixed(2)],
                    backgroundColor: colorCompute,
                    color: colorLabel,
                    font: {
                        weight: "bold",
                        size: 12
                    }
                  },
                  linepValue: {
                    type: 'line',
                    yMin: 1-pValue,
                    xMax: chi2,
                    yMax: 1-pValue,
                    borderColor: colorCompute,
                    borderWidth: 4,
                  },
                  labelpValue: {
                    type: 'label',
                    xValue: 0 + 0.3,
                    yValue: 1-pValue,
                    content: [`1 - ${pValue.toFixed(2)}`],
                    backgroundColor: colorCompute,
                    color: colorLabel,
                    font: {
                        weight: "bold",
                        size: 12
                    }
                  },
                  
                }
              }
          }
    },
    });

}


function computeGammaValues(dof: number, max: number) {
    const data = [];
    for (let x = 0; x <= max; x += 0.1) {
      const y = cdf(x, dof/2, 1/2);
      data.push({ x, y });
    }
    return data;
  }


function addColumn(data: number[][], lineNames: string[], colNames: string[]){
    for (let i = 0 ; i < data.length; i ++){
        data[i].push(Math.floor(Math.random() * 10) + 1);
    }
    colNames.push("E");

    resetDataTable(data, lineNames, colNames);
    computeEveryTables(data, lineNames, colNames);
}

function addLine(data: number[][], lineNames: string[], colNames: string[]){
    data.push([]);
    for (let i = 0 ; i < data[0].length; i ++){
        data[data.length-1].push(Math.floor(Math.random() * 10) + 1);
    }
    lineNames.push("yo");

    resetDataTable(data, lineNames, colNames);
    computeEveryTables(data, lineNames, colNames);
}


function resetDataTable(data: number[][], lineNames: string[], colNames: string[]){

    let divElement = document.getElementById('initial');
    if (divElement) {
        divElement.remove();
    }

    const tableElement = createTable(data, lineNames, colNames, true);
    tableElement.id = "initial";
    const dataDiv = document.getElementById("data");
    if (dataDiv == null){
        return;
    }
    dataDiv.appendChild(tableElement);

    const initialCells = document.querySelectorAll('#initial td');

    initialCells.forEach(cell => {
        const tcell = cell as HTMLTableCellElement;

        tcell.contentEditable = 'true';

        tcell.addEventListener('input', () => {
            if (tcell.textContent === null){
                return;
            }
            const i = (tcell.parentNode as HTMLTableRowElement).rowIndex-1;
            const j = tcell.cellIndex-1;
            data[i][j] =  parseFloat(tcell.textContent);;
            computeEveryTables(data, lineNames, colNames);
        });


        tcell.addEventListener('wheel', (event) => {
            event.preventDefault();
    
            const delta = event.deltaY >0 ;
            if (tcell.textContent === null){
                return;
            }
            const currentValue = parseFloat(tcell.textContent);
            
            const newValue = (event.deltaY >0) ? currentValue - 1: currentValue +1;
            if (newValue < 0){
                return;
            }

            tcell.textContent = newValue.toString();
            const i = (tcell.parentNode as HTMLTableRowElement).rowIndex-1;
            const j = tcell.cellIndex-1;
            data[i][j] = newValue;

            computeEveryTables(data, lineNames, colNames);
        });
    })
    
}


function setup(){
    console.log("testouikc")



    const lineNames = ["a", "b","c","d"];
    const colNames =  ["A", "B", "C", "D"];

    const data = generateRandomData(2, 2);
    data[0][0] = 3;
    data[0][1] = 4;
    data[1][0] = 4;
    data[1][1] = 2;

    resetDataTable(data, lineNames, colNames);
    computeEveryTables(data, lineNames, colNames);

}


setup();