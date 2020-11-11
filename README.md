## Basic JavaScript/TypeScript + Algorithm

1. **Fibonacci Sequence**

```javascript
function fibonacci(num) {
  if (num <= 1) return num;

  return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(3));
```

2. **Array shift**

```javascript
function shift(arr, direction, number) {
  if (direction == 'left') {
    var news;
    for (let i = 0; i < number; i++) {
      news = arr.shift();
      arr.push(news);
    }
    return arr;
  } else {
    var news;
    for (let i = 0; i < number; i++) {
      news = arr.pop();
      arr.unshift(news);
    }
    return arr;
  }
}
console.log(shift([1, 2, 3, 4, 5], 'right', 3));
```

3. **Second max**

```javascript
function secondMax(arr) {
  let unique = [...new Set(arr)];
  unique.sort();
  if (unique.length === 1) {
    return unique[0];
  } else if (unique.length === 0) {
    return 'Error!';
  } else {
    return unique[unique.length - 2];
  }
}

console.log(secondMax([7, 7, 7, 7, 6]));
```

4. **FizzBuzz...But**

```javascript
function fizzBuzz(num) {
  num % 3 == 0 && num % 5 == 0
    ? console.log('FizzBuzz')
    : num % 5 == 0
    ? console.log('Buzz')
    : num % 3 == 0
    ? console.log('Fizz')
    : '';
}
fizzBuzz(45);
```

## Front-End

### Front-end Questions

1. cookie / localStorage / sessionStorage ทั้ง 3 ตัวเป็น Storage เก็บข้อมูล

- cookie มีไว้สำหรับการอ่านฝั่งเซิร์ฟเวอร์เป็นหลัก cookie มีอายุของข้อมูล การหมดอายุจะแตกต่างกันไปตามประเภทและระยะเวลาการหมดอายุสามารถกำหนดได้จากฝั่งเซิร์ฟเวอร์หรือฝั่งไคลเอ็นต์
- localStorage สามารถอ่านได้ในฝั่งไคลเอ็นต์เท่านั้น จัดเก็บข้อมูลโดยไม่มีวันหมดอายุ
- sessionStorage จะคล้ายกับ localStorage ต่างกันตรงที่จัดเก็บข้อมูลเฉพาะเซสชันซึ่งหมายความว่าข้อมูลจะถูกเก็บไว้จนกว่าเบราว์เซอร์ (หรือแท็บ) จะถูกปิด

2. คิดว่าไม่ต้องการส่วนประกอบของคลาสแล้ว react hook น่าจะมีตัวช่วยมากพอแล้ว

3. Virtual DOM เป็น DOM เสมือนที่อยู่ในหน่อยความจำชั่วคราว ถ้ามีเหตุการเปลี่ยนแปลง มันก็จะไปอัพเดท UI

4. ทำ data binding ผ่าน component หรือไม่ก็ใช้ state management สักตัว เช่น Recoil หรือ Redux

5. relative คุณสมบัติ หลุดออกมาจาก position เดิมจึงสามารถเปลี่ยนตำแหน่ง x,y ได้แต่ยังคงคุณสมบัติเดิมไว้
   absolute คุณสมบัติ หลุดออกมาจาก position ของ parent และ เปลี่ยนตำแหน่ง x,y ได้
   fixed คุณสมบัติ เหมือน relative, absolute แต่ตัวมันจะ fix content ไม่เลื่อนตาม scoll

6. Callback เป็น function ที่มี parameter เป็น function เพื่อทำ Asynchronous
   Promise เป็น Asynchronous function สำหรับรอค่า resolve, reject
   async await ไว้แก้ปัญหา Asynchronous ให้รอเป็นลำดับไม่ข้าม process
