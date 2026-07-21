const reverse = (str) => {
    let st = str.trim().split(/\s+/);
    let arr = [];
    console.log(arr)
 
    for (let i = 0; i < st.length; i++) {
        arr[i] = st[i].split('').reverse().join('');
        console.log(arr[i])
    }
 
    return arr.join(" ");
 }
 
 console.log(reverse("   My name Is Prajyot"));