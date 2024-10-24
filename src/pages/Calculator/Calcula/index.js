let currentValue = ''; // เก็บค่าปัจจุบัน
let operator = '';     // เก็บเครื่องหมายการคำนวณ
let previousValue = '';      // เก็บผลลัพธ์=เพื่อทำซ้ำ
let lastOperator = '';  // เก็บเครื่องหมายการคำนวณสุดท้ายที่ใช้
let result = '';       // เก็บผลลัพธ์

const mulClick =function(){
    console.log('mul click')
}

const divClick = () =>{
    console.log('div click')
}

const checkEmpty = (inputComp) =>{
    console.log(inputComp)
    if(inputComp.value==='')
        inputComp.value = '0'
}



function numClick(num) {
    const resultElement = document.getElementById('result');
    // ถ้าค่าในช่อง input เป็น 0 ให้แทนที่ด้วยตัวเลขใหม่
    if (resultElement.value === '0') {
        resultElement.value = String(num);
    } else {
        // ถ้าไม่ใช่ 0 ให้ต่อท้ายตัวเลขที่มีอยู่
        resultElement.value += String(num);
    }
}

function plusClick() {
    const resultElement = document.getElementById('result');
    
    if (operator === '+') {
        // ถ้าผู้ใช้กด + อีกครั้ง จะคำนวณผลลัพธ์ที่มีอยู่ก่อนหน้า
        currentValue = String(parseFloat(currentValue) + parseFloat(resultElement.value));
        resultElement.value = parseFloat(currentValue); // รีเซ็ตผลลัพธ์ที่ใส่ใหม่
        
        
    } else {
        // ถ้าเป็นการกดครั้งแรก ให้เก็บค่าปัจจุบันไว้
        currentValue = resultElement.value;
        resultElement.value = '0'; // รีเซ็ตผลลัพธ์ที่ใส่ใหม่
    }

    operator = '+'; // ตั้งค่า operator เป็น '+'
}

function subClick() {
    const resultElement = document.getElementById('result');
    
    if (operator === '-') {
        currentValue = String(parseFloat(currentValue) - parseFloat(resultElement.value));
        resultElement.value = '0';
    } else {
        currentValue = resultElement.value;
        resultElement.value = '0';
    }

    operator = '-';
}

function calClick() {
    const resultElement = document.getElementById('result');
    let newValue = resultElement.value;
    
    if (newValue === '0') {
        let newValue = parseFloat(currentValue);
        if (operator === '+') {
            result = parseFloat(currentValue) + parseFloat(newValue);
            resultElement.value = result;
            previousValue = newValue;
            currentValue = String(result); // อัปเดตค่า currentValue ด้วยผลลัพธ์
            lastOperator = '+'; // เก็บเครื่องหมายการคำนวณล่าสุด
        } else if (operator === '-') {
            result = parseFloat(currentValue) - parseFloat(newValue);
            resultElement.value = result;
            previousValue = newValue;
            currentValue = String(result); 
            lastOperator = '-'; 
        } else if (operator === '') {
            // ถ้ากด "=" ซ้ำโดยไม่เปลี่ยนเครื่องหมายการคำนวณ
            if (lastOperator === '+') {
                result = parseFloat(currentValue) + parseFloat(previousValue);
                resultElement.value = result;
                currentValue = String(result); // อัปเดตค่า currentValue ด้วยผลลัพธ์
            } else if (lastOperator === '-') {
                result = parseFloat(currentValue) - parseFloat(previousValue);
                resultElement.value = result;
                currentValue = String(result); // อัปเดตค่า currentValue ด้วยผลลัพธ์
            }
        }
    }else{
        if (operator === '+') {
            result = parseFloat(currentValue) + parseFloat(newValue);
            resultElement.value = result;
            previousValue = newValue;
            currentValue = String(result); // อัปเดตค่า currentValue ด้วยผลลัพธ์
            lastOperator = '+'; // เก็บเครื่องหมายการคำนวณล่าสุด
        } else if (operator === '-') {
            result = parseFloat(currentValue) - parseFloat(newValue);
            resultElement.value = result;
            previousValue = newValue;
            currentValue = String(result); 
            lastOperator = '-'; 
        } else if (operator === '') {
            // ถ้ากด "=" ซ้ำโดยไม่เปลี่ยนเครื่องหมายการคำนวณ
            if (lastOperator === '+') {
                result = parseFloat(currentValue) + parseFloat(previousValue);
                resultElement.value = result;
                currentValue = String(result); // อัปเดตค่า currentValue ด้วยผลลัพธ์
            } else if (lastOperator === '-') {
                result = parseFloat(currentValue) - parseFloat(previousValue);
                resultElement.value = result;
                currentValue = String(result); // อัปเดตค่า currentValue ด้วยผลลัพธ์
            }
        }
    }


    // รีเซ็ต operator เพื่อเตรียมการคำนวณใหม่
    operator = '';
}

function clearInfo() {
    document.getElementById('result').value = '0';
}

function clearAll() {
    document.getElementById('result').value = '0';
    currentValue = '';
    operator = '';
    previousValue = '';
    lastOperator = '';
}

const checkKeyboard = (e)=>{
    console.log(e.key)
    if(e.key === 'Enter'){
        calClick()
    }else if(e.key === 'Escape'){
        clearAll()
    }else if(e.key === '+'){
        plusClick()
    }else if(e.key === '-'){
        subClick()
    }else if(e.key >= '0'&&e.key <= '9'){
        numClick(e.key)
    }
}

window.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById('result').value = '0'


    //Auto Counter
    setInterval(() => {
        let counter = Number(document.getElementById('counter').innerText)
        counter ++
        document.getElementById('counter').innerText = String(counter)
    }, 1000);

    setTimeout(()=>{
        console.log('Time Out!')
    },5000)

    document.addEventListener('keydown',checkKeyboard)
})